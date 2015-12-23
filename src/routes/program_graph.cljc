(ns routes.program-graph
  (:require
   #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
   #?(:clj [rhizome.viz :as viz])
   #?(:cljs [graph.viz :as viz])
   [graph.svg-to-edn :as svg-to-edn]
   [routes.index :as index]
   [anchor.model :as model]
   [anchor.db :as db]
   [anchor.update-calculations :as update-calculations]
   [anchor.util :as util]
   )
  #?(:cljs
     (:require-macros
     [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(def node-descriptor (fn [s]
                       {:label
                        (.replace (str s "\n1.23E+45") "-" " ")
                        :style "filled"
                        :fillcolor "white"}))

(def im (viz/graph->svg model/nodes model/dependencies
                        :node->descriptor node-descriptor
                        :vertical? false
                        :options {:size 30 ;inches
                                  }))

(def clj-graph (svg-to-edn/parse im))

(defroutes routes
  (GET "/program-graph" [company reporting-period]
       (index/page ["program_graph"] {
                                      "graph" (pr-str clj-graph)
                                      "automatic_input" (pr-str (set (map str model/automatic-input)))
                                      "manual_input" (pr-str (set (map str model/manual-input)))
                                      "final_output" (pr-str (set (map str model/final-output)))
                                      "values" (pr-str (get (update-calculations/nums [company]) company))
                                      "manual_values" (pr-str (get (db/get-db "manual-values") company))
                                      "company" (pr-str company)
                                      }))
  (POST "/update-manual-values" [company manual-values]
        (db/swap-db "manual-values" assoc company
               (into {} (map (fn [[k v]] [(name k) v]) manual-values)))
        (util/pr-response
         (get (update-calculations/nums [company]) company))))
