goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9855__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9856__i = 0, G__9856__a = new Array(arguments.length -  0);
while (G__9856__i < G__9856__a.length) {G__9856__a[G__9856__i] = arguments[G__9856__i + 0]; ++G__9856__i;}
  args = new cljs.core.IndexedSeq(G__9856__a,0);
} 
return G__9855__delegate.call(this,args);};
G__9855.cljs$lang$maxFixedArity = 0;
G__9855.cljs$lang$applyTo = (function (arglist__9857){
var args = cljs.core.seq(arglist__9857);
return G__9855__delegate(args);
});
G__9855.cljs$core$IFn$_invoke$arity$variadic = G__9855__delegate;
return G__9855;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9858__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9859__i = 0, G__9859__a = new Array(arguments.length -  0);
while (G__9859__i < G__9859__a.length) {G__9859__a[G__9859__i] = arguments[G__9859__i + 0]; ++G__9859__i;}
  args = new cljs.core.IndexedSeq(G__9859__a,0);
} 
return G__9858__delegate.call(this,args);};
G__9858.cljs$lang$maxFixedArity = 0;
G__9858.cljs$lang$applyTo = (function (arglist__9860){
var args = cljs.core.seq(arglist__9860);
return G__9858__delegate(args);
});
G__9858.cljs$core$IFn$_invoke$arity$variadic = G__9858__delegate;
return G__9858;
})()
;

return null;
});
