(ns anchor.yahoo)

(def stocks ["INTC", "BABA", "TSLA", "AIR.PA", "YHOO"])

(defn data
  "data for stocks"
  [stocks]
  (let [data (yahoofinance.YahooFinance/get (into-array stocks))]
    (map #(let [
                data (get data %)
                ]
            {"price" (-> data .getQuote .getPrice)
             "shares-outstanding" (-> data .getStats .getSharesOutstanding)}) stocks)))

(def data2 (memoize data))
