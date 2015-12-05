(ns anchor.viewer
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [crate.core :as crate]
   [clojure.data :as data]
   ))

(def field (atom nil))
(def menu-status (atom :default))
(def page-height (atom 700))

(def import-column (atom 2))
(def starting-page (atom 66))
(def ending-page (atom 70))

(defn set-height! []
  (reset! page-height (+ 32 (* (/ 383 366) (.height (js/$ "#viewerContainer"))))))

(defn elements-on-page [page-index]
  (array-seq
   (js/$ (core/format "#pageContainer%s > .textLayer > div" page-index))))

(defn top [element]
  (-> element .-style .-top (.replace "px" "") js/Number))
(defn left [element]
  (-> element .-style .-left (.replace "px" "") js/Number))
(defn text-content [element]
  (.-textContent element))

(defn delay-f
  "visits page, waits for load then executes"
  [page f]
  (set! js/PDFViewerApplication.page page)
  (let [
        element (js/document.getElementById (str "pageContainer" page))
        ]
    ((fn g []
       (if (.hasAttribute element "data-loaded") (f) (js/setTimeout g 100))))))

(defn nums-string
  "only nums in string"
  [s]
  (apply str (re-seq #"[0-9\.-]+" s)))

(defn selected-fields [page header-negatives]
  (let [
        elements (map vector (range) (elements-on-page page))
        grouped (group-by #(-> % second top) elements)
        ]
    (core/recompose-map
     (for [[top line] grouped
           :let [
                 cols (sort-by (fn [[i element]]
                                 (left element)) line)
                 text (.trim (.toLowerCase (apply str (interpose " " (map #(text-content (second %)) cols)))))
                 ]
           [header negative?] header-negatives
           :when (every? identity (map = text header))
           :let [
                 values (re-seq #"\S+" text)
                 ]
           :when (>= (count values) @import-column)
           :let [
                 value (nth values (- (count values) @import-column))
                 [element-num subelement-num]
                 (some identity
                       (for [[element-num element] cols
                             :when (-> element .-firstChild .-children)
                             [subelement-num subelement]
                             (map vector (range) (array-seq (.-children (.-firstChild element))))
                             :when (= value (.trim (.-textContent subelement)))]
                         [element-num subelement-num]))
                 text-layer (.-parentElement (second (first cols)))
                 page-height (.height (js/$ text-layer))
                 page-frac (+ page (/ top page-height))
                 ]]
       [(str element-num) (str subelement-num)
        {"value" (nums-string value)
         "negative?" negative?
         "page-frac" page-frac
         "left-text" (.-textContent (second (first cols)))}]))))

(defn set-fields-on-page [page]
  (doseq [[field header-negatives] @report-hints]
    (swap! report-values assoc-in [field (str page)] (selected-fields page header-negatives))))

(defn ai [page]
  (let [
        page (or page @starting-page)
        ]
    (delay-f page #(do
                     (set-fields-on-page page)
                     (if
                       (< page @ending-page) (ai (inc page))
                       (set! js/PDFViewerApplication.page @starting-page)
                       )))))

(defn update-report-values []
  (POST "/update-report-values" {:params {:company @company
                                          :reporting-period @reporting-period
                                          :report-values @report-values
                                          :report-manuals @report-manuals}}))

(defn clear-field [to-clear]
  (swap! report-values dissoc to-clear)
  (swap! report-manuals dissoc to-clear)
  (update-report-values))

(defn field-row [input]
  (let [
        {t true f false}
        (group-by identity
                  (for [[page indices] (get @report-values input)
                        [index subindices] indices
                        [subindex {negative? "negative?"}] subindices]
                    negative?))
        num-negative (count t)
        num-positive (count f)
        ]
    [:tr
     [:td {:style {
                   :background-color (if (= input @field) "yellow" "white")
                   :border "1px solid black"
                   }
           :on-click #(reset! field input)
           } input
      " "
      (if (not= 0 num-positive)
        [:span {:style {:color "green"}} "(" num-positive ")"])
      (if (not= 0 num-negative)
        [:span {:style {:color "red"}} "(" num-negative ")"])
      [:input {:type "button"
               :value "Clear"
               :on-click #(clear-field input)}] [:br]

      [:input {:type "input"
               :value (get @report-manuals input "")
               :on-change #(swap! report-manuals assoc input (-> % .-target .-value))
               :on-blur update-report-values}]
      ]]))

(defn metadata-listener [k]
  #(do
     (swap! report-metadata assoc k (-> % .-target .-value))
     (POST "/update-report-metadata2" {:params {:report-metadata @report-metadata
                                                :company @company
                                                :reporting-period @reporting-period}})))

(defn metadata-form []
  [:div
   [:p "Metadata"]
   "Starting Year "
   [:select {:value (get @report-metadata "starting-year")
             :on-change (metadata-listener "starting-year")}
    (for [year (range 2000 2020)]
      ^{:key year}
      [:option year])]
   " Starting Month "
   [:select {:value (get @report-metadata "starting-month")
             :on-change (metadata-listener "starting-month")}
    (for [month (range 1 13)]
      ^{:key month}
      [:option month])]
   " Factor "
   [:select {:value (get @report-metadata "factor")
             :on-change (metadata-listener "factor")}
    [:option "1"]
    [:option "k"]
    [:option "M"]][:br]
   [:input {:type "button"
            :value "Done"
            :on-click #(reset! menu-status :default)}]])

(defn import-form []
  [:div
   "Starting Page "
   [:input {:type "number"
            :default-value @starting-page
            :on-blur #(reset! starting-page (-> % .-target .-value js/Number))}] [:br]
   "Ending Page "
   [:input {:type "number"
            :default-value @ending-page
            :on-blur #(reset! ending-page (-> % .-target .-value js/Number))}] [:br]
   "Import Column "
   [:input {:type "number"
            :default-value @import-column
            :on-blur #(reset! import-column (-> % .-target .-value js/Number))}] [:br]
   [:input {:type "button"
            :value "Import"
            :on-click #(do
                         (reset! menu-status :default)
                         (ai nil))}]
   ])

(defn position-div [page-frac negative?]
  [:div {:style {:width 15
                 :height 3
                 :background-color (if negative? "red" "green")
                 :position "fixed"
                 :right 0
                 :top (* @page-height (/ page-frac js/PDFViewerApplication.pagesCount))}}])

(defn position-divs []
  [:div
   (for [[page indices] (get @report-values @field)
         [index subindices] indices
         [subindex {:strs [page-frac negative?]}] subindices
         :when page-frac
         ]
     ^{:key (str page index subindex)}
     [position-div page-frac negative?])])

(defn content []
  [:div
   {:style {:background-color "white"
            :width "18%"
            :z-index 100000
            :position "relative"
            :padding 7
            }}
   [position-divs]
   [:h3 @company]
   (condp = @menu-status
     :metadata
     [metadata-form]
     :import
     [import-form]
     :default
     [:div
      [:br]
      [:input {:type "button"
               :value "Show Metadata"
               :on-click #(reset! menu-status :metadata)}]
      [:br]
      [:input {:type "button"
               :value "Autofill"
               :on-click #(reset! menu-status :import)}]
      ])
   [:br]
   [:table
    [:thead]
    [:tbody
     (for [input @inputs]
       ^{:key input}
       [field-row input])]]])

(defn click-div [page element-num subelement-num word event]
  (let [
        word (nums-string word)
        {negative? "negative?" :as m} (get-in @report-values [@field (str page) (str element-num) (str subelement-num)])

        parent-div (-> event .-target .-parentElement .-parentElement)
        text-layer (.-parentElement parent-div)
        parent-height (-> parent-div .-style .-top)

        matching-elements (filter #(-> % .-style .-top (= parent-height)) (array-seq (.-children text-layer)))
        leftmost-element (core/min-by #(-> % .-style .-left (.replace "px" "") js/Number) matching-elements)
        left-text (.-textContent leftmost-element)

        x (-> parent-div .-style .-top (.replace "px" "") js/Number)
        y (.height (js/$ text-layer))
        page-frac (+ page (/ x y))
        ]
    (cond
     negative?
     (swap! report-values core/dissoc-in-all [@field (str page) (str element-num) (str subelement-num)])
     m
     (swap! report-values assoc-in [@field (str page) (str element-num) (str subelement-num) "negative?"] true)
     :default
     (swap! report-values assoc-in [@field (str page) (str element-num) (str subelement-num)] {
                                                                                               "value" word "negative?" false
                                                                                               "left-text" left-text
                                                                                               "page-frac" page-frac
                                                                                               }))
    (update-report-values)
    ))

(defn has-num? [word]
  (re-find #"\d" word))

(defn snippetlet2 [page-num element-num subelement-num word]
  (let [
        {:strs [value negative?]} (get-in @report-values [@field (str page-num) (str element-num) (str subelement-num)])
        ]
    [:span
     {:style {:background-color (if value "white")
              :color (cond negative? "red" value "green")}
      :on-click #(click-div page-num element-num subelement-num word %)}
     word]))

(defn snippetlet [page-num element-num subelement-num word]
  (if (has-num? word)
    [snippetlet2 page-num element-num subelement-num word]
    [:span word]))

(defn snippet [page-num element-num sentence]
  (let [
        words (.split sentence " ")
        ]
    [:span
     (for [[j word] (map vector (range) (butlast words))]
       ^{:key j}
       [snippetlet page-num element-num j (str word core/space)])
     [snippetlet page-num element-num (dec (count words)) (last words)]]))

(defn add-click-listeners [page-index]
  (dorun
   (map-indexed (fn [element-num element]
                  (when (has-num? (.-textContent element))
                    (reagent/render-component
                     [snippet page-index element-num (.-textContent element)]
                     element)))
                (elements-on-page page-index))))

(def render-virgin? (cljs.core/atom true))
(defn text-layer-rendered [event]
  (when @render-virgin?
    (reset! render-virgin? false)
    (set-height!)
    (core/page content))
  (-> event .-detail .-pageNumber add-click-listeners))

(defn main []
  (reset! field (first @inputs))
  (js/document.addEventListener "textlayerrendered" text-layer-rendered)
  (js/$ #(js/loadFile (core/format "/reports/%s/%s.pdf" @company @reporting-period)))
  ;keep this one!
  (.resize (js/$ js/window) set-height!)
  )

