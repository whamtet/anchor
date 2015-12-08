(ns anchor.model)
(require '[anchor.db :as db])
(require '[clojure.walk :as walk])

;;Here we define our financial model
;;anchor will parse the model to generate the appropriate user interfaces

(def model
  '[
    income-asset-value (/ net-income cap-rate)
    gross-asset-value (+ income-asset-value cash other-assets)
    net-asset-value (- gross-asset-value total-liabilities)
    new-project-value (* new-project-expenditure (- (/ new-project-return cap-rate) 1))
    fair-value (+ net-asset-value new-project-value)

    market-cap (* shares-outstanding share-price)
    nav-discount (- (/ market-cap net-asset-value) 1)
    fair-value-discount (- (/ market-cap fair-value) 1)
    leverage (/ total-liabilities net-asset-value)
    ])

;;which variables are calculated automatically
(def automatic-input '#{cap-rate share-price shares-outstanding})

(defn node? [node]
  (and
   (not= node '-)
   (re-find #"^[a-z\-]+$" (str node))))

(defn get-nodes
  "get the nodes for a form"
  [form]
  (set (filter node? (flatten form))))

;;all values in the model
(def nodes (get-nodes model))

;;map of calculated values to their dependent values
(def dependencies
  (into {}
        (for [[k v] (partition 2 model)]
          [k (get-nodes v)])))

;;model output nodes
(def output (set (keys dependencies)))
;;model input nodes
(def input (clojure.set/difference nodes output))
(def manual-input (clojure.set/difference input automatic-input))

(def final-output (apply clojure.set/difference output (vals dependencies)))

(defn add-output [company input-map]
  (doseq [arg input]
    (assert (input-map (str arg)) (str company " " arg)))
  (let [
        defined-vars (set (map symbol (keys input-map)))
        model (mapcat (fn [[a b]]
                        (if-not (defined-vars a) [a b]))
                      (partition 2 model))
        ]
    (eval
     `(let [
            {:strs ~(vec defined-vars)} ~input-map
            ~@model
            output# (zipmap ~(mapv str output) ~(vec output))
            ]
        (merge ~input-map output#)))))

;;state
(db/dbatom report-values "report-values") ;company -> reporting period -> variable -> values
(db/dbatom manual-values "manual-values") ;company -> reporting period -> variable -> values
(db/dbatom report-manuals "report-manuals") ;company -> reporting period -> variable -> string
(db/dbatom manual-overrides "manual-overrides") ;company -> reporting period -> variable -> type
(db/dbatom period-coefficients "period-coefficients") ;company -> coefficients
(db/dbatom report-metadata "report-metadata") ;company -> reporting period -> {report coefficient year month starting-year starting-month}
(db/dbatom economic-sectors "economic-sectors") ;sector -> cap-rate
(db/dbatom company-sectors "company-sectors") ;company -> sector mix
(db/dbatom node-order "node-order")
(db/dbatom node-types "node-types")

(defn nums-string
  "only nums in string"
  [s]
  (apply str (re-seq #"[0-9\.-]+" s)))

(defn clean-up [m]
  (if-let [value (get m "value")]
    (assoc m "value" (nums-string value))
    m))

(defn clean-up-map [m]
  (walk/postwalk clean-up m))
