(ns anchor.update-calculations)

(require '[anchor.model :as model])
(require '[anchor.util :as util])
(require '[anchor.yahoo :as yahoo])

(defn parse-value [value]
  (Double/parseDouble
   (reduce
    (fn [s to-remove]
      (.replace s to-remove ""))
    value ["," "(" ")"])))

(defn get-values-at [company reporting-period factor]
  (let [
        factor (* factor
                  ({"1" 1 "k" 1000 "M" 1000000} (get-in @model/report-metadata [company reporting-period "factor"])))
        ]
    (into {}
          (for [[field pages] (get-in @model/report-values [company reporting-period])]
            [field
             (reduce +
                     (for [[page items] pages
                           [item {:strs [negative? value]}] items
                           :when value
                           :let [value (* factor (parse-value value))]]
                       (if negative? (- value) value)))]))))

(defn date-value [s]
  (let [[year month] (.split s " ")]
    (- 0 year (/ month 12))))

(defn manual-values [company]
  (let [
        factors (map read-string (remove empty? (.split (get @model/period-coefficients company "") " ")))
        sorted-reporting-periods (sort-by date-value (keys (get @model/report-metadata company)))

        values (map #(get-values-at company %1 %2) sorted-reporting-periods factors)
        reduced-values (reduce #(merge-with + %1 %2) values)
        ]
    (into {}
          (for [[k v] reduced-values]
            [k
             (if (= "Balance Sheet" (get @model/node-types k))
               (some #(get % k) values)
               v)]))))

(defn cap-rate [company]
  (let [
        proportion (get @model/company-sectors company)
        ]
    (/
     (reduce + (map (fn [[sector proportion]] (* proportion (get @model/economic-sectors sector))) proportion))
     (reduce + (vals proportion)))))

(defn inputs [companies]
  (let [
        manual-values (map manual-values companies)
        cap-rates (zipmap companies (map (fn [company] {"cap-rate" (cap-rate company)}) companies))
        share-prices (yahoo/prices2 companies)
        share-prices (zipmap companies (map (fn [price] {"share-price" price}) share-prices))
        ]
    (merge-with merge manual-values cap-rates share-prices)))

(println (inputs ["Ocean"]))
