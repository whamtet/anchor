(ns anchor.update-calculations
  (:require
    [anchor.model :as model]
    [anchor.util :as util]
    [anchor.yahoo :as yahoo]
    [anchor.db :as db]
    [clojure.string :as string]
    #?(:cljs
        [cljs.reader :refer [read-string]])
    #?(:cljs
        [redlobster.promise :as redlobster])
    )
  #?(:cljs
      (:require-macros
        [redlobster.macros :refer [let-coll-realised let-realised]]))
  )

(defn parse-value [value]
  (#?(:clj
       Double/parseDouble
       :cljs
       js/Number)
     (reduce
       (fn [s to-remove]
         (string/replace s to-remove ""))
       value ["," "(" ")"])))

(defn parse-values
  "parse manually typed values"
  [values]
  (reduce + (map parse-value (remove empty? (.split values " ")))))

(defn manual-overrides [company reporting-period factor]
  (let [
         factor (* factor
                   ({"1" 1 "k" 1000 "M" 1000000} (get-in (db/get-db "report-metadata") [company reporting-period "factor"])))
         ]
    (util/value-map #(* factor (parse-values %))
                    (get-in (db/get-db "report-manuals") [company reporting-period]))))

(defn get-values-at [company reporting-period factor]
  (let [
         factor (* factor
                   ({"1" 1 "k" 1000 "M" 1000000} (get-in (db/get-db "report-metadata") [company reporting-period "factor"])))
         ]
    (into {}
          (for [[field pages] (get-in (db/get-db "report-values") [company reporting-period])]
            [field
             (reduce +
                     (for [[page items] pages
                           [item subitems] items
                           [subitem {:strs [negative? value]}] subitems
                           :when value
                           :let [value (* factor (parse-value value))]]
                       (if negative? (- value) value)))]))))

(defn date-value [s]
  (let [x #?(:clj #(Integer/parseInt %) :cljs #(js/Number %))]
    (let [[year month] (map x (.split s " "))]
      (- 0 year (/ month 12)))))

(defn manual-values [company]
  (let [
         factors (map read-string (remove empty? (.split (get (db/get-db "period-coefficients") company "") " ")))
         sorted-reporting-periods (sort-by date-value (keys (get (db/get-db "report-metadata") company)))
         values (map #(get-values-at company %1 %2) sorted-reporting-periods factors)
         values2 (map #(manual-overrides company %1 %2) sorted-reporting-periods factors)
         values (map #(merge-with + %1 %2) values values2)
         reduced-values (if (not-empty values) (reduce #(merge-with + %1 %2) values))
         ]
    (into {}
          (for [[k v] reduced-values]
            [k
             (if (= "Balance Sheet" (get (db/get-db "node-types") k))
               (some #(get % k) values)
               v)]))))

(defn cap-rate [company]
  (let [
         proportion (get (db/get-db "company-sectors") company {"General" 100})
         ]
    (/
      (reduce + (map (fn [[sector proportion]] (* proportion (get (db/get-db "economic-sectors") sector))) proportion))
      (reduce + (vals proportion))
      100
      )))

(def default-inputs {"new-project-return" 0 "new-project-expenditure" 0})

(defn inputs [companies]
  (let [
         manual-values (map manual-values companies)
         cap-rates (map cap-rate companies)
         manual-values2 (db/get-db "manual-values")
         ]
    (prn 'fuck)
    (#?(:cljs let-realised :clj util/let-realised)
       [
         yahoo-data (yahoo/data2 companies)
         ]
       (zipmap companies
               (map (fn [company manual cap-rate yahoo-data]
                      (merge default-inputs manual yahoo-data {"cap-rate" cap-rate} (get manual-values2 company)))
                    companies manual-values cap-rates @yahoo-data)))))

(defn nums
  ([] (nums (keys (db/get-db "report-metadata"))))
  ([companies]
   #?(:clj
       (into {}
             (map (fn [[company input]]
                    [company (model/add-output company input)]) (inputs companies)))
       :cljs
       (let-realised
         [inputs (inputs companies)]
         (prn 'inputs inputs)
         (let-coll-realised [output (map (fn [[company input]]
                                           (model/add-output company input)) @inputs)]
                            (zipmap companies output))))))
