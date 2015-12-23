(ns anchor.get-icon
  (:require
   [anchor.util :as util]
   #?(:cljs [redlobster.promise :as promise])
   #?(:cljs [redlobster.io :as io])
   )
  #?(:require-macros
     [redlobster.macros :refer [let-realised]])
  )

;(defonce s (slurp "http://www.linkreit.com/EN/Pages/default.aspx"))

(defn join-paths [paths1 [starter & rest :as paths2]]
  (if (= ".." starter)
    (recur (butlast paths1) rest)
    (apply str (interpose "/" (concat paths1 paths2)))))

(defn absolutize [url path]
  (let [
        url (.trim url)
        path (.trim path)
        ]
    (cond
     (.startsWith path "http") path
     (.startsWith path "/")
     (join-paths (take 3 (.split url "/")) (rest (.split path "/")))
     :default
     (let [
           paths1 (.split url "/")
           frag (last paths1)
           paths1 (if
                    (and
                     (> (count paths1) 3)
                     (or (empty? frag) (util/str-contains? frag ".")))
                    (butlast paths1)
                    paths1)
           ]
       (join-paths paths1 (.split path "/"))))))

(defn get-link [url s]
  (let [
        find-group #(second (re-find %1 %2))
        rel (find-group #"rel=\"(.+?)\"" s)
        href (find-group #"href=\"(.+?)\"" s)
        ]
    (if (some-> rel (.split " ") last .toLowerCase (= "icon"))
      (get-images/absolutize url href))))

#?(:clj
  (defn get-icon [url]
  (let [
        s (slurp url)
        links (re-seq #"<link .+?>" s)
        icon-url (some #(get-link url %) links)
        ]
    icon-url)))

#?(:cljs
   (defn get-icon [url]
     (let-realised [s (io/slurp-http url)]
                   (let [
                         links (re-seq #"<link .+?>" @s)
                         icon-url (some #(get-link url %) links)
                         ]
                     icon-url))))

(def get-icon2 (memoize get-icon))
