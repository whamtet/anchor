(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            [reagent.core :as reagent :refer [atom]]
            [ajax.core :refer [GET POST]]
            ))

(POST "/mirror" {:params {:p "hi"}
                 :handler prn})
