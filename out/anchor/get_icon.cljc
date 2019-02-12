(ns anchor.get-icon
  ^{:doc "Get icon from html <link> metadata"}
  (:require
   [anchor.util :as util]
   #?(:cljs [redlobster.promise :as promise])
   #?(:cljs [redlobster.io :as io])
   #?(:cljs [clojure.string :as string])
   )
  #?(:cljs
     (:require-macros
      [redlobster.macros :refer [let-realised promise]]))
  )

;(defonce s (slurp "http://www.linkreit.com/EN/Pages/default.aspx"))

(defn- join-paths [paths1 [starter & rest :as paths2]]
  (if (= ".." starter)
    (recur (butlast paths1) rest)
    (apply str (interpose "/" (concat paths1 paths2)))))

(defn absolutize
  "Transform base url and path into absolute url.
  If path is already absolute do nothing.
  "
  [url path]
  (let [
        url (.trim url)
        path (.trim path)
        ]
    (cond
     (string/starts-with? path "http") path
     (string/starts-with? path "/")
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

(defn- get-link
  "find <link> tag"
  [url s]
  (let [
        find-group #(second (re-find %1 %2))
        rel (find-group #"rel=\"(.+?)\"" s)
        href (find-group #"href=\"(.+?)\"" s)
        ]
    (if (some-> rel (.split " ") last .toLowerCase (= "icon"))
      (absolutize url href))))

#?(:clj
   (defn get-icon
     "Get icon from html <link> metadata"
     [url]
     (let [
           s (slurp url)
           links (re-seq #"<link .+?>" s)
           icon-url (some #(get-link url %) links)
           ]
       icon-url)))

#?(:cljs
   (defn get-icon
     "Get icon from html <link> metadata"
     [url]
     (let [s (io/slurp url)]
       (promise/timeout s 10000)
       (promise
        (promise/on-realised
         s
         #(let [links (re-seq #"<link .+?>" %)
                icon-url (some (fn [x] (get-link url x)) links)]
            (realise icon-url))
         realise)))))
