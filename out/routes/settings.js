// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.settings');
goog.require('cljs.core');
goog.require('routes.index');
goog.require('anchor.db');
goog.require('anchor.model');
goog.require('anchor.util');
routes.settings.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["settings"], null),new cljs.core.PersistentArrayMap(null, 3, ["node_order",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"node-order")),"input",cljs.core.pr_str.call(null,cljs.core.map.call(null,cljs.core.str,anchor.model.manual_input)),"node_types",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"node-types"))], null));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-node-order"], null),(function (request__6549__auto____$1){
var node_order = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"node-order","node-order",1904943466)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"node-order"], null)));
anchor.db.set_db.call(null,"node-order",anchor.util.clean.call(null,node_order));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-node-types"], null),(function (request__6549__auto____$1){
var node_types = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"node-types","node-types",1539943342)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"node-types"], null)));
anchor.db.set_db.call(null,"node-types",anchor.util.clean.call(null,node_types));

return anchor.util.ok_response;
}));
}));

//# sourceMappingURL=settings.js.map