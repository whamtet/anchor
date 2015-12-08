(ns anchor.data-entry
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [anchor.params :as params]
   ))

(def new-company (atom ""))

(defn new-company-form []
  [:div
   "New Company "
   [:input {:type "text"
            :value @new-company
            :on-change #(reset! new-company (-> % .-target .-value))}]
   [:input {:type "button"
            :value "Create"
            :on-click #(if (not= "" @new-company)
                         (if (get @params/report-metadata @new-company)
                           (js/alert "Company Exists")
                           (do
                             (swap! params/report-metadata assoc @new-company {})
                             (reset! new-company "")
                             (POST "/update-report-metadata" {:params {:report-metadata @params/report-metadata}}))))}]])

(defn delete-company [company reporting-periods]
  (if (not-empty reporting-periods)
    (js/alert "Delete Reports First")
    (do
      (swap! params/report-metadata dissoc company)
      (POST "/delete-company" {:params {:company company}}))))

(defn delete-report [company reporting-period]
  (when (js/confirm (core/format "Delete %s %s ?" company reporting-period))
    (swap! params/report-metadata core/dissoc-in [company reporting-period])
    (POST "/delete-report" {:params {:company company :reporting-period reporting-period}})))

(defn report-line [company year month starting-year starting-month]
  (let [
        time-gap (- (* 2020 12) month (* year 12))
        time-width (inc (- (+ month (* year 12)) starting-month (* starting-year 12)))
        scale 4
        reporting-period (str year " " month)
        ]
    [:div
     [:a {:href (core/url "/report" {:company company :reporting-period reporting-period})
          :target "_blank"}
      reporting-period] " "
     [:input {:type "button"
              :value "Delete"
              :on-click #(delete-report company reporting-period)}]
     [:div {:style {:width (- (* scale time-width) 2)
                    :left (* scale time-gap)
                    :position "relative"
                    :height 17
                    :top -15
                    :border "1px solid black"
                    :background-color "yellow"}}]]))

(defn date-val [[reporting-period]]
  (let [
        [year month] (map int (.split reporting-period " "))
        ]
    (- 0 year (/ month 12))))

(defn company-div [company]
  (let [
        reporting-periods (get @params/report-metadata company)
        ]
    [:div
     [:a {:href
          (core/url "/program-graph" {:company company})
          :target "_blank"}
      [:b (get @params/company-names company company)]] " "
     [:input {:type "button"
              :value "Delete"
              :on-click #(delete-company company reporting-periods)}][:br][:br]
     "Report Combination "
     [:input {:type "text"
              :default-value (get @params/period-coefficients company)
              :on-blur #(do
                          (swap! params/period-coefficients assoc company (-> % .-target .-value))
                          (POST "/update-period-coefficients" {:params {:period-coefficients @params/period-coefficients}}))
              }] [:br] [:br]
     (for [[reporting-period {:strs [year month starting-year starting-month]}]
           (sort-by date-val reporting-periods)]
       ^{:key (str year month)}
       [report-line company year month starting-year starting-month])
     [:input {
              :type "button"
              :value "New Report"
              :on-click #(core/link-to "/new-report" {:company company} true)
              }]
     [:br][:br]
     ]))

(defn sort-companies [companies]
  (mapcat sort (vals (group-by #(second (.split % ".")) companies))))

(defn content []
  [:div
   [:h2 "Data Entry"]
   [new-company-form]
   [:h3 "Companies"]
   (for [company (sort-companies (keys @params/report-metadata))]
     ^{:key company}
     [company-div company])
   ])

(defn ^:export main []
  (core/page content))
