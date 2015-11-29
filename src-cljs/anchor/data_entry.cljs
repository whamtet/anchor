(ns anchor.data-entry
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
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
                         (if (get @report-metadata @new-company)
                           (js/alert "Company Exists")
                           (do
                             (swap! report-metadata assoc @new-company {})
                             (reset! new-company "")
                             (POST "/update-report-metadata" {:params {:report-metadata @report-metadata}}))))}]])

(defn update-period-coefficients [company value]
  (println "updating" company value))

(defn delete-company [company reporting-periods]
  (if (not-empty reporting-periods)
    (js/alert "Delete Reports First")
    (do
      (swap! report-metadata dissoc company)
      (POST "/delete-company" {:params {:company company}}))))

(defn delete-report [company reporting-period]
  (when (js/confirm (core/format "Delete %s %s ?" company reporting-period))
    (swap! report-metadata core/dissoc-in [company reporting-period])
    (POST "/update-report-metadata" {:params {:report-metadata @report-metadata}})
    ))

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
     [:div {:style {:width (dec (* scale time-width))
                    :left (* scale time-gap)
                    :position "relative"
                    :height 17
                    :top -15
                    :border "1px solid black"
                    :background-color "yellow"}}]]))

(defn company-div [company reporting-periods]
  [:div
   [:a {:href
        (core/url "/program-graph" {:company company})
        :target "_blank"}
        [:b company]] " "
   [:input {:type "button"
            :value "Delete"
            :on-click #(delete-company company reporting-periods)}][:br][:br]
   "Report Combination "
   [:input {:type "text"
            :default-value (get @period-coefficients company)
            :on-blur #(do
                        (swap! period-coefficients assoc company (-> % .-target .-value))
                        (POST "/update-period-coefficients" {:params {:period-coefficients @period-coefficients}}))
                        }] [:br] [:br]
   (for [[reporting-period {:strs [year month starting-year starting-month]}] reporting-periods]
     ^{:key (str year month)}
     [report-line company year month starting-year starting-month])
   [:input {
            :type "button"
            :value "New Report"
            :on-click #(core/link-to "/new-report" {:company company} true)
            }]
   [:br][:br]
   ])

(defn content []
  [:div
   [:h2 "Data Entry"]
   [new-company-form]
   [:h3 "Companies"]
   (for [[company reporting-periods] @report-metadata]
     ^{:key company}
     [company-div company reporting-periods])
   ])

(defn main []
  (core/page content))
