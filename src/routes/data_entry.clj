(ns routes.data-entry
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            ))

(defroutes routes
  (GET "/data-entry" []
       (index/page ["data_entry"] {
                                   "report_metadata" (pr-str @model/report-metadata)
                                   "period_coefficients" (pr-str @model/period-coefficients)
                                   }))
  (POST "/update-report-metadata" [report-metadata]
        (reset! model/report-metadata (util/clean report-metadata))
        (model/set-report-metadata)
        util/ok-response
        )
  (POST "/update-period-coefficients" [period-coefficients]
        (reset! model/period-coefficients (util/clean period-coefficients))
        (model/set-period-coefficients)
        util/ok-response)
  )
