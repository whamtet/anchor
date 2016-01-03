(ns
  ^{:doc "Lines of code"}
  anchor.loc)

(import java.io.File)

(def files (filter
            #(let [x (.getName %)]
               (or (.endsWith x ".clj") (.endsWith x ".cljs")))
            (concat
             (file-seq (File. "src"))
             (file-seq (File. "src-cljs")))))

(defn loc [f]
  (count (.split (slurp f) "\n")))

(println (reduce + (map loc files)) "lines of code")
