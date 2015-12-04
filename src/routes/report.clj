(ns routes.report
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            [anchor.update-calculations :as update-calculations]
            ))

(require '[clojure.java.io :as io])
(require '[ring.util.response :as response])
(require '[clojure.java.shell :as shell])

(import java.io.File)
(import java.util.Calendar)

(def months ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(defn timestamp []
  (let [
        cal (Calendar/getInstance)
        appendo #(if (< % 10) (str "0" %) %)
        ]
    (str (.get cal Calendar/HOUR_OF_DAY) ":" (appendo (.get cal Calendar/MINUTE)) " "
         (.get cal Calendar/DATE) " " (months (.get cal Calendar/MONTH)) " " (.get cal Calendar/YEAR))))

(.mkdir (File. "temp"))

(defn get-binary []
  (let [
        f (format "temp/f%s.pdf" (rand-int Integer/MAX_VALUE))
        _ (println (shell/sh "wkhtmltopdf" "--orientation" "Landscape" "--debug-javascript" "--no-stop-slow-scripts"
                             "-L" "6mm" "-R" "6mm" "-T" "6mm" "-B" "6mm"
                             "http://localhost:5000/raw-report" f))
        bytes (util/binary-slurp f)
        ]
    (-> f File. .delete)
    bytes
    ))

(defroutes routes
  (GET "/raw-report" []
       (index/blank-page ["report"]
                         {
                          "values" (pr-str (update-calculations/nums (keys @model/report-metadata)))
                          "timestamp" (pr-str (timestamp))
                          }))
  (GET "/valuation-report" []
       (let [
             bytes (get-binary)
             ]
         {:status 200
          :headers {"Content-Type" "application/pdf"
                    "Content-Length" (str (alength bytes))
                    "Content-Disposition"
                    (format "Content-Disposition: attachment; filename=\"Anchor Report %s\"" (util/datestamp))
                    }
          :body (java.io.ByteArrayInputStream. bytes)})))
