goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14107__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14108__i = 0, G__14108__a = new Array(arguments.length -  0);
while (G__14108__i < G__14108__a.length) {G__14108__a[G__14108__i] = arguments[G__14108__i + 0]; ++G__14108__i;}
  args = new cljs.core.IndexedSeq(G__14108__a,0);
} 
return G__14107__delegate.call(this,args);};
G__14107.cljs$lang$maxFixedArity = 0;
G__14107.cljs$lang$applyTo = (function (arglist__14109){
var args = cljs.core.seq(arglist__14109);
return G__14107__delegate(args);
});
G__14107.cljs$core$IFn$_invoke$arity$variadic = G__14107__delegate;
return G__14107;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14110__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14110 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14111__i = 0, G__14111__a = new Array(arguments.length -  0);
while (G__14111__i < G__14111__a.length) {G__14111__a[G__14111__i] = arguments[G__14111__i + 0]; ++G__14111__i;}
  args = new cljs.core.IndexedSeq(G__14111__a,0);
} 
return G__14110__delegate.call(this,args);};
G__14110.cljs$lang$maxFixedArity = 0;
G__14110.cljs$lang$applyTo = (function (arglist__14112){
var args = cljs.core.seq(arglist__14112);
return G__14110__delegate(args);
});
G__14110.cljs$core$IFn$_invoke$arity$variadic = G__14110__delegate;
return G__14110;
})()
;

return null;
});
