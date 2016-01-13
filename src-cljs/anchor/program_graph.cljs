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

(def field (atom nil))
(def positions (cljs.core/atom nil))

(def mobile-safari? (let [s js/window.navigator.userAgent]
                      (and (string/includes? s "Mobile") (string/includes? s "Safari"))))

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
                 (<= (js/Math.log (js/Math.abs value)) 4.605170185988092)
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

      [:g (assoc m-g :on-click on-click :style {:pointer-events "all"} :id field) ;[:title (@equations text1)]
       [:ellipse (assoc m-ellipse :fill fill)] [:text m-text1 text1] [:text m-text2 value]])
    item))

(defn close-dialog []
  (let [
        ]
    (POST "/update-manual-values" {:params {:manual-values (core/value-map js/Number @params/manual-values) :company @params/company}
                                   :handler #(reset! params/values %)
                                   })
    (reset! field nil)))

(defn open-dialog [phield]
  (println "opening" phield)
  (reset! field phield))

(defn dialog []
  (let [
        value (get @params/manual-values @field)
        title (string/replace @field "-" " ")
        ]
    (println "okok")
    [:div {:id "dialog"}
     [:b title]
     [:div
      [:input {:type "radio" :name "rad" :checked (not value) :on-change #(swap! params/manual-values dissoc @field)}] "Default" [:br]
      [:input {:type "radio" :name "rad" :checked (boolean value) :on-change #(swap! params/manual-values assoc @field "")}] "Override" [:br]
      [:input {:type "number" :value (or value "") :on-change #(swap! params/manual-values assoc @field (-> % .-target .-value))}] [:br]
      [:input {:type "button" :on-click close-dialog :value "Close"}]]]))

#_(defn dialog-wrapper [[left top]]
  [:div {:style {
                 :position "fixed"
                 :left 0
                 :top 0
                 :width "100%"
                 :height "100%"
                 :background-color "rgba(236, 237, 237, 0.8)"
                 :z-index 1000
                 }}
   [:div {:style {
                  :width 200
;                  :margin-left left
;                  :margin-top top
;                  :margin "200px auto"
                  :position "relative"
                  :left left
                  :top top
                  :background-color "white"
                  :border "1px solid black"
                  :padding 15
                  :text-align "center"
                  }
          :id "dialog"
          }
    [dialog]]])

(defn content []
  (let [
        svg (walk/postwalk clean-vector @params/graph)
        svg (update-in svg [1] merge {:viewBox "0 0 2200 700" :width nil :height nil})
        ]
    (println (get svg 1))
    [:div
     [popups/popup 0]
     legend
     (if @field
       #_[dialog-wrapper (@positions @field)]
       [core/dialog 200 200 dialog]
       )
     svg
     ]))

(defn print-widths [element]
  (when element
    (println (.width (js/$ element)))
    (recur (.-parentElement element))))

(defn ^:export main []
  (core/add-css "/style.css")
  (core/page
   content)
  (if mobile-safari?
    (doseq [node @params/nodes]
      (set! (.-onclick (js/document.getElementById node)) (fn []))))
  (reset! positions
          (into {}
                (for [node @params/nodes]
                  (let [
                        offset (.offset (js/$ (str "#" node)))
                        ]
                    [node [(.-left offset) (.-top offset)]])))))
