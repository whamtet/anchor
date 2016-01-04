(ns anchor.program-graph
  (:require
   [anchor.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [clojure.walk :as walk]
   [anchor.params :as params]
   [anchor.popups :as popups]
   [clojure.string :as string]
   ))

(defn subitem? [a b]
  (cond
   (and (map? a) (map? b))
   (every? #(subitem? (a %) (b %)) (keys a))
   (and (coll? a) (coll? b))
   (every? identity (map subitem? a b))
   :default
   (= a b)))

(def colors {"Calculated" "#ffffff"
             "Automatic" "#1e90ff"
             "Manual Override" "#fffacd"
             "Output" "#ff66ff"
             "Data Entry" "#ffb6c1"})

(def legend
  [:div {:style {:position "absolute"
                 :margin-left 320
                 :margin-top -200
                 :border "1px solid black"
                 :padding 10
                 }}
   [:b "Key"]
   [:table
    [:tbody
     (for [[color code] colors]
       ^{:key color}
       [:tr
        [:td color]
        [:td [:div {:style {:width 10
                            :height 10
                            :background-color code
                            :border "1px solid black"
                            }}]]])]]])

(defn clean-vector [item]
  (if (subitem? [:g {:class "node"}] item)
    (let [
          [_g m-g [_ m-ellipse] [_ m-text1 text1] [_ m-text2 text2]] item
          field (core/replace-all text1 " " "-")
          value (get @params/values field)
          value (cond
                 (not (number? value)) (str value)
                 (zero? value) 0
                 (<= (js/Math.log10 (js/Math.abs value)) 2)
                 (if (integer? value)
                   value
                   (.toFixed value 3))
                 :default
                 (.toExponential value 2))
          on-click #(open-dialog field)
          fill (colors
                (cond
                 (get @params/manual-values field) "Manual Override"
                 (@params/final-output field) "Output"
                 (@params/automatic-input field) "Automatic"
                 (@params/manual-input field) "Data Entry"
                 :default "Calculated"))
          ]
      [:g (assoc m-g :on-click on-click) ;[:title (@equations text1)]
       [:ellipse (assoc m-ellipse :fill fill)] [:text m-text1 text1] [:text m-text2 value]])
    item))

(def field (atom nil))

(defn close-dialog []
  (let [
        ]
    (POST "/update-manual-values" {:params {:manual-values (core/value-map js/Number @params/manual-values) :company @params/company}
                                   :handler #(reset! params/values %)
                                   })
    (reset! field nil)))

(defn open-dialog [phield]
  (reset! field phield))

(defn dialog []
  (let [
        value (get @params/manual-values @field)
        title (string/replace @field "-" " ")
        ]
    [:div
     [:b title]
     [:div
      [:input {:type "radio" :name "rad" :checked (not value) :on-change #(swap! params/manual-values dissoc @field)}] "Default" [:br]
      [:input {:type "radio" :name "rad" :checked (boolean value) :on-change #(swap! params/manual-values assoc @field "")}] "Override" [:br]
      [:input {:type "number" :value (or value "") :on-change #(swap! params/manual-values assoc @field (-> % .-target .-value))}] [:br]
      [:input {:type "button" :on-click close-dialog :value "Close"}]]]))

(defn content []
  (let [
        svg (walk/postwalk clean-vector @params/graph)
        svg (assoc-in svg [1 :viewBox] "300 0.00 3000 1100")
        ]
    [:div
     [popups/popup 0]
     legend
     (if @field
       [core/dialog 200 200 dialog])
     svg
     ]))

(defn ^:export main []
  (core/page
   content))
