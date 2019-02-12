// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34688__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34688 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34689__i = 0, G__34689__a = new Array(arguments.length -  0);
while (G__34689__i < G__34689__a.length) {G__34689__a[G__34689__i] = arguments[G__34689__i + 0]; ++G__34689__i;}
  args = new cljs.core.IndexedSeq(G__34689__a,0);
} 
return G__34688__delegate.call(this,args);};
G__34688.cljs$lang$maxFixedArity = 0;
G__34688.cljs$lang$applyTo = (function (arglist__34690){
var args = cljs.core.seq(arglist__34690);
return G__34688__delegate(args);
});
G__34688.cljs$core$IFn$_invoke$arity$variadic = G__34688__delegate;
return G__34688;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34691__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34692__i = 0, G__34692__a = new Array(arguments.length -  0);
while (G__34692__i < G__34692__a.length) {G__34692__a[G__34692__i] = arguments[G__34692__i + 0]; ++G__34692__i;}
  args = new cljs.core.IndexedSeq(G__34692__a,0);
} 
return G__34691__delegate.call(this,args);};
G__34691.cljs$lang$maxFixedArity = 0;
G__34691.cljs$lang$applyTo = (function (arglist__34693){
var args = cljs.core.seq(arglist__34693);
return G__34691__delegate(args);
});
G__34691.cljs$core$IFn$_invoke$arity$variadic = G__34691__delegate;
return G__34691;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map