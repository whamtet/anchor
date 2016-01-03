(ns routes.index2
  (:require
   #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
   [routes.index :as index]
   [anchor.db :as db]
   [anchor.util :as util]
   [anchor.optimize :as optimize]
   #?(:cljs [redlobster.promise :as promise])
   #?(:cljs [redlobster.io :as io])
   )
  #?(:cljs
     (:require-macros
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]]))
  #?(:cljs
     (:use-macros
      [redlobster.macros :only [promise defer-node waitp when-realised let-realised]]))
  )


(defroutes routes
  (GET "/" []
       (let-realised
        [s (io/slurp "resources/public/toast/index.html")]
        {:status 200
         :headers {"Content-Type" "text/html; charset=utf-8"}
         :body
         (.replace @s
                   "matty"
                   (index/injectoid-s ["index"] {
                                                 "company_metadata" (pr-str (db/get-db "company-metadata"))
                                                 "report_metadata" (pr-str (db/get-db "report-metadata"))
                                                 "period_coefficients" (pr-str (db/get-db "period-coefficients"))
                                                 }))}))
  (GET "/test" [] (index/page ["test"] {}))
  (GET "/dump-db" []
        (db/dump-db)
        (util/response "dumped"))
  (GET "/test2" []
       (let-realised [s (optimize/optimize)]
         (util/response @s)))

  )
