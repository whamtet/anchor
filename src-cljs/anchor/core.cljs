(ns anchor.core
  (:require [reagent.core :as reagent]
            [goog.string :as gstring]
            [cljs.reader :as reader]
            ))

(defn dialog [width margin child]
  [:div {:style {
                 :position "fixed"
                 :left 0
                 :top 0
                 :width "100%"
                 :height "100%"
                 :background-color "rgba(236, 237, 237, 0.8)"
                 :z-index 1000
                 }}
   [:div {:style {
                  :width width
                  :margin (format "%spx auto" margin)
                  :background-color "white"
                  :border "1px solid black"
                  :padding 15
                  :text-align "center"
                  }}
    [child]]])

(def ^:export read-string reader/read-string)
(def ^:export atom reagent/atom)

;(set! js/window.React (js/require "react"))
;(set! js/window.ReactDOM (js/require "react-dom"))

(enable-console-print!)

(def space (gstring/unescapeEntities "&nbsp;"))

(def ^:export bind-variable
  (js/Function. "klass" "k"
                "
                var value = document.getElementById(k).value;
                f = anchor.params['set_' + k]
                if (typeof f == \"function\") {
                f(anchor.core.read_string(value))
                } else {
                console.log('Warning: could not set ' + k)
                }
                "))

(def add-script
  (js/Function. "src"
                "var s = document.createElement(\"script\");
                s.type = \"text/javascript\";
                s.src=src
                document.head.appendChild(s)"))

(def add-css
  (js/Function. "url"
                "var head = document.head, link = document.createElement('link')
                link.type = 'text/css'
                link.rel = 'stylesheet'
                link.href = url

                head.appendChild(link)"))

(defn value-map [f m]
  (zipmap (keys m) (map f (vals m))))

(defn page [contents]
  (reagent/render-component
   [contents]
   (js/document.getElementById "content")))

(defn snippet [contents id]
  (reagent/render-component
   [contents]
   (js/document.getElementById id)))

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
