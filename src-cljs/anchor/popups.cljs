(ns anchor.popups
  (:require
   [reagent.core :as reagent :refer [atom]]
   [ajax.core :refer [GET POST]]
   [anchor.params :as params]
   [anchor.core :as core]))

(def current (atom 0))

(def all-popups [
                 [150 -100 60 -85 -10 "/" "View Financial Model"]
                 [140 -55 50 -40 -10 "/" "Data Entry"]
                 [380 -20 505 35 230 "/program-graph" "Click Nodes to Edit Values"]
                 [200 -50 150 0 -20 "/report" "Select Input Field and Click Values on the Report.\n  Green is Positive, Red Negative"]
                 [160 -50 70 -30 -5 "/report" "Autofill Guesses Fields Based on Previous Reports."]
                 ])

(def pathname js/window.location.pathname)
(def popups (filter (fn [[x y arrow-x arrow-y rotation path]] (= pathname path)) all-popups))
(def popup-index (zipmap popups (range)))

(defn get-popup [target-i]
  (if (and (< @current (count popups)) (not (get @params/session pathname)))
    (let [
          popup (nth popups @current)
          ]
      (if (= target-i (popup-index popup)) popup))))

(defn popup [i]
  (if-let [popup (get-popup i)]
    (let [
          [x y arrow-x arrow-y rotation path text] popup
          shadow "10px 10px 5px #888888"
          ]
      (when (= i 0)
        (POST "/append-endpoint" {:params {:endpoint pathname}}))
      [:div
       [:div {:style {:margin-left arrow-x
                      :margin-top arrow-y
                      :width 100
                      :height 40
                      :position "absolute"
                      :transform (core/format "scale(0.7, 0.7) rotate(%sdeg)" rotation)
                      :z-index 999
                      }}
        [:div {:style {:width 0 :height 0 :border-top "20px solid transparent" :border-bottom "20px solid transparent"
                       :border-right "20px solid #30261b"
                       :box-shadow shadow
                       }}]
        [:div {:style {:width 80 :top 15 :left 19 :height 10 :background-color "#30261b" :position "absolute"
                       :box-shadow shadow
                       }}]]

       [:div {:style {:position "absolute"
                      :margin-left x
                      :margin-top y
                      :min-width 300
                      :z-index 1000
                      :background-color "white"
                      :border "1px solid black"
                      :border-radius 25
                      :padding 10
                      :box-shadow "10px 10px 5px #888888"
                      }}
        text
        [:input {:type "button"
                 :value "x"
                 :on-click #(swap! current inc)
                 :style {:right 10
                         :top 10
                         :position "absolute"
                         }}]
        ]])
    [:div]))
