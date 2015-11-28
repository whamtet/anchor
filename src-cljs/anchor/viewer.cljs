(ns anchor.viewer
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   ))

(def field (atom nil))
(def show-metadata? (atom false))

(defn color-element [element type]
  (let [style (.-style element)]
    (set! (.-backgroundColor style) (if (= :clear type) "" "white"))
    (set! (.-color style)
          ({:clear ""
            :negative "red"
            :positive "green"} type))))

(defn elements-on-page [page-index]
  (array-seq
   (js/$ (core/format "#pageContainer%s > .textLayer > div" page-index))))

(defn set-field [input]
  ;clear old fields
  (doseq [[page selected] (get @report-values @field)
          :let [
                elements (elements-on-page page)
                ]
          :when (not-empty elements)
          [index] selected]
    (color-element (nth elements (int index)) :clear))

  (reset! field input)

  ;set new fields
  (doseq [[page selected] (get @report-values @field)
          :let [
                elements (elements-on-page page)
                ]
          :when (not-empty elements)
          [index {negative? "negative?"}] selected]
    (color-element
     (nth elements (int index))
     (if negative? :negative :positive))))

(defn clear-field [to-clear]
  (swap! report-values dissoc to-clear)
  (if (= @field to-clear)
    (doseq [[page selected] (get @report-values @field)
            :let [
                  elements (elements-on-page page)
                  ]
            :when (not-empty elements)
            [index] selected]
      (color-element (nth elements (int index)) :clear)))
  (POST "/update-report-values" {:params {:company @company
                                          :reporting-period @reporting-period
                                          :report-values @report-values}}))

(defn field-row [input]
  (let [
        {t true f false}
        (group-by identity
                  (for [[page indices] (get @report-values input)
                        [index {negative? "negative?"}] indices]
                    negative?))
        num-negative (count t)
        num-positive (count f)
        ]
    [:tr
     [:td {:style {
                   :background-color (if (= input @field) "yellow" "white")
                   :border "1px solid black"
                   }
           :on-click #(set-field input)
           } input
      " "
      (if (not= 0 num-positive)
        [:span {:style {:color "green"}} "(" num-positive ")"])
      (if (not= 0 num-negative)
        [:span {:style {:color "red"}} "(" num-negative ")"])
      [:input {:type "button"
               :value "Clear"
               :on-click #(clear-field input)}]
      ]]))

(defn metadata-form []
  [:div
   [:p "Metadata"]
   "Starting Year "
   [:select {:value (get @report-metadata "starting-year")
             :on-change #(do
                           (swap! report-metadata assoc "starting-year" (-> % .-target .-value))
                           (POST "/update-report-metadata2" {:params {:report-metadata @report-metadata
                                                                      :company @company
                                                                      :reporting-period @reporting-period}}))}
    (for [year (range 2000 2020)]
      ^{:key year}
      [:option year])]
   " Starting Month "
   [:select {:value (get @report-metadata "starting-month")
             :on-change #(do
                           (swap! report-metadata assoc "starting-month" (-> % .-target .-value))
                           (POST "/update-report-metadata2" {:params {:report-metadata @report-metadata
                                                                      :company @company
                                                                      :reporting-period @reporting-period}}))}
    (for [month (range 1 13)]
      ^{:key month}
      [:option month])]
   " Factor "
   [:select {:value (get @report-metadata "factor")
             :on-change #(do
                           (swap! report-metadata assoc "factor" (-> % .-target .-value))
                           (POST "/update-report-metadata2" {:params {:report-metadata @report-metadata
                                                                      :company @company
                                                                      :reporting-period @reporting-period}}))}
    [:option "1"]
    [:option "k"]
    [:option "M"]][:br]
   [:input {:type "button"
            :value "Done"
            :on-click #(reset! show-metadata? false)}]])


(defn content []
  [metadata-form]
  [:div
   {:style {:background-color "white"
            :width "25%"
            :z-index 100000
            :position "relative"
            :padding 7
            }}
   (if @show-metadata?
     [metadata-form]
     [:div
      [:h3 @company]
      [:br]
      [:input {:type "button"
               :value "Show Metadata"
               :on-click #(reset! show-metadata? true)}]
      [:br]
      [:table
       [:thead]
       [:tbody
        (for [input @inputs]
          ^{:key input}
          [field-row input])]]])])

(defn click-div [page element-num event]
  (let [
        element (.-target event)
        text (.-textContent element)
        style (.-style element)
        {negative? "negative?" :as x} (get-in @report-values [@field (str page) (str element-num)])
        ]
    (cond
     negative?
     (do
       (color-element element :clear)
       (swap! report-values core/dissoc-in [@field (str page) (str element-num)])
       )
     x
     (do
       (color-element element :negative)
       (swap! report-values assoc-in [@field (str page) (str element-num) "negative?"] true)
       )
     :default
     (do
       (color-element element :positive)
       (swap! report-values assoc-in [@field (str page) (str element-num)] {"value" text "negative?" false})))
    (POST "/update-report-values" {:params {:company @company
                                            :reporting-period @reporting-period
                                            :report-values @report-values}})
    ))

(defn add-click-listeners [page-index]
  (let [
        existing-selectors (get-in @report-values [@field (str page-index)])
        ]
    ;get rid of that annoying opacity
    (.css (js/$ (core/format "#pageContainer%s > .textLayer" page-index)) "opacity" 1)
    (dorun
     (map-indexed (fn [i element]
                    ;color new fields already selected
                    (if-let [{negative? "negative?"} (get existing-selectors (str i))]
                      (color-element element (if negative? :negative :positive)))
                    ;listener
                    (set! (.-onclick element) #(click-div page-index i %)))
                  (elements-on-page page-index)))))

(defn main []
  (reset! field (first @inputs))
  (js/document.addEventListener "textlayerrendered" #(-> % .-detail .-pageNumber add-click-listeners))
  (js/$ #(js/loadFile "/pdf.js/web/KepREIT_AR2014_Full_Report.pdf"))
  (core/page content))
