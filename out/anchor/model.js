// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.model');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.js');
goog.require('redlobster.promise');
anchor.model.model = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"income-asset-value","income-asset-value",-935444350,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"net-income","net-income",-587431970,null),new cljs.core.Symbol(null,"cap-rate","cap-rate",2113124441,null)),new cljs.core.Symbol(null,"gross-asset-value","gross-asset-value",-1135250079,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"income-asset-value","income-asset-value",-935444350,null),new cljs.core.Symbol(null,"cash","cash",1821653749,null),new cljs.core.Symbol(null,"other-assets","other-assets",-1121363051,null)),new cljs.core.Symbol(null,"net-asset-value","net-asset-value",-871117578,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"gross-asset-value","gross-asset-value",-1135250079,null),new cljs.core.Symbol(null,"total-liabilities","total-liabilities",316180845,null)),new cljs.core.Symbol(null,"new-project-value","new-project-value",-1440115132,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"new-project-expenditure","new-project-expenditure",-634415244,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"new-project-return","new-project-return",988044495,null),new cljs.core.Symbol(null,"cap-rate","cap-rate",2113124441,null)),(1))),new cljs.core.Symbol(null,"fair-value","fair-value",257725672,null),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"net-asset-value","net-asset-value",-871117578,null),new cljs.core.Symbol(null,"new-project-value","new-project-value",-1440115132,null)),new cljs.core.Symbol(null,"market-cap","market-cap",1826631220,null),cljs.core.list(new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"shares-outstanding","shares-outstanding",-1643643928,null),new cljs.core.Symbol(null,"share-price","share-price",1624017400,null)),new cljs.core.Symbol(null,"nav-discount","nav-discount",-546283431,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"market-cap","market-cap",1826631220,null),new cljs.core.Symbol(null,"net-asset-value","net-asset-value",-871117578,null)),(1)),new cljs.core.Symbol(null,"fair-value-discount","fair-value-discount",1204603856,null),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"market-cap","market-cap",1826631220,null),new cljs.core.Symbol(null,"fair-value","fair-value",257725672,null)),(1)),new cljs.core.Symbol(null,"leverage","leverage",199374377,null),cljs.core.list(new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"total-liabilities","total-liabilities",316180845,null),new cljs.core.Symbol(null,"net-asset-value","net-asset-value",-871117578,null))], null);
anchor.model.automatic_input = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"shares-outstanding","shares-outstanding",-1643643928,null),null,new cljs.core.Symbol(null,"share-price","share-price",1624017400,null),null,new cljs.core.Symbol(null,"cap-rate","cap-rate",2113124441,null),null], null), null);
anchor.model.node_QMARK_ = (function anchor$model$node_QMARK_(node){
var and__4131__auto__ = cljs.core.not_EQ_.call(null,node,new cljs.core.Symbol(null,"-","-",-471816912,null));
if(and__4131__auto__){
return cljs.core.re_find.call(null,/^[a-z\-]+$/,[cljs.core.str(node)].join(''));
} else {
return and__4131__auto__;
}
});
/**
 * get the nodes for a form
 */
anchor.model.get_nodes = (function anchor$model$get_nodes(form){
return cljs.core.set.call(null,cljs.core.filter.call(null,anchor.model.node_QMARK_,cljs.core.flatten.call(null,form)));
});
anchor.model.nodes = anchor.model.get_nodes.call(null,anchor.model.model);
anchor.model.dependencies = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4915__auto__ = (function anchor$model$iter__9004(s__9005){
return (new cljs.core.LazySeq(null,(function (){
var s__9005__$1 = s__9005;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9005__$1);
if(temp__4425__auto__){
var s__9005__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9005__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__9005__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__9007 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__9006 = (0);
while(true){
if((i__9006 < size__4914__auto__)){
var vec__9010 = cljs.core._nth.call(null,c__4913__auto__,i__9006);
var k = cljs.core.nth.call(null,vec__9010,(0),null);
var v = cljs.core.nth.call(null,vec__9010,(1),null);
cljs.core.chunk_append.call(null,b__9007,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,anchor.model.get_nodes.call(null,v)], null));

var G__9012 = (i__9006 + (1));
i__9006 = G__9012;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9007),anchor$model$iter__9004.call(null,cljs.core.chunk_rest.call(null,s__9005__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9007),null);
}
} else {
var vec__9011 = cljs.core.first.call(null,s__9005__$2);
var k = cljs.core.nth.call(null,vec__9011,(0),null);
var v = cljs.core.nth.call(null,vec__9011,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,anchor.model.get_nodes.call(null,v)], null),anchor$model$iter__9004.call(null,cljs.core.rest.call(null,s__9005__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,cljs.core.partition.call(null,(2),anchor.model.model));
})());
anchor.model.output = cljs.core.set.call(null,cljs.core.keys.call(null,anchor.model.dependencies));
anchor.model.input = clojure.set.difference.call(null,anchor.model.nodes,anchor.model.output);
anchor.model.manual_input = clojure.set.difference.call(null,anchor.model.input,anchor.model.automatic_input);
anchor.model.final_output = cljs.core.apply.call(null,clojure.set.difference,anchor.model.output,cljs.core.vals.call(null,anchor.model.dependencies));
anchor.model.safe_model = clojure.walk.prewalk.call(null,(function (p1__9013_SHARP_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"safe-divide","safe-divide",-353193610,null)], null).call(null,p1__9013_SHARP_,p1__9013_SHARP_);
}),anchor.model.model);
anchor.model.state = cljs.js.empty_state.call(null);
/**
 * compute model output
 */
anchor.model.add_output = (function anchor$model$add_output(company,input_map){
var defined_vars = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.symbol,cljs.core.keys.call(null,input_map)));
var safe_model = cljs.core.mapcat.call(null,((function (defined_vars){
return (function (p__9022){
var vec__9023 = p__9022;
var a = cljs.core.nth.call(null,vec__9023,(0),null);
var b = cljs.core.nth.call(null,vec__9023,(1),null);
if(cljs.core.not.call(null,defined_vars.call(null,a))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
} else {
return null;
}
});})(defined_vars))
,cljs.core.partition.call(null,(2),anchor.model.safe_model));
var code = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (defined_vars,safe_model){
return (function (symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [symbol,input_map.call(null,[cljs.core.str(symbol)].join(''),(0))], null);
});})(defined_vars,safe_model))
,anchor.model.nodes),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"safe-divide","safe-divide",-353193610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"&","&",-2144855648,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__9014__auto__","vals__9014__auto__",1406215864,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","some","cljs.core/some",-977628065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__9014__auto__","vals__9014__auto__",1406215864,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__9014__auto__","vals__9014__auto__",1406215864,null)))))))))))))),safe_model,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"output__9015__auto__","output__9015__auto__",-1412416812,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.mapv.call(null,cljs.core.str,anchor.model.output)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,anchor.model.output))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","merge","cljs.core/merge",-822184067,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,input_map),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"output__9015__auto__","output__9015__auto__",-1412416812,null)))))))));
var promise__8366__auto__ = redlobster.promise.promise.call(null);
var realise__8367__auto__ = ((function (promise__8366__auto__,defined_vars,safe_model,code){
return (function (promise__8366__auto____$1,value__8368__auto__){
return redlobster.promise.realise.call(null,promise__8366__auto____$1,value__8368__auto__);
});})(promise__8366__auto__,defined_vars,safe_model,code))
;
var realise_error__8369__auto__ = ((function (promise__8366__auto__,realise__8367__auto__,defined_vars,safe_model,code){
return (function (promise__8366__auto____$1,value__8368__auto__){
return redlobster.promise.realise_error.call(null,promise__8366__auto____$1,value__8368__auto__);
});})(promise__8366__auto__,realise__8367__auto__,defined_vars,safe_model,code))
;
var realise = cljs.core.partial.call(null,realise__8367__auto__,promise__8366__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__8369__auto__,promise__8366__auto__);
cljs.js.eval.call(null,anchor.model.state,code,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),((function (promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error,defined_vars,safe_model,code){
return (function (p__9024){
var map__9025 = p__9024;
var map__9025__$1 = ((((!((map__9025 == null)))?((((map__9025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9025):map__9025);
var source = cljs.core.get.call(null,map__9025__$1,new cljs.core.Keyword(null,"source","source",-433931539));
return eval(source);
});})(promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error,defined_vars,safe_model,code))
], null),((function (promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error,defined_vars,safe_model,code){
return (function (p1__9016_SHARP_){
return realise.call(null,p1__9016_SHARP_);
});})(promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error,defined_vars,safe_model,code))
);

return promise__8366__auto__;
});

//# sourceMappingURL=model.js.map