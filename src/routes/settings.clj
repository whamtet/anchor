(ns routes.settings
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.model :as model]
            [anchor.util :as util]
            ))

(defroutes routes
  (GET "/settings" []
       (index/page ["settings"] {
                                 "node_order" (pr-str @model/node-order)
                                 "input" (pr-str (map str model/manual-input))
                                 "node_types" (pr-str @model/node-types)
                                 }))
  (util/defupdate node-order)
  (util/defupdate node-types))
