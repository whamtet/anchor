(ns routes.program-graph
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]))

(require '[rhizome.viz :as viz])
(require '[program-graph.svg-to-edn :as svg-to-edn])
(require '[routes.index :as index])
(require '[anchor.model :as model])
(require '[anchor.update-calculations :as update-calculations])
(require '[anchor.util :as util])

(def node-descriptor (fn [s]
                       {:label
                        (.replace (str s "\n1.23E+45") "-" " ")
                        :style "filled"
                        :fillcolor "white"}))

(def im (viz/graph->svg model/nodes model/dependencies
                        :node->descriptor node-descriptor
                        :vertical? false
                        :options {:size 30 ;inches
                                  }
                        ))

(def clj-graph (svg-to-edn/parse im))


(defroutes routes
  (GET "/program-graph" [company reporting-period]
       (index/page ["program_graph"] {
                                      "graph" (pr-str clj-graph)
                                      "automatic_input" (pr-str (set (map str model/automatic-input)))
                                      "manual_input" (pr-str (set (map str model/manual-input)))
                                      "final_output" (pr-str (set (map str model/final-output)))
                                      "values" (pr-str (get (update-calculations/nums [company]) company))
                                      "manual_values" (pr-str (get @model/manual-values company))
                                      "company" (pr-str company)
                                      }))
  (POST "/update-manual-values" [company manual-values]
        (swap! model/manual-values assoc company
               (into {} (map (fn [[k v]] [(name k) v]) manual-values)))
        (model/set-manual-values)
        (util/pr-response
         (get (update-calculations/nums [company]) company))))
