(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            [reagent.core :as reagent :refer [atom]]
            ))

(def react-dom (js/require "react-dom"))
(def rc-slider (js/require "rc-slider"))
;(def slider (.createElement js/React rc-slider #js{:value 30}))
(def ^:export v (atom 30))

(defn content []
  [:div "hi"
        [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]
   (.createElement js/React rc-slider #js{:value @v :onChange #(reset! v %)})
   ])

(defn get-scripts [[script & rest] f]
  (if script
    (js/$.getScript script #(get-scripts rest f))
    (f)))

(defn ^:export main []
  #_(js/$.getScript "node_modules/react-slider/react-slider.js"
                  #(core/page content))
  ;  (.render js/ReactDOM slider container)
  (core/page content)
  ;(core/page2 slider)
  ;(.render react-dom (.createElement js/React rc-slider) (js/document.getElementById "content"))
  )
