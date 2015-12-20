(ns routes.data-entry
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            [anchor.yahoo :as yahoo]
            [anchor.get-icon :as get-icon]
            ))

(defroutes routes
  (GET "/data-entry" []
       (index/page ["data_entry"] {
                                   "report_metadata" (pr-str (db/get-db "report-metadata"))
                                   "period_coefficients" (pr-str (db/get-db "period-coefficients"))
                                   "company_names" (pr-str (yahoo/company-names (keys (db/get-db "report-metadata"))))
                                   }
                   ))
  (POST "/delete-report" [company reporting-period]
        (db/swap-db "report-metadata" util/dissoc-in [company reporting-period])
        (db/swap-db "report-values" util/dissoc-in [company reporting-period])
        (db/swap-db "report-manuals" util/dissoc-in [company reporting-period])
        util/ok-response)
  (POST "/delete-company" [company]
        (doseq [db ["report-metadata" "report-values" "report-manuals" "company-sectors" "company-metadata"]]
          (db/swap-db db dissoc company))
        util/ok-response)
  (util/defupdate report-metadata)
  (util/defupdate period-coefficients)
  (POST "/add-company" [name website favicon? yahoo-finance-id]
        (let [
              favicon-link
              (if (and (not-empty website) (not favicon?))
                (try
                  (get-icon/get-icon2 website)
                  (catch Exception e)))
              m (util/symzip name website favicon? favicon-link)
              ]
          (db/swap-db "company-metadata" assoc yahoo-finance-id m)
          (util/pr-response (db/get-db "company-metadata"))))
  )
