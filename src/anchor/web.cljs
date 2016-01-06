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
   [routes.sectors :as sectors]
   [routes.settings :as settings]
   [routes.viewer :as viewer]
   dogfort.middleware.routes
   [dogfort.middleware.defaults :as defaults]
   [dogfort.http :refer [run-http]]
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
  sectors/routes
  settings/routes
  viewer/routes
  dogfort.middleware.routes/not-found
  )

(defn main []
  (let [
        port (or js/process.env.PORT 5000)
        ]

    (println "starting on port" port "on node" js/process.version)
    (-> routes
        (defaults/wrap-defaults {:wrap-file "resources/public"})
        (run-http {:port port}))))

(set! *main-cli-fn* main)

