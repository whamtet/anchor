// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.program_graph');
goog.require('cljs.core');
goog.require('anchor.update_calculations');
goog.require('redlobster.promise');
goog.require('graph.viz');
goog.require('graph.svg_to_edn');
goog.require('anchor.model');
goog.require('anchor.db');
goog.require('routes.index');
goog.require('dogfort.middleware.routes');
goog.require('anchor.util');
goog.require('clojure.string');
routes.program_graph.node_descriptor = (function routes$program_graph$node_descriptor(s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.replace.call(null,[cljs.core.str(s),cljs.core.str("\n1.23E+45")].join(''),"-"," "),new cljs.core.Keyword(null,"style","style",-496642736),"filled",new cljs.core.Keyword(null,"fillcolor","fillcolor",-151540217),"white"], null);
});
routes.program_graph.im = graph.viz.graph__GT_svg.call(null,anchor.model.nodes,anchor.model.dependencies,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),routes.program_graph.node_descriptor,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),false,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(30)], null));
var im_35491 = routes.program_graph.im;
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [im_35491], null),((function (im_35491){
return (function (){
routes.program_graph.clj_graph = graph.svg_to_edn.parse.call(null,cljs.core.deref.call(null,im_35491));
});})(im_35491))
);
routes.program_graph.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["program-graph"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
var req = request__6549__auto____$1;
var nums = anchor.update_calculations.nums.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [company], null));
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null),((function (nums,company,reporting_period,req){
return (function (){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["program_graph"], null),cljs.core.PersistentHashMap.fromArrays(["values","final_output","company","manual_values","graph","manual_input","automatic_input","nodes","session"],[cljs.core.pr_str.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,nums),company)),cljs.core.pr_str.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.final_output))),cljs.core.pr_str.call(null,company),cljs.core.pr_str.call(null,cljs.core.get.call(null,anchor.db.get_db.call(null,"manual-values"),company)),cljs.core.pr_str.call(null,routes.program_graph.clj_graph),cljs.core.pr_str.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.manual_input))),cljs.core.pr_str.call(null,cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.automatic_input))),cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.nodes)),cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"session","session",1008279103).cljs$core$IFn$_invoke$arity$1(req))]));
});})(nums,company,reporting_period,req))
);
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-manual-values"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var manual_values = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"manual-values","manual-values",1906801009)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"manual-values"], null)));
anchor.db.swap_db.call(null,"manual-values",cljs.core.assoc,company,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (company,manual_values){
return (function (p__35492){
var vec__35493 = p__35492;
var k = cljs.core.nth.call(null,vec__35493,(0),null);
var v = cljs.core.nth.call(null,vec__35493,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
});})(company,manual_values))
,manual_values)));

var nums = anchor.update_calculations.nums.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [company], null));
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null),((function (nums,company,manual_values){
return (function (){
return anchor.util.pr_response.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,nums),company));
});})(nums,company,manual_values))
);
}));
}));

//# sourceMappingURL=program_graph.js.map