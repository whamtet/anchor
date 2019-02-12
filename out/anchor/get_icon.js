// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.get_icon');
goog.require('cljs.core');
goog.require('anchor.util');
goog.require('redlobster.promise');
goog.require('redlobster.io');
goog.require('clojure.string');
anchor.get_icon.join_paths = (function anchor$get_icon$join_paths(paths1,p__35496){
while(true){
var vec__35498 = p__35496;
var starter = cljs.core.nth.call(null,vec__35498,(0),null);
var rest = cljs.core.nthnext.call(null,vec__35498,(1));
var paths2 = vec__35498;
if(cljs.core._EQ_.call(null,"..",starter)){
var G__35499 = cljs.core.butlast.call(null,paths1);
var G__35500 = rest;
paths1 = G__35499;
p__35496 = G__35500;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"/",cljs.core.concat.call(null,paths1,paths2)));
}
break;
}
});
/**
 * Transform base url and path into absolute url.
 *   If path is already absolute do nothing.
 *   
 */
anchor.get_icon.absolutize = (function anchor$get_icon$absolutize(url,path){
var url__$1 = url.trim();
var path__$1 = path.trim();
if(clojure.string.starts_with_QMARK_.call(null,path__$1,"http")){
return path__$1;
} else {
if(clojure.string.starts_with_QMARK_.call(null,path__$1,"/")){
return anchor.get_icon.join_paths.call(null,cljs.core.take.call(null,(3),url__$1.split("/")),cljs.core.rest.call(null,path__$1.split("/")));
} else {
var paths1 = url__$1.split("/");
var frag = cljs.core.last.call(null,paths1);
var paths1__$1 = (cljs.core.truth_((function (){var and__4131__auto__ = (cljs.core.count.call(null,paths1) > (3));
if(and__4131__auto__){
var or__4143__auto__ = cljs.core.empty_QMARK_.call(null,frag);
if(or__4143__auto__){
return or__4143__auto__;
} else {
return anchor.util.str_contains_QMARK_.call(null,frag,".");
}
} else {
return and__4131__auto__;
}
})())?cljs.core.butlast.call(null,paths1):paths1);
return anchor.get_icon.join_paths.call(null,paths1__$1,path__$1.split("/"));

}
}
});
/**
 * find <link> tag
 */
anchor.get_icon.get_link = (function anchor$get_icon$get_link(url,s){
var find_group = (function (p1__35501_SHARP_,p2__35502_SHARP_){
return cljs.core.second.call(null,cljs.core.re_find.call(null,p1__35501_SHARP_,p2__35502_SHARP_));
});
var rel = find_group.call(null,/rel=\"(.+?)\"/,s);
var href = find_group.call(null,/href=\"(.+?)\"/,s);
if(cljs.core.truth_((function (){var G__35504 = rel;
var G__35504__$1 = (((G__35504 == null))?null:G__35504.split(" "));
var G__35504__$2 = (((G__35504__$1 == null))?null:cljs.core.last.call(null,G__35504__$1));
var G__35504__$3 = (((G__35504__$2 == null))?null:G__35504__$2.toLowerCase());
var G__35504__$4 = (((G__35504__$3 == null))?null:cljs.core._EQ_.call(null,G__35504__$3,"icon"));
return G__35504__$4;
})())){
return anchor.get_icon.absolutize.call(null,url,href);
} else {
return null;
}
});
/**
 * Get icon from html <link> metadata
 */
anchor.get_icon.get_icon = (function anchor$get_icon$get_icon(url){
var s = redlobster.io.slurp.call(null,url);
redlobster.promise.timeout.call(null,s,(10000));

var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__,s){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,s))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__,s){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__,s))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
redlobster.promise.on_realised.call(null,s,((function (promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,s){
return (function (p1__35506_SHARP_){
var links = cljs.core.re_seq.call(null,/<link .+?>/,p1__35506_SHARP_);
var icon_url = cljs.core.some.call(null,((function (links,promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,s){
return (function (x){
return anchor.get_icon.get_link.call(null,url,x);
});})(links,promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,s))
,links);
return realise.call(null,icon_url);
});})(promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,s))
,realise);

return promise__5324__auto__;
});

//# sourceMappingURL=get_icon.js.map