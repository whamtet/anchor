(ns anchor.index
  (:require
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   [anchor.params :as params]
   [ajax.core :refer [GET POST]]
   [anchor.slideshow :as slideshow]
   [anchor.popups :as popups]
   [clojure.string :as string]
   )
  )

(defn date-value [[s]]
  (let [[year month] (map int (.split s " "))]
    (- 0 year (/ month 12))))

(def new-company-state (atom :closed))
(def new-company-name (atom ""))
(def yahoo-finance-id (atom ""))
(def new-company-website (atom ""))

(defn favicon
  ([] (favicon @new-company-website))
  ([url]
   (let [
         url (if (string/starts-with? url "http") url (str "http://" url))
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
    (POST "/add-company" {:params {:name @new-company-name
                                   :website @new-company-website
                                   :favicon? favicon?
                                   :yahoo-finance-id @yahoo-finance-id}
                          :handler #(reset! params/company-metadata %)})
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
      (let [
            [numerator denominator] (.split (name ratio) ":")
            class (core/format "grid__col grid__col--%s-of-%s" numerator denominator)
            ]
        (with-meta
          [:div {:class class} item]
          {:key i})))
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



(defn delete-report [company reporting-period]
  (when (js/confirm (core/format "Delete %s %s ?" company reporting-period))
    (swap! params/report-metadata core/dissoc-in [company reporting-period])
    (POST "/delete-report" {:params {:company company :reporting-period reporting-period}})))

(defn report-line [company reporting-period year month starting-year starting-month]
  (let [
        time-gap (- (* 2020 12) month (* year 12))
        time-width (inc (- (+ month (* year 12)) starting-month (* starting-year 12)))
        scale 4
        ]
    [:div
     [:a {:href (core/url "/report" {:company company :reporting-period reporting-period})
          :target "_blank"}
      reporting-period] " "
     [:input {:type "button"
              :value "Delete"
              :on-click #(delete-report company reporting-period)}]
     (if (= "ABP.AX" company) [popups/popup 1])
     [:div {:style {:width (- (* scale time-width) 2)
                    :left (* scale time-gap)
                    :position "relative"
                    :height 25
                    :top -24
                    :border "1px solid black"
                    :background-color "rgba(123, 137, 148, 0.117647)"
                    }}]]))

(def network-hover-company (atom nil))

(defn company-div [yahoo-id]
  (let [
        {:strs [name website favicon? favicon-link]} (get @params/company-metadata yahoo-id)
        reports (get @params/report-metadata yahoo-id)
        num-reports (count reports)
        ]
    (grid-rows2
     [:2:2
      [:a {:href website :target "_blank"}
       [:h4
        (cond
         favicon-link [:img {:src favicon-link :style {:max-width 30}}]
         favicon? [:img {:src (favicon website) :style {:max-width 30}}])
        " " name
        ]]]
     [:2:2 ""]
     ;[:1:5 ""]
     #_[:4:5
      (if (= 1 num-reports)
        [:h4 "1 Report"]
        [:h4 num-reports " Reports"])]
     [:1:5
      (list
       ^{:key "a"}
       [:a {:href (core/url "/program-graph" {:company yahoo-id})
            :target "_blank" :class "network-link"
            :title "View Company Model"
            }]
       (if (= "ABP.AX" yahoo-id)
         ^{:key "b"}
         [popups/popup 0]))
      ]
     [:4:5
      (concat
       (for [[reporting-period {:strs [year month starting-year starting-month]}]
             (sort-by date-value reports)]
         ^{:key reporting-period}
         [report-line yahoo-id reporting-period year month starting-year starting-month])
       [^{:key "fizz"} [:a {:href "/bberg" :target "_blank"} "Bloomberg Data"]])
      ]
     [:1:5 ""]
     [:4:5
      (keyed-list
       "Report Combination "
       [:input {:type "text"
                :default-value (get @params/period-coefficients yahoo-id)
                :on-blur #(do
                            (swap! params/period-coefficients assoc yahoo-id (-> % .-target .-value))
                            (POST "/update-period-coefficients" {:params {:period-coefficients @params/period-coefficients}}))
                }]
       " "
       [:input {
                :type "button"
                :value "New Report"
                :on-click #(core/link-to "/new-report" {:company yahoo-id} true)
                }]
       )
      ]
     [:2:2 ""]
     [:2:2 [:hr]]
     )))

(defn content []
  [:div
   (for [yahoo-id (mapcat sort (vals (group-by #(-> % (.split ".") second) (keys @params/company-metadata))))]
     ^{:key yahoo-id}
     [company-div yahoo-id])
   [:div {:class "grid"}
    [:div {:class "grid__col grid__col--3-of-5 grid__col--centered center"}
     [:a {:class "butt"
          :href "javascript:void(0)"
          :on-click #(reset! new-company-state :entering1)
          } "Add Company"]]]
   (if (not= :closed @new-company-state)
     [core/dialog 500 100 new-company-div])
   (if (and @slideshow/slide (not (get @params/session "/")))
     [core/dialog 800 50 slideshow/slide-frame])
   ])

(defn ^:export main []
  (core/page content)
  (core/add-css "/style.css")
  (js/key "escape" #(reset! slideshow/slide nil)))
