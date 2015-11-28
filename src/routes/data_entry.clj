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
  (util/defupdate report-metadata)
  (util/defupdate period-coefficients)
  )
