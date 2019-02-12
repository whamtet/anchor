// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.index');
goog.require('cljs.core');
goog.require('hiccups.runtime');
goog.require('anchor.util');
/**
 * Returns a skeletal Ring response with the given body, status of 200, and no
 *   headers.
 */
routes.index.response = (function routes$index$response(body){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null);
});
routes.index.map_str = (function routes$index$map_str(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35427 = arguments.length;
var i__5202__auto___35428 = (0);
while(true){
if((i__5202__auto___35428 < len__5201__auto___35427)){
args__5208__auto__.push((arguments[i__5202__auto___35428]));

var G__35429 = (i__5202__auto___35428 + (1));
i__5202__auto___35428 = G__35429;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return routes.index.map_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

routes.index.map_str.cljs$core$IFn$_invoke$arity$variadic = (function (f,s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.apply.call(null,cljs.core.map,f,s)));
});

routes.index.map_str.cljs$lang$maxFixedArity = (1);

routes.index.map_str.cljs$lang$applyTo = (function (seq35425){
var G__35426 = cljs.core.first.call(null,seq35425);
var seq35425__$1 = cljs.core.next.call(null,seq35425);
return routes.index.map_str.cljs$core$IFn$_invoke$arity$variadic(G__35426,seq35425__$1);
});
routes.index.format = anchor.util.format;
routes.index.state = (function routes$index$state(class$,kvs){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),routes.index.format.call(null,"%s anchor.%s.main();",routes.index.map_str.call(null,(function (p1__35430_SHARP_){
return routes.index.format.call(null,"anchor.core.bind_variable('%s', '%s');",class$,p1__35430_SHARP_);
}),cljs.core.keys.call(null,kvs)),class$)], null)),cljs.core.map.call(null,(function (p__35433){
var vec__35434 = p__35433;
var k = cljs.core.nth.call(null,vec__35434,(0),null);
var v = cljs.core.nth.call(null,vec__35434,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"id","id",-1388402092),k,new cljs.core.Keyword(null,"value","value",305978217),v], null)], null);
}),kvs));
});
/**
 * a snippet to pump in clojurescript
 */
routes.index.injectoid = (function routes$index$injectoid(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35446 = arguments.length;
var i__5202__auto___35447 = (0);
while(true){
if((i__5202__auto___35447 < len__5201__auto___35446)){
args__5208__auto__.push((arguments[i__5202__auto___35447]));

var G__35448 = (i__5202__auto___35447 + (1));
i__5202__auto___35447 = G__35448;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return routes.index.injectoid.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

routes.index.injectoid.cljs$core$IFn$_invoke$arity$variadic = (function (classes,kvs,p__35440){
var vec__35441 = p__35440;
var scripts = cljs.core.nth.call(null,vec__35441,(0),null);
var requires = routes.index.map_str.call(null,((function (vec__35441,scripts){
return (function (p1__35435_SHARP_){
return routes.index.format.call(null,"goog.require('anchor.%s')",p1__35435_SHARP_);
});})(vec__35441,scripts))
,classes);
var shorthands = routes.index.map_str.call(null,((function (requires,vec__35441,scripts){
return (function (p1__35436_SHARP_){
return routes.index.format.call(null,"%s = anchor.%s",p1__35436_SHARP_,p1__35436_SHARP_);
});})(requires,vec__35441,scripts))
,classes);
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/keymaster.js"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/jquery.js"], null)], null),((cljs.core.not.call(null,anchor.util.linux_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/cljs/out/goog/base.js"], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/cljs/out.js"], null)], null),(function (){var iter__4915__auto__ = ((function (requires,shorthands,vec__35441,scripts){
return (function routes$index$iter__35442(s__35443){
return (new cljs.core.LazySeq(null,((function (requires,shorthands,vec__35441,scripts){
return (function (){
var s__35443__$1 = s__35443;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35443__$1);
if(temp__4425__auto__){
var s__35443__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35443__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35443__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35445 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35444 = (0);
while(true){
if((i__35444 < size__4914__auto__)){
var script = cljs.core._nth.call(null,c__4913__auto__,i__35444);
cljs.core.chunk_append.call(null,b__35445,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),script], null)], null));

var G__35449 = (i__35444 + (1));
i__35444 = G__35449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35445),routes$index$iter__35442.call(null,cljs.core.chunk_rest.call(null,s__35443__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35445),null);
}
} else {
var script = cljs.core.first.call(null,s__35443__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),script], null)], null),routes$index$iter__35442.call(null,cljs.core.rest.call(null,s__35443__$2)));
}
} else {
return null;
}
break;
}
});})(requires,shorthands,vec__35441,scripts))
,null,null));
});})(requires,shorthands,vec__35441,scripts))
;
return iter__4915__auto__.call(null,scripts);
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),routes.index.format.call(null,"\n                      %s\n                      $(function() {\n                      c = anchor.core\n                      %s\n                      })",requires,shorthands)], null),routes.index.state.call(null,cljs.core.first.call(null,classes),kvs)], null);
});

routes.index.injectoid.cljs$lang$maxFixedArity = (2);

routes.index.injectoid.cljs$lang$applyTo = (function (seq35437){
var G__35438 = cljs.core.first.call(null,seq35437);
var seq35437__$1 = cljs.core.next.call(null,seq35437);
var G__35439 = cljs.core.first.call(null,seq35437__$1);
var seq35437__$2 = cljs.core.next.call(null,seq35437__$1);
return routes.index.injectoid.cljs$core$IFn$_invoke$arity$variadic(G__35438,G__35439,seq35437__$2);
});
routes.index.injectoid_s = (function routes$index$injectoid_s(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35455 = arguments.length;
var i__5202__auto___35456 = (0);
while(true){
if((i__5202__auto___35456 < len__5201__auto___35455)){
args__5208__auto__.push((arguments[i__5202__auto___35456]));

var G__35457 = (i__5202__auto___35456 + (1));
i__5202__auto___35456 = G__35457;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return routes.index.injectoid_s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

routes.index.injectoid_s.cljs$core$IFn$_invoke$arity$variadic = (function (classes,kvs,p__35453){
var vec__35454 = p__35453;
var scripts = cljs.core.nth.call(null,vec__35454,(0),null);
return [cljs.core.str(hiccups.runtime.render_html.call(null,routes.index.injectoid.call(null,classes,kvs,scripts)))].join('');
});

routes.index.injectoid_s.cljs$lang$maxFixedArity = (2);

routes.index.injectoid_s.cljs$lang$applyTo = (function (seq35450){
var G__35451 = cljs.core.first.call(null,seq35450);
var seq35450__$1 = cljs.core.next.call(null,seq35450);
var G__35452 = cljs.core.first.call(null,seq35450__$1);
var seq35450__$2 = cljs.core.next.call(null,seq35450__$1);
return routes.index.injectoid_s.cljs$core$IFn$_invoke$arity$variadic(G__35451,G__35452,seq35450__$2);
});
routes.index.anchor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),"/anchor.png",new cljs.core.Keyword(null,"width","width",-384071477),(267),new cljs.core.Keyword(null,"height","height",1025178622),(200)], null)], null)], null)], null);
routes.index.css = cljs.core.map.call(null,(function (p1__35458_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet",new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),p1__35458_SHARP_], null)],null));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/toast/css.css","/toast/d.css","/toast/style.css"], null));
/**
 * page with aforementioned snippet
 */
routes.index.page = (function routes$index$page(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35471 = arguments.length;
var i__5202__auto___35472 = (0);
while(true){
if((i__5202__auto___35472 < len__5201__auto___35471)){
args__5208__auto__.push((arguments[i__5202__auto___35472]));

var G__35473 = (i__5202__auto___35472 + (1));
i__5202__auto___35472 = G__35473;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return routes.index.page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

routes.index.page.cljs$core$IFn$_invoke$arity$variadic = (function (classes,kvs,p__35462){
var vec__35463 = p__35462;
var scripts = cljs.core.nth.call(null,vec__35463,(0),null);
return routes.index.response.call(null,(function (){var options__6255__auto__ = cljs.core.dissoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"xml?","xml?",-1398677005));
return hiccups.runtime.in_mode.call(null,new cljs.core.Keyword(null,"html","html",-998796897),((function (options__6255__auto__,vec__35463,scripts){
return (function (){
return [cljs.core.str("<!DOCTYPE html>\n"),cljs.core.str((function (){var attrs35464 = options__6255__auto__;
if(cljs.core.map_QMARK_.call(null,attrs35464)){
return [cljs.core.str("<html"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35464))),cljs.core.str(">"),cljs.core.str("<head><meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"><meta charset=\"UTF-8\"></head>"),cljs.core.str((function (){var attrs35467 = routes.index.anchor;
if(cljs.core.map_QMARK_.call(null,attrs35467)){
return [cljs.core.str("<body"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35467))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,routes.index.injectoid.call(null,classes,kvs,scripts))),cljs.core.str("</body>")].join('');
} else {
return [cljs.core.str("<body>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35467)),cljs.core.str(hiccups.runtime.render_html.call(null,routes.index.injectoid.call(null,classes,kvs,scripts))),cljs.core.str("</body>")].join('');
}
})()),cljs.core.str("</html>")].join('');
} else {
return [cljs.core.str("<html>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35464)),cljs.core.str("<head><meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"><meta charset=\"UTF-8\"></head>"),cljs.core.str((function (){var attrs35470 = routes.index.anchor;
if(cljs.core.map_QMARK_.call(null,attrs35470)){
return [cljs.core.str("<body"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35470))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,routes.index.injectoid.call(null,classes,kvs,scripts))),cljs.core.str("</body>")].join('');
} else {
return [cljs.core.str("<body>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35470)),cljs.core.str(hiccups.runtime.render_html.call(null,routes.index.injectoid.call(null,classes,kvs,scripts))),cljs.core.str("</body>")].join('');
}
})()),cljs.core.str("</html>")].join('');
}
})())].join('');
});})(options__6255__auto__,vec__35463,scripts))
);
})());
});

routes.index.page.cljs$lang$maxFixedArity = (2);

routes.index.page.cljs$lang$applyTo = (function (seq35459){
var G__35460 = cljs.core.first.call(null,seq35459);
var seq35459__$1 = cljs.core.next.call(null,seq35459);
var G__35461 = cljs.core.first.call(null,seq35459__$1);
var seq35459__$2 = cljs.core.next.call(null,seq35459__$1);
return routes.index.page.cljs$core$IFn$_invoke$arity$variadic(G__35460,G__35461,seq35459__$2);
});
/**
 * page with aforementioned snippet
 */
routes.index.blank_page = (function routes$index$blank_page(var_args){
var args__5208__auto__ = [];
var len__5201__auto___35486 = arguments.length;
var i__5202__auto___35487 = (0);
while(true){
if((i__5202__auto___35487 < len__5201__auto___35486)){
args__5208__auto__.push((arguments[i__5202__auto___35487]));

var G__35488 = (i__5202__auto___35487 + (1));
i__5202__auto___35487 = G__35488;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return routes.index.blank_page.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

routes.index.blank_page.cljs$core$IFn$_invoke$arity$variadic = (function (classes,kvs,p__35477){
var vec__35478 = p__35477;
var scripts = cljs.core.nth.call(null,vec__35478,(0),null);
return routes.index.response.call(null,(function (){var options__6255__auto__ = cljs.core.dissoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"xml?","xml?",-1398677005));
return hiccups.runtime.in_mode.call(null,new cljs.core.Keyword(null,"html","html",-998796897),((function (options__6255__auto__,vec__35478,scripts){
return (function (){
return [cljs.core.str("<!DOCTYPE html>\n"),cljs.core.str((function (){var attrs35479 = options__6255__auto__;
if(cljs.core.map_QMARK_.call(null,attrs35479)){
return [cljs.core.str("<html"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35479))),cljs.core.str(">"),cljs.core.str("<head><meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"><meta charset=\"UTF-8\"></head>"),cljs.core.str((function (){var attrs35482 = routes.index.injectoid.call(null,classes,kvs,scripts);
if(cljs.core.map_QMARK_.call(null,attrs35482)){
return [cljs.core.str("<body"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35482))),cljs.core.str(">"),cljs.core.str("</body>")].join('');
} else {
return [cljs.core.str("<body>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35482)),cljs.core.str("</body>")].join('');
}
})()),cljs.core.str("</html>")].join('');
} else {
return [cljs.core.str("<html>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35479)),cljs.core.str("<head><meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\"><meta charset=\"UTF-8\"></head>"),cljs.core.str((function (){var attrs35485 = routes.index.injectoid.call(null,classes,kvs,scripts);
if(cljs.core.map_QMARK_.call(null,attrs35485)){
return [cljs.core.str("<body"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs35485))),cljs.core.str(">"),cljs.core.str("</body>")].join('');
} else {
return [cljs.core.str("<body>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs35485)),cljs.core.str("</body>")].join('');
}
})()),cljs.core.str("</html>")].join('');
}
})())].join('');
});})(options__6255__auto__,vec__35478,scripts))
);
})());
});

routes.index.blank_page.cljs$lang$maxFixedArity = (2);

routes.index.blank_page.cljs$lang$applyTo = (function (seq35474){
var G__35475 = cljs.core.first.call(null,seq35474);
var seq35474__$1 = cljs.core.next.call(null,seq35474);
var G__35476 = cljs.core.first.call(null,seq35474__$1);
var seq35474__$2 = cljs.core.next.call(null,seq35474__$1);
return routes.index.blank_page.cljs$core$IFn$_invoke$arity$variadic(G__35475,G__35476,seq35474__$2);
});

//# sourceMappingURL=index.js.map