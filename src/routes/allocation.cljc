(ns routes.allocation
  (:require #?(:clj
               [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            [anchor.optimize :as optimize]
            [anchor.yahoo :as yahoo]
            redlobster.promise
            )
  #?(:cljs
     (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]]
      [redlobster.macros :refer [let-realised]]
      )))

(defroutes routes
  (GET "/portfolio-allocation" []
       (index/page ["allocation"] {
                                   "company_names" (pr-str (util/value-map #(% "name") (db/get-db "company-metadata")))
                                   }))

  (POST "/allocate" [country-mins country-maxs stock-max risk-weighting]
        (println "ppleaze")
        (let [
              country-mins (util/clean country-mins)
              country-maxs (util/clean country-maxs)
              ]
          (prn "got here" country-mins country-maxs stock-max risk-weighting)
          (#?(:clj util/let-realised :cljs let-realised)
             [allocation (optimize/optimize country-mins country-maxs stock-max risk-weighting)]
             (prn "allocation" @allocation)
             (util/pr-response @allocation)))))
