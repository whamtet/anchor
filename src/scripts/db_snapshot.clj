(ns ^{:doc "Snapshot Db and spit it into db.cljs"}
  scripts.db-snapshot
  (:require [anchor.db :as db]))

(spit "src/anchor/db.cljs"
      (format "
              (ns anchor.db
              (:require [redlobster.io :as io]
                        redlobster.promise
                        [cljs.reader :refer [read-string]])
              (:require-macros
              [redlobster.macros :refer [let-realised]])
              )

              (def db (atom %s))

              (defn dump-db []
                (io/spit \"resources/db.edn\" (pr-str @db)))

              (defn load-db []
                (let-realised [s (io/slurp \"resources/db.edn\")]
                  (reset! db (read-string @s))))

              (load-db)

              (defn set-db
              \"Set collection s to contents data\"
              [s data]
              (swap! db assoc s data))

              (defn get-db
              \"Get collection s\"
              [s]
              (get @db s))

              (defn swap-db
              \"Update collection s to (apply f old-val args)\"
              [s f & args]
              (set-db s (apply f (get-db s) args)))
              "
              (pr-str
               (into {}
                     (for [coll '[report-values manual-values report-manuals
                                  manual-overrides period-coefficients report-metadata
                                  economic-sectors company-sectors node-order node-types
                                  company-metadata]]
                       [(str coll) (db/get-db (str coll))])))))

;(db/dbatom report-values "report-values") ;company -> reporting period -> variable -> values
;(db/dbatom manual-values "manual-values") ;company -> reporting period -> variable -> values
;(db/dbatom report-manuals "report-manuals") ;company -> reporting period -> variable -> string
;(db/dbatom manual-overrides "manual-overrides") ;company -> reporting period -> variable -> type
;(db/dbatom period-coefficients "period-coefficients") ;company -> coefficients
;(db/dbatom report-metadata "report-metadata") ;company -> reporting period -> {report coefficient year month starting-year starting-month}
;(db/dbatom economic-sectors "economic-sectors") ;sector -> cap-rate
;(db/dbatom company-sectors "company-sectors") ;company -> sector mix
;(db/dbatom node-order "node-order")
;(db/dbatom node-types "node-types")
;(db/dbatom company-metadata "company-metadata")
