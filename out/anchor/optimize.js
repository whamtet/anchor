// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.optimize');
goog.require('cljs.core');
goog.require('anchor.update_calculations');
goog.require('anchor.util');
goog.require('redlobster.promise');
goog.require('redlobster.io');
goog.require('clojure.string');
anchor.optimize.stream = require("stream");
anchor.optimize.child_process = require("child_process");
anchor.optimize.company__GT_country = (function anchor$optimize$company__GT_country(s){
return new cljs.core.PersistentArrayMap(null, 3, ["AX","Australia","SI","Singapore","HK","Hong Kong"], null).call(null,cljs.core.second.call(null,s.split(".")));
});
anchor.optimize.slope = (function anchor$optimize$slope(risk_weighting,p__35780){
var map__35783 = p__35780;
var map__35783__$1 = ((((!((map__35783 == null)))?((((map__35783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35783):map__35783);
var fair_value_discount = cljs.core.get.call(null,map__35783__$1,"fair-value-discount");
var leverage = cljs.core.get.call(null,map__35783__$1,"leverage");
return (fair_value_discount + (leverage * risk_weighting));
});
anchor.optimize.countries = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Australia","Singapore","Hong Kong"], null);
anchor.optimize.country_mins = cljs.core.zipmap.call(null,anchor.optimize.countries,cljs.core.repeat.call(null,0.2));
anchor.optimize.country_maxs = cljs.core.zipmap.call(null,anchor.optimize.countries,cljs.core.repeat.call(null,0.4));
anchor.optimize.stock_max = 0.2;
anchor.optimize.risk_weighting = (0);
anchor.optimize.apply_interpose = (function anchor$optimize$apply_interpose(i,s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,i,s));
});
anchor.optimize.apply_spaces = (function anchor$optimize$apply_spaces(s){
return anchor.optimize.apply_interpose.call(null," + ",s);
});
anchor.optimize.apply_commas = (function anchor$optimize$apply_commas(s){
return anchor.optimize.apply_interpose.call(null,", ",s);
});
anchor.optimize.constraint_line = (function anchor$optimize$constraint_line(constraint_i,factors,bound){
return anchor.util.format.call(null,"s.t. c%s: %s <= %s;",constraint_i,anchor.optimize.apply_spaces.call(null,cljs.core.map.call(null,(function (p__35787){
var vec__35788 = p__35787;
var i = cljs.core.nth.call(null,vec__35788,(0),null);
var factor = cljs.core.nth.call(null,vec__35788,(1),null);
return anchor.util.format.call(null,"%s * x%s",factor,i);
}),factors)),bound);
});
anchor.optimize.streamify_string = (function anchor$optimize$streamify_string(s){
var G__35790 = (new anchor.optimize.stream.Readable());
G__35790.push(s);

G__35790.push(null);

return G__35790;
});
anchor.optimize.parse_results = (function anchor$optimize$parse_results(s){
var lines = s.split("\n");
var lines__$1 = cljs.core.butlast.call(null,cljs.core.rest.call(null,cljs.core.drop_while.call(null,((function (lines){
return (function (p1__35791_SHARP_){
return cljs.core.not.call(null,p1__35791_SHARP_.startsWith("Display statement at line"));
});})(lines))
,lines)));
return cljs.core.map.call(null,((function (lines,lines__$1){
return (function (p1__35792_SHARP_){
return Number(cljs.core.second.call(null,p1__35792_SHARP_.split(" = ")));
});})(lines,lines__$1))
,lines__$1);
});
/**
 * Allocate stocks by maximizing a linear multivariate function subject to constraints.
 */
anchor.optimize.optimize = (function anchor$optimize$optimize(var_args){
var args35799 = [];
var len__5201__auto___35806 = arguments.length;
var i__5202__auto___35807 = (0);
while(true){
if((i__5202__auto___35807 < len__5201__auto___35806)){
args35799.push((arguments[i__5202__auto___35807]));

var G__35808 = (i__5202__auto___35807 + (1));
i__5202__auto___35807 = G__35808;
continue;
} else {
}
break;
}

var G__35801 = args35799.length;
switch (G__35801) {
case 0:
return anchor.optimize.optimize.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return anchor.optimize.optimize.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35799.length)].join('')));

}
});

anchor.optimize.optimize.cljs$core$IFn$_invoke$arity$0 = (function (){
return anchor.optimize.optimize.call(null,anchor.optimize.country_mins,anchor.optimize.country_maxs,anchor.optimize.stock_max,anchor.optimize.risk_weighting);
});

anchor.optimize.optimize.cljs$core$IFn$_invoke$arity$4 = (function (country_mins,country_maxs,stock_max,risk_weighting){
var nums = anchor.update_calculations.nums.call(null);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null),((function (nums){
return (function (){
var country_mins__$1 = anchor.util.value_map.call(null,((function (nums){
return (function (p1__35793_SHARP_){
return (p1__35793_SHARP_ * 0.01);
});})(nums))
,country_mins);
var country_maxs__$1 = anchor.util.value_map.call(null,((function (country_mins__$1,nums){
return (function (p1__35794_SHARP_){
return (p1__35794_SHARP_ * 0.01);
});})(country_mins__$1,nums))
,country_maxs);
var stock_max__$1 = (stock_max * 0.01);
var companies = cljs.core.keys.call(null,cljs.core.deref.call(null,nums));
var values = cljs.core.vals.call(null,cljs.core.deref.call(null,nums));
var company_order = cljs.core.zipmap.call(null,companies,cljs.core.range.call(null));
var company__GT_country = cljs.core.zipmap.call(null,companies,cljs.core.map.call(null,anchor.optimize.company__GT_country,companies));
var countries = cljs.core.set.call(null,cljs.core.vals.call(null,company__GT_country));
var grouped_companies = cljs.core.group_by.call(null,company__GT_country,companies);
var n = cljs.core.count.call(null,companies);
var nc = cljs.core.count.call(null,countries);
var declarations = cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,nums){
return (function (p1__35795_SHARP_){
return anchor.util.format.call(null,"var x%s;",p1__35795_SHARP_);
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,nums))
,cljs.core.range.call(null,n));
var objective = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anchor.util.format.call(null,"maximize obj: %s;",anchor.optimize.apply_spaces.call(null,cljs.core.map_indexed.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,nums){
return (function (i,val){
return anchor.util.format.call(null,"%s * x%s",anchor.optimize.slope.call(null,risk_weighting,val),i);
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,nums))
,values)))], null);
var normality = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anchor.util.format.call(null,"s.t. c1: %s = 1;",anchor.optimize.apply_spaces.call(null,cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,nums){
return (function (p1__35796_SHARP_){
return anchor.util.format.call(null,"x%s",p1__35796_SHARP_);
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,nums))
,cljs.core.range.call(null,n))))], null);
var lower_bounds = cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,nums){
return (function (constraint_i,i){
return anchor.optimize.constraint_line.call(null,constraint_i,cljs.core.PersistentArrayMap.fromArray([i,(-1)], true, false),(0));
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,nums))
,cljs.core.range.call(null,(2),((2) + n)),cljs.core.range.call(null,n));
var upper_bounds = cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,nums){
return (function (constraint_i,i){
return anchor.optimize.constraint_line.call(null,constraint_i,cljs.core.PersistentArrayMap.fromArray([i,(1)], true, false),stock_max__$1);
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,nums))
,cljs.core.range.call(null,((2) + n),(((2) + n) + n)),cljs.core.range.call(null,n));
var lower_country = cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,nums){
return (function (constraint_i,p__35802){
var vec__35803 = p__35802;
var country = cljs.core.nth.call(null,vec__35803,(0),null);
var companies__$1 = cljs.core.nth.call(null,vec__35803,(1),null);
return anchor.optimize.constraint_line.call(null,constraint_i,cljs.core.zipmap.call(null,cljs.core.map.call(null,company_order,companies__$1),cljs.core.repeat.call(null,(-1))),(- country_mins__$1.call(null,country)));
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,nums))
,cljs.core.range.call(null,(((2) + n) + n),((((2) + n) + n) + nc)),grouped_companies);
var upper_country = cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,nums){
return (function (constraint_i,p__35804){
var vec__35805 = p__35804;
var country = cljs.core.nth.call(null,vec__35805,(0),null);
var companies__$1 = cljs.core.nth.call(null,vec__35805,(1),null);
return anchor.optimize.constraint_line.call(null,constraint_i,cljs.core.zipmap.call(null,cljs.core.map.call(null,company_order,companies__$1),cljs.core.repeat.call(null,(1))),country_maxs__$1.call(null,country));
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,nums))
,cljs.core.range.call(null,((((2) + n) + n) + nc),(((((2) + n) + n) + nc) + nc)),grouped_companies);
var display = anchor.util.format.call(null,"display %s;",anchor.optimize.apply_commas.call(null,cljs.core.map.call(null,((function (country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,nums){
return (function (p1__35797_SHARP_){
return [cljs.core.str("x"),cljs.core.str(p1__35797_SHARP_)].join('');
});})(country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,nums))
,cljs.core.range.call(null,n))));
var suffix = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["solve;",display,"end;"], null);
var s = anchor.optimize.apply_interpose.call(null,"\n",cljs.core.concat.call(null,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,suffix));
var temp_file = [cljs.core.str("temp/"),cljs.core.str(cljs.core.gensym.call(null))].join('');
var _ = redlobster.io.spit.call(null,temp_file,s);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null),((function (_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums){
return (function (){
var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
anchor.optimize.child_process.exec([cljs.core.str("./glpsol --math ../../"),cljs.core.str(temp_file)].join(''),{"cwd": "glpk-4.57/examples"},((function (promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums){
return (function (err,stdout,stderr){
return realise.call(null,((!(clojure.string.includes_QMARK_.call(null,stdout,"PROBLEM HAS NO PRIMAL FEASIBLE SOLUTION")))?cljs.core.zipmap.call(null,companies,anchor.optimize.parse_results.call(null,stdout)):null));
});})(promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums))
);

return promise__5324__auto__;
});})(_,country_mins__$1,country_maxs__$1,stock_max__$1,companies,values,company_order,company__GT_country,countries,grouped_companies,n,nc,declarations,objective,normality,lower_bounds,upper_bounds,lower_country,upper_country,display,suffix,s,temp_file,nums))
);
});})(nums))
);
});

anchor.optimize.optimize.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=optimize.js.map