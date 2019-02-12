// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.allocation');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('anchor.db');
goog.require('routes.index');
goog.require('anchor.yahoo');
goog.require('anchor.util');
goog.require('anchor.optimize');
routes.allocation.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["portfolio-allocation"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["allocation"], null),new cljs.core.PersistentArrayMap(null, 1, ["company_names",cljs.core.pr_str.call(null,anchor.util.value_map.call(null,(function (p1__36798_SHARP_){
return p1__36798_SHARP_.call(null,"name");
}),anchor.db.get_db.call(null,"company-metadata")))], null));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["allocate"], null),(function (request__6549__auto____$1){
var country_mins = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"country-mins","country-mins",2077207079)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"country-mins"], null)));
var country_maxs = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"country-maxs","country-maxs",-2134647283)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"country-maxs"], null)));
var stock_max = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"stock-max","stock-max",2121137584)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"stock-max"], null)));
var risk_weighting = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"risk-weighting","risk-weighting",-632606128)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"risk-weighting"], null)));
var country_mins__$1 = anchor.util.clean.call(null,country_mins);
var country_maxs__$1 = anchor.util.clean.call(null,country_maxs);
cljs.core.println.call(null,"allocating");

var allocation = anchor.optimize.optimize.call(null,country_mins__$1,country_maxs__$1,stock_max,risk_weighting);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [allocation], null),((function (allocation,country_mins__$1,country_maxs__$1,country_mins,country_maxs,stock_max,risk_weighting){
return (function (){
return anchor.util.pr_response.call(null,cljs.core.deref.call(null,allocation));
});})(allocation,country_mins__$1,country_maxs__$1,country_mins,country_maxs,stock_max,risk_weighting))
);
}));
}));

//# sourceMappingURL=allocation.js.map