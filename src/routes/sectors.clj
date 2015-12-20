(ns routes.sectors
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            ))

(defroutes routes
  (GET "/economic-sectors" []
       (index/page ["sectors"] {
                                "economic_sectors" (pr-str (db/get-db "economic-sectors"))
                                "company_sectors" (pr-str (db/get-db "company-sectors"))
                                "companies" (pr-str (sort (keys (db/get-db "report-metadata"))))
                                }))
  (util/defupdate economic-sectors)
  (util/defupdate company-sectors)
  )
