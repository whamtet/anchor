(ns anchor.test)

(defmacro seed-through [seed m]
     (clojure.walk/prewalk #(m % %) seed))
