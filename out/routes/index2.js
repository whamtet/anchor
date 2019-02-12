// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.index2');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('anchor.db');
goog.require('routes.index');
goog.require('anchor.util');
goog.require('clojure.string');
goog.require('anchor.optimize');
routes.index2.old_ie_QMARK_ = (function routes$index2$old_ie_QMARK_(p__35813){
var map__35816 = p__35813;
var map__35816__$1 = ((((!((map__35816 == null)))?((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35816):map__35816);
var user_agent = cljs.core.get.call(null,map__35816__$1,"user-agent");
return (clojure.string.includes_QMARK_.call(null,user_agent,"MSIE")) && (cljs.core.not.call(null,cljs.core.some.call(null,((function (map__35816,map__35816__$1,user_agent){
return (function (p1__35812_SHARP_){
return clojure.string.includes_QMARK_.call(null,user_agent,p1__35812_SHARP_);
});})(map__35816,map__35816__$1,user_agent))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MSIE 10","MSIE 11"], null))));
});
routes.index2.mobile_QMARK_ = (function routes$index2$mobile_QMARK_(p__35818){
var map__35821 = p__35818;
var map__35821__$1 = ((((!((map__35821 == null)))?((((map__35821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35821):map__35821);
var user_agent = cljs.core.get.call(null,map__35821__$1,"user-agent");
return clojure.string.includes_QMARK_.call(null,user_agent,"Mobile");
});
routes.index2.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),(function (request__6549__auto____$1){
var map__35823 = request__6549__auto____$1;
var map__35823__$1 = ((((!((map__35823 == null)))?((((map__35823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35823):map__35823);
var session = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"session","session",1008279103));
var headers = cljs.core.get.call(null,map__35823__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_(routes.index2.old_ie_QMARK_.call(null,headers))){
return "Internet Explorer 9 and Below Not Supported.  Please Upgrade";
} else {
var s = redlobster.io.slurp.call(null,"resources/public/toast/index.html");
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),((function (s,map__35823,map__35823__$1,session,headers){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","text/html; charset=utf-8"], null),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.deref.call(null,s).replace("matty",routes.index.injectoid_s.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["index"], null),new cljs.core.PersistentArrayMap(null, 4, ["session",cljs.core.pr_str.call(null,session),"company_metadata",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"company-metadata")),"report_metadata",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"report-metadata")),"period_coefficients",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"period-coefficients"))], null)))], null);
});})(s,map__35823,map__35823__$1,session,headers))
);
}
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["append-endpoint"], null),(function (request__6549__auto____$1){
var map__35825 = request__6549__auto____$1;
var map__35825__$1 = ((((!((map__35825 == null)))?((((map__35825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35825):map__35825);
var session = cljs.core.get.call(null,map__35825__$1,new cljs.core.Keyword(null,"session","session",1008279103));
var map__35826 = cljs.core.get.call(null,map__35825__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__35826__$1 = ((((!((map__35826 == null)))?((((map__35826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var endpoint = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"endpoint","endpoint",447890044));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),"ok",new cljs.core.Keyword(null,"session","session",1008279103),cljs.core.conj.call(null,((cljs.core.set_QMARK_.call(null,session))?session:cljs.core.PersistentHashSet.EMPTY),endpoint)], null);
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test"], null),cljs.core.PersistentArrayMap.EMPTY);
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dump-db"], null),(function (request__6549__auto____$1){
anchor.db.dump_db.call(null);

return anchor.util.response.call(null,"dumped");
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test2"], null),(function (request__6549__auto____$1){
var req = request__6549__auto____$1;
var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__,req){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,req))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__,req){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__,req))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
realise_error.call(null,"uh oh");

return promise__5324__auto__;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["test3"], null),(function (request__6549__auto____$1){
var req = request__6549__auto____$1;
return cljs.core.pr_str.call(null,req);
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["documentation"], null),(function (request__6549__auto____$1){
return anchor.util.redirect.call(null,"http://whamtet.github.io/anchor/");
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello-world"], null),(function (request__6549__auto____$1){
var name = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"name"], null)));
return [cljs.core.str("Hello "),cljs.core.str(name)].join('');
}));
}));

//# sourceMappingURL=index2.js.map