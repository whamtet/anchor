goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18367__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18368__i = 0, G__18368__a = new Array(arguments.length -  0);
while (G__18368__i < G__18368__a.length) {G__18368__a[G__18368__i] = arguments[G__18368__i + 0]; ++G__18368__i;}
  args = new cljs.core.IndexedSeq(G__18368__a,0);
} 
return G__18367__delegate.call(this,args);};
G__18367.cljs$lang$maxFixedArity = 0;
G__18367.cljs$lang$applyTo = (function (arglist__18369){
var args = cljs.core.seq(arglist__18369);
return G__18367__delegate(args);
});
G__18367.cljs$core$IFn$_invoke$arity$variadic = G__18367__delegate;
return G__18367;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18370__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18370 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18371__i = 0, G__18371__a = new Array(arguments.length -  0);
while (G__18371__i < G__18371__a.length) {G__18371__a[G__18371__i] = arguments[G__18371__i + 0]; ++G__18371__i;}
  args = new cljs.core.IndexedSeq(G__18371__a,0);
} 
return G__18370__delegate.call(this,args);};
G__18370.cljs$lang$maxFixedArity = 0;
G__18370.cljs$lang$applyTo = (function (arglist__18372){
var args = cljs.core.seq(arglist__18372);
return G__18370__delegate(args);
});
G__18370.cljs$core$IFn$_invoke$arity$variadic = G__18370__delegate;
return G__18370;
})()
;

return null;
});
