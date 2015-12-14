(ns anchor.web
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY routes]]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [clojure.java.io :as io]
            [ring.middleware.stacktrace :as trace]
            [ring.middleware.session :as session]
            [ring.middleware.session.cookie :as cookie]
            [ring.adapter.jetty :as jetty]
            [routes.index :as index]
            [routes.sectors :as sectors]
            [routes.data-entry :as data-entry]
            [routes.report :as report]
            [routes.program-graph :as program-graph]
            [ring.middleware.edn :as wrap-edn]
            [routes.settings :as settings]
            [routes.bberg :as bberg]
            [routes.viewer :as viewer]
            [routes.allocation :as allocation]
            [anchor.compile-cljs :as compile-cljs]
            ))

(defroutes app
  (GET "/test" [] (index/page ["test"] {}
;                              ["node_modules/react-slider/react-slider.js"]
                              ))
  (route/resources "/")
  (ANY "*" []
       (route/not-found (slurp (io/resource "404.html")))))

(defonce cookie-store (cookie/cookie-store))

(def app2 (routes
          #'index/routes
          #'sectors/routes
          #'data-entry/routes
          #'report/routes
          #'settings/routes
          #'program-graph/routes
          #'bberg/routes
          #'viewer/routes
          #'allocation/routes
          app
           ))

(defn wrap-app [app]
  ;; TODO: heroku config:add SESSION_SECRET=$RANDOM_16_CHARS
  (let []
    (-> app
        trace/wrap-stacktrace
        (site {:session {:store cookie-store}})
        (wrap-edn/wrap-edn-params {:readers *data-readers*})
        )))

(defn -main [& [port]]
  (let [port 5000]
    (jetty/run-jetty (wrap-app #'app2) {:port port :join? false})))

;; For interactive development:
;; (.stop server)
(defonce server (-main))
