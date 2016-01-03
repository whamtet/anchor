(ns graph.viz
  (:require [graph.dot :as dot]
            [anchor.model :as model]
            cljs.nodejs
            [redlobster.stream :as stream]
            [redlobster.promise :as redlobster])
  (:require-macros
   [anchor.util :refer [symzip]]
   [redlobster.macros :refer [promise let-realised]]
   ))

(def child-process (js/require "child_process"))
;;taken from rhizome.vis but adapted for node

(defn dot->svg
  "Takes a string containing a GraphViz dot file, and returns a string containing SVG.  This requires that GraphViz
  is installed on the local machine."
  [s]
  (promise
   (->
    (.exec child-process
           "dot -Tsvg"
           (fn [err stdout stderr]
             (realise stdout)))
    .-stdin
    (stream/write-stream s))))

(def graph->svg (comp dot->svg dot/graph->dot))
