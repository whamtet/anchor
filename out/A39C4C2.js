goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30425__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30425 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30426__i = 0, G__30426__a = new Array(arguments.length -  0);
while (G__30426__i < G__30426__a.length) {G__30426__a[G__30426__i] = arguments[G__30426__i + 0]; ++G__30426__i;}
  args = new cljs.core.IndexedSeq(G__30426__a,0);
} 
return G__30425__delegate.call(this,args);};
G__30425.cljs$lang$maxFixedArity = 0;
G__30425.cljs$lang$applyTo = (function (arglist__30427){
var args = cljs.core.seq(arglist__30427);
return G__30425__delegate(args);
});
G__30425.cljs$core$IFn$_invoke$arity$variadic = G__30425__delegate;
return G__30425;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30428__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30428 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30429__i = 0, G__30429__a = new Array(arguments.length -  0);
while (G__30429__i < G__30429__a.length) {G__30429__a[G__30429__i] = arguments[G__30429__i + 0]; ++G__30429__i;}
  args = new cljs.core.IndexedSeq(G__30429__a,0);
} 
return G__30428__delegate.call(this,args);};
G__30428.cljs$lang$maxFixedArity = 0;
G__30428.cljs$lang$applyTo = (function (arglist__30430){
var args = cljs.core.seq(arglist__30430);
return G__30428__delegate(args);
});
G__30428.cljs$core$IFn$_invoke$arity$variadic = G__30428__delegate;
return G__30428;
})()
;

return null;
});
