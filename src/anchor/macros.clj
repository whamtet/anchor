(ns anchor.macros)

(defmacro defm [sym v m & body]
  `(def ~sym (with-meta (fn ~v ~@body) ~m)))
