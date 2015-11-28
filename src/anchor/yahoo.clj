(ns anchor.yahoo)

(def stocks ["INTC", "BABA", "TSLA", "AIR.PA", "YHOO"])

(defn prices
  "prices for stocks"
  [stocks]
  (let [data (yahoofinance.YahooFinance/get (into-array stocks))]
    (map #(-> (get data %) .getQuote .getPrice) stocks)))
