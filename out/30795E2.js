goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36803__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36803 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36804__i = 0, G__36804__a = new Array(arguments.length -  0);
while (G__36804__i < G__36804__a.length) {G__36804__a[G__36804__i] = arguments[G__36804__i + 0]; ++G__36804__i;}
  args = new cljs.core.IndexedSeq(G__36804__a,0);
} 
return G__36803__delegate.call(this,args);};
G__36803.cljs$lang$maxFixedArity = 0;
G__36803.cljs$lang$applyTo = (function (arglist__36805){
var args = cljs.core.seq(arglist__36805);
return G__36803__delegate(args);
});
G__36803.cljs$core$IFn$_invoke$arity$variadic = G__36803__delegate;
return G__36803;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36806__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36806 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36807__i = 0, G__36807__a = new Array(arguments.length -  0);
while (G__36807__i < G__36807__a.length) {G__36807__a[G__36807__i] = arguments[G__36807__i + 0]; ++G__36807__i;}
  args = new cljs.core.IndexedSeq(G__36807__a,0);
} 
return G__36806__delegate.call(this,args);};
G__36806.cljs$lang$maxFixedArity = 0;
G__36806.cljs$lang$applyTo = (function (arglist__36808){
var args = cljs.core.seq(arglist__36808);
return G__36806__delegate(args);
});
G__36806.cljs$core$IFn$_invoke$arity$variadic = G__36806__delegate;
return G__36806;
})()
;

return null;
});
