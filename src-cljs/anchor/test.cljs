(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            ))

(defn content []
  [:div
   [:form {:method "POST" :action "/test2"
           :enc-type "multipart/form-data"
           }
    [:input {:type "file"
             :name "file-name"}]
    [:input {:type "submit"}]]])

(defn main []
  (core/page content))
