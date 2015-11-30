(ns anchor.bberg
  (:require
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   ))

(def update-selector '{nil + + - - nil})
(def selected (atom {}))
(def field (atom nil))

(defn line-div [line]
  (let [
        line2 (core/replace-all line " " core/space)
        bberg-snippet (-> line (.split " ") butlast last)
        bberg-snippet? (and bberg-snippet (= bberg-snippet (.toUpperCase bberg-snippet)))
        selection-status (get-in @selected [@field line])
        ]
    [:div {:style
           {:color (cond
                    (= '+ selection-status) "green"
                    (= '- selection-status) "red"
                    (not bberg-snippet?) "gray")}
           :on-click #(swap! selected update-in [@field line] update-selector)
           }
     line2
     ]))

(defn section [header]
  [:div
   [:h3 (str header)]
   (for [line (.split (get @lines header) "\n")]
     ^{:key line}
     [line-div line])
   ])

(defn field-selector [phield]
  [:div {:style {:background-color (if (= phield @field) "yellow")}
         :on-click #(reset! field phield)}
   phield])

(defn field-selectors []
  [:div {:style {:width 200
                 :height 300
                 :top 10
                 :right 10
                 :position "fixed"
                 :border "1px solid black"}}
   (for [phield @fields]
     ^{:key phield}
     [field-selector phield])])

(defn content []
  [:div
   [field-selectors]
   [:h4 {:style {:color "gray"}}
    "NB: Sample Only.  Access to data requires Bloomberg License"]
   (for [header @headers]
     ^{:key header}
     [section header])])

(defn main []
  (reset! field (first @fields))
  (core/page content))
