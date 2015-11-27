(ns anchor.sectors
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   ))

(def new-sector (atom ""))
(def new-cap-rate (atom 0))
(def new-allocation-sector (atom {}))
(def new-allocation-amount (atom {}))

(defn company-new-sector-row [company]
  [:tr
   [:td
    [:select {:value (get @new-allocation-sector company (first (keys @economic-sectors)))
              :on-change #(swap! new-allocation-sector assoc company (-> % .-target .-value))}
     (for [[sector] @economic-sectors]
       ^{:key sector}
       [:option sector])]]
   [:td
    [:input {:type "number"
             :value (get @new-allocation-amount company 0)
             :on-change #(swap! new-allocation-amount assoc company (-> % .-target .-value))}]]
   [:td
    [:input {:type "button"
             :value "Add"
             :on-click #(let [
                              new-sector (get @new-allocation-sector company (first (keys @economic-sectors)))
                              new-allocation (get @new-allocation-amount company 0)
                              ]
                          (when (not= new-allocation 0)
                            (swap! company-sectors assoc-in [company new-sector] (js/Number new-allocation))
                            (swap! new-allocation-sector dissoc company)
                            (swap! new-allocation-amount dissoc company)
                            (POST "/update-company-sectors" {:params {:company-sectors @company-sectors}})))}]]])

(defn company-table [company]
  (let [
        sectors (get @company-sectors company)
        ]
    [:div
     [:h4 company]
     [:table
      [:thead
       [:tr
        [:th "Sector"] [:th "Allocation %"]]]
      [:tbody
       (for [[sector allocation] sectors]
         ^{:key sector}
         [:tr
          [:td sector]
          [:td
           [:input {:type "number"
                    :default-value allocation
                    :on-blur #(do
                                (swap! company-sectors assoc-in [company sector] (-> % .-target .-value js/Number))
                                (POST "/update-company-sectors" {:params {:company-sectors @company-sectors}}))}]]
          [:td
           [:input {:type "button"
                    :value "X"
                    :on-click #(do
                                 (swap! company-sectors core/dissoc-in [company sector])
                                 (POST "/update-company-sectors" {:params {:company-sectors @company-sectors}}))}]]])
       [company-new-sector-row company]]]]))

(defn sector-table []
  [:table
    [:thead
     [:tr
      [:th "Sector"] [:th "Cap Rate %"]]]
    [:tbody
     (for [[sector cap-rate] (sort-by first @economic-sectors)]
       ^{:key sector}
       [:tr
        [:td sector]
        [:td
         [:input {:type "number"
                  :default-value cap-rate
                  :on-blur #(do
                              (swap! economic-sectors assoc sector (-> % .-target .-value js/Number))
                              (POST "/update-economic-sectors" {:params {:economic-sectors @economic-sectors}}))
                  }]]
        [:td
         [:input {:type "button"
                  :value "X"
                  :on-click #(if-let [company (some (fn [[company sectors]]
                                                      (if (get sectors sector) company)) @company-sectors)]
                               (js/alert (core/format "Remove %s from %s first." sector company))
                               (do
                                 (swap! economic-sectors dissoc sector)
                                 (POST "/update-economic-sectors" {:params {:economic-sectors @economic-sectors}})))}]]
        ])
     [:tr
      [:td
       [:input {:type "text"
                :value @new-sector
                :on-change #(reset! new-sector (-> % .-target .-value))}]]
      [:td
       [:input {:type "number"
                :value @new-cap-rate
                :on-change #(reset! new-cap-rate (-> % .-target .-value))}]]
      [:td
       [:input {:type "button"
                :value "Create"
                :on-click #(when (and (not= "" @new-sector) (not= 0 @new-cap-rate))
                             (swap! economic-sectors assoc @new-sector (js/Number @new-cap-rate))
                             (reset! new-sector "")
                             (reset! new-cap-rate 0)
                             (POST "/update-economic-sectors" {:params {:economic-sectors @economic-sectors}}))}]]]]])

(defn content []
  [:div
   [:h3 "Sectors"]
   [sector-table]
   [:h3 "Companies"]
   (for [company @companies]
     ^{:key company}
     [company-table company])
   ])


(defn main []
  (core/page content))
