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
  (util/defupdate economic-sectors)
  (util/defupdate company-sectors)
  )
