(ns anchor.model)
(require '[anchor.db :as db])

(def model
  '[income-asset-value (/ net-income cap-rate)
    gross-asset-value (+ income-asset-value cash other-assets)
    net-asset-value (- gross-asset-value total-liabilities)
    new-project-value (* new-project-expenditure (- (/ new-project-return cap-rate) 1))
    fair-value (+ net-asset-value new-project-value)])

(def operators '#{/ + - *})

(defn get-nodes
  "get the nodes for a form"
  [form]
  (clojure.set/difference
   (set (filter symbol? (flatten form)))
   operators))

(def nodes (get-nodes model))
(def dependencies
  (into {}
        (for [[k v] (partition 2 model)]
          [k (get-nodes v)])))

(def output (keys dependencies))
(def input (clojure.set/difference nodes output))

(eval
 `(defn add-output
    "adds model output to input"
    [input#]

    ;;assert every input argument
    (doseq [arg# ~(mapv str input)]
      (assert (input# arg#) arg#))

    ;;do the calculations
    (let [
          {:strs ~(vec input)} input#
          ~@model
          output# (zipmap ~(mapv str output) ~(vec output))
          ]
      (merge input# output#))))

;;state
(db/dbatom report-values "report-values") ;company -> reporting period -> variable -> values
(db/dbatom manual-values "manual-values") ;company -> reporting period -> variable -> values
(db/dbatom manual-overrides "manual-overrides") ;company -> reporting period -> variable -> type
(db/dbatom period-coefficients "period-coefficients") ;company -> coefficients
(db/dbatom report-metadata "report-metadata") ;company -> reporting period ->{report coefficient year month starting-year starting-month}
(db/dbatom economic-sectors "economic-sectors") ;sector -> cap-rate
(db/dbatom company-sectors "company-sectors") ;company -> sector mix
