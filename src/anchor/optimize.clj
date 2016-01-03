(ns anchor.optimize
  ^{:doc "Use JOptimize to allocate stocks"}
  )

(require '[anchor.update-calculations :as update-calculations])
(require '[anchor.util :as util])

(import com.joptimizer.functions.LinearMultivariateRealFunction)
(import com.joptimizer.optimizers.JOptimizer)
(import com.joptimizer.optimizers.OptimizationRequest)

(defn- company->country [s]
  ({"AX" "Australia"
    "SI" "Singapore"
    "HK" "Hong Kong"
    } (second (.split s "\\."))))

(defn- slope [risk-weighting {:strs [fair-value-discount leverage]}]
  (+ fair-value-discount (* leverage risk-weighting)))

(def countries ["Australia" "Singapore" "Hong Kong"])
(def country-mins (zipmap countries (repeat 0.2)))
(def country-maxs (zipmap countries (repeat 0.4)))
(def stock-max 0.2)
(def risk-weighting 0)

(defn map-f [fs val]
  (map #(% val) fs))

(defn optimize
  "Allocate stocks by maximizing a linear multivariate function subject to constraints."
  [country-mins country-maxs stock-max risk-weighting]
  (let [
        [companies values] (map-f [keys vals] (update-calculations/nums))
        company->country (zipmap companies (map company->country companies))
        countries (set (vals company->country))

        n (count companies)
        m (+ (* 4 n) (* 2 (count countries)))
        A (into-array
           [(double-array (repeat n 1))])
        b (double-array [1])

        country-coefficients (fn [country factor]
                               (double-array
                                (map #(if (= country (company->country %)) factor 0) companies)))

        country-upper-bounds (map
                              (fn [[country upper]]
                                (LinearMultivariateRealFunction. (country-coefficients country 1) (- (max 0.001 (* 0.01 upper)))))
                              country-maxs)

        country-lower-bounds (map
                              (fn [[country lower]]
                                (LinearMultivariateRealFunction. (country-coefficients country -1) (min 0.999 (* 0.01 lower))))
                              country-mins)

        id-row (fn [i factor]
                 (double-array
                  (map #(if (= i %) factor 0) (range n))))

        stock-upper-bounds (map
                            (fn [i]
                              (LinearMultivariateRealFunction. (id-row i 1) (- (* 0.01 stock-max))))
                            (range n))

        stock-lower-bounds (map
                            (fn [i]
                              (LinearMultivariateRealFunction. (id-row i -1) 0))
                            (range n))

        inequalities (into-array
                      (concat country-upper-bounds country-lower-bounds stock-upper-bounds stock-lower-bounds))

        objective-function (LinearMultivariateRealFunction.
                            (double-array (map #(slope risk-weighting %) values)) 0)

        optimization-request (doto (OptimizationRequest.)
                               (.setF0 objective-function)
                               (.setFi inequalities)
                               (.setA A)
                               (.setB b)
                               )

        optimizer (doto (JOptimizer.)
                    (.setOptimizationRequest optimization-request)
                    .optimize)

        weights (-> optimizer .getOptimizationResponse .getSolution)
        ]
    (zipmap companies weights)))
