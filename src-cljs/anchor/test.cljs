(ns anchor.test
  (:require [reagent.core :as r]
            [anchor.core :as core]
            ))

(-> a .-b .-c)


(defn ^:export main []
  (core/page counting-component))
