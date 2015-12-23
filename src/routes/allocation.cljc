(ns routes.allocation
  (:require #?(:clj
               [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            ;            [anchor.optimize :as optimize]
            [anchor.yahoo :as yahoo]
            )
  #?(:cljs
     (:require-macros
       [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(defroutes routes
  (GET "/portfolio-allocation" []
       (index/page ["allocation"] {
                                   "company_names" (pr-str (yahoo/company-names
                                                            (keys (db/get-db "report-metadata"))))
                                   }))

  #_(POST "/allocate" [country-mins country-maxs stock-max risk-weighting]
          (let [
                country-mins (util/clean country-mins)
                country-maxs (util/clean country-maxs)
                ]
            (util/pr-response (optimize/optimize country-mins country-maxs stock-max risk-weighting)))))
