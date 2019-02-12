// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.sectors');
goog.require('cljs.core');
goog.require('routes.index');
goog.require('anchor.db');
goog.require('anchor.util');
routes.sectors.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["economic-sectors"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sectors"], null),new cljs.core.PersistentArrayMap(null, 3, ["economic_sectors",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"economic-sectors")),"company_sectors",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"company-sectors")),"companies",cljs.core.pr_str.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,anchor.db.get_db.call(null,"report-metadata"))))], null));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-economic-sectors"], null),(function (request__6549__auto____$1){
var economic_sectors = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"economic-sectors","economic-sectors",1007946491)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"economic-sectors"], null)));
anchor.db.set_db.call(null,"economic-sectors",anchor.util.clean.call(null,economic_sectors));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-company-sectors"], null),(function (request__6549__auto____$1){
var company_sectors = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company-sectors","company-sectors",1293797875)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company-sectors"], null)));
anchor.db.set_db.call(null,"company-sectors",anchor.util.clean.call(null,company_sectors));

return anchor.util.ok_response;
}));
}));

//# sourceMappingURL=sectors.js.map