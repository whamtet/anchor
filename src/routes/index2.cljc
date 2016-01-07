(ns routes.index2
  (:require
   #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
   [routes.index :as index]
   [anchor.db :as db]
   [anchor.util :as util]
   [anchor.optimize :as optimize]
   [clojure.string :as string]
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

(defn old-ie? [{:strs [user-agent]}]
  (and (string/includes? user-agent "MSIE")
       (not (some #(string/includes? user-agent %) ["MSIE 10" "MSIE 11"]))))

(defroutes routes
  (GET "/" {:keys [session headers]}
       (if (old-ie? headers)
         "Internet Explorer 9 and Below Not Supported.  Please Upgrade"
         (let-realised
          [s (io/slurp "resources/public/toast/index.html")]
          {:status 200
           :headers {"Content-Type" "text/html; charset=utf-8"}
           :body
           (.replace @s
                     "matty"
                     (index/injectoid-s ["index"] {
                                                   "session" (pr-str session)
                                                   "company_metadata" (pr-str (db/get-db "company-metadata"))
                                                   "report_metadata" (pr-str (db/get-db "report-metadata"))
                                                   "period_coefficients" (pr-str (db/get-db "period-coefficients"))
                                                   }))})))
  (POST "/append-endpoint" {session :session {endpoint :endpoint} :params}
        {:status 200
         :headers {}
         :body "ok"
         :session (conj (if (set? session) session #{}) endpoint)})
  (GET "/test" [] (index/page ["test"] {}))
  (GET "/dump-db" []
       (db/dump-db)
       (util/response "dumped"))
  (ANY "/test2" req
       (promise (realise-error "uh oh")))
  (ANY "/test3" req
       (pr-str req))
  (GET "/documentation" []
       (util/redirect "http://whamtet.github.io/anchor/"))
  )
