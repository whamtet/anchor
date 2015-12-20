(ns anchor.yahoo)

(require '[clojure-csv.core :as csv])
(require '[anchor.util :as util])
(require '[anchor.db :as db])

(def stocks ["INTC", "BABA", "TSLA", "AIR.PA", "YHOO"])

(def fmt-str "http://download.finance.yahoo.com/d/quotes.csv?s=%s&f=nsl1j2")

(defmacro parse [type var]
  `(try
     (~type ~var)
     (catch Throwable t# 0)))

(defn data [stocks]
  (let [
        quotes (apply str (interpose "," stocks))
        s (slurp (format fmt-str quotes))
        csv (csv/parse-csv s)
        m (util/map-by second csv)
        ]
    (map #(let [[name symbol price shares-outstanding] (m %)]
            {"share-price" (parse Double/parseDouble price) "shares-outstanding" (parse Long/parseLong shares-outstanding) "name" name})
         stocks)))

(def data1-5 (memoize data))

(defn data2 [stocks]
  (try
    (let [x (data1-5 stocks)]
      (db/swap-db "yahoo-data" assoc (pr-str stocks) x)
      x)
    (catch Exception e (get (db/get-db "yahoo-data") (pr-str stocks)))))

(defn company-names [companies]
  (zipmap companies (map #(% "name") (data2 companies))))
