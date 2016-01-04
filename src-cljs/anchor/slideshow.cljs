(ns anchor.slideshow
  (:require
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]))

(def slide (atom 1))

(def captions [
               "Overview of Investment Universe"
               "Intuitive, Interactive Financial Modelling"
               "Data Entry Direct from Company Filings"
               "Data Entry From Bloomberg"
               "Automatic Portfolio Allocation"])

(defn safe-inc [x]
  (if (< x (dec (count captions))) (inc x)))

(defn slide-frame []
  [:div
   [:div [:a {:href "javascript:void(0)" :on-click #(reset! slide nil)} "Skip Intro"]]
   [:img {:src (core/format "/tour/%s.png" @slide)
          :on-click #(swap! slide safe-inc)
          :style {:max-width 700
                  :height "auto"}
          }]
   [:div (captions @slide)]
   [:div
    [:input {:type "button"
             :value "Next"
             :on-click #(swap! slide safe-inc)
             }]]
   ])
