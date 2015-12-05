(ns anchor.util)
(require 'clojure.walk)
(require '[clojure.java.io :as io])
(import java.util.Calendar)

(defn recompose-map
  ([vs] (recompose-map {} vs))
  ([m vs]
   (reduce (fn [m v]
             (assoc-in m (pop v) (peek v)))
           m vs)))

(defn decompose-map
  ([m] (decompose-map [] m))
  ([stack m]
   (if (map? m)
     (mapcat (fn [[k v]]
               (decompose-map (conj stack k) v)) m)
     [(conj stack m)])))

(defn map-by [f s]
  (zipmap (map f s) s))

(def months ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(defn datestamp []
  (let [
        cal (Calendar/getInstance)
        ]
    (str (.get cal Calendar/DATE) " " (months (.get cal Calendar/MONTH)) " " (.get cal Calendar/YEAR))
    ))

(defn binary-slurp [f]
  (with-open [in (io/input-stream f)
              out (java.io.ByteArrayOutputStream.)]
    (io/copy in out)
    (.toByteArray out)))

(defn dissoc-in-all [m v]
  (condp = (count v)
    0 m
    1 (dissoc m (peek v))
    (let [
          cleaned (dissoc (get-in m (pop v)) (peek v))
          ]
      (if (empty? cleaned)
        (recur m (pop v))
        (assoc-in m (pop v) cleaned)))))

(defn dissoc-in [m v]
  (update-in m (pop v) dissoc (peek v)))

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

(defmacro defupdate [x]
  `(~'POST ~(format "/update-%s" x) [~x]
         (reset! ~(symbol "model" (str x)) (util/clean ~x))
         (~(symbol "model" (str "set-" x)))
         util/ok-response))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))
