(ns anchor.allocation
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [anchor.params :as params]
   )
  )

(def countries ["Australia" "Singapore" "Hong Kong"])

(def country-mins (atom (zipmap countries (repeat 0))))
(def country-maxs (atom (zipmap countries (repeat 100))))
(def stock-max (atom 20))
(def risk-weighting (atom 0))
(def results-atom (atom nil))

(defn min-change [country event]
  (let [
        m1 (-> event .-target .-value js/Number)
        m2 (reduce - 100 (vals (dissoc @country-mins country)))
        m3 (@country-maxs country)
        ]
    (swap! country-mins assoc country (min m1 m2 m3))))

(defn max-change [country event]
  (let [
        m1 (-> event .-target .-value js/Number)
        m2 (reduce - 100 (vals (dissoc @country-maxs country)))
        m3 (@country-mins country)
        ]
    (swap! country-maxs assoc country (max m1 m2 m3))))

(defn country-bound [country]
  [:div
   [:h5 country]
   "Min "
   [:input {:type "range" :min 0 :max 100 :value (@country-mins country) :on-change #(min-change country %)}]
   " Max "
   [:input {:type "range" :min 0 :max 100 :value (@country-maxs country) :on-change #(max-change country %)}]])

(defn country-bounds []
  [:div
   [:h4 "Country Ranges"]
   [country-bound "Australia"]
   [country-bound "Singapore"]
   [country-bound "Hong Kong"]])

(defn stock-max-row []
  [:div
   [:h4 "Maximum Stock Weight"]
   "0 "
   [:input {:type "range" :min 0 :max 100 :value @stock-max :on-change #(reset! stock-max (max 15 (-> % .-target .-value js/Number)))}]
   " 100"
   ])

(defn risk-row []
  [:div
   [:h4 "Risk Weighting"]
   "Defensive "
   [:input {:type "range" :min -100 :max 100 :value @risk-weighting :on-change #(reset! risk-weighting (-> % .-target .-value js/Number))}]
   " Aggressive" [:br] [:br]
   ])

(defn results-row [company weighting]
  [:tr
   [:td [:b (get @params/company-names company)]]
   [:td (.toFixed weighting 2)]])

(defn results []
  (if @results-atom
    [:div
     [:h3 "Allocation"]
     [:h4 "Portfolio Minimises Discount to Fair Value + Leverage * Risk Weighting"]
     [:table
      [:tbody
       (for [[company weighting] @results-atom]
         ^{:key company}
         [results-row company weighting])]]
     ]
    [:div]))

(defn content []
  [:div
   [country-bounds]
   [stock-max-row]
   [risk-row]
   [:input {:type "button"
            :value "Allocate"
            :on-click #(POST "/allocate" {:params {:country-mins @country-mins
                                                   :country-maxs @country-maxs
                                                   :stock-max @stock-max
                                                   :risk-weighting @risk-weighting
                                                   }
                                          :handler (fn [x] (reset! results-atom x))
                                          :error-handler prn})
            }
    ]
   [results]
   ])


(defn ^:export main []
  (core/page content))
