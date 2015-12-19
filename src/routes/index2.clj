(ns routes.index2
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]))

(require '[ring.util.response :as response])
(require '[hiccup.page :as hiccup])
(require 'hiccup.core)
(require '[anchor.util :as util])
(require '[anchor.model :as model])
(require '[routes.index :as index])

(defroutes routes
  #_(GET "/" []
         (hiccup/html5
          anchor
          [:h3 "Data Entry"]
          [:a {:href "/economic-sectors"} "Economic Sectors"][:br]
          [:a {:href "/data-entry"} "Data Entry"][:br]
          [:a {:href "/bberg"} "Bloomberg Data Entry"][:br]
          [:h3 "Valuation"]
          [:a {:href "/valuation-report"} "Valuation Report"][:br]
          [:h3 "Portfolio Management"]
          [:a {:href "/portfolio-allocation"} "Portfolio Allocation"][:br]
          [:h3 "Settings"]
          [:a {:href "/settings"} "Settings"]
          ))
  (GET "/" []
       {:status 200
        :headers {"Content-Type" "text/html; charset=utf-8"}
        :body
        (.replace (slurp "resources/public/toast/index.html")
                  "matty"
                  (index/injectoid-s ["index"] {
                                          "company_metadata" (pr-str @model/company-metadata)
                                          "report_metadata" (pr-str @model/report-metadata)
                                          "period_coefficients" (pr-str @model/period-coefficients)
                                          }))})
  )
