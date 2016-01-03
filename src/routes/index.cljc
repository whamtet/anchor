(ns routes.index
  (:require
   #?(:clj [hiccup.page :as hiccup])
   #?(:clj hiccup.core)
   #?(:cljs hiccups.runtime)
   [anchor.util :as util]
   )
  #?(:cljs (:require-macros [hiccups.core :as hiccup]))
  )

(defn response
  "Returns a skeletal Ring response with the given body, status of 200, and no
  headers."
  [body]
  {:status  200
   :headers {}
   :body    body})

(defn map-str [f & s] (apply str (interpose "\n" (apply map f s))))

(defn state [class kvs]
  (list
   (map (fn [[k v]] [:input {:type "hidden" :id k :value v}]) kvs)
   [:script (format "%s anchor.%s.main();"
                    (map-str #(format "anchor.core.bind_variable('%s', '%s');" class %) (keys kvs)) class)]))

#?(:cljs (def format util/format))

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
  (#?(:clj hiccup.core/html :cljs hiccup/html)
     (injectoid classes kvs scripts)))

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
  (response
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
  (response
   (hiccup/html5
    [:head
     [:meta {:http-equiv "X-UA-Compatible" :content "IE=edge"}]
     [:meta {:charset "UTF-8"}]
     ]
    [:body
     (injectoid classes kvs scripts)
     ]
    )))
