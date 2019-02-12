// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('redlobster.http');
goog.require('cljs.core');
goog.require('redlobster.events');
goog.require('redlobster.promise');
goog.require('redlobster.stream');
goog.require('cljs.node');
redlobster.http.http = require("http");
redlobster.http.request = (function redlobster$http$request(var_args){
var args8431 = [];
var len__5201__auto___8434 = arguments.length;
var i__5202__auto___8435 = (0);
while(true){
if((i__5202__auto___8435 < len__5201__auto___8434)){
args8431.push((arguments[i__5202__auto___8435]));

var G__8436 = (i__5202__auto___8435 + (1));
i__5202__auto___8435 = G__8436;
continue;
} else {
}
break;
}

var G__8433 = args8431.length;
switch (G__8433) {
case 2:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return redlobster.http.request.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8431.length)].join('')));

}
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$2 = (function (options,body){
var promise__8366__auto__ = redlobster.promise.promise.call(null);
var realise__8367__auto__ = ((function (promise__8366__auto__){
return (function (promise__8366__auto____$1,value__8368__auto__){
return redlobster.promise.realise.call(null,promise__8366__auto____$1,value__8368__auto__);
});})(promise__8366__auto__))
;
var realise_error__8369__auto__ = ((function (promise__8366__auto__,realise__8367__auto__){
return (function (promise__8366__auto____$1,value__8368__auto__){
return redlobster.promise.realise_error.call(null,promise__8366__auto____$1,value__8368__auto__);
});})(promise__8366__auto__,realise__8367__auto__))
;
var realise = cljs.core.partial.call(null,realise__8367__auto__,promise__8366__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__8369__auto__,promise__8366__auto__);
var req_8438 = redlobster.http.http.request(cljs.core.clj__GT_js.call(null,options),((function (promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error){
return (function (p1__8429_SHARP_){
return realise.call(null,p1__8429_SHARP_);
});})(promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error))
);
redlobster.events.on.call(null,req_8438,"error",((function (req_8438,promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error){
return (function (p1__8430_SHARP_){
return realise_error.call(null,p1__8430_SHARP_);
});})(req_8438,promise__8366__auto__,realise__8367__auto__,realise_error__8369__auto__,realise,realise_error))
);

if(cljs.core.truth_(body)){
redlobster.stream.write_stream.call(null,req_8438,body);
} else {
req_8438.end();
}

return promise__8366__auto__;
});

redlobster.http.request.cljs$core$IFn$_invoke$arity$1 = (function (options){
return redlobster.http.request.call(null,options,null);
});

redlobster.http.request.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=http.js.map