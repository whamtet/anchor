// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.util');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('redlobster.stream');
goog.require('redlobster.promise');
goog.require('redlobster.io');
goog.require('cljs.reader');
goog.require('cljs.nodejs');
anchor.util.linux_QMARK_ = cljs.core._EQ_.call(null,"linux",process.platform);
anchor.util.cumul = (function anchor$util$cumul(s){
return cljs.core.reduce.call(null,(function (v,i){
return cljs.core.conj.call(null,v,(cljs.core.peek.call(null,v) + i));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,s)], null),cljs.core.rest.call(null,s));
});
anchor.util.memoize_promise = (function anchor$util$memoize_promise(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var s_34807 = redlobster.io.slurp.call(null,"resources/yahoo.edn");
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_34807], null),((function (s_34807,mem){
return (function (){
return cljs.core.reset_BANG_.call(null,mem,cljs.reader.read_string.call(null,cljs.core.deref.call(null,s_34807)));
});})(s_34807,mem))
);

return ((function (mem){
return (function() { 
var G__34808__delegate = function (args){
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mem),args);
if(cljs.core.truth_(temp__4423__auto__)){
var result = temp__4423__auto__;
var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__,result,temp__4423__auto__,mem){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,result,temp__4423__auto__,mem))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__,result,temp__4423__auto__,mem){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__,result,temp__4423__auto__,mem))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
realise.call(null,result);

return promise__5324__auto__;
} else {
var result = cljs.core.apply.call(null,f,args);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null),((function (result,temp__4423__auto__,mem){
return (function (){
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,cljs.core.deref.call(null,result));

redlobster.io.spit.call(null,"resources/yahoo.edn",cljs.core.pr_str.call(null,cljs.core.deref.call(null,mem)));

return cljs.core.deref.call(null,result);
});})(result,temp__4423__auto__,mem))
);
}
};
var G__34808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34809__i = 0, G__34809__a = new Array(arguments.length -  0);
while (G__34809__i < G__34809__a.length) {G__34809__a[G__34809__i] = arguments[G__34809__i + 0]; ++G__34809__i;}
  args = new cljs.core.IndexedSeq(G__34809__a,0);
} 
return G__34808__delegate.call(this,args);};
G__34808.cljs$lang$maxFixedArity = 0;
G__34808.cljs$lang$applyTo = (function (arglist__34810){
var args = cljs.core.seq(arglist__34810);
return G__34808__delegate(args);
});
G__34808.cljs$core$IFn$_invoke$arity$variadic = G__34808__delegate;
return G__34808;
})()
;
;})(mem))
});
cljs.nodejs.enable_util_print_BANG_.call(null);
anchor.util.str_contains_QMARK_ = (function anchor$util$str_contains_QMARK_(a,b){
return cljs.core.not_EQ_.call(null,(-1),a.indexOf(b));
});
anchor.util.format = (function anchor$util$format(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34813 = arguments.length;
var i__5202__auto___34814 = (0);
while(true){
if((i__5202__auto___34814 < len__5201__auto___34813)){
args__5208__auto__.push((arguments[i__5202__auto___34814]));

var G__34815 = (i__5202__auto___34814 + (1));
i__5202__auto___34814 = G__34815;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return anchor.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

anchor.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (s,subs){
var s__$1 = s;
var current = cljs.core.first.call(null,subs);
var todo = cljs.core.rest.call(null,subs);
while(true){
if(cljs.core.truth_((function (){var and__4131__auto__ = anchor.util.str_contains_QMARK_.call(null,s__$1,"%s");
if(cljs.core.truth_(and__4131__auto__)){
return current;
} else {
return and__4131__auto__;
}
})())){
var G__34816 = s__$1.replace("%s",current);
var G__34817 = cljs.core.first.call(null,todo);
var G__34818 = cljs.core.rest.call(null,todo);
s__$1 = G__34816;
current = G__34817;
todo = G__34818;
continue;
} else {
return s__$1;
}
break;
}
});

anchor.util.format.cljs$lang$maxFixedArity = (1);

anchor.util.format.cljs$lang$applyTo = (function (seq34811){
var G__34812 = cljs.core.first.call(null,seq34811);
var seq34811__$1 = cljs.core.next.call(null,seq34811);
return anchor.util.format.cljs$core$IFn$_invoke$arity$variadic(G__34812,seq34811__$1);
});
anchor.util.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
anchor.util.timestamp = (function anchor$util$timestamp(){
var date = (new Date());
var append = ((function (date){
return (function (p1__34819_SHARP_){
if((p1__34819_SHARP_ < (10))){
return [cljs.core.str(p1__34819_SHARP_),cljs.core.str("0")].join('');
} else {
return p1__34819_SHARP_;
}
});})(date))
;
return anchor.util.format.call(null,"%s:%s %s %s %s",date.getHours(),append.call(null,date.getMinutes()),date.getDate(),anchor.util.months.call(null,date.getMonth()),((1900) + date.getYear()));
});
anchor.util.datestamp = (function anchor$util$datestamp(){
var date = (new Date());
return anchor.util.format.call(null,"%s %s %s",date.getDate(),anchor.util.months.call(null,date.getMonth()),((1900) + date.getYear()));
});
anchor.util.recompose_map = (function anchor$util$recompose_map(var_args){
var args34820 = [];
var len__5201__auto___34823 = arguments.length;
var i__5202__auto___34824 = (0);
while(true){
if((i__5202__auto___34824 < len__5201__auto___34823)){
args34820.push((arguments[i__5202__auto___34824]));

var G__34825 = (i__5202__auto___34824 + (1));
i__5202__auto___34824 = G__34825;
continue;
} else {
}
break;
}

var G__34822 = args34820.length;
switch (G__34822) {
case 1:
return anchor.util.recompose_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return anchor.util.recompose_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34820.length)].join('')));

}
});

anchor.util.recompose_map.cljs$core$IFn$_invoke$arity$1 = (function (vs){
return anchor.util.recompose_map.call(null,cljs.core.PersistentArrayMap.EMPTY,vs);
});

anchor.util.recompose_map.cljs$core$IFn$_invoke$arity$2 = (function (m,vs){
return cljs.core.reduce.call(null,(function (m__$1,v){
return cljs.core.assoc_in.call(null,m__$1,cljs.core.pop.call(null,v),cljs.core.peek.call(null,v));
}),m,vs);
});

anchor.util.recompose_map.cljs$lang$maxFixedArity = 2;
anchor.util.decompose_map = (function anchor$util$decompose_map(var_args){
var args34827 = [];
var len__5201__auto___34832 = arguments.length;
var i__5202__auto___34833 = (0);
while(true){
if((i__5202__auto___34833 < len__5201__auto___34832)){
args34827.push((arguments[i__5202__auto___34833]));

var G__34834 = (i__5202__auto___34833 + (1));
i__5202__auto___34833 = G__34834;
continue;
} else {
}
break;
}

var G__34829 = args34827.length;
switch (G__34829) {
case 1:
return anchor.util.decompose_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return anchor.util.decompose_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34827.length)].join('')));

}
});

anchor.util.decompose_map.cljs$core$IFn$_invoke$arity$1 = (function (m){
return anchor.util.decompose_map.call(null,cljs.core.PersistentVector.EMPTY,m);
});

anchor.util.decompose_map.cljs$core$IFn$_invoke$arity$2 = (function (stack,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.mapcat.call(null,(function (p__34830){
var vec__34831 = p__34830;
var k = cljs.core.nth.call(null,vec__34831,(0),null);
var v = cljs.core.nth.call(null,vec__34831,(1),null);
return anchor.util.decompose_map.call(null,cljs.core.conj.call(null,stack,k),v);
}),m);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,stack,m)], null);
}
});

anchor.util.decompose_map.cljs$lang$maxFixedArity = 2;
anchor.util.map_by = (function anchor$util$map_by(f,s){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,s),s);
});
anchor.util.dissoc_in_all = (function anchor$util$dissoc_in_all(m,v){
while(true){
var pred__34839 = cljs.core._EQ_;
var expr__34840 = cljs.core.count.call(null,v);
if(cljs.core.truth_(pred__34839.call(null,(0),expr__34840))){
return m;
} else {
if(cljs.core.truth_(pred__34839.call(null,(1),expr__34840))){
return cljs.core.dissoc.call(null,m,cljs.core.peek.call(null,v));
} else {
var cleaned = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,m,cljs.core.pop.call(null,v)),cljs.core.peek.call(null,v));
if(cljs.core.empty_QMARK_.call(null,cleaned)){
var G__34842 = m;
var G__34843 = cljs.core.pop.call(null,v);
m = G__34842;
v = G__34843;
continue;
} else {
return cljs.core.assoc_in.call(null,m,cljs.core.pop.call(null,v),cleaned);
}
}
}
break;
}
});
anchor.util.dissoc_in = (function anchor$util$dissoc_in(m,v){
return cljs.core.update_in.call(null,m,cljs.core.pop.call(null,v),cljs.core.dissoc,cljs.core.peek.call(null,v));
});
anchor.util.clean = clojure.walk.stringify_keys;
anchor.util.ok_response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),"ok",new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY], null);
anchor.util.pr_response = (function anchor$util$pr_response(x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,x),new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY], null);
});
anchor.util.safe_name = (function anchor$util$safe_name(x){
if(cljs.core.truth_(x)){
return cljs.core.name.call(null,x);
} else {
return "";
}
});
anchor.util.url = (function anchor$util$url(host,m){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,host,"?",cljs.core.interpose.call(null,"&",cljs.core.map.call(null,(function (p__34846){
var vec__34847 = p__34846;
var k = cljs.core.nth.call(null,vec__34847,(0),null);
var v = cljs.core.nth.call(null,vec__34847,(1),null);
return [cljs.core.str(anchor.util.safe_name.call(null,k)),cljs.core.str("="),cljs.core.str(anchor.util.safe_name.call(null,v).replace(" ","%20"))].join('');
}),m))))].join('');
});
anchor.util.redirect = (function anchor$util$redirect(host,m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(302),new cljs.core.Keyword(null,"body","body",-2049205669),"",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Location",anchor.util.url.call(null,host,m)], null)], null);
});
anchor.util.response = (function anchor$util$response(x){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),x,new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.PersistentArrayMap.EMPTY], null);
});
anchor.util.value_map = (function anchor$util$value_map(f,m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});

//# sourceMappingURL=util.js.map