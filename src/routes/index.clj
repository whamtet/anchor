(ns routes.index
    (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]))

(require '[ring.util.response :as response])
(require '[hiccup.page :as hiccup])

(defn map-str [f & s] (apply str (interpose "\n" (apply map f s))))

(defn state [class kvs]
  (list
   (map (fn [[k v]] [:input {:type "hidden" :id k :value v}]) kvs)
   [:script (format "%s anchor.%s.main();"
                    (map-str #(format "anchor.core.bind_variable('%s', '%s');" class %) (keys kvs)) class)]))

;; remember these bitch
;; [:link {:rel "stylesheet" :type "text/css" :href "/style.css"}]

(defn injectoid
  "a snippet to pump in clojurescript"
  [classes kvs]
  (let [
        requires (map-str #(format "goog.require('anchor.%s')" %) classes)
        shorthands (map-str #(format "%s = anchor.%s" % %) classes)
        ]
    [:div
      [:div {:id "content"}]
      [:script {:src "/keymaster.js"}]
      [:script {:src "/jquery.js"}]
      [:script {:src "/cljs/out/goog/base.js"}]
      [:script {:src "/cljs/out.js"}]
      [:script {:src "/react-0.12.0.js"}]
      [:script (format "
                       goog.require('anchor.core')
                       %s
                       $(function() {
                       c = anchor.core
                       %s
                       })" requires shorthands)]
      (state (first classes) kvs)]))

(defn page
  "page with aforementioned snippet"
  [classes kvs]
  (response/response
   (hiccup/html5
    [:head
      [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
      [:meta {:charset "UTF-8"}]
     ]
    [:body
     (injectoid classes kvs)
     ]
    )))

(defroutes routes
  ("/" []
       (hiccup/html5
        "Excellent Dr Schmidt")))
