(ns anchor.yahoo
  (:require
   [anchor.util :as util]
   [anchor.db :as db]
   [clojure.string :as string]
   #?(:cljs
      [cljs.reader :as reader])
   #?(:cljs
      [redlobster.io :as io])
   #?(:cljs
      [redlobster.promise :as redlobster]))
  #?(:cljs
     (:require-macros
      [anchor.util :refer [symzip]]
      [redlobster.macros :refer [promise let-realised]]
      )))

(def stocks ["INTC", "BABA", "TSLA", "AIR.PA", "YHOO"])

(def fmt-str "http://download.finance.yahoo.com/d/quotes.csv?s=%s&f=nsl1j2")

#?(:cljs
   (defn parse-cell [s]
     (let [t (js/Number s)]
       (if-not (js/isNaN t) t (string/replace s "\"" ""))))
   :clj
   (defn parse-cell [s]
     (try
       (Long/parseLong s)
       (catch Throwable t
         (try
           (Double/parseDoubles)
           (catch Throwable t
             (string/replace s "\"" "")))))))

(defn parse-line [line]
  (map
   parse-cell
   (.split line ",")))

(defn parse-csv [s]
  (map parse-line (.split s "\n")))

#?(:cljs
   (defn data [stocks]
     (let [
           quotes (apply str (interpose "," stocks))
           ]
       (let-realised [
                      s (io/slurp-http (util/format fmt-str quotes))
                      ]
                     (let [
                           csv (parse-csv (.trim @s))
                           m (util/map-by second csv)
                           ]
                       (map #(let [[name symbol share-price shares-outstanding] (m %)]
                               (symzip name share-price shares-outstanding))
                            stocks)))))
   :clj
   (defn data [stocks]
     (let [
           quotes (apply str (interpose "," stocks))
           s (slurp (format fmt-str quotes))
           ]
       (let [
             csv (parse-csv (.trim s))
             m (util/map-by second csv)
             ]
         (map #(let [[name symbol share-price shares-outstanding] (m %)]
                 (symzip name share-price shares-outstanding))
              stocks)))))

(def data2 (#?(:clj memoize :cljs util/memoize-promise) data))
