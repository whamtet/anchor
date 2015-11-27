(ns anchor.db)

(require '[monger.core :as mg])
(require '[monger.collection :as mc])
(require 'clojure.walk)

(defonce conn (mg/connect))
(defonce db (mg/get-db conn "db"))

;;a database backed atom
(defmacro dbatom [sym s]
  `(do
     (defonce ~sym (atom (clojure.walk/stringify-keys (:data (mc/find-map-by-id db ~s ~s)))))
     (defn ~(symbol (str "set-" sym)) []
       (mc/update db ~s {:_id ~s} {"$set" {:data @~sym}} {:upsert true}))
     (defn ~(symbol (str "get-" sym)) []
       (reset! ~sym (clojure.walk/stringify-keys (:data (mc/find-map-by-id db ~s ~s)))))
     ))
