(ns routes.sectors
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            ))

(defroutes routes
  (GET "/economic-sectors" []
       (index/page ["sectors"] {
                                "economic_sectors" (pr-str @model/economic-sectors)
                                "company_sectors" (pr-str @model/company-sectors)
                                "companies" (pr-str (sort (keys @model/report-metadata)))
                                }))
  (POST "/update-economic-sectors" [economic-sectors]
        (reset! model/economic-sectors (util/clean economic-sectors))
        (model/set-economic-sectors)
        util/ok-response)
  (POST "/update-company-sectors" [company-sectors]
        (reset! model/company-sectors (util/clean company-sectors))
        (model/set-company-sectors)
        util/ok-response))
