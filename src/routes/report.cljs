(ns routes.report
  (:require
   [routes.index :as index]
   [anchor.db :as db]
   [redlobster.promise :as promise]
   [redlobster.io :as io]
   [pdf.report :as report]
   [anchor.util :as util]
   )
  (:require-macros
   [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])
  (:use-macros
   [redlobster.macros :only [promise defer-node waitp when-realised let-realised]])
  )

(defroutes routes
  (GET "/valuation-report" []
       (let-realised [report (report/pdf)]
                     {:status 200
                      :headers {"Content-Type" "application/pdf"
                                "Content-Disposition"
                                (util/format
                                 "Content-Disposition: attachment; filename=\"Anchor Report %s\"" (util/datestamp))
                                }
                      :body @report
                      :end-stream? true
                      }
                     )))
