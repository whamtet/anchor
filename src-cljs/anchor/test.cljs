(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            [reagent.core :as reagent :refer [atom]]
            ))

;(def react-dom (js/require "react-dom"))
;(def rc-slider (js/require "rc-slider"))
;(def slider (.createElement js/React rc-slider #js{:value 30}))
(def ^:export v (atom 30))

(defn content []
  [:div "hi"
        [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]
   (.createElement js/React rc-slider #js{:value @v :onChange #(reset! v %)})
   ])

(defn content2 []
  [:div "hi"])

(defn ^:export main []
  (core/page content2)
  )
