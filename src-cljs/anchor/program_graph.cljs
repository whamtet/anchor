(ns anchor.program-graph
  (:require
   [anchor.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [clojure.walk :as walk]
   [anchor.params :as params]
   ))

(defn subitem? [a b]
  (cond
   (and (map? a) (map? b))
   (every? #(subitem? (a %) (b %)) (keys a))
   (and (coll? a) (coll? b))
   (every? identity (map subitem? a b))
   :default
   (= a b)))

;; <g id="node1" class="node"><title>node21146</title>
;; <ellipse fill="#7fffd4" stroke="black" cx="5060.01" cy="-818.87" rx="122.159" ry="26.7407"/>
;; <text text-anchor="middle" x="5060.01" y="-822.67" font-family="Monospace" font-size="14.00">real_estate_premium</text>
;; <text text-anchor="middle" x="5060.01" y="-807.67" font-family="Monospace" font-size="14.00">1.23E+45</text>
;; </g>

(def colors {"calc" "#ffffff"
             "sector" "#1e90ff"
             "manual" "#fffacd"
             "combo" "#ff66ff"
             "report" "#ffb6c1"})

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
                 (get @params/manual-values field) "manual"
                 (@params/final-output field) "combo"
                 (@params/automatic-input field) "sector"
                 (@params/manual-input field) "report"
                 :default "calc"))
          ]
      [:g (assoc m-g :on-click on-click) ;[:title (@equations text1)]
       [:ellipse (assoc m-ellipse :fill fill)] [:text m-text1 text1] [:text m-text2 value]])
    item))

(defn close-dialog []
  (let [
        ]
    (POST "/update-manual-values" {:params {:manual-values (core/value-map js/Number @params/manual-values) :company @params/company}
                                   :handler #(reset! params/values %)
                                   })
    (-> "node_dialog" js/document.getElementById .close)))

(def field (atom nil))

(defn open-dialog [phield]
  (let [
        ]
    (reset! field phield)
    (-> "node_dialog" js/document.getElementById .showModal)))

(defn dialog []
  (let [
        value (get @params/manual-values @field)
        ]
    [:dialog {:id "node_dialog"
              :style {:left 0
                      :top 100
                      :position "fixed"
                      :width 200
                      }}
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
     [dialog]
     svg
     ]))

(defn ^:export main []
  (core/page
   content))
