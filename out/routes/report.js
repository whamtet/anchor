// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.report');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('pdf.report');
goog.require('anchor.db');
goog.require('routes.index');
goog.require('anchor.util');
routes.report.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["valuation-report"], null),(function (request__6549__auto____$1){
var report = pdf.report.pdf.call(null);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [report], null),((function (report){
return (function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["Content-Type","application/pdf","Content-Disposition",anchor.util.format.call(null,"Content-Disposition: attachment; filename=\"Anchor Report %s.pdf\"",anchor.util.datestamp.call(null))], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.deref.call(null,report),new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884),true], null);
});})(report))
);
}));
}));

//# sourceMappingURL=report.js.map