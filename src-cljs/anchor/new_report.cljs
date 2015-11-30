(ns anchor.new-report
  (:require
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [anchor.core :as core]
   ))

(def year (atom 2015))
(def month (atom 1))
(def starting-year (atom 2015))
(def starting-month (atom 1))
(def url (atom ""))

(def false-alert (fn [message]
                      (js/alert message)
                      false))

(defn submit []
  (let [
        t1 (+ @starting-year (/ @starting-month 12))
        t2 (+ @year (/ @month 12))
        file-val (.val (js/$ "#file"))
        ]
    (cond
     (<= t2 t1) (false-alert "Check Dates")
     (and (= "" @url) (not (.endsWith file-val ".pdf"))) (false-alert "Select PDF or URL"))))

(defn content []
  [:div
   [:h3 "New Report for " @company]
   [:form {:method "POST" :action "/new-report"
           :on-submit submit :enc-type "multipart/form-data"
           }
    [:input {:type "hidden" :name "company" :value @company}]
    "Factor "
    [:select {:default-value "k"
              :name "factor"}
     [:option "1"]
     [:option "k"]
     [:option "M"]] [:br]
    "Starting Year "
    [:select {:value @starting-year
              :name "starting-year"
              :on-change #(reset! starting-year (-> % .-target .-value js/Number))
              }
     (for [year (range 2000 2020)]
       ^{:key year}
       [:option year])]
    " Starting Month "
    [:select {:value @starting-month
              :name "starting-month"
              :on-change #(reset! starting-month (-> % .-target .-value js/Number))
              }
     (for [month (range 1 13)]
       ^{:key month}
       [:option month])]
    " Year "
    [:select {:value @year
              :name "year"
              :on-change #(reset! year (-> % .-target .-value js/Number))
              }
     (for [year (range 2000 2020)]
       ^{:key year}
       [:option year])]
    " Month"
    [:select {:value @month
              :name "month"
              :on-change #(reset! month (-> % .-target .-value js/Number))
              }
     (for [month (range 1 13)]
       ^{:key month}
       [:option month])] [:br][:br]
    "Upload Form"
    [:input {:type "file"
             :name "file"
             :id "file"
             }] [:br][:br]
    [:b "Or"] [:br][:br]
    [:input {:type "text"
             :value @url
             :name "url"
             :style {:width 800}
             :on-change #(reset! url (-> % .-target .-value))}] [:br][:br]
    [:input {:type "submit"}]]])

(defn main []
  (core/page content))
