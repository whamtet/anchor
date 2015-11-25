(ns anchor.core)

(def bind-variable
  (js/Function. "klass" "k"
                "
                var value = document.getElementById(k).value;
                anchor[klass][k] = reagent.core.atom(cljs.reader.read_string(value))
                "))
