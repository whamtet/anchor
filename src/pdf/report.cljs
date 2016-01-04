(ns pdf.report
  (:require [anchor.util :as util]
            [anchor.update-calculations :as update-calculations]
            [cljs-pdfkit.core :as cljs-pdfkit]
            redlobster.promise
            )
  (:require-macros [redlobster.macros :refer [let-realised]]))

(defn footer-page [body]
  [:page
   body
   [:text (util/timestamp) 60 520]])

;;need to transpose that table for analysis
(defn safe-nth [s n]
  (if (< n (count s))
    (nth s n)))

(defn transpose [table]
  (let [
        num-cols (apply max (map count table))
        ]
    (for [col-num (range num-cols)]
      (map #(safe-nth % col-num) table))))

(defn table [rows]
  (let [
        cols (transpose rows)
        col-width #(max 10 (apply max (map count %)))
        col-widths (map col-width cols)
        col-x (cons 0 (util/cumul col-widths))
        ]
    (map-indexed
     (fn [i row]
       (map
        (fn [col-x col]
          [:text
           {:font (if (= 0 i) "Helvetica-Bold" "Helvetica")}
           col (* 8 col-x) (* 14 i)])
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
  (.toFixed (* x 100) 2))

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

(defn doc [values]
  [:pdf {:layout "landscape"
         :info {:title (str "Anchor Financial Report " (util/datestamp))}
         }
   (footer-page
    [:style {:translate [50 50]}
    (table (table2 values))])])

(defn pdf []
  (let-realised [nums (update-calculations/nums)]
    (cljs-pdfkit/pdf (doc @nums))))
