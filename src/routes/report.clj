(ns routes.report
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            ))

(require '[clojure.java.io :as io])
(require '[ring.util.response :as response])
(import java.io.File)


(defroutes routes
  (GET "/new-report" [company]
       (index/page ["new_report"] {
                                   "company" (pr-str company)
                                   }))
  (POST "/new-report" [company year month starting-year starting-month file factor]
        (let [
              [year month starting-year starting-month]
              (map #(Integer/parseInt %)
                   [year month starting-year starting-month])
              {file :tempfile} file
              outfile (File. (format "resources/public/reports/%s/%s %s.pdf" company year month))
              parent-dir (File. (format "resources/public/reports/%s" company))
              reporting-period (str year " " month)
              ]
          (.mkdirs parent-dir)
          (with-open [in (io/input-stream file)]
            (io/copy in outfile))
          (swap! model/report-metadata assoc-in [company reporting-period] (util/symzip year month starting-year starting-month factor))
          (model/set-report-metadata)
          (util/redirect "/report" {:company company :reporting-period reporting-period})))
  (GET "/report" [company reporting-period]
       (let [
             s (slurp "resources/public/pdf.js/web/viewer.html")
             input (disj model/input 'cap-rate)
             ]
         (util/response
           (.replace s "matty"
             (index/injectoid-s ["viewer"]
                                {
                                 "company" (pr-str company)
                                 "reporting_period" (pr-str reporting-period)
                                 "inputs" (pr-str input)
                                 "report_values" (pr-str (get-in @model/report-values [company reporting-period]))
                                 })))))

  )
