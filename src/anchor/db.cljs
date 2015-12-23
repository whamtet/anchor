(ns anchor.db)

(def db (atom {}))

(defn set-db [s data]
  (swap! db assoc s data))
(defn get-db [s]
  (get @db s))
(defn swap-db [s f & args]
  (set-db s (apply f (get-db s) args)))
