(ns anchor.db)

(require '[monger.core :as mg])
(require '[monger.collection :as mc])

(defonce conn (mg/connect))
(defonce db (mg/get-db conn "db"))

(defmacro dbatom [sym s]
  `(do
     (defonce ~sym (atom (util/sanitize (:data (mc/find-map-by-id db ~s ~s)))))
     (defn ~(symbol (str "set-" sym)) []
       (mc/update db ~s {:_id ~s} {"$set" {:data @~sym}} {:upsert true}))
     (defn ~(symbol (str "get-" sym)) []
       (reset! ~sym (util/sanitize (:data (mc/find-map-by-id db ~s ~s)))))
     ))
