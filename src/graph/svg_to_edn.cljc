(ns graph.svg-to-edn)

;(def lines (.split (slurp "test.html") "\n"))

(defn parse-kv [line]
  (into {}
        (map (fn [s]
               (let [
                     [k v] (.split s "=")
                     ]
                 [(keyword k) (.replace v "\"" "")]))
             (re-seq #"\S+?=\".+?\"" line))))

(defn nested-conj [ms i x]
  (if (= 1 i)
    (conj ms x)
    (conj (pop ms) (nested-conj (peek ms) (dec i) x))))

(defn parse [s]
  (let [
        ]
    (loop [
           todo (.split s "\n")
           i 0
           done nil
           ]
      (if-let [line (first todo)]
        (let [
              line-start (re-find #"\S+" line)
              tag (keyword (.replace line-start "<" ""))
              new-element (cond
                           (#{"<path" "<polygon" "<ellipse" "<g"} line-start) [tag (parse-kv line)]
                           (= "<text" line-start) [:text (parse-kv line) (-> (re-find #">.*?<" line) (.replace "<" "") (.replace ">" ""))]
                           (= "<svg" line-start) [:svg (parse-kv (str line (second todo)))])
              ]
          (cond
           (.startsWith line-start "</")
           (recur (rest todo) (dec i) done)
           (#{"<path" "<polygon" "<ellipse" "<text"} line-start)
           (recur (rest todo) i (nested-conj done i new-element))
           (= "<g"  line-start)
           (recur (rest todo) (inc i) (nested-conj done i new-element))
           (= "<svg" line-start)
           (recur (drop 2 todo) (inc i) new-element)
           :default
           (recur (rest todo) i done)
           ))
         done))))
