(ns anchor.index
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reagent.impl.template :as temp]
   [anchor.core :as core]
   [anchor.params :as params]
   [ajax.core :refer [GET POST]]
   )
  (:require-macros
   [anchor.macros :as macros])
  )

(defn date-value [[s]]
  (let [[year month] (map int (.split s " "))]
    (- 0 year (/ month 12))))

;(def rc-dialog (js/require "rc-dialog"))
(def new-company-state (atom :closed))
(def new-company-name (atom ""))
(def yahoo-finance-id (atom ""))
(def new-company-website (atom ""))

(defn favicon
  ([] (favicon @new-company-website))
  ([url]
   (let [
         frags (take 3 (.split url "/"))
         ]
     (if (= 3 (count frags))
       (str (apply str (interpose "/" frags)) "/favicon.ico")))))

(defn create-company2 [favicon?]
  (let [
        new-company {"name" @new-company-name
                     "website" @new-company-website
                     "favicon?" favicon?}
        ]
    (swap! params/company-metadata
           assoc @yahoo-finance-id new-company)
    (POST "/update-company-metadata" {:params {:company-metadata @params/company-metadata}})
    (reset! new-company-state :closed)
    (reset! new-company-name "")
    (reset! yahoo-finance-id "")
    (reset! new-company-website "")))

(defn create-company []
  (cond
   (or (= "" @new-company-name) (= "" @yahoo-finance-id))
   (reset! new-company-state :verifying1)
   (favicon)
   (reset! new-company-state :loading-website)
   :default
   (create-company2 false)
   ))

(defn grid-row [row]
  (let [
        m (count row)
        numerator (if (= 1 m) 2 1)
        denominator (max 2 m)
        class (core/format "grid__col grid__col--%s-of-%s" numerator denominator)
        ]
    (map-indexed
     #(with-meta [:div {:class class} %2] {:key %1})
     row)))

(defn grid-rows [& rows]
  [:div {:class "grid"}
   (map-indexed
    #(with-meta (grid-row %2) {:key %1})
    rows)])

(defn grid-rows2 [& rows]
  [:div {:class "grid"}
   (map-indexed
    (fn [i [ratio item]]
      (with-meta
        (let [
              [numerator denominator] (.split (name ratio) ":")
              class (core/format "grid__col grid__col--%s-of-%s" numerator denominator)
              ]
          [:div {:class class} item])
        {:key i}))
    rows)])

(defn spanify [x]
  (if
   (or (number? x) (string? x)) [:span x] x))

(defn keyed-list [& x]
  (map-indexed #(with-meta (spanify %2) {:key %1}) x))

(defn trim [x] (.trim x))

(defn new-company-div []
  (case @new-company-state
    (:entering1 :verifying1)
    (grid-rows
     [[:h2 "New Company"]]
     ["Yahoo Finance ID "
      [:input {:type "input"
               :value @yahoo-finance-id
               :on-change #(reset! yahoo-finance-id (-> % .-target .-value))
               :on-blur #(swap! yahoo-finance-id trim)
               :style {:background-color
                       (if (= ["" :verifying1] [@yahoo-finance-id @new-company-state])
                         "LightSalmon")}}]]
     ["Company Name "
      [:input {:type "input"
               :value @new-company-name
               :on-change #(reset! new-company-name (-> % .-target .-value))
               :on-blur #(swap! new-company-name trim)
               :style {:background-color
                       (if (= ["" :verifying1] [@new-company-name @new-company-state])
                         "LightSalmon")}}]]
     ["Website (optional) "
      [:input {:type "url"
               :value @new-company-website
               :on-change #(do
                             (reset! new-company-website (-> % .-target .-value)))
               :on-blur #(swap! new-company-website trim)
               ;:style {:background-color
               ;        (if @url-error? "LightSalmon")}
               }]]
     [""]
     [(keyed-list
       [:input {:type "button"
                :value "Create"
                :on-click create-company}]
       " "
       [:input {:type "button"
                :value "Cancel"
                :on-click #(reset! new-company-state :closed)}])]
     (if (= :verifying1 @new-company-state)
        [[:div {:style {:color "red"}} "Check Errors"]]))
    :loading-website
    [:div
     [:img {:src "/loading_spinner.gif"}]
     [:img {:src (favicon)
            :on-load #(create-company2 true)
            :on-error #(create-company2 false)
            :style {:display "none"}}]
     ]
    [:div]
    ))

(defn new-company-dialog []
  [:div {:style {
                 :visibility (if (= :closed @new-company-state) "hidden" "visible")
                 :position "fixed"
                 :left 0
                 :top 0
                 :width "100%"
                 :height "100%"
                 :background-color "rgba(236, 237, 237, 0.8)"
                 :z-index 1000
                 }}
   [:div {:style {
                  :width 500
                  :margin "100px auto"
                  :background-color "white"
                  :border "1px solid black"
                  :padding 15
                  :text-align "center"
                  }}
    [new-company-div]]])

(defn report-row [yahoo-id reporting-period year month starting-year starting-month]
  [:div
   [:a {:href (core/url "/report" {:company yahoo-id :reporting-period reporting-period})
        :target "_blank"}
    reporting-period]
   ])

(defn company-div [yahoo-id name website favicon?]
  (grid-rows2
   [:2:2
    [:a {:href website :target "_blank"}
     [:h4 (if favicon?
            [:img {:src (favicon website)}])
      " " name]]]
   [:1:5
    [:a {:href (core/url "/program-graph" {:company yahoo-id})
          :target "_blank"}
      [:img {:src "/GraphvizLogo.png" :style {:max-width 100}}]]]
   [:4:5
    (for [[reporting-period {:keys [year month starting-year starting-month]}]
          (sort-by date-value (get @params/report-metadata yahoo-id))]
      ^{:key reporting-period}
      [report-row yahoo-id reporting-period year month starting-year starting-month])]
   ))

(defn content []
  [:div
   [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]
   (for [[yahoo-id {:strs [name website favicon?]}] @params/company-metadata]
     ^{:key yahoo-id}
     [company-div yahoo-id name website favicon?])
   [:div {:class "grid"}
    [:div {:class "grid__col grid__col--3-of-5 grid__col--centered center"}
     [:a {:class "butt"
          :href "javascript:void(0)"
          :on-click #(reset! new-company-state :entering1)
          } "Add Company"]]]
   [new-company-dialog]
   ])

(defn main []
  ;  (js/$ #(core/snippet new-company-dialog "tiantian"))
  (core/page content)
  )
