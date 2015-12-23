(ns routes.index2
  (:require
   #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
   [routes.index :as index]
   [anchor.db :as db]
   #?(:cljs [redlobster.promise :as promise])
   #?(:cljs redlobster.stream)
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
        [s (stream/read-stream (stream/read-file "resources/public/toast/index.html"))]
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
  )
