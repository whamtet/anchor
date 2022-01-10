(ns anchor.util
  (:require [clojure.walk :as walk]
            #?(:cljs [redlobster.stream :as stream])
            #?(:cljs [redlobster.promise :as promise])
            #?(:cljs [redlobster.io :refer [spit slurp]])
            #?(:cljs [cljs.reader :refer [read-string]])
            #?(:cljs cljs.nodejs)
            )
  #?(:cljs
     (:use-macros
      [redlobster.macros :only [promise defer-node waitp when-realised let-realised]]))
  #?(:cljs
     (:require-macros
      [anchor.util :as util])))

(def linux? #?(:cljs (= "linux" js/process.platform)))

(defn cumul [s]
  (reduce (fn [v i]
            (conj v (+ (peek v) i))) [(first s)] (rest s)))

;;wish to memoize promises

#?(:cljs
   (defn memoize-promise
     [f]
     (let [
           mem (atom {})
           ]
       (let-realised [s (slurp "resources/yahoo.edn")]
                     (reset! mem (read-string @s)))
       (fn [& args]
         (if-let [result (get @mem args)]
           (promise (realise result))
           (let-realised [result (apply f args)]
                         (swap! mem assoc args @result)
                         (spit "resources/yahoo.edn" (pr-str @mem))
                         @result))))))

;;wish to define let-realised proxy
#?(:clj
   (do
     (import clojure.lang.IDeref)
     (deftype SimpleRef [val]
       IDeref
       (deref [this] val))
     (defn rebind [bindings]
       (vec (mapcat
        (fn [[k v]]
          [k `(anchor.util.SimpleRef. ~v)])
        (partition 2 bindings))))
     (defmacro let-realised [bindings & forms]
       `(let ~(rebind bindings)
          ~@forms))))

#?(:cljs
   (cljs.nodejs/enable-util-print!))

(defn str-contains? [a b]
  #?(:clj
     (.contains a b)
     :cljs
     (not= -1 (.indexOf a b))))

#?(:cljs
   (defn format [s & subs]
     (loop [
            s s
            current (first subs)
            todo (rest subs)
            ]
       (if (and (str-contains? s "%s") current)
         (recur (.replace s "%s" current) (first todo) (rest todo))
         s))))

(def months ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

#?(:clj (import java.util.Calendar))
#?(:clj
   (defn timestamp []
     (let [
           cal (Calendar/getInstance)
           ]
       (format "%d:%02d %s %s %s"
               (.get cal Calendar/HOUR_OF_DAY)
               (.get cal Calendar/MINUTE)
               (.get cal Calendar/DATE)
               (months (.get cal Calendar/MONTH))
               (.get cal Calendar/YEAR))))
   :cljs
   (defn timestamp []
     (let [
           date (js/Date.)
           append #(if (< % 10) (str % "0") %)
           ]
       (format "%s:%s %s %s %s"
               (.getHours date)
               (append (.getMinutes date))
               (.getDate date)
               (months (.getMonth date))
               (+ 1900 (.getYear date))))))

#?(:clj
   (defn datestamp []
     (let [
           cal (Calendar/getInstance)
           ]
       (str (.get cal Calendar/DATE) " " (months (.get cal Calendar/MONTH)) " " (.get cal Calendar/YEAR))
       ))
   :cljs
   (defn datestamp []
     (let [
           date (js/Date.)
           ]
       (format "%s %s %s" (.getDate date) (months (.getMonth date)) (+ 1900 (.getYear date))))))

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

(def clean walk/stringify-keys)
(def ok-response {:body "ok"
                  :status 200
                  :headers {}})

(defn pr-response [x]
  {:body (pr-str x)
   :status 200
   :headers {}})

#?(:clj
   (defmacro symzip [& syms]
     `(zipmap ~(mapv name syms) ~(vec syms))))

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

#?(:clj
   (defmacro defupdate [x]
     `(~'POST ~(format "/update-%s" x) [~x]
              (db/set-db ~(str x) (util/clean ~x))
              util/ok-response)))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))
