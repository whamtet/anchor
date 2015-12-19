(ns anchor.get-images)

(def suffixes [".png" ".jpg" ".svg"])

(defn join-paths [paths1 [starter & rest :as paths2]]
  (if (= ".." starter)
    (recur (butlast paths1) rest)
    (apply str (interpose "/" (concat paths1 paths2)))))

(defn absolutize [url path]
  (let [
        url (.trim url)
        path (.trim path)
        ]
    (cond
     (.startsWith path "http") path
     (.startsWith path "/")
     (join-paths (take 3 (.split url "/")) (rest (.split path "/")))
     :default
     (let [
           paths1 (.split url "/")
           frag (last paths1)
           paths1 (if
                    (and
                     (> (count paths1) 3)
                     (or (empty? frag) (.contains frag ".")))
                    (butlast paths1)
                    paths1)
           ]
       (join-paths paths1 (.split path "/"))))))

(defn get-img [url frag]
  (let [
        frag (second (.split frag "\\(|\\)"))
        frag (-> frag (.replace "'" "") (.replace "\"" ""))
        url (absolutize url frag)
        ]
    (some #(if (.contains url %) [:css url]) suffixes)))

(defn safe-slurp [url]
  (try (slurp url) (catch Exception e "")))

(defn parse-css [url]
  (filter identity
          (map #(get-img url %) (re-seq #"url\(.+?\)" (safe-slurp url)))))

(defn get-data [root frag]
  (let [
        path (absolutize root (second (.split frag "\"")))
        ]
    (or
     (some #(if (.contains path %) [[:html path]]) suffixes)
     (if (.contains path ".css") (parse-css path)))))

(defn favicon [url]
  (join-paths (take 3 (.split url "/")) ["favicon.ico"]))

(defn get-link [url]
  (let [
        {:keys [css html]}
        (group-by first
                  (mapcat #(get-data url %) (re-seq #"=\".+?\"" (slurp url))))
        ]
    (remove
     #(.contains % "jquery")
     (distinct
      (conj
       (map second (concat html css))
       (favicon url))))))

(def get-link2 (memoize get-link))

;(println (parse-css "http://www.abacusproperty.com.au/sites/default/files/css/css_l--Hyitp2QKc9PwPAamaoa_t83Ts34Vm8f9xwo21CuE.css"))
