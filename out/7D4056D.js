goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24745__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24746__i = 0, G__24746__a = new Array(arguments.length -  0);
while (G__24746__i < G__24746__a.length) {G__24746__a[G__24746__i] = arguments[G__24746__i + 0]; ++G__24746__i;}
  args = new cljs.core.IndexedSeq(G__24746__a,0);
} 
return G__24745__delegate.call(this,args);};
G__24745.cljs$lang$maxFixedArity = 0;
G__24745.cljs$lang$applyTo = (function (arglist__24747){
var args = cljs.core.seq(arglist__24747);
return G__24745__delegate(args);
});
G__24745.cljs$core$IFn$_invoke$arity$variadic = G__24745__delegate;
return G__24745;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24748__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24748 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24749__i = 0, G__24749__a = new Array(arguments.length -  0);
while (G__24749__i < G__24749__a.length) {G__24749__a[G__24749__i] = arguments[G__24749__i + 0]; ++G__24749__i;}
  args = new cljs.core.IndexedSeq(G__24749__a,0);
} 
return G__24748__delegate.call(this,args);};
G__24748.cljs$lang$maxFixedArity = 0;
G__24748.cljs$lang$applyTo = (function (arglist__24750){
var args = cljs.core.seq(arglist__24750);
return G__24748__delegate(args);
});
G__24748.cljs$core$IFn$_invoke$arity$variadic = G__24748__delegate;
return G__24748;
})()
;

return null;
});
