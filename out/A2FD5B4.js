goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28299__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28300__i = 0, G__28300__a = new Array(arguments.length -  0);
while (G__28300__i < G__28300__a.length) {G__28300__a[G__28300__i] = arguments[G__28300__i + 0]; ++G__28300__i;}
  args = new cljs.core.IndexedSeq(G__28300__a,0);
} 
return G__28299__delegate.call(this,args);};
G__28299.cljs$lang$maxFixedArity = 0;
G__28299.cljs$lang$applyTo = (function (arglist__28301){
var args = cljs.core.seq(arglist__28301);
return G__28299__delegate(args);
});
G__28299.cljs$core$IFn$_invoke$arity$variadic = G__28299__delegate;
return G__28299;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28302__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28303__i = 0, G__28303__a = new Array(arguments.length -  0);
while (G__28303__i < G__28303__a.length) {G__28303__a[G__28303__i] = arguments[G__28303__i + 0]; ++G__28303__i;}
  args = new cljs.core.IndexedSeq(G__28303__a,0);
} 
return G__28302__delegate.call(this,args);};
G__28302.cljs$lang$maxFixedArity = 0;
G__28302.cljs$lang$applyTo = (function (arglist__28304){
var args = cljs.core.seq(arglist__28304);
return G__28302__delegate(args);
});
G__28302.cljs$core$IFn$_invoke$arity$variadic = G__28302__delegate;
return G__28302;
})()
;

return null;
});
