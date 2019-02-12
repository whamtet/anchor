// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.routes');
goog.require('cljs.core');
goog.require('cljs.node');
goog.require('redlobster.promise');
goog.require('dogfort.util.response');
goog.require('dogfort.util.codec');
/**
 * Matches the URL to the matcher and (if they coincide) returns a set of
 *   route bindings.
 */
dogfort.middleware.routes.route_match = (function dogfort$middleware$routes$route_match(url,matcher){
var url__$1 = cljs.core.rest.call(null,url.split("/"));
var G__34780 = matcher;
var vec__34782 = G__34780;
var m = cljs.core.nth.call(null,vec__34782,(0),null);
var matcher__$1 = cljs.core.nthnext.call(null,vec__34782,(1));
var G__34781 = url__$1;
var vec__34783 = G__34781;
var u = cljs.core.nth.call(null,vec__34783,(0),null);
var url__$2 = cljs.core.nthnext.call(null,vec__34783,(1));
var res = cljs.core.PersistentArrayMap.EMPTY;
var G__34780__$1 = G__34780;
var G__34781__$1 = G__34781;
var res__$1 = res;
while(true){
var vec__34784 = G__34780__$1;
var m__$1 = cljs.core.nth.call(null,vec__34784,(0),null);
var matcher__$2 = cljs.core.nthnext.call(null,vec__34784,(1));
var vec__34785 = G__34781__$1;
var u__$1 = cljs.core.nth.call(null,vec__34785,(0),null);
var url__$3 = cljs.core.nthnext.call(null,vec__34785,(1));
var res__$2 = res__$1;
if(cljs.core.not.call(null,(function (){var or__4143__auto__ = m__$1;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return u__$1;
}
})())){
return res__$2;
} else {
if(cljs.core.not.call(null,(function (){var and__4131__auto__ = m__$1;
if(cljs.core.truth_(and__4131__auto__)){
return u__$1;
} else {
return and__4131__auto__;
}
})())){
return null;
} else {
if(cljs.core._EQ_.call(null,"*",m__$1)){
return cljs.core.assoc.call(null,res__$2,new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"/",cljs.core.list_STAR_.call(null,u__$1,url__$3))));
} else {
if(cljs.core.truth_(m__$1.startsWith(":"))){
var G__34786 = matcher__$2;
var G__34787 = url__$3;
var G__34788 = cljs.core.assoc.call(null,res__$2,cljs.core.keyword.call(null,m__$1.substring((1))),dogfort.util.codec.url_decode.call(null,u__$1));
G__34780__$1 = G__34786;
G__34781__$1 = G__34787;
res__$1 = G__34788;
continue;
} else {
if(cljs.core._EQ_.call(null,m__$1,u__$1)){
var G__34789 = matcher__$2;
var G__34790 = url__$3;
var G__34791 = res__$2;
G__34780__$1 = G__34789;
G__34781__$1 = G__34790;
res__$1 = G__34791;
continue;
} else {
return null;
}
}
}
}
}
break;
}
});
dogfort.middleware.routes.merge_params = (function dogfort$middleware$routes$merge_params(request,params){
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(request,cljs.core.PersistentArrayMap.EMPTY),params));
});
dogfort.middleware.routes.eval_route = (function dogfort$middleware$routes$eval_route(request,method,matcher,handler){
if((cljs.core.not.call(null,method)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request),method))){
var temp__4425__auto__ = dogfort.middleware.routes.route_match.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request),matcher);
if(cljs.core.truth_(temp__4425__auto__)){
var matches = temp__4425__auto__;
return handler.call(null,dogfort.middleware.routes.merge_params.call(null,request,matches));
} else {
return null;
}
} else {
return null;
}
});
dogfort.middleware.routes.routing = (function dogfort$middleware$routes$routing(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34795 = arguments.length;
var i__5202__auto___34796 = (0);
while(true){
if((i__5202__auto___34796 < len__5201__auto___34795)){
args__5208__auto__.push((arguments[i__5202__auto___34796]));

var G__34797 = (i__5202__auto___34796 + (1));
i__5202__auto___34796 = G__34797;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic = (function (request,handlers){
var response = cljs.core.some.call(null,(function (p1__34792_SHARP_){
return p1__34792_SHARP_.call(null,request);
}),handlers);
if(cljs.core.truth_(redlobster.promise.promise_QMARK_.call(null,response))){
return response;
} else {
if(cljs.core.map_QMARK_.call(null,response)){
return redlobster.promise.promise.call(null,response);
} else {
if(cljs.core.truth_(response)){
return redlobster.promise.promise.call(null,dogfort.util.response.response.call(null,(200),response));
} else {
return null;
}
}
}
});

dogfort.middleware.routes.routing.cljs$lang$maxFixedArity = (1);

dogfort.middleware.routes.routing.cljs$lang$applyTo = (function (seq34793){
var G__34794 = cljs.core.first.call(null,seq34793);
var seq34793__$1 = cljs.core.next.call(null,seq34793);
return dogfort.middleware.routes.routing.cljs$core$IFn$_invoke$arity$variadic(G__34794,seq34793__$1);
});
dogfort.middleware.routes.routes = (function dogfort$middleware$routes$routes(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34800 = arguments.length;
var i__5202__auto___34801 = (0);
while(true){
if((i__5202__auto___34801 < len__5201__auto___34800)){
args__5208__auto__.push((arguments[i__5202__auto___34801]));

var G__34802 = (i__5202__auto___34801 + (1));
i__5202__auto___34801 = G__34802;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return (function (p1__34798_SHARP_){
return cljs.core.apply.call(null,dogfort.middleware.routes.routing,p1__34798_SHARP_,handlers);
});
});

dogfort.middleware.routes.routes.cljs$lang$maxFixedArity = (0);

dogfort.middleware.routes.routes.cljs$lang$applyTo = (function (seq34799){
return dogfort.middleware.routes.routes.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34799));
});
dogfort.middleware.routes.not_found = (function dogfort$middleware$routes$not_found(request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,null,"*",(function (request__6549__auto____$1){
return dogfort.util.response.default_response.call(null,(404));
}));
});

//# sourceMappingURL=routes.js.map