goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20493__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20494__i = 0, G__20494__a = new Array(arguments.length -  0);
while (G__20494__i < G__20494__a.length) {G__20494__a[G__20494__i] = arguments[G__20494__i + 0]; ++G__20494__i;}
  args = new cljs.core.IndexedSeq(G__20494__a,0);
} 
return G__20493__delegate.call(this,args);};
G__20493.cljs$lang$maxFixedArity = 0;
G__20493.cljs$lang$applyTo = (function (arglist__20495){
var args = cljs.core.seq(arglist__20495);
return G__20493__delegate(args);
});
G__20493.cljs$core$IFn$_invoke$arity$variadic = G__20493__delegate;
return G__20493;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20496__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20496 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20497__i = 0, G__20497__a = new Array(arguments.length -  0);
while (G__20497__i < G__20497__a.length) {G__20497__a[G__20497__i] = arguments[G__20497__i + 0]; ++G__20497__i;}
  args = new cljs.core.IndexedSeq(G__20497__a,0);
} 
return G__20496__delegate.call(this,args);};
G__20496.cljs$lang$maxFixedArity = 0;
G__20496.cljs$lang$applyTo = (function (arglist__20498){
var args = cljs.core.seq(arglist__20498);
return G__20496__delegate(args);
});
G__20496.cljs$core$IFn$_invoke$arity$variadic = G__20496__delegate;
return G__20496;
})()
;

return null;
});
