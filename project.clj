(defproject anchor "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://anchor.herokuapp.com"
  :license {:name "FIXME: choose"
            :url "http://example.com/FIXME"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.1.8"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-devel "1.2.2"]
                 [ring-basic-authentication "1.0.5"]
                 [environ "0.5.0"]
                 [com.cemerick/drawbridge "0.0.6"]
                 [fogus/ring-edn "0.3.0"]
                 [com.novemberain/monger "3.0.0-rc2"]
                 [clojure-msgpack "1.0.0"]
                 [rhizome "0.2.5"] ;graphing
                 [hiccup "1.0.5"]

                 [com.joptimizer/joptimizer "3.4.0"]

                 ;;cljs
                 [org.clojure/clojurescript "1.7.170"]
                 [crate "0.2.4"]
                 [jayq "2.5.1"]
                 [cljs-ajax "0.2.6"]
                 [reagent "0.5.1" :exclusions [com.google.javascript/closure-compiler
                                               org.clojure/google-closure-library]]
                 [clj-pdf "2.1.6"]

                 ;;hiccups
                 [org.clojars.whamtet/hiccups "0.4.1"]

                 ;;dogfort
                 [dogfort "0.2.3" :exclusions [org.clojure/clojurescript
                                                        com.google.javascript/closure-compiler
                                                        org.clojure/google-closure-library
                                                        ]]
                 [cljs-pdfkit "0.1.0-SNAPSHOT" :exclusions [org.clojure/clojurescript]]

                 ;extra dependencies for java 11
                 [javax.xml.bind/jaxb-api "2.2.11"]
                 [com.sun.xml.bind/jaxb-core "2.2.11"]
                 [com.sun.xml.bind/jaxb-impl "2.2.11"]
                 [javax.activation/activation "1.1.1"]]
  :min-lein-version "2.0.0"
  :plugins [[environ/environ.lein "0.2.1"]
            [lein-npm "0.6.1"]
            ]
  :hooks [environ.leiningen.hooks]
  :uberjar-name "anchor-standalone.jar"
  :profiles {:production {:env {:production true}}}
  :jvm-opts ["-Djava.awt.headless=true" ]
  :aliases
  {"build" ["trampoline" "run" "-m" "scripts.compile-cljs"]
   "build-once" ["trampoline" "run" "-m" "scripts.compile-cljs" "true"]
   "build-node" ["trampoline" "run" "-m" "scripts.compile-node" "anchor.web"]
   }
  :npm {:dependencies [
                       [glpk "0.0.12"]
                       ]}
)
