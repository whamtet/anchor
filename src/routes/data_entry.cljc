(ns routes.data-entry
  (:require #?(:clj [compojure.core :refer [defroutes GET PUT POST DELETE ANY]])
            [routes.index :as index]
            [anchor.db :as db]
            [anchor.util :as util]
            [anchor.get-icon :as get-icon]
            )
  #?(:cljs
     (:require-macros
      [anchor.util :refer [defupdate symzip]]
      [dogfort.middleware.routes-macros :refer [defroutes GET POST ANY]])))

(defroutes routes
  (GET "/data-entry" []
       (index/page ["data_entry"] {
                                   "report_metadata" (pr-str (db/get-db "report-metadata"))
                                   "period_coefficients" (pr-str (db/get-db "period-coefficients"))
                                   "company_names" (pr-str {})
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
  (defupdate report-metadata)
  (defupdate period-coefficients)
  (POST "/add-company" [name website favicon? yahoo-finance-id]
        (let [
              favicon-link
              (if (and (not-empty website) (not favicon?))
                (try
                  (get-icon/get-icon2 website)
                  (catch Exception e)))
              m (symzip name website favicon? favicon-link)
              ]
          (db/swap-db "company-metadata" assoc yahoo-finance-id m)
          (util/pr-response (db/get-db "company-metadata"))))
  )
