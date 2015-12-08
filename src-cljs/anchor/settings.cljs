(ns anchor.settings
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [anchor.params :as params]
   ))

(def sorted-inputs (atom nil))
(def from (cljs.core/atom nil))
(def to (cljs.core/atom nil))

(defn rearrange []
  (when (not= @from @to)
    (let [
          cleaned (remove #(= @from %) @sorted-inputs)
          ]
      (reset! sorted-inputs
              (if (= :top @to)
                (conj cleaned @from)
                (concat
                 (take-while #(not= % @to) cleaned)
                 [@to @from]
                 (rest
                  (drop-while #(not= % @to) cleaned)))))
      (POST "/update-node-order" {:params {:node-order (zipmap @sorted-inputs (range))}})
      )))

(defn input-order []
  [:div
     [:h3 "Input Order"]
     [:table
      [:tbody
       [:tr
        [:td {
              :on-drag-over #(do
                               (.preventDefault %)
                               (reset! to :top))
              :on-drop rearrange
              }
         "Drag and Drop"
         ]]
       (for [input @sorted-inputs]
         ^{:key input}
         [:tr
          [:td
           {:style {:border "1px solid black"}
            :draggable true
            :on-drag-over #(do
                             (.preventDefault %)
                             (reset! to input))
            :on-drag-start #(reset! from input)
            :on-drop rearrange
            }
           input]])]]])

(defn input-selector [input]
  [:select {:value (get @params/node-types input "Income Statement")
            :on-change #(do
                          (swap! params/node-types assoc input (-> % .-target .-value))
                          (POST "/update-node-types" {:params {:node-types @params/node-types}}))}
   [:option "Income Statement"]
   [:option "Balance Sheet"]])

(defn input-types-selector []
  [:div
   [:h3 "Input Types"]
   [:table
    [:tbody
     (for [input @sorted-inputs]
       ^{:key input}
       [:tr
        [:td input]
        [:td
        [input-selector input]]])]]
   ])

(defn content []
  [:div
   [input-order]
   [input-types-selector]])

(defn ^:export main []
  (reset! sorted-inputs
          (if @params/node-order
            (sort-by #(@params/node-order % 0) @params/input)
            @params/input))
  (core/page content))
