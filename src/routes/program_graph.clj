(ns routes.program-graph
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]))

(require '[rhizome.viz :as viz])
(require '[program-graph.svg-to-edn :as svg-to-edn])
(require '[routes.index :as index])
(require '[anchor.model :as model])

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
(defn pr-strs [x] (pr-str (map str x)))

(defroutes routes
  (GET "/program-graph" [company reporting-period]
       (index/page ["program_graph"] {
                                      "graph" (pr-str clj-graph)
                                      "automatic_input" (pr-strs model/automatic-input)
                                      "manual_input" (pr-strs model/manual-input)

                                      })))
