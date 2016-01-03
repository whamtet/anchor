(ns
  ^{:doc "Use glpk to allocate stocks"}
  anchor.optimize
  (:require
   [anchor.update-calculations :as update-calculations]
   [anchor.util :as util]
   redlobster.promise
   [redlobster.io :as io]
   )
  (:require-macros
   [redlobster.macros :refer [let-realised promise]]
   ))

(def glp (js/require "glpk"))
(def stream (js/require "stream"))

(defn- company->country [s]
  ({"AX" "Australia"
    "SI" "Singapore"
    "HK" "Hong Kong"
    } (second (.split s "."))))

(defn- slope [risk-weighting {:strs [fair-value-discount leverage]}]
  (+ fair-value-discount (* leverage risk-weighting)))

(def countries ["Australia" "Singapore" "Hong Kong"])
(def country-mins (zipmap countries (repeat 0.2)))
(def country-maxs (zipmap countries (repeat 0.4)))
(def stock-max 0.2)
(def risk-weighting 0)

(defn apply-interpose [i s]
  (apply str (interpose i s)))

(defn apply-spaces [s]
  (apply-interpose " + " s))

(defn constraint-line [constraint-i factors bound]
  (util/format
   "s.t. c%s: %s <= %s;"
   constraint-i
   (apply-spaces
    (map
     (fn [[i factor]] (util/format "%s * x%s" factor i))
     factors))
   bound))

(defn streamify-string [s]
  (doto (stream.Readable.)
    (.push s)
    (.push nil)))

(defn optimize
  "Allocate stocks by maximizing a linear multivariate function subject to constraints."
  ([] (optimize country-mins country-maxs stock-max risk-weighting))
  ([country-mins country-maxs stock-max risk-weighting]
   (let-realised [nums (update-calculations/nums)]
                 (let [
                       country-mins (util/value-map #(* % 0.01) country-mins)
                       country-maxs (util/value-map #(* % 0.01) country-maxs)
                       stock-max (* stock-max 0.01)

                       companies (keys @nums)
                       values (vals @nums)
                       company-order (zipmap companies (range))

                       company->country (zipmap companies (map company->country companies))
                       countries (set (vals company->country))
                       grouped-companies (group-by company->country companies)

                       n (count companies)
                       nc (count countries)

                       declarations (map #(util/format "var x%s;" %) (range n))

                       objective [(util/format
                                   "maximize obj: %s;"
                                   (apply-spaces
                                    (map-indexed
                                     (fn [i val]
                                       (util/format "%s * x%s" (slope risk-weighting val) i))
                                     values)))]

                       normality [(util/format
                                   "s.t. c1: %s = 1;"
                                   (apply-spaces
                                    (map #(util/format "x%s" %) (range n))))]

                       lower-bounds
                       (map (fn [constraint-i i]
                              (constraint-line constraint-i {i -1} 0))
                            (range 2 (+ 2 n)) (range n))

                       upper-bounds
                       (map (fn [constraint-i i]
                              (constraint-line constraint-i {i 1} stock-max))
                            (range (+ 2 n) (+ 2 n n)) (range n))

                       lower-country
                       (map (fn [constraint-i [country companies]]
                              (constraint-line constraint-i (zipmap (map company-order companies) (repeat -1)) (- (country-mins country))))
                            (range (+ 2 n n) (+ 2 n n nc)) grouped-companies)

                       upper-country
                       (map (fn [constraint-i [country companies]]
                              (constraint-line constraint-i (zipmap (map company-order companies) (repeat 1)) (country-maxs country)))
                            (range (+ 2 n n nc) (+ 2 n n nc nc)) grouped-companies)

                       suffix ["solve;" "end;"]

                       s (apply-interpose "\n" (concat declarations objective normality lower-bounds upper-bounds lower-country upper-country suffix))

                       lp (glp.Problem.)
                       mpl (glp.Mathprog.)

                       temp-file (str (gensym))

                       ]
                   (let-realised
                    [_ (io/spit temp-file s)]
                    (promise
                     (.readModel mpl temp-file 0
                                 (fn [x y]
                                   (.generate mpl nil
                                              (fn []
                                                (.buildProb mpl lp
                                                            (fn []
                                                              (.simplex lp #js{:presolve (.-ON glp)}
                                                                        (fn []
                                                                          (let [out (doall (map #(.getColPrim lp %) (range 1 n)))]
                                                                            (.delete lp)
                                                                            (.delete mpl)
                                                                            (realise (zipmap companies out)))))))))))))))))
