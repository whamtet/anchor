(ns anchor.viewer
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   ))

(defn content []
    [:div
     {:style {:background-color "white"
              :width "10%"
              :height 100
              :z-index 100000
              :position "relative"
              :padding 7
              }}
     [:h3 "Name"]
     ])

(defn click-div [page element-num event]
  (let [
        element (.-target event)
        text (.-textContent element)
        style (.-style element)
        {negative? "negative?" :as x} (get-in @report-values [(str page) (str element-num)])
        ]
    (cond
     negative?
     (do
       (set! (.-backgroundColor style) "")
       (set! (.-color style) "")
       (swap! report-values core/dissoc-in [(str page) (str element-num)])
       )
     x
     (do
       (set! (.-color style) "red")
       (swap! report-values assoc-in [(str page) (str element-num) "negative?"] true))
     :default
     (do
       (set! (.-backgroundColor style) "white")
       (set! (.-color style) "green")
       (swap! report-values assoc-in [(str page) (str element-num)] {"value" text "negative?" false})))))

(defn add-click-listeners [page-index]
  (let [
        new-divs (js/$ (core/format "#pageContainer%s > .textLayer > div" page-index))

        ]
    ;get rid of that annoying opacity
    (.css (js/$ ".textLayer") "opacity" 1)
    (dorun
     (map-indexed (fn [i element]
                    (set! (.-onclick element) #(click-div page i %))) (array-seq new-divs)))))

(defn main []
  (js/$ #(js/loadFile "/pdf.js/web/KepREIT_AR2014_Full_Report.pdf"))
  (js/document.addEventListener "textlayerrendered" #(-> % .-detail .-pageNumber add-click-listeners))
  (core/page content))
