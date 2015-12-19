(ns routes.index
  (:require [compojure.core :refer [defroutes GET PUT POST DELETE ANY]]))

;(require '[anchor.html-unit :as html-unit])
;(require '[anchor.get-images :as get-images])
(require '[ring.util.response :as response])
(require '[hiccup.page :as hiccup])
(require 'hiccup.core)
(require '[anchor.util :as util])
(require '[anchor.model :as model])

(defn map-str [f & s] (apply str (interpose "\n" (apply map f s))))

(defn state [class kvs]
  (list
   (map (fn [[k v]] [:input {:type "hidden" :id k :value v}]) kvs)
   [:script (format "%s anchor.%s.main();"
                    (map-str #(format "anchor.core.bind_variable('%s', '%s');" class %) (keys kvs)) class)]))

(defn injectoid
  "a snippet to pump in clojurescript"
  [classes kvs & [scripts]]
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
     (for [script scripts]
       [:script {:src script}])
     [:script (format "
                      %s
                      $(function() {
                      c = anchor.core
                      %s
                      })" requires shorthands)]
     (state (first classes) kvs)]))

(defn injectoid-s
  [classes kvs & [scripts]]
  (hiccup.core/html (injectoid classes kvs scripts)))

(def anchor
  [:div
   [:a {:href "/"}
    [:img {:src "/anchor.png"
           :width 267
           :height 200
           }]]])

(def css
  (map #(vector :link {:rel "stylesheet" :type "text/css" :href %})
       ["/toast/css.css" "/toast/d.css" "/toast/style.css"]))

(defn page
  "page with aforementioned snippet"
  [classes kvs & [scripts]]
  (response/response
   (hiccup/html5
    [:head
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:charset "UTF-8"}]
     ]
    [:body
     anchor
     (injectoid classes kvs scripts)
     ]
    )))

(defn blank-page
  "page with aforementioned snippet"
  [classes kvs & [scripts]]
  (response/response
   (hiccup/html5
    [:head
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:charset "UTF-8"}]
     ]
    [:body
     (injectoid classes kvs scripts)
     ]
    )))
