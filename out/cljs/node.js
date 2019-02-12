// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.node');
goog.require('cljs.core');
cljs.node.log = (function cljs$node$log(var_args){
var args__5208__auto__ = [];
var len__5201__auto___8346 = arguments.length;
var i__5202__auto___8347 = (0);
while(true){
if((i__5202__auto___8347 < len__5201__auto___8346)){
args__5208__auto__.push((arguments[i__5202__auto___8347]));

var G__8348 = (i__5202__auto___8347 + (1));
i__5202__auto___8347 = G__8348;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.node.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,cljs.core.map.call(null,cljs.core.str,args));
});

cljs.node.log.cljs$lang$maxFixedArity = (0);

cljs.node.log.cljs$lang$applyTo = (function (seq8345){
return cljs.node.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8345));
});
cljs.node.on_node_QMARK_ = (function cljs$node$on_node_QMARK_(){
try{return typeof process.versions.node === 'string';
}catch (e8350){if((e8350 instanceof Error)){
var e = e8350;
return false;
} else {
throw e8350;

}
}});

//# sourceMappingURL=node.js.map