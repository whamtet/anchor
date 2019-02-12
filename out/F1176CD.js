goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22619__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22620__i = 0, G__22620__a = new Array(arguments.length -  0);
while (G__22620__i < G__22620__a.length) {G__22620__a[G__22620__i] = arguments[G__22620__i + 0]; ++G__22620__i;}
  args = new cljs.core.IndexedSeq(G__22620__a,0);
} 
return G__22619__delegate.call(this,args);};
G__22619.cljs$lang$maxFixedArity = 0;
G__22619.cljs$lang$applyTo = (function (arglist__22621){
var args = cljs.core.seq(arglist__22621);
return G__22619__delegate(args);
});
G__22619.cljs$core$IFn$_invoke$arity$variadic = G__22619__delegate;
return G__22619;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22622__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22623__i = 0, G__22623__a = new Array(arguments.length -  0);
while (G__22623__i < G__22623__a.length) {G__22623__a[G__22623__i] = arguments[G__22623__i + 0]; ++G__22623__i;}
  args = new cljs.core.IndexedSeq(G__22623__a,0);
} 
return G__22622__delegate.call(this,args);};
G__22622.cljs$lang$maxFixedArity = 0;
G__22622.cljs$lang$applyTo = (function (arglist__22624){
var args = cljs.core.seq(arglist__22624);
return G__22622__delegate(args);
});
G__22622.cljs$core$IFn$_invoke$arity$variadic = G__22622__delegate;
return G__22622;
})()
;

return null;
});
