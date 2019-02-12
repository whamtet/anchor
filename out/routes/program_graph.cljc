(ns routes.program-graph
  (:require
   #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
   #?(:clj [rhizome.viz :as viz])
   #?(:cljs [graph.viz :as viz])
   #?(:cljs redlobster.promise)
   #?(:cljs dogfort.middleware.routes)
   [graph.svg-to-edn :as svg-to-edn]
   [routes.index :as index]
   [anchor.model :as model]
   [anchor.db :as db]
   [anchor.update-calculations :as update-calculations]
   [anchor.util :as util]
   [clojure.string :as string]
   )
  #?(:cljs
     (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]]
      [redlobster.macros :refer [let-realised]]
      )))

(def node-descriptor (fn [s]
                       {:label
                        (string/replace (str s "\n1.23E+45") "-" " ")
                        :style "filled"
                        :fillcolor "white"}))

(def im (viz/graph->svg model/nodes model/dependencies
                        :node->descriptor node-descriptor
                        :vertical? false
                        :options {:size 30 ;inches
                                  }))

#?(:clj
   (def clj-graph (svg-to-edn/parse im))
   :cljs
   (let-realised [im im]
                 (def clj-graph (svg-to-edn/parse @im))))

(defroutes routes
  (GET "/program-graph" [company reporting-period :as req]
       (#?(:clj util/let-realised :cljs let-realised) [nums (update-calculations/nums [company])]
          (index/page ["program_graph"] {
                                         "graph" (pr-str clj-graph)
                                         "automatic_input" (pr-str (set (map str model/automatic-input)))
                                         "manual_input" (pr-str (set (map str model/manual-input)))
                                         "final_output" (pr-str (set (map str model/final-output)))
                                         "nodes" (pr-str (map str model/nodes))
                                         "values" (pr-str (get @nums company))
                                         "manual_values" (pr-str (get (db/get-db "manual-values") company))
                                         "company" (pr-str company)
                                         "session" (pr-str (:session req))
                                         })))
  (POST "/update-manual-values" [company manual-values]
        (db/swap-db "manual-values" assoc company
                    (into {} (map (fn [[k v]] [(name k) v]) manual-values)))
        (#?(:clj util/let-realised :cljs let-realised)
           [nums (update-calculations/nums [company])]
           (util/pr-response (get @nums company)))))
