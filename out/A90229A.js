goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32551__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32552__i = 0, G__32552__a = new Array(arguments.length -  0);
while (G__32552__i < G__32552__a.length) {G__32552__a[G__32552__i] = arguments[G__32552__i + 0]; ++G__32552__i;}
  args = new cljs.core.IndexedSeq(G__32552__a,0);
} 
return G__32551__delegate.call(this,args);};
G__32551.cljs$lang$maxFixedArity = 0;
G__32551.cljs$lang$applyTo = (function (arglist__32553){
var args = cljs.core.seq(arglist__32553);
return G__32551__delegate(args);
});
G__32551.cljs$core$IFn$_invoke$arity$variadic = G__32551__delegate;
return G__32551;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32554__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32554 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32555__i = 0, G__32555__a = new Array(arguments.length -  0);
while (G__32555__i < G__32555__a.length) {G__32555__a[G__32555__i] = arguments[G__32555__i + 0]; ++G__32555__i;}
  args = new cljs.core.IndexedSeq(G__32555__a,0);
} 
return G__32554__delegate.call(this,args);};
G__32554.cljs$lang$maxFixedArity = 0;
G__32554.cljs$lang$applyTo = (function (arglist__32556){
var args = cljs.core.seq(arglist__32556);
return G__32554__delegate(args);
});
G__32554.cljs$core$IFn$_invoke$arity$variadic = G__32554__delegate;
return G__32554;
})()
;

return null;
});
