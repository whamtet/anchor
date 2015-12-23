(ns routes.bberg
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.util :as util]
            [anchor.model :as model]
            )
  #?(:cljs
     (:require-macros
       [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(def headers '[NORMALIZED_INCOME
               EARN_FOR_COMMON
               BS_TOT_ASSET
               BS_TOT_LIAB2
               BS_TOT_LIAB_EQY
               TOT_LIAB_AND_EQY
               CF_NET_CHNG_CASH])

(defroutes routes
  (GET "/bberg" []
       (index/page ["bberg"] {
                              "headers" (pr-str headers)
                              "lines" (slurp "resources/bberg.txt")
                              "fields" (pr-str (map str model/manual-input))
                              })))
