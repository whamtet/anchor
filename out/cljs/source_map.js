// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__6489){
var vec__6490 = p__6489;
var i = cljs.core.nth.call(null,vec__6490,(0),null);
var v = cljs.core.nth.call(null,vec__6490,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__6492 = seg;
var gcol = cljs.core.nth.call(null,vec__6492,(0),null);
var source = cljs.core.nth.call(null,vec__6492,(1),null);
var line = cljs.core.nth.call(null,vec__6492,(2),null);
var col = cljs.core.nth.call(null,vec__6492,(3),null);
var name = cljs.core.nth.call(null,vec__6492,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__6495 = seg;
var gcol = cljs.core.nth.call(null,vec__6495,(0),null);
var source = cljs.core.nth.call(null,vec__6495,(1),null);
var line = cljs.core.nth.call(null,vec__6495,(2),null);
var col = cljs.core.nth.call(null,vec__6495,(3),null);
var name = cljs.core.nth.call(null,vec__6495,(4),null);
var vec__6496 = relseg;
var rgcol = cljs.core.nth.call(null,vec__6496,(0),null);
var rsource = cljs.core.nth.call(null,vec__6496,(1),null);
var rline = cljs.core.nth.call(null,vec__6496,(2),null);
var rcol = cljs.core.nth.call(null,vec__6496,(3),null);
var rname = cljs.core.nth.call(null,vec__6496,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4143__auto__ = source;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4143__auto__ = line;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4143__auto__ = col;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__6499 = segmap;
var map__6499__$1 = ((((!((map__6499 == null)))?((((map__6499.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6499.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6499):map__6499);
var gcol = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__6499,map__6499__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args6501 = [];
var len__5201__auto___6505 = arguments.length;
var i__5202__auto___6506 = (0);
while(true){
if((i__5202__auto___6506 < len__5201__auto___6505)){
args6501.push((arguments[i__5202__auto___6506]));

var G__6507 = (i__5202__auto___6506 + (1));
i__5202__auto___6506 = G__6507;
continue;
} else {
}
break;
}

var G__6503 = args6501.length;
switch (G__6503) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6501.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6504 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6509 = cljs.core.next.call(null,segs__$1);
var G__6510 = nrelseg;
var G__6511 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6509;
relseg__$1 = G__6510;
result__$1 = G__6511;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6504,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6504,(1),null);
var G__6512 = (gline + (1));
var G__6513 = cljs.core.next.call(null,lines__$1);
var G__6514 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6515 = result__$1;
gline = G__6512;
lines__$1 = G__6513;
relseg = G__6514;
result = G__6515;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__6519 = segmap;
var map__6519__$1 = ((((!((map__6519 == null)))?((((map__6519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6519):map__6519);
var gcol = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__6519__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__6519,map__6519__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__6519,map__6519__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__6516_SHARP_){
return cljs.core.conj.call(null,p1__6516_SHARP_,d__$1);
});})(map__6519,map__6519__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__6519,map__6519__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args6521 = [];
var len__5201__auto___6525 = arguments.length;
var i__5202__auto___6526 = (0);
while(true){
if((i__5202__auto___6526 < len__5201__auto___6525)){
args6521.push((arguments[i__5202__auto___6526]));

var G__6527 = (i__5202__auto___6526 + (1));
i__5202__auto___6526 = G__6527;
continue;
} else {
}
break;
}

var G__6523 = args6521.length;
switch (G__6523) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6521.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__6524 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__6529 = cljs.core.next.call(null,segs__$1);
var G__6530 = nrelseg;
var G__6531 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__6529;
relseg__$1 = G__6530;
result__$1 = G__6531;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__6524,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__6524,(1),null);
var G__6532 = (gline + (1));
var G__6533 = cljs.core.next.call(null,lines__$1);
var G__6534 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__6535 = result__$1;
gline = G__6532;
lines__$1 = G__6533;
relseg = G__6534;
result = G__6535;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__6542){
var vec__6543 = p__6542;
var _ = cljs.core.nth.call(null,vec__6543,(0),null);
var source = cljs.core.nth.call(null,vec__6543,(1),null);
var line = cljs.core.nth.call(null,vec__6543,(2),null);
var col = cljs.core.nth.call(null,vec__6543,(3),null);
var name = cljs.core.nth.call(null,vec__6543,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__6544){
var vec__6545 = p__6544;
var gcol = cljs.core.nth.call(null,vec__6545,(0),null);
var sidx = cljs.core.nth.call(null,vec__6545,(1),null);
var line = cljs.core.nth.call(null,vec__6545,(2),null);
var col = cljs.core.nth.call(null,vec__6545,(3),null);
var name = cljs.core.nth.call(null,vec__6545,(4),null);
var seg = vec__6545;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__6545,gcol,sidx,line,col,name,seg,relseg){
return (function (p__6546){
var vec__6547 = p__6546;
var _ = cljs.core.nth.call(null,vec__6547,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__6547,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__6547,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__6547,(3),null);
var lname = cljs.core.nth.call(null,vec__6547,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__6545,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4143__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__6601 = cljs.core.seq.call(null,infos);
var chunk__6602 = null;
var count__6603 = (0);
var i__6604 = (0);
while(true){
if((i__6604 < count__6603)){
var info = cljs.core._nth.call(null,chunk__6602,i__6604);
var segv_6651 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6652 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6653 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6652 > (lc_6653 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6601,chunk__6602,count__6603,i__6604,segv_6651,gline_6652,lc_6653,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6652 - (lc_6653 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6651], null));
});})(seq__6601,chunk__6602,count__6603,i__6604,segv_6651,gline_6652,lc_6653,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6601,chunk__6602,count__6603,i__6604,segv_6651,gline_6652,lc_6653,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6652], null),cljs.core.conj,segv_6651);
});})(seq__6601,chunk__6602,count__6603,i__6604,segv_6651,gline_6652,lc_6653,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__6654 = seq__6601;
var G__6655 = chunk__6602;
var G__6656 = count__6603;
var G__6657 = (i__6604 + (1));
seq__6601 = G__6654;
chunk__6602 = G__6655;
count__6603 = G__6656;
i__6604 = G__6657;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6601);
if(temp__4425__auto__){
var seq__6601__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6601__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__6601__$1);
var G__6658 = cljs.core.chunk_rest.call(null,seq__6601__$1);
var G__6659 = c__4946__auto__;
var G__6660 = cljs.core.count.call(null,c__4946__auto__);
var G__6661 = (0);
seq__6601 = G__6658;
chunk__6602 = G__6659;
count__6603 = G__6660;
i__6604 = G__6661;
continue;
} else {
var info = cljs.core.first.call(null,seq__6601__$1);
var segv_6662 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_6663 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_6664 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_6663 > (lc_6664 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__6601,chunk__6602,count__6603,i__6604,segv_6662,gline_6663,lc_6664,info,seq__6601__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_6663 - (lc_6664 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_6662], null));
});})(seq__6601,chunk__6602,count__6603,i__6604,segv_6662,gline_6663,lc_6664,info,seq__6601__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__6601,chunk__6602,count__6603,i__6604,segv_6662,gline_6663,lc_6664,info,seq__6601__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6663], null),cljs.core.conj,segv_6662);
});})(seq__6601,chunk__6602,count__6603,i__6604,segv_6662,gline_6663,lc_6664,info,seq__6601__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__6665 = cljs.core.next.call(null,seq__6601__$1);
var G__6666 = null;
var G__6667 = (0);
var G__6668 = (0);
seq__6601 = G__6665;
chunk__6602 = G__6666;
count__6603 = G__6667;
i__6604 = G__6668;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__6605_6669 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__6606_6670 = null;
var count__6607_6671 = (0);
var i__6608_6672 = (0);
while(true){
if((i__6608_6672 < count__6607_6671)){
var vec__6609_6673 = cljs.core._nth.call(null,chunk__6606_6670,i__6608_6672);
var source_idx_6674 = cljs.core.nth.call(null,vec__6609_6673,(0),null);
var vec__6610_6675 = cljs.core.nth.call(null,vec__6609_6673,(1),null);
var __6676 = cljs.core.nth.call(null,vec__6610_6675,(0),null);
var lines_6677__$1 = cljs.core.nth.call(null,vec__6610_6675,(1),null);
var seq__6611_6678 = cljs.core.seq.call(null,lines_6677__$1);
var chunk__6612_6679 = null;
var count__6613_6680 = (0);
var i__6614_6681 = (0);
while(true){
if((i__6614_6681 < count__6613_6680)){
var vec__6615_6682 = cljs.core._nth.call(null,chunk__6612_6679,i__6614_6681);
var line_6683 = cljs.core.nth.call(null,vec__6615_6682,(0),null);
var cols_6684 = cljs.core.nth.call(null,vec__6615_6682,(1),null);
var seq__6616_6685 = cljs.core.seq.call(null,cols_6684);
var chunk__6617_6686 = null;
var count__6618_6687 = (0);
var i__6619_6688 = (0);
while(true){
if((i__6619_6688 < count__6618_6687)){
var vec__6620_6689 = cljs.core._nth.call(null,chunk__6617_6686,i__6619_6688);
var col_6690 = cljs.core.nth.call(null,vec__6620_6689,(0),null);
var infos_6691 = cljs.core.nth.call(null,vec__6620_6689,(1),null);
encode_cols.call(null,infos_6691,source_idx_6674,line_6683,col_6690);

var G__6692 = seq__6616_6685;
var G__6693 = chunk__6617_6686;
var G__6694 = count__6618_6687;
var G__6695 = (i__6619_6688 + (1));
seq__6616_6685 = G__6692;
chunk__6617_6686 = G__6693;
count__6618_6687 = G__6694;
i__6619_6688 = G__6695;
continue;
} else {
var temp__4425__auto___6696 = cljs.core.seq.call(null,seq__6616_6685);
if(temp__4425__auto___6696){
var seq__6616_6697__$1 = temp__4425__auto___6696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6616_6697__$1)){
var c__4946__auto___6698 = cljs.core.chunk_first.call(null,seq__6616_6697__$1);
var G__6699 = cljs.core.chunk_rest.call(null,seq__6616_6697__$1);
var G__6700 = c__4946__auto___6698;
var G__6701 = cljs.core.count.call(null,c__4946__auto___6698);
var G__6702 = (0);
seq__6616_6685 = G__6699;
chunk__6617_6686 = G__6700;
count__6618_6687 = G__6701;
i__6619_6688 = G__6702;
continue;
} else {
var vec__6621_6703 = cljs.core.first.call(null,seq__6616_6697__$1);
var col_6704 = cljs.core.nth.call(null,vec__6621_6703,(0),null);
var infos_6705 = cljs.core.nth.call(null,vec__6621_6703,(1),null);
encode_cols.call(null,infos_6705,source_idx_6674,line_6683,col_6704);

var G__6706 = cljs.core.next.call(null,seq__6616_6697__$1);
var G__6707 = null;
var G__6708 = (0);
var G__6709 = (0);
seq__6616_6685 = G__6706;
chunk__6617_6686 = G__6707;
count__6618_6687 = G__6708;
i__6619_6688 = G__6709;
continue;
}
} else {
}
}
break;
}

var G__6710 = seq__6611_6678;
var G__6711 = chunk__6612_6679;
var G__6712 = count__6613_6680;
var G__6713 = (i__6614_6681 + (1));
seq__6611_6678 = G__6710;
chunk__6612_6679 = G__6711;
count__6613_6680 = G__6712;
i__6614_6681 = G__6713;
continue;
} else {
var temp__4425__auto___6714 = cljs.core.seq.call(null,seq__6611_6678);
if(temp__4425__auto___6714){
var seq__6611_6715__$1 = temp__4425__auto___6714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6611_6715__$1)){
var c__4946__auto___6716 = cljs.core.chunk_first.call(null,seq__6611_6715__$1);
var G__6717 = cljs.core.chunk_rest.call(null,seq__6611_6715__$1);
var G__6718 = c__4946__auto___6716;
var G__6719 = cljs.core.count.call(null,c__4946__auto___6716);
var G__6720 = (0);
seq__6611_6678 = G__6717;
chunk__6612_6679 = G__6718;
count__6613_6680 = G__6719;
i__6614_6681 = G__6720;
continue;
} else {
var vec__6622_6721 = cljs.core.first.call(null,seq__6611_6715__$1);
var line_6722 = cljs.core.nth.call(null,vec__6622_6721,(0),null);
var cols_6723 = cljs.core.nth.call(null,vec__6622_6721,(1),null);
var seq__6623_6724 = cljs.core.seq.call(null,cols_6723);
var chunk__6624_6725 = null;
var count__6625_6726 = (0);
var i__6626_6727 = (0);
while(true){
if((i__6626_6727 < count__6625_6726)){
var vec__6627_6728 = cljs.core._nth.call(null,chunk__6624_6725,i__6626_6727);
var col_6729 = cljs.core.nth.call(null,vec__6627_6728,(0),null);
var infos_6730 = cljs.core.nth.call(null,vec__6627_6728,(1),null);
encode_cols.call(null,infos_6730,source_idx_6674,line_6722,col_6729);

var G__6731 = seq__6623_6724;
var G__6732 = chunk__6624_6725;
var G__6733 = count__6625_6726;
var G__6734 = (i__6626_6727 + (1));
seq__6623_6724 = G__6731;
chunk__6624_6725 = G__6732;
count__6625_6726 = G__6733;
i__6626_6727 = G__6734;
continue;
} else {
var temp__4425__auto___6735__$1 = cljs.core.seq.call(null,seq__6623_6724);
if(temp__4425__auto___6735__$1){
var seq__6623_6736__$1 = temp__4425__auto___6735__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6623_6736__$1)){
var c__4946__auto___6737 = cljs.core.chunk_first.call(null,seq__6623_6736__$1);
var G__6738 = cljs.core.chunk_rest.call(null,seq__6623_6736__$1);
var G__6739 = c__4946__auto___6737;
var G__6740 = cljs.core.count.call(null,c__4946__auto___6737);
var G__6741 = (0);
seq__6623_6724 = G__6738;
chunk__6624_6725 = G__6739;
count__6625_6726 = G__6740;
i__6626_6727 = G__6741;
continue;
} else {
var vec__6628_6742 = cljs.core.first.call(null,seq__6623_6736__$1);
var col_6743 = cljs.core.nth.call(null,vec__6628_6742,(0),null);
var infos_6744 = cljs.core.nth.call(null,vec__6628_6742,(1),null);
encode_cols.call(null,infos_6744,source_idx_6674,line_6722,col_6743);

var G__6745 = cljs.core.next.call(null,seq__6623_6736__$1);
var G__6746 = null;
var G__6747 = (0);
var G__6748 = (0);
seq__6623_6724 = G__6745;
chunk__6624_6725 = G__6746;
count__6625_6726 = G__6747;
i__6626_6727 = G__6748;
continue;
}
} else {
}
}
break;
}

var G__6749 = cljs.core.next.call(null,seq__6611_6715__$1);
var G__6750 = null;
var G__6751 = (0);
var G__6752 = (0);
seq__6611_6678 = G__6749;
chunk__6612_6679 = G__6750;
count__6613_6680 = G__6751;
i__6614_6681 = G__6752;
continue;
}
} else {
}
}
break;
}

var G__6753 = seq__6605_6669;
var G__6754 = chunk__6606_6670;
var G__6755 = count__6607_6671;
var G__6756 = (i__6608_6672 + (1));
seq__6605_6669 = G__6753;
chunk__6606_6670 = G__6754;
count__6607_6671 = G__6755;
i__6608_6672 = G__6756;
continue;
} else {
var temp__4425__auto___6757 = cljs.core.seq.call(null,seq__6605_6669);
if(temp__4425__auto___6757){
var seq__6605_6758__$1 = temp__4425__auto___6757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6605_6758__$1)){
var c__4946__auto___6759 = cljs.core.chunk_first.call(null,seq__6605_6758__$1);
var G__6760 = cljs.core.chunk_rest.call(null,seq__6605_6758__$1);
var G__6761 = c__4946__auto___6759;
var G__6762 = cljs.core.count.call(null,c__4946__auto___6759);
var G__6763 = (0);
seq__6605_6669 = G__6760;
chunk__6606_6670 = G__6761;
count__6607_6671 = G__6762;
i__6608_6672 = G__6763;
continue;
} else {
var vec__6629_6764 = cljs.core.first.call(null,seq__6605_6758__$1);
var source_idx_6765 = cljs.core.nth.call(null,vec__6629_6764,(0),null);
var vec__6630_6766 = cljs.core.nth.call(null,vec__6629_6764,(1),null);
var __6767 = cljs.core.nth.call(null,vec__6630_6766,(0),null);
var lines_6768__$1 = cljs.core.nth.call(null,vec__6630_6766,(1),null);
var seq__6631_6769 = cljs.core.seq.call(null,lines_6768__$1);
var chunk__6632_6770 = null;
var count__6633_6771 = (0);
var i__6634_6772 = (0);
while(true){
if((i__6634_6772 < count__6633_6771)){
var vec__6635_6773 = cljs.core._nth.call(null,chunk__6632_6770,i__6634_6772);
var line_6774 = cljs.core.nth.call(null,vec__6635_6773,(0),null);
var cols_6775 = cljs.core.nth.call(null,vec__6635_6773,(1),null);
var seq__6636_6776 = cljs.core.seq.call(null,cols_6775);
var chunk__6637_6777 = null;
var count__6638_6778 = (0);
var i__6639_6779 = (0);
while(true){
if((i__6639_6779 < count__6638_6778)){
var vec__6640_6780 = cljs.core._nth.call(null,chunk__6637_6777,i__6639_6779);
var col_6781 = cljs.core.nth.call(null,vec__6640_6780,(0),null);
var infos_6782 = cljs.core.nth.call(null,vec__6640_6780,(1),null);
encode_cols.call(null,infos_6782,source_idx_6765,line_6774,col_6781);

var G__6783 = seq__6636_6776;
var G__6784 = chunk__6637_6777;
var G__6785 = count__6638_6778;
var G__6786 = (i__6639_6779 + (1));
seq__6636_6776 = G__6783;
chunk__6637_6777 = G__6784;
count__6638_6778 = G__6785;
i__6639_6779 = G__6786;
continue;
} else {
var temp__4425__auto___6787__$1 = cljs.core.seq.call(null,seq__6636_6776);
if(temp__4425__auto___6787__$1){
var seq__6636_6788__$1 = temp__4425__auto___6787__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6636_6788__$1)){
var c__4946__auto___6789 = cljs.core.chunk_first.call(null,seq__6636_6788__$1);
var G__6790 = cljs.core.chunk_rest.call(null,seq__6636_6788__$1);
var G__6791 = c__4946__auto___6789;
var G__6792 = cljs.core.count.call(null,c__4946__auto___6789);
var G__6793 = (0);
seq__6636_6776 = G__6790;
chunk__6637_6777 = G__6791;
count__6638_6778 = G__6792;
i__6639_6779 = G__6793;
continue;
} else {
var vec__6641_6794 = cljs.core.first.call(null,seq__6636_6788__$1);
var col_6795 = cljs.core.nth.call(null,vec__6641_6794,(0),null);
var infos_6796 = cljs.core.nth.call(null,vec__6641_6794,(1),null);
encode_cols.call(null,infos_6796,source_idx_6765,line_6774,col_6795);

var G__6797 = cljs.core.next.call(null,seq__6636_6788__$1);
var G__6798 = null;
var G__6799 = (0);
var G__6800 = (0);
seq__6636_6776 = G__6797;
chunk__6637_6777 = G__6798;
count__6638_6778 = G__6799;
i__6639_6779 = G__6800;
continue;
}
} else {
}
}
break;
}

var G__6801 = seq__6631_6769;
var G__6802 = chunk__6632_6770;
var G__6803 = count__6633_6771;
var G__6804 = (i__6634_6772 + (1));
seq__6631_6769 = G__6801;
chunk__6632_6770 = G__6802;
count__6633_6771 = G__6803;
i__6634_6772 = G__6804;
continue;
} else {
var temp__4425__auto___6805__$1 = cljs.core.seq.call(null,seq__6631_6769);
if(temp__4425__auto___6805__$1){
var seq__6631_6806__$1 = temp__4425__auto___6805__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6631_6806__$1)){
var c__4946__auto___6807 = cljs.core.chunk_first.call(null,seq__6631_6806__$1);
var G__6808 = cljs.core.chunk_rest.call(null,seq__6631_6806__$1);
var G__6809 = c__4946__auto___6807;
var G__6810 = cljs.core.count.call(null,c__4946__auto___6807);
var G__6811 = (0);
seq__6631_6769 = G__6808;
chunk__6632_6770 = G__6809;
count__6633_6771 = G__6810;
i__6634_6772 = G__6811;
continue;
} else {
var vec__6642_6812 = cljs.core.first.call(null,seq__6631_6806__$1);
var line_6813 = cljs.core.nth.call(null,vec__6642_6812,(0),null);
var cols_6814 = cljs.core.nth.call(null,vec__6642_6812,(1),null);
var seq__6643_6815 = cljs.core.seq.call(null,cols_6814);
var chunk__6644_6816 = null;
var count__6645_6817 = (0);
var i__6646_6818 = (0);
while(true){
if((i__6646_6818 < count__6645_6817)){
var vec__6647_6819 = cljs.core._nth.call(null,chunk__6644_6816,i__6646_6818);
var col_6820 = cljs.core.nth.call(null,vec__6647_6819,(0),null);
var infos_6821 = cljs.core.nth.call(null,vec__6647_6819,(1),null);
encode_cols.call(null,infos_6821,source_idx_6765,line_6813,col_6820);

var G__6822 = seq__6643_6815;
var G__6823 = chunk__6644_6816;
var G__6824 = count__6645_6817;
var G__6825 = (i__6646_6818 + (1));
seq__6643_6815 = G__6822;
chunk__6644_6816 = G__6823;
count__6645_6817 = G__6824;
i__6646_6818 = G__6825;
continue;
} else {
var temp__4425__auto___6826__$2 = cljs.core.seq.call(null,seq__6643_6815);
if(temp__4425__auto___6826__$2){
var seq__6643_6827__$1 = temp__4425__auto___6826__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6643_6827__$1)){
var c__4946__auto___6828 = cljs.core.chunk_first.call(null,seq__6643_6827__$1);
var G__6829 = cljs.core.chunk_rest.call(null,seq__6643_6827__$1);
var G__6830 = c__4946__auto___6828;
var G__6831 = cljs.core.count.call(null,c__4946__auto___6828);
var G__6832 = (0);
seq__6643_6815 = G__6829;
chunk__6644_6816 = G__6830;
count__6645_6817 = G__6831;
i__6646_6818 = G__6832;
continue;
} else {
var vec__6648_6833 = cljs.core.first.call(null,seq__6643_6827__$1);
var col_6834 = cljs.core.nth.call(null,vec__6648_6833,(0),null);
var infos_6835 = cljs.core.nth.call(null,vec__6648_6833,(1),null);
encode_cols.call(null,infos_6835,source_idx_6765,line_6813,col_6834);

var G__6836 = cljs.core.next.call(null,seq__6643_6827__$1);
var G__6837 = null;
var G__6838 = (0);
var G__6839 = (0);
seq__6643_6815 = G__6836;
chunk__6644_6816 = G__6837;
count__6645_6817 = G__6838;
i__6646_6818 = G__6839;
continue;
}
} else {
}
}
break;
}

var G__6840 = cljs.core.next.call(null,seq__6631_6806__$1);
var G__6841 = null;
var G__6842 = (0);
var G__6843 = (0);
seq__6631_6769 = G__6840;
chunk__6632_6770 = G__6841;
count__6633_6771 = G__6842;
i__6634_6772 = G__6843;
continue;
}
} else {
}
}
break;
}

var G__6844 = cljs.core.next.call(null,seq__6605_6758__$1);
var G__6845 = null;
var G__6846 = (0);
var G__6847 = (0);
seq__6605_6669 = G__6844;
chunk__6606_6670 = G__6845;
count__6607_6671 = G__6846;
i__6608_6672 = G__6847;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__6649 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6548_SHARP_){
return [cljs.core.str(p1__6548_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6549_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__6549_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__6550_SHARP_){
return clojure.string.join.call(null,",",p1__6550_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__6649__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__6650 = G__6649;
goog.object.set(G__6650,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__6650;
})():G__6649);
return G__6649__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__6853 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__6853,(0),null);
var col_map = cljs.core.nth.call(null,vec__6853,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__6854 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__6854,(0),null);
var infos = cljs.core.nth.call(null,vec__6854,(1),null);
var G__6858 = cljs.core.next.call(null,col_map_seq);
var G__6859 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__6854,col,infos,vec__6853,line,col_map){
return (function (v,p__6855){
var map__6856 = p__6855;
var map__6856__$1 = ((((!((map__6856 == null)))?((((map__6856.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6856.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6856):map__6856);
var gline = cljs.core.get.call(null,map__6856__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__6856__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__6854,col,infos,vec__6853,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__6858;
new_cols = G__6859;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__6860 = cljs.core.next.call(null,line_map_seq);
var G__6861 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__6860;
new_lines = G__6861;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__6912_6962 = cljs.core.seq.call(null,reverse_map);
var chunk__6913_6963 = null;
var count__6914_6964 = (0);
var i__6915_6965 = (0);
while(true){
if((i__6915_6965 < count__6914_6964)){
var vec__6916_6966 = cljs.core._nth.call(null,chunk__6913_6963,i__6915_6965);
var line_6967 = cljs.core.nth.call(null,vec__6916_6966,(0),null);
var columns_6968 = cljs.core.nth.call(null,vec__6916_6966,(1),null);
var seq__6917_6969 = cljs.core.seq.call(null,columns_6968);
var chunk__6918_6970 = null;
var count__6919_6971 = (0);
var i__6920_6972 = (0);
while(true){
if((i__6920_6972 < count__6919_6971)){
var vec__6921_6973 = cljs.core._nth.call(null,chunk__6918_6970,i__6920_6972);
var column_6974 = cljs.core.nth.call(null,vec__6921_6973,(0),null);
var column_info_6975 = cljs.core.nth.call(null,vec__6921_6973,(1),null);
var seq__6922_6976 = cljs.core.seq.call(null,column_info_6975);
var chunk__6923_6977 = null;
var count__6924_6978 = (0);
var i__6925_6979 = (0);
while(true){
if((i__6925_6979 < count__6924_6978)){
var map__6926_6980 = cljs.core._nth.call(null,chunk__6923_6977,i__6925_6979);
var map__6926_6981__$1 = ((((!((map__6926_6980 == null)))?((((map__6926_6980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6926_6980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6926_6980):map__6926_6980);
var gline_6982 = cljs.core.get.call(null,map__6926_6981__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6983 = cljs.core.get.call(null,map__6926_6981__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_6984 = cljs.core.get.call(null,map__6926_6981__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6982], null),cljs.core.fnil.call(null,((function (seq__6922_6976,chunk__6923_6977,count__6924_6978,i__6925_6979,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6926_6980,map__6926_6981__$1,gline_6982,gcol_6983,name_6984,vec__6921_6973,column_6974,column_info_6975,vec__6916_6966,line_6967,columns_6968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_6974], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6967,new cljs.core.Keyword(null,"col","col",-1959363084),column_6974,new cljs.core.Keyword(null,"name","name",1843675177),name_6984], null));
});})(seq__6922_6976,chunk__6923_6977,count__6924_6978,i__6925_6979,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6926_6980,map__6926_6981__$1,gline_6982,gcol_6983,name_6984,vec__6921_6973,column_6974,column_info_6975,vec__6916_6966,line_6967,columns_6968,inverted))
,cljs.core.sorted_map.call(null)));

var G__6985 = seq__6922_6976;
var G__6986 = chunk__6923_6977;
var G__6987 = count__6924_6978;
var G__6988 = (i__6925_6979 + (1));
seq__6922_6976 = G__6985;
chunk__6923_6977 = G__6986;
count__6924_6978 = G__6987;
i__6925_6979 = G__6988;
continue;
} else {
var temp__4425__auto___6989 = cljs.core.seq.call(null,seq__6922_6976);
if(temp__4425__auto___6989){
var seq__6922_6990__$1 = temp__4425__auto___6989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6922_6990__$1)){
var c__4946__auto___6991 = cljs.core.chunk_first.call(null,seq__6922_6990__$1);
var G__6992 = cljs.core.chunk_rest.call(null,seq__6922_6990__$1);
var G__6993 = c__4946__auto___6991;
var G__6994 = cljs.core.count.call(null,c__4946__auto___6991);
var G__6995 = (0);
seq__6922_6976 = G__6992;
chunk__6923_6977 = G__6993;
count__6924_6978 = G__6994;
i__6925_6979 = G__6995;
continue;
} else {
var map__6928_6996 = cljs.core.first.call(null,seq__6922_6990__$1);
var map__6928_6997__$1 = ((((!((map__6928_6996 == null)))?((((map__6928_6996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6928_6996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6928_6996):map__6928_6996);
var gline_6998 = cljs.core.get.call(null,map__6928_6997__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_6999 = cljs.core.get.call(null,map__6928_6997__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7000 = cljs.core.get.call(null,map__6928_6997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_6998], null),cljs.core.fnil.call(null,((function (seq__6922_6976,chunk__6923_6977,count__6924_6978,i__6925_6979,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6928_6996,map__6928_6997__$1,gline_6998,gcol_6999,name_7000,seq__6922_6990__$1,temp__4425__auto___6989,vec__6921_6973,column_6974,column_info_6975,vec__6916_6966,line_6967,columns_6968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_6974], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6967,new cljs.core.Keyword(null,"col","col",-1959363084),column_6974,new cljs.core.Keyword(null,"name","name",1843675177),name_7000], null));
});})(seq__6922_6976,chunk__6923_6977,count__6924_6978,i__6925_6979,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6928_6996,map__6928_6997__$1,gline_6998,gcol_6999,name_7000,seq__6922_6990__$1,temp__4425__auto___6989,vec__6921_6973,column_6974,column_info_6975,vec__6916_6966,line_6967,columns_6968,inverted))
,cljs.core.sorted_map.call(null)));

var G__7001 = cljs.core.next.call(null,seq__6922_6990__$1);
var G__7002 = null;
var G__7003 = (0);
var G__7004 = (0);
seq__6922_6976 = G__7001;
chunk__6923_6977 = G__7002;
count__6924_6978 = G__7003;
i__6925_6979 = G__7004;
continue;
}
} else {
}
}
break;
}

var G__7005 = seq__6917_6969;
var G__7006 = chunk__6918_6970;
var G__7007 = count__6919_6971;
var G__7008 = (i__6920_6972 + (1));
seq__6917_6969 = G__7005;
chunk__6918_6970 = G__7006;
count__6919_6971 = G__7007;
i__6920_6972 = G__7008;
continue;
} else {
var temp__4425__auto___7009 = cljs.core.seq.call(null,seq__6917_6969);
if(temp__4425__auto___7009){
var seq__6917_7010__$1 = temp__4425__auto___7009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6917_7010__$1)){
var c__4946__auto___7011 = cljs.core.chunk_first.call(null,seq__6917_7010__$1);
var G__7012 = cljs.core.chunk_rest.call(null,seq__6917_7010__$1);
var G__7013 = c__4946__auto___7011;
var G__7014 = cljs.core.count.call(null,c__4946__auto___7011);
var G__7015 = (0);
seq__6917_6969 = G__7012;
chunk__6918_6970 = G__7013;
count__6919_6971 = G__7014;
i__6920_6972 = G__7015;
continue;
} else {
var vec__6930_7016 = cljs.core.first.call(null,seq__6917_7010__$1);
var column_7017 = cljs.core.nth.call(null,vec__6930_7016,(0),null);
var column_info_7018 = cljs.core.nth.call(null,vec__6930_7016,(1),null);
var seq__6931_7019 = cljs.core.seq.call(null,column_info_7018);
var chunk__6932_7020 = null;
var count__6933_7021 = (0);
var i__6934_7022 = (0);
while(true){
if((i__6934_7022 < count__6933_7021)){
var map__6935_7023 = cljs.core._nth.call(null,chunk__6932_7020,i__6934_7022);
var map__6935_7024__$1 = ((((!((map__6935_7023 == null)))?((((map__6935_7023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6935_7023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6935_7023):map__6935_7023);
var gline_7025 = cljs.core.get.call(null,map__6935_7024__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7026 = cljs.core.get.call(null,map__6935_7024__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7027 = cljs.core.get.call(null,map__6935_7024__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7025], null),cljs.core.fnil.call(null,((function (seq__6931_7019,chunk__6932_7020,count__6933_7021,i__6934_7022,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6935_7023,map__6935_7024__$1,gline_7025,gcol_7026,name_7027,vec__6930_7016,column_7017,column_info_7018,seq__6917_7010__$1,temp__4425__auto___7009,vec__6916_6966,line_6967,columns_6968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7017], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6967,new cljs.core.Keyword(null,"col","col",-1959363084),column_7017,new cljs.core.Keyword(null,"name","name",1843675177),name_7027], null));
});})(seq__6931_7019,chunk__6932_7020,count__6933_7021,i__6934_7022,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6935_7023,map__6935_7024__$1,gline_7025,gcol_7026,name_7027,vec__6930_7016,column_7017,column_info_7018,seq__6917_7010__$1,temp__4425__auto___7009,vec__6916_6966,line_6967,columns_6968,inverted))
,cljs.core.sorted_map.call(null)));

var G__7028 = seq__6931_7019;
var G__7029 = chunk__6932_7020;
var G__7030 = count__6933_7021;
var G__7031 = (i__6934_7022 + (1));
seq__6931_7019 = G__7028;
chunk__6932_7020 = G__7029;
count__6933_7021 = G__7030;
i__6934_7022 = G__7031;
continue;
} else {
var temp__4425__auto___7032__$1 = cljs.core.seq.call(null,seq__6931_7019);
if(temp__4425__auto___7032__$1){
var seq__6931_7033__$1 = temp__4425__auto___7032__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6931_7033__$1)){
var c__4946__auto___7034 = cljs.core.chunk_first.call(null,seq__6931_7033__$1);
var G__7035 = cljs.core.chunk_rest.call(null,seq__6931_7033__$1);
var G__7036 = c__4946__auto___7034;
var G__7037 = cljs.core.count.call(null,c__4946__auto___7034);
var G__7038 = (0);
seq__6931_7019 = G__7035;
chunk__6932_7020 = G__7036;
count__6933_7021 = G__7037;
i__6934_7022 = G__7038;
continue;
} else {
var map__6937_7039 = cljs.core.first.call(null,seq__6931_7033__$1);
var map__6937_7040__$1 = ((((!((map__6937_7039 == null)))?((((map__6937_7039.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6937_7039.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6937_7039):map__6937_7039);
var gline_7041 = cljs.core.get.call(null,map__6937_7040__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7042 = cljs.core.get.call(null,map__6937_7040__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7043 = cljs.core.get.call(null,map__6937_7040__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7041], null),cljs.core.fnil.call(null,((function (seq__6931_7019,chunk__6932_7020,count__6933_7021,i__6934_7022,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6937_7039,map__6937_7040__$1,gline_7041,gcol_7042,name_7043,seq__6931_7033__$1,temp__4425__auto___7032__$1,vec__6930_7016,column_7017,column_info_7018,seq__6917_7010__$1,temp__4425__auto___7009,vec__6916_6966,line_6967,columns_6968,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7017], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_6967,new cljs.core.Keyword(null,"col","col",-1959363084),column_7017,new cljs.core.Keyword(null,"name","name",1843675177),name_7043], null));
});})(seq__6931_7019,chunk__6932_7020,count__6933_7021,i__6934_7022,seq__6917_6969,chunk__6918_6970,count__6919_6971,i__6920_6972,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6937_7039,map__6937_7040__$1,gline_7041,gcol_7042,name_7043,seq__6931_7033__$1,temp__4425__auto___7032__$1,vec__6930_7016,column_7017,column_info_7018,seq__6917_7010__$1,temp__4425__auto___7009,vec__6916_6966,line_6967,columns_6968,inverted))
,cljs.core.sorted_map.call(null)));

var G__7044 = cljs.core.next.call(null,seq__6931_7033__$1);
var G__7045 = null;
var G__7046 = (0);
var G__7047 = (0);
seq__6931_7019 = G__7044;
chunk__6932_7020 = G__7045;
count__6933_7021 = G__7046;
i__6934_7022 = G__7047;
continue;
}
} else {
}
}
break;
}

var G__7048 = cljs.core.next.call(null,seq__6917_7010__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__6917_6969 = G__7048;
chunk__6918_6970 = G__7049;
count__6919_6971 = G__7050;
i__6920_6972 = G__7051;
continue;
}
} else {
}
}
break;
}

var G__7052 = seq__6912_6962;
var G__7053 = chunk__6913_6963;
var G__7054 = count__6914_6964;
var G__7055 = (i__6915_6965 + (1));
seq__6912_6962 = G__7052;
chunk__6913_6963 = G__7053;
count__6914_6964 = G__7054;
i__6915_6965 = G__7055;
continue;
} else {
var temp__4425__auto___7056 = cljs.core.seq.call(null,seq__6912_6962);
if(temp__4425__auto___7056){
var seq__6912_7057__$1 = temp__4425__auto___7056;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6912_7057__$1)){
var c__4946__auto___7058 = cljs.core.chunk_first.call(null,seq__6912_7057__$1);
var G__7059 = cljs.core.chunk_rest.call(null,seq__6912_7057__$1);
var G__7060 = c__4946__auto___7058;
var G__7061 = cljs.core.count.call(null,c__4946__auto___7058);
var G__7062 = (0);
seq__6912_6962 = G__7059;
chunk__6913_6963 = G__7060;
count__6914_6964 = G__7061;
i__6915_6965 = G__7062;
continue;
} else {
var vec__6939_7063 = cljs.core.first.call(null,seq__6912_7057__$1);
var line_7064 = cljs.core.nth.call(null,vec__6939_7063,(0),null);
var columns_7065 = cljs.core.nth.call(null,vec__6939_7063,(1),null);
var seq__6940_7066 = cljs.core.seq.call(null,columns_7065);
var chunk__6941_7067 = null;
var count__6942_7068 = (0);
var i__6943_7069 = (0);
while(true){
if((i__6943_7069 < count__6942_7068)){
var vec__6944_7070 = cljs.core._nth.call(null,chunk__6941_7067,i__6943_7069);
var column_7071 = cljs.core.nth.call(null,vec__6944_7070,(0),null);
var column_info_7072 = cljs.core.nth.call(null,vec__6944_7070,(1),null);
var seq__6945_7073 = cljs.core.seq.call(null,column_info_7072);
var chunk__6946_7074 = null;
var count__6947_7075 = (0);
var i__6948_7076 = (0);
while(true){
if((i__6948_7076 < count__6947_7075)){
var map__6949_7077 = cljs.core._nth.call(null,chunk__6946_7074,i__6948_7076);
var map__6949_7078__$1 = ((((!((map__6949_7077 == null)))?((((map__6949_7077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6949_7077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6949_7077):map__6949_7077);
var gline_7079 = cljs.core.get.call(null,map__6949_7078__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7080 = cljs.core.get.call(null,map__6949_7078__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7081 = cljs.core.get.call(null,map__6949_7078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7079], null),cljs.core.fnil.call(null,((function (seq__6945_7073,chunk__6946_7074,count__6947_7075,i__6948_7076,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6949_7077,map__6949_7078__$1,gline_7079,gcol_7080,name_7081,vec__6944_7070,column_7071,column_info_7072,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7071], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7064,new cljs.core.Keyword(null,"col","col",-1959363084),column_7071,new cljs.core.Keyword(null,"name","name",1843675177),name_7081], null));
});})(seq__6945_7073,chunk__6946_7074,count__6947_7075,i__6948_7076,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6949_7077,map__6949_7078__$1,gline_7079,gcol_7080,name_7081,vec__6944_7070,column_7071,column_info_7072,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted))
,cljs.core.sorted_map.call(null)));

var G__7082 = seq__6945_7073;
var G__7083 = chunk__6946_7074;
var G__7084 = count__6947_7075;
var G__7085 = (i__6948_7076 + (1));
seq__6945_7073 = G__7082;
chunk__6946_7074 = G__7083;
count__6947_7075 = G__7084;
i__6948_7076 = G__7085;
continue;
} else {
var temp__4425__auto___7086__$1 = cljs.core.seq.call(null,seq__6945_7073);
if(temp__4425__auto___7086__$1){
var seq__6945_7087__$1 = temp__4425__auto___7086__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6945_7087__$1)){
var c__4946__auto___7088 = cljs.core.chunk_first.call(null,seq__6945_7087__$1);
var G__7089 = cljs.core.chunk_rest.call(null,seq__6945_7087__$1);
var G__7090 = c__4946__auto___7088;
var G__7091 = cljs.core.count.call(null,c__4946__auto___7088);
var G__7092 = (0);
seq__6945_7073 = G__7089;
chunk__6946_7074 = G__7090;
count__6947_7075 = G__7091;
i__6948_7076 = G__7092;
continue;
} else {
var map__6951_7093 = cljs.core.first.call(null,seq__6945_7087__$1);
var map__6951_7094__$1 = ((((!((map__6951_7093 == null)))?((((map__6951_7093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6951_7093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6951_7093):map__6951_7093);
var gline_7095 = cljs.core.get.call(null,map__6951_7094__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7096 = cljs.core.get.call(null,map__6951_7094__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7097 = cljs.core.get.call(null,map__6951_7094__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7095], null),cljs.core.fnil.call(null,((function (seq__6945_7073,chunk__6946_7074,count__6947_7075,i__6948_7076,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6951_7093,map__6951_7094__$1,gline_7095,gcol_7096,name_7097,seq__6945_7087__$1,temp__4425__auto___7086__$1,vec__6944_7070,column_7071,column_info_7072,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7071], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7064,new cljs.core.Keyword(null,"col","col",-1959363084),column_7071,new cljs.core.Keyword(null,"name","name",1843675177),name_7097], null));
});})(seq__6945_7073,chunk__6946_7074,count__6947_7075,i__6948_7076,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6951_7093,map__6951_7094__$1,gline_7095,gcol_7096,name_7097,seq__6945_7087__$1,temp__4425__auto___7086__$1,vec__6944_7070,column_7071,column_info_7072,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted))
,cljs.core.sorted_map.call(null)));

var G__7098 = cljs.core.next.call(null,seq__6945_7087__$1);
var G__7099 = null;
var G__7100 = (0);
var G__7101 = (0);
seq__6945_7073 = G__7098;
chunk__6946_7074 = G__7099;
count__6947_7075 = G__7100;
i__6948_7076 = G__7101;
continue;
}
} else {
}
}
break;
}

var G__7102 = seq__6940_7066;
var G__7103 = chunk__6941_7067;
var G__7104 = count__6942_7068;
var G__7105 = (i__6943_7069 + (1));
seq__6940_7066 = G__7102;
chunk__6941_7067 = G__7103;
count__6942_7068 = G__7104;
i__6943_7069 = G__7105;
continue;
} else {
var temp__4425__auto___7106__$1 = cljs.core.seq.call(null,seq__6940_7066);
if(temp__4425__auto___7106__$1){
var seq__6940_7107__$1 = temp__4425__auto___7106__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6940_7107__$1)){
var c__4946__auto___7108 = cljs.core.chunk_first.call(null,seq__6940_7107__$1);
var G__7109 = cljs.core.chunk_rest.call(null,seq__6940_7107__$1);
var G__7110 = c__4946__auto___7108;
var G__7111 = cljs.core.count.call(null,c__4946__auto___7108);
var G__7112 = (0);
seq__6940_7066 = G__7109;
chunk__6941_7067 = G__7110;
count__6942_7068 = G__7111;
i__6943_7069 = G__7112;
continue;
} else {
var vec__6953_7113 = cljs.core.first.call(null,seq__6940_7107__$1);
var column_7114 = cljs.core.nth.call(null,vec__6953_7113,(0),null);
var column_info_7115 = cljs.core.nth.call(null,vec__6953_7113,(1),null);
var seq__6954_7116 = cljs.core.seq.call(null,column_info_7115);
var chunk__6955_7117 = null;
var count__6956_7118 = (0);
var i__6957_7119 = (0);
while(true){
if((i__6957_7119 < count__6956_7118)){
var map__6958_7120 = cljs.core._nth.call(null,chunk__6955_7117,i__6957_7119);
var map__6958_7121__$1 = ((((!((map__6958_7120 == null)))?((((map__6958_7120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6958_7120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6958_7120):map__6958_7120);
var gline_7122 = cljs.core.get.call(null,map__6958_7121__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7123 = cljs.core.get.call(null,map__6958_7121__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7124 = cljs.core.get.call(null,map__6958_7121__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7122], null),cljs.core.fnil.call(null,((function (seq__6954_7116,chunk__6955_7117,count__6956_7118,i__6957_7119,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6958_7120,map__6958_7121__$1,gline_7122,gcol_7123,name_7124,vec__6953_7113,column_7114,column_info_7115,seq__6940_7107__$1,temp__4425__auto___7106__$1,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7114], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7064,new cljs.core.Keyword(null,"col","col",-1959363084),column_7114,new cljs.core.Keyword(null,"name","name",1843675177),name_7124], null));
});})(seq__6954_7116,chunk__6955_7117,count__6956_7118,i__6957_7119,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6958_7120,map__6958_7121__$1,gline_7122,gcol_7123,name_7124,vec__6953_7113,column_7114,column_info_7115,seq__6940_7107__$1,temp__4425__auto___7106__$1,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted))
,cljs.core.sorted_map.call(null)));

var G__7125 = seq__6954_7116;
var G__7126 = chunk__6955_7117;
var G__7127 = count__6956_7118;
var G__7128 = (i__6957_7119 + (1));
seq__6954_7116 = G__7125;
chunk__6955_7117 = G__7126;
count__6956_7118 = G__7127;
i__6957_7119 = G__7128;
continue;
} else {
var temp__4425__auto___7129__$2 = cljs.core.seq.call(null,seq__6954_7116);
if(temp__4425__auto___7129__$2){
var seq__6954_7130__$1 = temp__4425__auto___7129__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6954_7130__$1)){
var c__4946__auto___7131 = cljs.core.chunk_first.call(null,seq__6954_7130__$1);
var G__7132 = cljs.core.chunk_rest.call(null,seq__6954_7130__$1);
var G__7133 = c__4946__auto___7131;
var G__7134 = cljs.core.count.call(null,c__4946__auto___7131);
var G__7135 = (0);
seq__6954_7116 = G__7132;
chunk__6955_7117 = G__7133;
count__6956_7118 = G__7134;
i__6957_7119 = G__7135;
continue;
} else {
var map__6960_7136 = cljs.core.first.call(null,seq__6954_7130__$1);
var map__6960_7137__$1 = ((((!((map__6960_7136 == null)))?((((map__6960_7136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6960_7136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6960_7136):map__6960_7136);
var gline_7138 = cljs.core.get.call(null,map__6960_7137__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_7139 = cljs.core.get.call(null,map__6960_7137__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_7140 = cljs.core.get.call(null,map__6960_7137__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_7138], null),cljs.core.fnil.call(null,((function (seq__6954_7116,chunk__6955_7117,count__6956_7118,i__6957_7119,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6960_7136,map__6960_7137__$1,gline_7138,gcol_7139,name_7140,seq__6954_7130__$1,temp__4425__auto___7129__$2,vec__6953_7113,column_7114,column_info_7115,seq__6940_7107__$1,temp__4425__auto___7106__$1,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_7114], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_7064,new cljs.core.Keyword(null,"col","col",-1959363084),column_7114,new cljs.core.Keyword(null,"name","name",1843675177),name_7140], null));
});})(seq__6954_7116,chunk__6955_7117,count__6956_7118,i__6957_7119,seq__6940_7066,chunk__6941_7067,count__6942_7068,i__6943_7069,seq__6912_6962,chunk__6913_6963,count__6914_6964,i__6915_6965,map__6960_7136,map__6960_7137__$1,gline_7138,gcol_7139,name_7140,seq__6954_7130__$1,temp__4425__auto___7129__$2,vec__6953_7113,column_7114,column_info_7115,seq__6940_7107__$1,temp__4425__auto___7106__$1,vec__6939_7063,line_7064,columns_7065,seq__6912_7057__$1,temp__4425__auto___7056,inverted))
,cljs.core.sorted_map.call(null)));

var G__7141 = cljs.core.next.call(null,seq__6954_7130__$1);
var G__7142 = null;
var G__7143 = (0);
var G__7144 = (0);
seq__6954_7116 = G__7141;
chunk__6955_7117 = G__7142;
count__6956_7118 = G__7143;
i__6957_7119 = G__7144;
continue;
}
} else {
}
}
break;
}

var G__7145 = cljs.core.next.call(null,seq__6940_7107__$1);
var G__7146 = null;
var G__7147 = (0);
var G__7148 = (0);
seq__6940_7066 = G__7145;
chunk__6941_7067 = G__7146;
count__6942_7068 = G__7147;
i__6943_7069 = G__7148;
continue;
}
} else {
}
}
break;
}

var G__7149 = cljs.core.next.call(null,seq__6912_7057__$1);
var G__7150 = null;
var G__7151 = (0);
var G__7152 = (0);
seq__6912_6962 = G__7149;
chunk__6913_6963 = G__7150;
count__6914_6964 = G__7151;
i__6915_6965 = G__7152;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map