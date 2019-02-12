(ns routes.settings
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.model :as model]
            [anchor.util :as util]
            )
  #?(:cljs
     (:require-macros
     [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(defroutes routes
  (GET "/settings" []
       (index/page ["settings"] {
                                 "node_order" (pr-str (db/get-db "node-order"))
                                 "input" (pr-str (map str model/manual-input))
                                 "node_types" (pr-str (db/get-db "node-types"))
                                 }))
  (util/defupdate node-order)
  (util/defupdate node-types))
