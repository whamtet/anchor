(ns anchor.db)

(require '[monger.core :as mg])
(require '[monger.collection :as mc])
(require '[clojure.walk :as walk])

(defn escape [[k v]]
  [(.replace k "." "_DOT_") v])
(defn unescape [[k v]]
  [(.replace (name k) "_DOT_" ".") v])

(defn map-escape [m]
  (walk/postwalk #(if (map? %) (into {} (map escape %)) %) m))
(defn map-unescape [m]
  (walk/postwalk #(if (map? %) (into {} (map unescape %)) %) m))

(defonce conn (mg/connect))
(defonce db (mg/get-db conn "db"))

;;a database backed atom
(defmacro dbatom [sym s]
  `(do
     (defonce ~sym (atom (map-unescape (:data (mc/find-map-by-id db ~s ~s)))))
     (defn ~(symbol (str "set-" sym)) []
       (mc/update db ~s {:_id ~s} {"$set" {:data (map-escape @~sym)}} {:upsert true}))
     (defn ~(symbol (str "get-" sym)) []
       (reset! ~sym (map-unescape (:data (mc/find-map-by-id db ~s ~s)))))
     ))
