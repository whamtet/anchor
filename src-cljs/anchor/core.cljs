(ns anchor.core
  (:require [reagent.core :as reagent]
            [goog.string :as gstring]
            [cljs.reader :as reader]
            ))

(def ^:export read-string reader/read-string)
(def ^:export atom reagent/atom)

(enable-console-print!)

(def space (gstring/unescapeEntities "&nbsp;"))

(def ^:export bind-variable
  (js/Function. "klass" "k"
                "
                var value = document.getElementById(k).value;
                anchor.params['set_' + k](anchor.core.read_string(value))
                "))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))

(defn page [contents]
  (reagent/render-component
   [contents]
   (js/document.getElementById "content")))

(defn ^:export p [x]
  (prn @x))

(defn key-filter [f m]
  (into {}
        (for [[k v] m :when (f k)] [k v])))

(defn str-contains? [a b]
  (not= -1 (.indexOf a b)))

(defn format [s & subs]
  (loop [
         s s
         current (first subs)
         todo (rest subs)
         ]
    (if (and (str-contains? s "%s") current)
      (recur (.replace s "%s" current) (first todo) (rest todo))
      s)))

(defn dissoc-in [m v]
  (update-in m (pop v) dissoc (peek v)))

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

(defn replace-all [a b c]
  (loop [a a]
    (if (= -1 (.indexOf a b)) a (recur (.replace a b c)))))

(defn safe-name [x]
  (if x (name x) ""))

(defn url [host m]
  (str (apply str host "?" (interpose "&" (map (fn [[k v]] (str (safe-name k) "=" (replace-all (safe-name v) " " "%20"))) m)))))

(defn link-to [url2 m new-window?]
  (if new-window?
    (.open js/window (url url2 m) "_blank")
    (set! (.-location js/document) (url url2 m))))

(defn min-by [f [item & rest]]
  (first
   (reduce (fn [[x1 y1] x2]
             (let [y2 (f x2)]
               (if (< y1 y2)
                 [x1 y1]
                 [x2 y2])))
           [item (f item)] rest)))

(defn max-by [f s]
  (min-by #(- (f %)) s))

(defn recompose-map
  ([vs] (recompose-map {} vs))
  ([m vs]
   (reduce (fn [m v]
             (assoc-in m (pop v) (peek v))) m vs)))
