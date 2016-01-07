(ns routes.viewer
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.model :as model]
            #?(:clj
               [anchor.util :as util]
               :cljs
               [anchor.util :as util :refer [format]])
            [anchor.db :as db]
            #?(:cljs [redlobster.stream :as stream])
            #?(:cljs [redlobster.http :as http])
            #?(:cljs [redlobster.promise :as promise])
            #?(:cljs [redlobster.io :as io :refer [slurp]])
            #?(:cljs [redlobster.http :as http])
            )
  #?(:cljs
     (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]]
      [redlobster.macros :refer [let-realised promise]]
      )))

#?(:clj
   (do
     (require '[clojure.java.io :as io])
     (import java.io.File)
     (def report-html (slurp "resources/public/pdf.js/web/viewer.html"))
     )
   :cljs
   (do
     (def fs (js/require "fs"))

     (defn path-seq [s]
       (reduce
        (fn [v subpath]
          (conj v (str (peek v) "/" subpath)))
        [(first s)] (rest s)))

     (defn mkdirs [path]
       (if (string? path)
         (recur (.split path "/"))
         (doseq [subpath (path-seq path)]
           (try
             (.mkdirSync fs subpath)
             (catch :default e)))))

     (defn pipe [a b cb]
       (.on a "end" cb)
       (.pipe a b))

     (let-realised [s (slurp "resources/public/pdf.js/web/viewer.html")]
                   (def report-html @s))
     ))

(defn get-matching-companies [company]
  (let [
        suffix (second (.split company "\\."))
        ]
    (filter #(= suffix (second (.split % "\\."))) (keys (db/get-db "report-values")))))

(defn clean-text [field]
  (.trim (.toLowerCase field)))

(defn get-report-hints [company reporting-period]
  (util/recompose-map
   (for [
         company2 (get-matching-companies company)
         [reporting-period2 fields] (get (db/get-db "report-values") company2)
         :when (not= [company reporting-period] [company2 reporting-period2])
         [field pages] fields
         [page indices] pages
         [index subindices] indices
         [subindex {:strs [left-text negative?]}] subindices
         :when left-text
         ]
     [field (clean-text left-text) negative?])))

(defroutes routes
  (GET "/report" [company reporting-period]
       (let [
             input (map str model/manual-input)
             input (if-let [node-order (db/get-db "node-order")]
                     (sort-by #(node-order % 0) input)
                     input)
             ]
         (util/response
          (.replace report-html "matty"
                    (index/injectoid-s ["viewer"]
                                       {
                                        "company" (pr-str company)
                                        "reporting_period" (pr-str reporting-period)
                                        "inputs" (pr-str input)
                                        "report_values" (pr-str (get-in (db/get-db "report-values") [company reporting-period]))
                                        "report_metadata" (pr-str (get-in (db/get-db "report-metadata") [company reporting-period]))
                                        "report_manuals" (pr-str (get-in (db/get-db "report-manuals") [company reporting-period]))
                                        "report_hints" (pr-str (get-report-hints company reporting-period))
                                        })))))
  (GET "/new-report" [company]
       (index/page ["new_report"] {
                                   "company" (pr-str company)
                                   }))
  (POST "/new-report" [company year month starting-year starting-month file factor url]
        (let [
              [year month starting-year starting-month]
              (map #(#?(:clj Integer/parseInt :cljs js/Number %) %)
                   [year month starting-year starting-month])
              reporting-period (str year " " month)
              outfile (format "resources/public/reports/%s/%s %s.pdf" company year month)
              parent-dir (format "resources/public/reports/%s" company)
              ]
          (db/swap-db "report-metadata" assoc-in [company reporting-period] (util/symzip year month starting-year starting-month factor))
          ;;copy shit
          #?(:clj
             (let [
                   file (if (empty? url)
                          (:tempfile file)
                          url)
                   ]
               (.mkdirs (File. parent-dir))
               (with-open [in (io/input-stream file)]
                 (io/copy in (File. outfile)))
               (util/redirect "/report" {:company company :reporting-period reporting-period}))
             :cljs
             (do
               (mkdirs parent-dir)
               (println "url" url)
               (if (some-> url .trim not-empty)
                 (let-realised
                  [res (http/request url)]
                  (promise
                   (pipe @res (stream/write-file outfile)
                         #(realise (util/redirect "/report" {:company company :reporting-period reporting-period})))))
                 (let-realised
                  [_ (io/spit outfile (:data file))]
                  (util/redirect "/report" {:company company :reporting-period reporting-period})))))))
  (POST "/update-report-values" [company reporting-period report-values report-manuals]
        (db/swap-db "report-values" assoc-in [company reporting-period] (util/clean report-values))
        (db/swap-db "report-manuals" assoc-in [company reporting-period] (util/clean report-manuals))
        util/ok-response)
  (POST "/update-report-metadata2" [company reporting-period report-metadata]
        (db/swap-db "report-metadata" assoc-in [company reporting-period] (util/clean report-metadata))
        util/ok-response)
  (GET "/route-pdf" [company reporting-period]
       (let-realised
        [response (http/request
                   (format "http://anchor-demo.s3-website-ap-northeast-1.amazonaws.com/reports/%s/%s.pdf" company reporting-period))]
        {:status 200
         :body @response}))
  )
