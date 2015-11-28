(ns anchor.program-graph
  (:require
   [anchor.core :as core]
   [ajax.core :refer [GET POST]]
   [reagent.core :as reagent :refer [atom]]
   [clojure.walk :as walk]
   ))

(defn subitem? [a b]
  (cond
   (and (map? a) (map? b))
   (every? #(subitem? (a %) (b %)) (keys a))
   (and (coll? a) (coll? b))
   (every? identity (map subitem? a b))
   :default
   (= a b)))

;; <g id="node1" class="node"><title>node21146</title>
;; <ellipse fill="#7fffd4" stroke="black" cx="5060.01" cy="-818.87" rx="122.159" ry="26.7407"/>
;; <text text-anchor="middle" x="5060.01" y="-822.67" font-family="Monospace" font-size="14.00">real_estate_premium</text>
;; <text text-anchor="middle" x="5060.01" y="-807.67" font-family="Monospace" font-size="14.00">1.23E+45</text>
;; </g>

(def colors {"calc" "#ffffff"
             "country" "#1e90ff"
             "sector" "#1e90ff"
             "manual" "#fffacd"
             "combo" "#ff66ff"
             "report" "#ffb6c1"})

#_(defn clean-vector [item]
  (if (subitem? [:g {:class "node"}] item)
    (let [
          [_g m-g [_ m-ellipse] [_ m-text1 text1] [_ m-text2 text2]] item
          value (get @summaries text1)
          value (cond
                 (not (number? value)) 0
                 (zero? value) 0
                 (<= (js/Math.log10 (js/Math.abs value)) 2)
                 (if (integer? value)
                   value
                   (.toFixed value 3))
                 :default
                 (.toExponential value 2))
          discrepancy (get-in @summaries ["discrepancies" text1])
          default-option (get @default-sources text1 "calc")
          chosen-option (get @calc-sources text1 default-option)
          default-bloomberg (first (get @bloomberg-options text1))
          value (if (and discrepancy (#{"report" "manual" "combo" "calc"} chosen-option))
                  (str value " " (int (* 100 discrepancy)))
                  value)
          on-click (if (and (not= "sector" default-option) (not= "country" default-option))
                     #(open-dialog text1))
          fill (colors chosen-option "#90ee90")
          fill (cond
                (and (@leaves text1) (= "calc" chosen-option)) "#87ceeb"
                (@warnings text1) "#ff6600"
                (@errors text1) "#ff0000"
                :default fill)
          ]
      [:g (assoc m-g :on-click on-click) [:title (@equations text1)]
       [:ellipse (assoc m-ellipse :fill fill)] [:text m-text1 text1] [:text m-text2 value]])
    item))

#_(def dialog-text (atom ""))
#_(def selected-option (atom ""))
#_(def manual-value (atom ""))

#_(defn close-dialog []
  (let [
        f #(and % (not-empty (.trim %)))
        manual-value2 (core/key-filter f @manual-value)
        ]
    (swap! calc-sources assoc-in [@dialog-text] @selected-option)
    (swap! calc-manual-values assoc-in [@dialog-text] manual-value2)
    (POST "/update-graph" {:params {:company @company
                                    :calc-sources @calc-sources
                                    :calc-manual-values @calc-manual-values
                                    }
                           :handler #(reset! summaries %)})
    (-> "node_dialog" js/document.getElementById .close)))


#_(defn open-dialog [field]
  (let [
        default-option (get @default-sources field "calc")
        selected-op (get-in @calc-sources [field] default-option)
        man-value (get-in @calc-manual-values [field] {"" 0})
        ]
    (reset! dialog-text field)
    (reset! selected-option selected-op)
    (reset! manual-value man-value)
    (-> "node_dialog" js/document.getElementById .showModal)))

#_(defn dialog []
  (let [
        field @dialog-text
        company @company
        options (concat ["report" "manual" "combo"] (get @bloomberg-options field))
        options (if (@roots field) options (conj options "calc"))
        selected-option2 @selected-option
        man-keys (concat (keys @manual-value) (repeat ""))
        man-vals (concat (vals @manual-value) (repeat ""))
        ]
    [:dialog {:id "node_dialog"
              :style {:left 0
                      :top 100
                      :position "fixed"
                      :width 200
                      }}
     [:div
      ;;source selector
      [:p "Select Source"]
      [:table
       [:tbody
        (for [option options]
          ^{:key option}
          [:tr
           [:td
            [:input {:type "radio" :name "source-selector"
                     :checked (= option selected-option2)
                     :on-change #(reset! selected-option option)
                     }] option
            ]])]]
      (if (= "manual" selected-option2)
        [:table
         [:tbody
          (map
           (fn [k v i]
             ^{:key (str "manual" i)}
             [:tr
              [:td
               [:input {:type "text"
                        :style {:width 80}
                        :default-value k
                        :on-blur #(swap! manual-value
                                         (fn [old]
                                           (let [
                                                 old (dissoc old k)
                                                 new-key (-> % .-target .-value .trim)
                                                 ]
                                             (if (not= "" new-key)
                                               (assoc old new-key v)
                                               old))))
                        }]]
              [:td
               [:input {:type "text"
                        :style {:width 80}
                        :default-value v
                        :on-blur #(swap! manual-value assoc k (-> % .-target .-value js/Number))
                        }]]]) man-keys man-vals (range 4))]])
      (if (= "combo" selected-option2)
        [:input {:type "text"
                 :style {:width 80}
                 :default-value (get @manual-value "combo" "")
                 :on-blur #(swap! manual-value assoc "combo" (-> % .-target .-value))}])
      [:br]
      [:input {:type "button" :on-click close-dialog :value "Close"}]]]))

(defn content []
  (let [
        ;svg (walk/postwalk clean-vector @graph)
        svg (assoc-in @graph [1 :viewBox] "450 0.00 3000 1100")
        ]
    [:div
     svg
     ]))

(defn main []
  (core/page
   content))
