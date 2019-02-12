// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.bberg');
goog.require('cljs.core');
goog.require('routes.index');
goog.require('anchor.util');
goog.require('anchor.model');
goog.require('redlobster.promise');
goog.require('redlobster.io');
routes.bberg.headers = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"NORMALIZED_INCOME","NORMALIZED_INCOME",-70694042,null),new cljs.core.Symbol(null,"EARN_FOR_COMMON","EARN_FOR_COMMON",-274833536,null),new cljs.core.Symbol(null,"BS_TOT_ASSET","BS_TOT_ASSET",-523327342,null),new cljs.core.Symbol(null,"BS_TOT_LIAB2","BS_TOT_LIAB2",1880264203,null),new cljs.core.Symbol(null,"BS_TOT_LIAB_EQY","BS_TOT_LIAB_EQY",-1219964209,null),new cljs.core.Symbol(null,"TOT_LIAB_AND_EQY","TOT_LIAB_AND_EQY",-2115034714,null),new cljs.core.Symbol(null,"CF_NET_CHNG_CASH","CF_NET_CHNG_CASH",-115556637,null)], null);
var s_35833 = redlobster.io.slurp.call(null,"resources/bberg.txt");
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_35833], null),((function (s_35833){
return (function (){
routes.bberg.lines = cljs.core.deref.call(null,s_35833);
});})(s_35833))
);
routes.bberg.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bberg"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bberg"], null),new cljs.core.PersistentArrayMap(null, 3, ["headers",cljs.core.pr_str.call(null,routes.bberg.headers),"lines",routes.bberg.lines,"fields",cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.manual_input))], null));
}));
}));

//# sourceMappingURL=bberg.js.map