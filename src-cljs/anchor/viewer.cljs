(ns anchor.viewer
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [crate.core :as crate]
   ))

(def field (atom nil))
(def show-metadata? (atom false))

(defn elements-on-page [page-index]
  (array-seq
   (js/$ (core/format "#pageContainer%s > .textLayer > div" page-index))))

(defn set-field [input]
  (reset! field input))

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
           :on-click #(set-field input)
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
            :on-click #(reset! show-metadata? false)}]])


(defn content []
  [metadata-form]
  [:div
   {:style {:background-color "white"
            :width "18%"
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

(defn click-div [page element-num subelement-num word]
  (let [
        {negative? "negative?" :as x} (get-in @report-values [@field (str page) (str element-num) (str subelement-num)])
        ]
    (cond
     negative?
     (swap! report-values core/dissoc-in-all [@field (str page) (str element-num) (str subelement-num)])
     x
     (swap! report-values assoc-in [@field (str page) (str element-num) (str subelement-num) "negative?"] true)
     :default
     (swap! report-values assoc-in [@field (str page) (str element-num) (str subelement-num)] {"value" word "negative?" false}))
    (update-report-values)
    ))

(defn has-num? [word]
  (re-find #"\d" word))

(defn snippetlet [page-num element-num subelement-num word]
  (let [
        {:strs [value negative?]} (get-in @report-values [@field (str page-num) (str element-num) (str subelement-num)])
        ]
    [:span
     (if (has-num? word)
       {:style {:background-color (if value "white")
                :color (cond negative? "red" value "green")}
        :on-click #(click-div page-num element-num subelement-num word)}
       {}
       ) word]))

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

(defn main []
  (reset! field (first @inputs))
  (js/document.addEventListener "textlayerrendered" #(-> % .-detail .-pageNumber add-click-listeners))
  (js/$ #(js/loadFile (core/format "/reports/%s/%s.pdf" @company @reporting-period)))
  (core/page content))
