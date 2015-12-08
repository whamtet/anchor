(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            ))

(def click-count (r/atom 0))
(def x (r/atom false))

(defn counting-component []
  [:div
   [:input {:type "checkbox"
            :checked @x
            :on-change #(swap! x not)}]
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! click-count inc)}]])

(defn ^:export main []
  (core/page counting-component))
