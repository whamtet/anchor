goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26871__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26872__i = 0, G__26872__a = new Array(arguments.length -  0);
while (G__26872__i < G__26872__a.length) {G__26872__a[G__26872__i] = arguments[G__26872__i + 0]; ++G__26872__i;}
  args = new cljs.core.IndexedSeq(G__26872__a,0);
} 
return G__26871__delegate.call(this,args);};
G__26871.cljs$lang$maxFixedArity = 0;
G__26871.cljs$lang$applyTo = (function (arglist__26873){
var args = cljs.core.seq(arglist__26873);
return G__26871__delegate(args);
});
G__26871.cljs$core$IFn$_invoke$arity$variadic = G__26871__delegate;
return G__26871;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26874__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26874 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26875__i = 0, G__26875__a = new Array(arguments.length -  0);
while (G__26875__i < G__26875__a.length) {G__26875__a[G__26875__i] = arguments[G__26875__i + 0]; ++G__26875__i;}
  args = new cljs.core.IndexedSeq(G__26875__a,0);
} 
return G__26874__delegate.call(this,args);};
G__26874.cljs$lang$maxFixedArity = 0;
G__26874.cljs$lang$applyTo = (function (arglist__26876){
var args = cljs.core.seq(arglist__26876);
return G__26874__delegate(args);
});
G__26874.cljs$core$IFn$_invoke$arity$variadic = G__26874__delegate;
return G__26874;
})()
;

return null;
});
