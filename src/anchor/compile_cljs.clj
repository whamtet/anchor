(ns anchor.compile-cljs)
(require 'cljs.build.api)

(defn slurp-route [route]
  (read-string (format "(list %s)" (slurp route))))

(defn extract-form [form]
  (if (list? form)
    (cond
     (= 'defroutes (first form))
     (filter identity (map extract-form (drop 2 form)))
     ('#{index/page index/injectoid index/injectoid-s} (first form))
     [(first (second form))
      (map #(symbol (.replace % "_" "-"))
           (keys (nth form 2)))]
     :default (some extract-form form))))

(defn extract-route [route]
  (extract-form (slurp-route route)))

(defn spit-changes [f s]
  (let [
        old (try (slurp f) (catch Exception e))
        ]
    (if (not= s old) (spit f s))))

(defn compile-cljs []
  (let [
        routes (filter #(.endsWith (.getName %) ".clj") (file-seq (java.io.File. "src/routes")))
        forms (mapcat extract-route routes)
        params (format "
                       (ns anchor.params
                       (:require
                       [reagent.core :as reagent :refer [atom]]
                       ))
                       %s"
                       (apply str
                              (interpose "\n"
                                         (flatten
                                          (map
                                           (fn [[ns syms]]
                                             [(str ";" ns)
                                              (map #(format "(def ^:export %s (atom nil)) (defn ^:export set-%s [x] (reset! %s x))
                                                            " % % %) syms)])
                                           forms
                                           )))))
        ]
    (println "compiling")
    (spit-changes "src-cljs/anchor/params.cljs" params)
    (cljs.build.api/build "src-cljs"
                          {:output-to "resources/public/cljs/out.js"
                           :warnings false
                           :output-dir "resources/public/cljs/out"
                           :optimizations :advanced
                           :source-map "resources/public/cljs/out.js.map"
                           })))
