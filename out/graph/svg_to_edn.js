// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('graph.svg_to_edn');
goog.require('cljs.core');
goog.require('clojure.string');
graph.svg_to_edn.replace = (function graph$svg_to_edn$replace(a,b,c){
return clojure.string.replace.call(null,a,b,c);
});
graph.svg_to_edn.parse_kv = (function graph$svg_to_edn$parse_kv(line){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (s){
var vec__5303 = s.split("=");
var k = cljs.core.nth.call(null,vec__5303,(0),null);
var v = cljs.core.nth.call(null,vec__5303,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),graph.svg_to_edn.replace.call(null,v,"\"","")], null);
}),cljs.core.re_seq.call(null,/\S+?=\".+?\"/,line)));
});
graph.svg_to_edn.nested_conj = (function graph$svg_to_edn$nested_conj(ms,i,x){
if(cljs.core._EQ_.call(null,(1),i)){
return cljs.core.conj.call(null,ms,x);
} else {
return cljs.core.conj.call(null,cljs.core.pop.call(null,ms),graph$svg_to_edn$nested_conj.call(null,cljs.core.peek.call(null,ms),(i - (1)),x));
}
});
graph.svg_to_edn.parse = (function graph$svg_to_edn$parse(s){
var todo = s.trim().split("\n");
var i = (0);
var done = null;
while(true){
var temp__4423__auto__ = cljs.core.first.call(null,todo);
if(cljs.core.truth_(temp__4423__auto__)){
var line = temp__4423__auto__;
var line_start = cljs.core.re_find.call(null,/\S+/,line);
var tag = cljs.core.keyword.call(null,graph.svg_to_edn.replace.call(null,line_start,"<",""));
var new_element = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["<path",null,"<polygon",null,"<ellipse",null,"<g",null], null), null).call(null,line_start))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,graph.svg_to_edn.parse_kv.call(null,line)], null):((cljs.core._EQ_.call(null,"<text",line_start))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),graph.svg_to_edn.parse_kv.call(null,line),clojure.string.replace.call(null,graph.svg_to_edn.replace.call(null,cljs.core.re_find.call(null,/>.*?</,line),"<",""),">","")], null):((cljs.core._EQ_.call(null,"<svg",line_start))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),graph.svg_to_edn.parse_kv.call(null,[cljs.core.str(line),cljs.core.str(cljs.core.second.call(null,todo))].join(''))], null):null)));
if(clojure.string.starts_with_QMARK_.call(null,line_start,"</")){
var G__5304 = cljs.core.rest.call(null,todo);
var G__5305 = (i - (1));
var G__5306 = done;
todo = G__5304;
i = G__5305;
done = G__5306;
continue;
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["<path",null,"<text",null,"<polygon",null,"<ellipse",null], null), null).call(null,line_start))){
var G__5307 = cljs.core.rest.call(null,todo);
var G__5308 = i;
var G__5309 = graph.svg_to_edn.nested_conj.call(null,done,i,new_element);
todo = G__5307;
i = G__5308;
done = G__5309;
continue;
} else {
if(cljs.core._EQ_.call(null,"<g",line_start)){
var G__5310 = cljs.core.rest.call(null,todo);
var G__5311 = (i + (1));
var G__5312 = graph.svg_to_edn.nested_conj.call(null,done,i,new_element);
todo = G__5310;
i = G__5311;
done = G__5312;
continue;
} else {
if(cljs.core._EQ_.call(null,"<svg",line_start)){
var G__5313 = cljs.core.drop.call(null,(2),todo);
var G__5314 = (i + (1));
var G__5315 = new_element;
todo = G__5313;
i = G__5314;
done = G__5315;
continue;
} else {
var G__5316 = cljs.core.rest.call(null,todo);
var G__5317 = i;
var G__5318 = done;
todo = G__5316;
i = G__5317;
done = G__5318;
continue;

}
}
}
}
} else {
return done;
}
break;
}
});

//# sourceMappingURL=svg_to_edn.js.map