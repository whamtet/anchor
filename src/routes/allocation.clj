(ns routes.allocation
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            [anchor.optimize :as optimize]
            [anchor.yahoo :as yahoo]
            ))

(defroutes routes
  (GET "/portfolio-allocation" []
       (index/page ["allocation"] {
                                   "company_names" (pr-str (yahoo/company-names (keys @model/report-metadata)))
                                   }))

  (POST "/allocate" [country-mins country-maxs stock-max risk-weighting]
        (let [
              country-mins (util/clean country-mins)
              country-maxs (util/clean country-maxs)
              ]
          (util/pr-response (optimize/optimize country-mins country-maxs stock-max risk-weighting)))))
