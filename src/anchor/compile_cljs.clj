(ns anchor.compile-cljs)
(require 'cljs.build.api)

(cljs.build.api/build "src-cljs"
                      {:output-to "resources/public/cljs/out.js"
                       :warnings false
                       :output-dir "resources/public/cljs/out"
                       })
