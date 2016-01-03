(ns anchor.web
  (:require ;[dogfort.middleware.routes-macros :refer [defroutes]]
            ;cljs.nodejs
            ;[dogfort.middleware.defaults :as defaults]
            ;dogfort.middleware.routes
   [routes.allocation :as allocation]
   [routes.bberg :as bberg]
   [routes.data-entry :as data-entry]
   [routes.index2 :as index2]
   [routes.program-graph :as program-graph]
   [routes.report :as report]
   dogfort.middleware.routes
   [dogfort.middleware.defaults :as defaults]
   [dogfort.http :refer [run-http]]
   [dogfort.middleware.edn :as edn]
   anchor.optimize
            )
  (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes]]))

(defroutes routes
  allocation/routes
  bberg/routes
  data-entry/routes
  index2/routes
  program-graph/routes
  report/routes
  dogfort.middleware.routes/not-found
  )

(defn main []
  (println "starting")
  (-> routes
      (defaults/wrap-defaults {:wrap-file "resources/public"})
      (run-http {:port 5000})))

(set! *main-cli-fn* main)

