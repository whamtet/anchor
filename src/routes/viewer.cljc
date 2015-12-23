(ns routes.viewer
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            [anchor.db :as db]
            )
  #?(:cljs
     (:require-macros
     [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(require '[clojure.java.io :as io])
(require '[ring.util.response :as response])
(import java.io.File)

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
             s (slurp "resources/public/pdf.js/web/viewer.html")
             input (map str model/manual-input)
             input (if-let [node-order (db/get-db "node-order")]
                     (sort-by #(node-order % 0) input)
                     input)
             ]
         (util/response
           (.replace s "matty"
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
              (map #(Integer/parseInt %)
                   [year month starting-year starting-month])
              file (if (empty? url)
                     (:tempfile file)
                     url)
              outfile (File. (format "resources/public/reports/%s/%s %s.pdf" company year month))
              parent-dir (File. (format "resources/public/reports/%s" company))
              reporting-period (str year " " month)
              ]
          (.mkdirs parent-dir)
          (with-open [in (io/input-stream file)]
            (io/copy in outfile))
          (db/swap-db "report-metadata" assoc-in [company reporting-period] (util/symzip year month starting-year starting-month factor))
          (util/redirect "/report" {:company company :reporting-period reporting-period})))
  (POST "/update-report-values" [company reporting-period report-values report-manuals]
        (db/swap-db "report-values" assoc-in [company reporting-period] (util/clean report-values))
        (db/swap-db "report-manuals" assoc-in [company reporting-period] (util/clean report-manuals))
        util/ok-response)
  (POST "/update-report-metadata2" [company reporting-period report-metadata]
        (db/swap-db "report-metadata" assoc-in [company reporting-period] (util/clean report-metadata))
        util/ok-response)
  )
