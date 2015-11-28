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
                                 }))
  (POST "/update-node-order" [node-order]
        (reset! model/node-order (util/clean node-order))
        (model/set-node-order)
        util/ok-response))
