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

(def mongo-addr (System/getenv "ANCHOR_MONGO_PORT_27017_TCP_ADDR"))
(if-not mongo-addr (println "Warning no mongo-addr"))

(defonce conn (mg/connect {:host (or mongo-addr "127.0.0.1")
                           :port 27017}))
(defonce db (mg/get-db conn "db"))

;;a database backed atom
#_(defmacro dbatom [sym s]
  `(do
     (defonce ~sym (atom (map-unescape (:data (mc/find-map-by-id db ~s ~s)))))
     (defn ~(symbol (str "set-" sym)) []
       (mc/update db ~s {:_id ~s} {"$set" {:data (map-escape @~sym)}} {:upsert true}))
     (defn ~(symbol (str "get-" sym)) []
       (reset! ~sym (map-unescape (:data (mc/find-map-by-id db ~s ~s)))))
     ))

(defn set-db [s data]
  (mc/update db s {:_id s} {"$set" {:data (map-escape data)}} {:upsert true}))
(defn get-db [s]
  (map-unescape (:data (mc/find-map-by-id db s s))))
(defn swap-db [s f & args]
  (set-db s (apply f (get-db s) args)))
