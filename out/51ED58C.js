goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34677__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34677 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34678__i = 0, G__34678__a = new Array(arguments.length -  0);
while (G__34678__i < G__34678__a.length) {G__34678__a[G__34678__i] = arguments[G__34678__i + 0]; ++G__34678__i;}
  args = new cljs.core.IndexedSeq(G__34678__a,0);
} 
return G__34677__delegate.call(this,args);};
G__34677.cljs$lang$maxFixedArity = 0;
G__34677.cljs$lang$applyTo = (function (arglist__34679){
var args = cljs.core.seq(arglist__34679);
return G__34677__delegate(args);
});
G__34677.cljs$core$IFn$_invoke$arity$variadic = G__34677__delegate;
return G__34677;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34680__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34681__i = 0, G__34681__a = new Array(arguments.length -  0);
while (G__34681__i < G__34681__a.length) {G__34681__a[G__34681__i] = arguments[G__34681__i + 0]; ++G__34681__i;}
  args = new cljs.core.IndexedSeq(G__34681__a,0);
} 
return G__34680__delegate.call(this,args);};
G__34680.cljs$lang$maxFixedArity = 0;
G__34680.cljs$lang$applyTo = (function (arglist__34682){
var args = cljs.core.seq(arglist__34682);
return G__34680__delegate(args);
});
G__34680.cljs$core$IFn$_invoke$arity$variadic = G__34680__delegate;
return G__34680;
})()
;

return null;
});
