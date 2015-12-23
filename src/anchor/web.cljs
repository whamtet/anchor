(ns anchor.web
  (:require anchor.util
            graph.viz
            ))

(defn main []
  (println "in main"))

(set! *main-cli-fn* main)
