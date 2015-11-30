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

(defn before [s i]
  (first (.split s i)))
(defn after [s i]
  (second (.split s i)))

(defn decap-word [word]
  (str
   (.substring word 0 1)
   (.toLowerCase (.substring word 1))))

(defn decap-words [words]
  (apply str (interpose " " (map decap-word (.split words " ")))))

(defn company-name [company]
  (let [
        s (slurp (format "http://finance.yahoo.com/q?s=%s&ql=1" company))
        line (some #(if (.startsWith % "<title>") %) (.split s "\n"))
        ]
    (-> line (after "Summary for ") (before "- Yahoo!") decap-words)))

(def company-name2 (memoize company-name))

(defn company-names [companies]
  (zipmap companies (pmap company-name2 companies)))
