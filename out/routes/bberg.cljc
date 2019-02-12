(ns routes.bberg
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.util :as util]
            [anchor.model :as model]
            #?(:cljs [redlobster.promise :as promise])
            #?(:cljs [redlobster.io :refer [slurp]])
            )
  #?(:cljs
     (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]]
      [redlobster.macros :refer [let-realised]]
      )))

(def headers '[NORMALIZED_INCOME
               EARN_FOR_COMMON
               BS_TOT_ASSET
               BS_TOT_LIAB2
               BS_TOT_LIAB_EQY
               TOT_LIAB_AND_EQY
               CF_NET_CHNG_CASH])

#?(:clj
   (def lines (slurp "resources/bberg.txt"))
   :cljs
   (let-realised [s (slurp "resources/bberg.txt")]
                 (def lines @s)))

(defroutes routes
  (GET "/bberg" []
       (index/page ["bberg"] {
                              "headers" (pr-str headers)
                              "lines" lines
                              "fields" (pr-str (map str model/manual-input))
                              })))
