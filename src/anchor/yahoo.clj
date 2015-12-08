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

(db/dbatom data-backup "yahoo-data")
(defn data2 [stocks]
  (try
    (let [x (data1-5 stocks)]
      (swap! data-backup assoc (pr-str stocks) x)
      (set-data-backup)
      x)
    (catch Exception e (get @data-backup (pr-str stocks)))))

(defn company-names [companies]
  (zipmap companies (map #(% "name") (data2 companies))))
