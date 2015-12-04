(ns anchor.report
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [crate.core :as crate]
   ))

(def osx (atom true))

(defn page [& contents]
  (let [
        page-height (if @osx 875 940)
        page-width (if @osx 1250 1355)
        ]
    [:div {:style
           (core/format "width: %spx; height: %spx; max-height: %spx;
                        position: relative;
                        " page-width page-height page-height)
           }
     [:div {:style "font-size: 13px;"}
      [:div {:style "position: absolute; right: 0px; bottom: 0px;" :class "page-enumeration"}]
      [:div {:style "position: absolute; left: 0px; bottom: 0px; white-space: nowrap;"} @timestamp]
      ]
     contents]))

(defn disp-num [x]
  (->> x
       str
       reverse
       (partition-all 3)
       (interpose [","])
       (apply concat)
       reverse
       (apply str)))

(defn disp-percent [x]
  (-> x (* 100) (.toFixed 0)))

(defn table []
  [:table
   [:thead
    [:tr
     (map #(vector :th %) ["Company" "Discount to Fair Value" "Discount to NAV" "Cash" "Net Income" "Market Cap"])]]
   [:tbody
    (for [[company {:strs [fair-value-discount nav-discount cash net-income market-cap]}]
          (sort-by (fn [[_ {x "fair-value-discount"}]] x) @values)]
      [:tr
       [:td company]
       [:td (disp-percent fair-value-discount)]
       [:td (disp-percent nav-discount)]
       [:td (disp-num cash)]
       [:td (disp-num net-income)]
       [:td (disp-num market-cap)]])
    ]])

(defn content []
  (page (table)))

(defn main []
  (.replaceWith (js/$ "#content")
                (crate/html (content))))
