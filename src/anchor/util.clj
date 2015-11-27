(ns anchor.util)
(require 'clojure.walk)

(def clean clojure.walk/stringify-keys)
(def ok-response {:body "ok"
                  :status 200
                  :headers {}})

(defn pr-response [x]
  {:body (pr-str x)
   :status 200
   :headers {}})

(defmacro symzip [& syms]
  `(zipmap ~(mapv name syms) ~(vec syms)))

(defn safe-name [x]
  (if x (name x) ""))

(defn url [host m]
  (str (apply str host "?" (interpose "&" (map (fn [[k v]] (str (safe-name k) "=" (.replace (safe-name v) " " "%20"))) m)))))

(defn redirect [host m]
  {:status 302
   :body ""
   :headers {"Location" (url host m)}})

(defn response [x]
  {:body x
   :status 200
   :headers {}})
