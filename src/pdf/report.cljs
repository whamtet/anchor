(ns pdf.report
  (:require [anchor.util :as util]
            [anchor.update-calculations :as update-calculations]
            [cljs-pdfkit.core :as cljs-pdfkit]))

(defn footer-page [body]
  [:page
   body
   [:text 0 400 (util/timestamp)]])

;;need to transpose that table for analysis
(defn safe-nth [s n]
  (if (< n (count s))
    (nth s n)))

(defn transpose [table]
  (let [
        num-cols (apply max (map count rows))
        ]
    (for [col-num (range num-cols)]
      (map #(safe-nth % col-num) table))))

(defn table [& rows]
  (let [
        cols (transpose rows)
        col-lengths (map #(inc (count %)) cols)
        col-x (cons 0 (util/cumul col-lengths))
        ]
    (map-indexed
     (fn [i row]
       (map
        (fn [col-x col]
          [:text
           {:font (if (= 0 i) "Helvetica-Bold" "Helvetica")}
           col col-x (* 10 i)])
        col-x row))
     rows)))

(defn disp-num [x]
  (->> x
       str
       reverse
       (partition-all 3)
       (interpose [","])
       (apply concat)
       reverse
       (apply str)))

(defn disp-percent [x]
  (->> x (* 100) (format "%.2f")))

(defn table2 [values]
  (cons
   ["Company" "Discount to Fair Value" "Discount to NAV" "Cash" "Net Income" "Market Cap"]
   (for [[company {:strs [fair-value-discount nav-discount cash net-income market-cap]}]
          (sort-by (fn [[_ {x "fair-value-discount"}]] x) values)]
     [company
      (disp-percent fair-value-discount)
      (disp-percent nav-discount)
      (disp-num cash)
      (disp-num net-income)
      (disp-num market-cap)])))


(defn pdf []
  (cljs-pdfkit/pdf (table2 (update-calculations/nums))))
