(ns pdf.report)

(require '[clj-pdf.core :as pdf])
(require '[anchor.util :as util])
(require '[anchor.update-calculations :as update-calculations])

(defn write-pdf [pdf]
  (let [
        out (java.io.ByteArrayOutputStream.)
        ]
    (with-open [out out]
      (pdf/pdf pdf out))
    (.toByteArray out)))

(defn metadata-pdf [body]
  (write-pdf (list*
              {:footer {:text (util/timestamp)}
               :orientation :landscape
               }
              body)))

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

(defn table [values]
  [:table {:header ["Company" "Discount to Fair Value" "Discount to NAV" "Cash" "Net Income" "Market Cap"]}
   (for [[company {:strs [fair-value-discount nav-discount cash net-income market-cap]}]
          (sort-by (fn [[_ {x "fair-value-discount"}]] x) values)]
     [company
      (disp-percent fair-value-discount)
      (disp-percent nav-discount)
      (disp-num cash)
      (disp-num net-income)
      (disp-num market-cap)])])

(defn pdf []
  (metadata-pdf (table (update-calculations/nums))))
