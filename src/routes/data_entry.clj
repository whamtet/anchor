(ns routes.data-entry
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            [anchor.yahoo :as yahoo]
            ))

(defmacro delete-company [& atoms]
  `(do
     ~@(for [atom atoms]
         `(swap! ~(symbol "model" (str atom)) dissoc ~'company))
     ~@(for [atom atoms]
         `(~(symbol "model" (str "set-" atom))))
     util/ok-response))

(defroutes routes
  (GET "/data-entry" []
       (index/page ["data_entry"] {
                                   "report_metadata" (pr-str @model/report-metadata)
                                   "period_coefficients" (pr-str @model/period-coefficients)
                                   "company_names" (pr-str (yahoo/company-names (keys @model/report-metadata)))
                                   }))
  (POST "/delete-report" [company reporting-period]
        (swap! model/report-metadata util/dissoc-in [company reporting-period])
        (swap! model/report-values util/dissoc-in [company reporting-period])
        (swap! model/report-manuals util/dissoc-in [company reporting-period])
        (model/set-report-metadata)
        (model/set-report-values)
        (model/set-report-manuals)
        util/ok-response)
  (POST "/delete-company" [company]
        (delete-company report-metadata report-values report-manuals company-sectors))
  (util/defupdate report-metadata)
  (util/defupdate period-coefficients)
  )
