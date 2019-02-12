// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.middleware.session');
goog.require('cljs.core');
goog.require('dogfort.middleware.cookies');
goog.require('dogfort.middleware.session.store');
goog.require('dogfort.middleware.session.memory');
goog.require('redlobster.promise');
dogfort.middleware.session.session_options = (function dogfort$middleware$session$session_options(options){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"store","store",1512230022),new cljs.core.Keyword(null,"store","store",1512230022).cljs$core$IFn$_invoke$arity$2(options,dogfort.middleware.session.memory.memory_store.call(null)),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745),new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745).cljs$core$IFn$_invoke$arity$2(options,"ring-session"),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"http-only","http-only",-825379555),true], null),new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946).cljs$core$IFn$_invoke$arity$1(options),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),root], null);
} else {
return null;
}
})())], null);
});
dogfort.middleware.session.bare_session_request = (function dogfort$middleware$session$bare_session_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35649 = arguments.length;
var i__5202__auto___35650 = (0);
while(true){
if((i__5202__auto___35650 < len__5201__auto___35649)){
args__5208__auto__.push((arguments[i__5202__auto___35650]));

var G__35651 = (i__5202__auto___35650 + (1));
i__5202__auto___35650 = G__35651;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__35645){
var vec__35646 = p__35645;
var map__35647 = cljs.core.nth.call(null,vec__35646,(0),null);
var map__35647__$1 = ((((!((map__35647 == null)))?((((map__35647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35647):map__35647);
var store = cljs.core.get.call(null,map__35647__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__35647__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var req_key = cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cookies","cookies",1839416329),cookie_name,new cljs.core.Keyword(null,"value","value",305978217)], null));
var session = dogfort.middleware.session.store.read_session.call(null,store,req_key);
var session_key = (cljs.core.truth_(session)?req_key:null);
return cljs.core.merge.call(null,request,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"session","session",1008279103),(function (){var or__4143__auto__ = session;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword("session","key","session/key",756123603),session_key], null));
});

dogfort.middleware.session.bare_session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.bare_session_request.cljs$lang$applyTo = (function (seq35643){
var G__35644 = cljs.core.first.call(null,seq35643);
var seq35643__$1 = cljs.core.next.call(null,seq35643);
return dogfort.middleware.session.bare_session_request.cljs$core$IFn$_invoke$arity$variadic(G__35644,seq35643__$1);
});
/**
 * Reads current HTTP session map and adds it to :session key of the request.
 *   See: wrap-session.
 */
dogfort.middleware.session.session_request = (function dogfort$middleware$session$session_request(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35656 = arguments.length;
var i__5202__auto___35657 = (0);
while(true){
if((i__5202__auto___35657 < len__5201__auto___35656)){
args__5208__auto__.push((arguments[i__5202__auto___35657]));

var G__35658 = (i__5202__auto___35657 + (1));
i__5202__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic = (function (request,p__35654){
var vec__35655 = p__35654;
var options = cljs.core.nth.call(null,vec__35655,(0),null);
return dogfort.middleware.session.bare_session_request.call(null,dogfort.middleware.cookies.cookies_request.call(null,request),options);
});

dogfort.middleware.session.session_request.cljs$lang$maxFixedArity = (1);

dogfort.middleware.session.session_request.cljs$lang$applyTo = (function (seq35652){
var G__35653 = cljs.core.first.call(null,seq35652);
var seq35652__$1 = cljs.core.next.call(null,seq35652);
return dogfort.middleware.session.session_request.cljs$core$IFn$_invoke$arity$variadic(G__35653,seq35652__$1);
});
dogfort.middleware.session.bare_session_response = (function dogfort$middleware$session$bare_session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35669 = arguments.length;
var i__5202__auto___35670 = (0);
while(true){
if((i__5202__auto___35670 < len__5201__auto___35669)){
args__5208__auto__.push((arguments[i__5202__auto___35670]));

var G__35671 = (i__5202__auto___35670 + (1));
i__5202__auto___35670 = G__35671;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,p__35662,p__35663){
var map__35664 = p__35662;
var map__35664__$1 = ((((!((map__35664 == null)))?((((map__35664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35664):map__35664);
var session_key = cljs.core.get.call(null,map__35664__$1,new cljs.core.Keyword("session","key","session/key",756123603));
var vec__35665 = p__35663;
var map__35666 = cljs.core.nth.call(null,vec__35665,(0),null);
var map__35666__$1 = ((((!((map__35666 == null)))?((((map__35666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35666):map__35666);
var store = cljs.core.get.call(null,map__35666__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var cookie_name = cljs.core.get.call(null,map__35666__$1,new cljs.core.Keyword(null,"cookie-name","cookie-name",1560376745));
var cookie_attrs = cljs.core.get.call(null,map__35666__$1,new cljs.core.Keyword(null,"cookie-attrs","cookie-attrs",-1318966946));
var new_session_key = ((cljs.core.contains_QMARK_.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103)))?(function (){var temp__4423__auto__ = response.call(null,new cljs.core.Keyword(null,"session","session",1008279103));
if(cljs.core.truth_(temp__4423__auto__)){
var session = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"recreate","recreate",706397197).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,session)))){
dogfort.middleware.session.store.delete_session.call(null,store,session_key);

return dogfort.middleware.session.store.write_session.call(null,store,null,session);
} else {
return dogfort.middleware.session.store.write_session.call(null,store,session_key,session);
}
} else {
if(cljs.core.truth_(session_key)){
return dogfort.middleware.session.store.delete_session.call(null,store,session_key);
} else {
return null;
}
}
})():null);
var session_attrs = new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706).cljs$core$IFn$_invoke$arity$1(response);
var cookie = cljs.core.PersistentArrayMap.fromArray([cookie_name,cljs.core.merge.call(null,cookie_attrs,session_attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4143__auto__ = new_session_key;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return session_key;
}
})()], null))], true, false);
var response__$1 = cljs.core.dissoc.call(null,response,new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"session-cookie-attrs","session-cookie-attrs",-680857706));
if(cljs.core.truth_((function (){var or__4143__auto__ = (function (){var and__4131__auto__ = new_session_key;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.not_EQ_.call(null,session_key,new_session_key);
} else {
return and__4131__auto__;
}
})();
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var and__4131__auto__ = session_attrs;
if(cljs.core.truth_(and__4131__auto__)){
var or__4143__auto____$1 = new_session_key;
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
return session_key;
}
} else {
return and__4131__auto__;
}
}
})())){
return cljs.core.assoc.call(null,response__$1,new cljs.core.Keyword(null,"cookies","cookies",1839416329),cljs.core.merge.call(null,response__$1.call(null,new cljs.core.Keyword(null,"cookies","cookies",1839416329)),cookie));
} else {
return response__$1;
}
});

dogfort.middleware.session.bare_session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.bare_session_response.cljs$lang$applyTo = (function (seq35659){
var G__35660 = cljs.core.first.call(null,seq35659);
var seq35659__$1 = cljs.core.next.call(null,seq35659);
var G__35661 = cljs.core.first.call(null,seq35659__$1);
var seq35659__$2 = cljs.core.next.call(null,seq35659__$1);
return dogfort.middleware.session.bare_session_response.cljs$core$IFn$_invoke$arity$variadic(G__35660,G__35661,seq35659__$2);
});
/**
 * Updates session based on :session key in response. See: wrap-session.
 */
dogfort.middleware.session.session_response = (function dogfort$middleware$session$session_response(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35677 = arguments.length;
var i__5202__auto___35678 = (0);
while(true){
if((i__5202__auto___35678 < len__5201__auto___35677)){
args__5208__auto__.push((arguments[i__5202__auto___35678]));

var G__35679 = (i__5202__auto___35678 + (1));
i__5202__auto___35678 = G__35679;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic = (function (response,request,p__35675){
var vec__35676 = p__35675;
var options = cljs.core.nth.call(null,vec__35676,(0),null);
var response__$1 = response;
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response__$1], null),((function (response__$1,vec__35676,options){
return (function (){
return dogfort.middleware.session.bare_session_response.call(null,cljs.core.deref.call(null,response__$1),request,options);
});})(response__$1,vec__35676,options))
);
});

dogfort.middleware.session.session_response.cljs$lang$maxFixedArity = (2);

dogfort.middleware.session.session_response.cljs$lang$applyTo = (function (seq35672){
var G__35673 = cljs.core.first.call(null,seq35672);
var seq35672__$1 = cljs.core.next.call(null,seq35672);
var G__35674 = cljs.core.first.call(null,seq35672__$1);
var seq35672__$2 = cljs.core.next.call(null,seq35672__$1);
return dogfort.middleware.session.session_response.cljs$core$IFn$_invoke$arity$variadic(G__35673,G__35674,seq35672__$2);
});
/**
 * Reads in the current HTTP session map, and adds it to the :session key on
 *   the request. If a :session key is added to the response by the handler, the
 *   session is updated with the new value. If the value is nil, the session is
 *   deleted.
 * 
 *   Accepts the following options:
 * 
 *   :store        - An implementation of the SessionStore protocol in the
 *                dogfort.middleware.session.store namespace. This determines how
 *                the session is stored. Defaults to in-memory storage using
 *                dogfort.middleware.session.store/memory-store.
 * 
 *   :root         - The root path of the session. Any path above this will not be
 *                able to see this session. Equivalent to setting the cookie's
 *                path attribute. Defaults to "/".
 * 
 *   :cookie-name  - The name of the cookie that holds the session key. Defaults to
 *                "ring-session"
 * 
 *   :cookie-attrs - A map of attributes to associate with the session cookie.
 *                Defaults to {:http-only true}.
 */
dogfort.middleware.session.wrap_session = (function dogfort$middleware$session$wrap_session(var_args){
var args35680 = [];
var len__5201__auto___35683 = arguments.length;
var i__5202__auto___35684 = (0);
while(true){
if((i__5202__auto___35684 < len__5201__auto___35683)){
args35680.push((arguments[i__5202__auto___35684]));

var G__35685 = (i__5202__auto___35684 + (1));
i__5202__auto___35684 = G__35685;
continue;
} else {
}
break;
}

var G__35682 = args35680.length;
switch (G__35682) {
case 1:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35680.length)].join('')));

}
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return dogfort.middleware.session.wrap_session.call(null,handler,cljs.core.PersistentArrayMap.EMPTY);
});

dogfort.middleware.session.wrap_session.cljs$core$IFn$_invoke$arity$2 = (function (handler,options){
var options__$1 = dogfort.middleware.session.session_options.call(null,options);
return ((function (options__$1){
return (function (request){
var new_request = dogfort.middleware.session.session_request.call(null,request,options__$1);
return dogfort.middleware.session.session_response.call(null,handler.call(null,new_request),new_request,options__$1);
});
;})(options__$1))
});

dogfort.middleware.session.wrap_session.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=session.js.map