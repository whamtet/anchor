(ns routes.report
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            [anchor.update-calculations :as update-calculations]
;            [pdf.report :as report]
            )
  #?(:cljs
     (:require-macros
     [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(defn binary-slurp [f]
  (with-open [in (io/input-stream f)
              out (java.io.ByteArrayOutputStream.)]
    (io/copy in out)
    (.toByteArray out)))

(require '[clojure.java.io :as io])
(require '[ring.util.response :as response])
(require '[clojure.java.shell :as shell])

(import java.io.File)
(import java.util.Calendar)

(def months ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(.mkdir (File. "temp"))

(defn get-binary []
  (let [
        f (format "temp/f%s.pdf" (rand-int Integer/MAX_VALUE))
        _ (println (shell/sh "wkhtmltopdf" "--orientation" "Landscape" "--debug-javascript" "--no-stop-slow-scripts"
                             "-L" "6mm" "-R" "6mm" "-T" "6mm" "-B" "6mm"
                             "http://localhost:5000/raw-report" f))
        bytes (binary-slurp f)
        ]
    (-> f File. .delete)
    bytes
    ))

(defroutes routes
  (GET "/raw-report" []
       (index/blank-page ["report"]
                         {
                          "values" (pr-str (update-calculations/nums (keys (db/get-db "report-metadata"))))
                          "timestamp" (pr-str (util/timestamp))
                          }))
  #_(GET "/valuation-report" []
       (let [
  ;           bytes (get-binary)
             bytes (report/pdf)
             ]
         {:status 200
          :headers {"Content-Type" "application/pdf"
                    "Content-Length" (str (alength bytes))
                    "Content-Disposition"
                    (format "Content-Disposition: attachment; filename=\"Anchor Report %s\"" (util/datestamp))
                    }
          :body (java.io.ByteArrayInputStream. bytes)})))
