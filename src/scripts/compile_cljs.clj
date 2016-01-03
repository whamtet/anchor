(ns
  ^{:doc "Compile Browser Clojurescript.
    We wish to pass parameters from the server to our clojurescript namespaces.
    We thus parse all the files in routes/ to find GET endpoints.
    These endpoints are compiled into an additional (ns anchor.params) namespace.
    "}
  scripts.compile-cljs)
(require 'cljs.build.api)

(defn- slurp-route [route]
  (read-string {:read-cond :allow} (format "(list %s)" (slurp route))))

(defn- extract-form
  "Returns a list of [endpoint parameters] pairs"
  [form]
  (if (or (list? form) (map? form))
    (cond
     (= 'defroutes (first form))
     (filter identity (map extract-form (drop 2 form)))
     ('#{index/page index/injectoid index/injectoid-s} (first form))
     [(first (second form))
      (map #(symbol (.replace % "_" "-"))
           (keys (nth form 2)))]
     (map? form) (some extract-form (vals form))
     :default (some extract-form form))))

(defn- extract-route [route]
  (extract-form (slurp-route route)))

(defn- spit-changes [f s]
  (let [
        old (try (slurp f) (catch Exception e))
        ]
    (if (not= s old) (spit f s))))

(defn- compile-cljs
  "Compile browser Clojurescript, first spitting params list to (ns anchor.params) if necessary"
  [once?]
  (let [
        routes (filter #(or
                         (.endsWith (.getName %) ".clj")
                         (.endsWith (.getName %) ".cljc"))
                       (file-seq (java.io.File. "src/routes")))
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
        f (if once? cljs.build.api/build cljs.build.api/watch)
        ]
    (println "compiling")
    (spit-changes "src-cljs/anchor/params.cljs" params)
    (f "src-cljs"
       {:output-to "resources/public/cljs/out.js"
        :warnings false
        :output-dir "resources/public/cljs/out"
        :optimizations (if once? :advanced :none)
        :source-map "resources/public/cljs/out.js.map"
        })))

(defn -main [& [once?]]
  (compile-cljs once?))
