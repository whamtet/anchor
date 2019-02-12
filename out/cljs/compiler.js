// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__7179 = s;
var map__7179__$1 = ((((!((map__7179 == null)))?((((map__7179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7179):map__7179);
var name = cljs.core.get.call(null,map__7179__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7179__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__7182 = info;
var map__7183 = G__7182;
var map__7183__$1 = ((((!((map__7183 == null)))?((((map__7183.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7183.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7183):map__7183);
var shadow = cljs.core.get.call(null,map__7183__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__7182__$1 = G__7182;
while(true){
var d__$2 = d__$1;
var map__7185 = G__7182__$1;
var map__7185__$1 = ((((!((map__7185 == null)))?((((map__7185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7185):map__7185);
var shadow__$1 = cljs.core.get.call(null,map__7185__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__7187 = (d__$2 + (1));
var G__7188 = shadow__$1;
d__$1 = G__7187;
G__7182__$1 = G__7188;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__7189){
var map__7194 = p__7189;
var map__7194__$1 = ((((!((map__7194 == null)))?((((map__7194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7194):map__7194);
var name_var = map__7194__$1;
var name = cljs.core.get.call(null,map__7194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__7194__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__7196 = info;
var map__7196__$1 = ((((!((map__7196 == null)))?((((map__7196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7196):map__7196);
var ns = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__7196__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args7198 = [];
var len__5201__auto___7201 = arguments.length;
var i__5202__auto___7202 = (0);
while(true){
if((i__5202__auto___7202 < len__5201__auto___7201)){
args7198.push((arguments[i__5202__auto___7202]));

var G__7203 = (i__5202__auto___7202 + (1));
i__5202__auto___7202 = G__7203;
continue;
} else {
}
break;
}

var G__7200 = args7198.length;
switch (G__7200) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7198.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__7206 = cp;
switch (G__7206) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__7212_7216 = cljs.core.seq.call(null,s);
var chunk__7213_7217 = null;
var count__7214_7218 = (0);
var i__7215_7219 = (0);
while(true){
if((i__7215_7219 < count__7214_7218)){
var c_7220 = cljs.core._nth.call(null,chunk__7213_7217,i__7215_7219);
sb.append(cljs.compiler.escape_char.call(null,c_7220));

var G__7221 = seq__7212_7216;
var G__7222 = chunk__7213_7217;
var G__7223 = count__7214_7218;
var G__7224 = (i__7215_7219 + (1));
seq__7212_7216 = G__7221;
chunk__7213_7217 = G__7222;
count__7214_7218 = G__7223;
i__7215_7219 = G__7224;
continue;
} else {
var temp__4425__auto___7225 = cljs.core.seq.call(null,seq__7212_7216);
if(temp__4425__auto___7225){
var seq__7212_7226__$1 = temp__4425__auto___7225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7212_7226__$1)){
var c__4946__auto___7227 = cljs.core.chunk_first.call(null,seq__7212_7226__$1);
var G__7228 = cljs.core.chunk_rest.call(null,seq__7212_7226__$1);
var G__7229 = c__4946__auto___7227;
var G__7230 = cljs.core.count.call(null,c__4946__auto___7227);
var G__7231 = (0);
seq__7212_7216 = G__7228;
chunk__7213_7217 = G__7229;
count__7214_7218 = G__7230;
i__7215_7219 = G__7231;
continue;
} else {
var c_7232 = cljs.core.first.call(null,seq__7212_7226__$1);
sb.append(cljs.compiler.escape_char.call(null,c_7232));

var G__7233 = cljs.core.next.call(null,seq__7212_7226__$1);
var G__7234 = null;
var G__7235 = (0);
var G__7236 = (0);
seq__7212_7216 = G__7233;
chunk__7213_7217 = G__7234;
count__7214_7218 = G__7235;
i__7215_7219 = G__7236;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5746__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5746__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__7242_7247 = ast;
var map__7242_7248__$1 = ((((!((map__7242_7247 == null)))?((((map__7242_7247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7242_7247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7242_7247):map__7242_7247);
var env_7249 = cljs.core.get.call(null,map__7242_7248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_7249))){
var map__7244_7250 = env_7249;
var map__7244_7251__$1 = ((((!((map__7244_7250 == null)))?((((map__7244_7250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7244_7250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7244_7250):map__7244_7250);
var line_7252 = cljs.core.get.call(null,map__7244_7251__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_7253 = cljs.core.get.call(null,map__7244_7251__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__){
return (function (m){
var minfo = (function (){var G__7246 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__7246__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__7246,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__7246);
return G__7246__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_7252 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_7253)?(column_7253 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__7244_7250,map__7244_7251__$1,line_7252,column_7253,map__7242_7247,map__7242_7248__$1,env_7249,val__5746__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__5746__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__5208__auto__ = [];
var len__5201__auto___7260 = arguments.length;
var i__5202__auto___7261 = (0);
while(true){
if((i__5202__auto___7261 < len__5201__auto___7260)){
args__5208__auto__.push((arguments[i__5202__auto___7261]));

var G__7262 = (i__5202__auto___7261 + (1));
i__5202__auto___7261 = G__7262;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__7256_7263 = cljs.core.seq.call(null,xs);
var chunk__7257_7264 = null;
var count__7258_7265 = (0);
var i__7259_7266 = (0);
while(true){
if((i__7259_7266 < count__7258_7265)){
var x_7267 = cljs.core._nth.call(null,chunk__7257_7264,i__7259_7266);
if((x_7267 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_7267)){
cljs.compiler.emit.call(null,x_7267);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_7267)){
cljs.core.apply.call(null,cljs.compiler.emits,x_7267);
} else {
if(goog.isFunction(x_7267)){
x_7267.call(null);
} else {
var s_7268 = cljs.core.print_str.call(null,x_7267);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__7256_7263,chunk__7257_7264,count__7258_7265,i__7259_7266,s_7268,x_7267){
return (function (p1__7254_SHARP_){
return (p1__7254_SHARP_ + cljs.core.count.call(null,s_7268));
});})(seq__7256_7263,chunk__7257_7264,count__7258_7265,i__7259_7266,s_7268,x_7267))
);
}

cljs.core.print.call(null,s_7268);

}
}
}
}

var G__7269 = seq__7256_7263;
var G__7270 = chunk__7257_7264;
var G__7271 = count__7258_7265;
var G__7272 = (i__7259_7266 + (1));
seq__7256_7263 = G__7269;
chunk__7257_7264 = G__7270;
count__7258_7265 = G__7271;
i__7259_7266 = G__7272;
continue;
} else {
var temp__4425__auto___7273 = cljs.core.seq.call(null,seq__7256_7263);
if(temp__4425__auto___7273){
var seq__7256_7274__$1 = temp__4425__auto___7273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7256_7274__$1)){
var c__4946__auto___7275 = cljs.core.chunk_first.call(null,seq__7256_7274__$1);
var G__7276 = cljs.core.chunk_rest.call(null,seq__7256_7274__$1);
var G__7277 = c__4946__auto___7275;
var G__7278 = cljs.core.count.call(null,c__4946__auto___7275);
var G__7279 = (0);
seq__7256_7263 = G__7276;
chunk__7257_7264 = G__7277;
count__7258_7265 = G__7278;
i__7259_7266 = G__7279;
continue;
} else {
var x_7280 = cljs.core.first.call(null,seq__7256_7274__$1);
if((x_7280 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_7280)){
cljs.compiler.emit.call(null,x_7280);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_7280)){
cljs.core.apply.call(null,cljs.compiler.emits,x_7280);
} else {
if(goog.isFunction(x_7280)){
x_7280.call(null);
} else {
var s_7281 = cljs.core.print_str.call(null,x_7280);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__7256_7263,chunk__7257_7264,count__7258_7265,i__7259_7266,s_7281,x_7280,seq__7256_7274__$1,temp__4425__auto___7273){
return (function (p1__7254_SHARP_){
return (p1__7254_SHARP_ + cljs.core.count.call(null,s_7281));
});})(seq__7256_7263,chunk__7257_7264,count__7258_7265,i__7259_7266,s_7281,x_7280,seq__7256_7274__$1,temp__4425__auto___7273))
);
}

cljs.core.print.call(null,s_7281);

}
}
}
}

var G__7282 = cljs.core.next.call(null,seq__7256_7274__$1);
var G__7283 = null;
var G__7284 = (0);
var G__7285 = (0);
seq__7256_7263 = G__7282;
chunk__7257_7264 = G__7283;
count__7258_7265 = G__7284;
i__7259_7266 = G__7285;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq7255){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7255));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__5208__auto__ = [];
var len__5201__auto___7290 = arguments.length;
var i__5202__auto___7291 = (0);
while(true){
if((i__5202__auto___7291 < len__5201__auto___7290)){
args__5208__auto__.push((arguments[i__5202__auto___7291]));

var G__7292 = (i__5202__auto___7291 + (1));
i__5202__auto___7291 = G__7292;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((0) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5209__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__7287){
var map__7288 = p__7287;
var map__7288__$1 = ((((!((map__7288 == null)))?((((map__7288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7288):map__7288);
var m = map__7288__$1;
var gen_line = cljs.core.get.call(null,map__7288__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq7286){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7286));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5117__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_7295_7297 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_7296_7298 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_7295_7297,_STAR_print_fn_STAR_7296_7298,sb__5117__auto__){
return (function (x__5118__auto__){
return sb__5117__auto__.append(x__5118__auto__);
});})(_STAR_print_newline_STAR_7295_7297,_STAR_print_fn_STAR_7296_7298,sb__5117__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_7296_7298;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_7295_7297;
}
return [cljs.core.str(sb__5117__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__7299 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__7299,(0),null);
var flags = cljs.core.nth.call(null,vec__7299,(1),null);
var pattern = cljs.core.nth.call(null,vec__7299,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__7301){
var map__7302 = p__7301;
var map__7302__$1 = ((((!((map__7302 == null)))?((((map__7302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7302):map__7302);
var arg = map__7302__$1;
var info = cljs.core.get.call(null,map__7302__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__7302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__7302__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__4143__auto__ = js_module_name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__7304 = info__$1;
var G__7304__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__7304):G__7304);
return G__7304__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__7305){
var map__7306 = p__7305;
var map__7306__$1 = ((((!((map__7306 == null)))?((((map__7306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7306):map__7306);
var arg = map__7306__$1;
var env = cljs.core.get.call(null,map__7306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__7306__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__7306__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__7306__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__7308 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__7308__$1 = ((((!((map__7308 == null)))?((((map__7308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7308):map__7308);
var name = cljs.core.get.call(null,map__7308__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__7310){
var map__7311 = p__7310;
var map__7311__$1 = ((((!((map__7311 == null)))?((((map__7311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7311):map__7311);
var expr = cljs.core.get.call(null,map__7311__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__7311__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__7311__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__7313_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7313_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__7314){
var map__7315 = p__7314;
var map__7315__$1 = ((((!((map__7315 == null)))?((((map__7315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7315):map__7315);
var env = cljs.core.get.call(null,map__7315__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__7315__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__7315__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__7317){
var map__7318 = p__7317;
var map__7318__$1 = ((((!((map__7318 == null)))?((((map__7318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7318):map__7318);
var items = cljs.core.get.call(null,map__7318__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__7320){
var map__7321 = p__7320;
var map__7321__$1 = ((((!((map__7321 == null)))?((((map__7321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7321):map__7321);
var items = cljs.core.get.call(null,map__7321__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7321__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_7323 = cljs.core.count.call(null,items);
if((cnt_7323 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_7323,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__7324_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__7324_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__7325){
var map__7326 = p__7325;
var map__7326__$1 = ((((!((map__7326 == null)))?((((map__7326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7326):map__7326);
var items = cljs.core.get.call(null,map__7326__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__7326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__7328){
var map__7329 = p__7328;
var map__7329__$1 = ((((!((map__7329 == null)))?((((map__7329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7329):map__7329);
var items = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___7339 = cljs.core.seq.call(null,items);
if(temp__4425__auto___7339){
var items_7340__$1 = temp__4425__auto___7339;
var vec__7331_7341 = items_7340__$1;
var vec__7332_7342 = cljs.core.nth.call(null,vec__7331_7341,(0),null);
var k_7343 = cljs.core.nth.call(null,vec__7332_7342,(0),null);
var v_7344 = cljs.core.nth.call(null,vec__7332_7342,(1),null);
var r_7345 = cljs.core.nthnext.call(null,vec__7331_7341,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_7343),"\": ",v_7344);

var seq__7333_7346 = cljs.core.seq.call(null,r_7345);
var chunk__7334_7347 = null;
var count__7335_7348 = (0);
var i__7336_7349 = (0);
while(true){
if((i__7336_7349 < count__7335_7348)){
var vec__7337_7350 = cljs.core._nth.call(null,chunk__7334_7347,i__7336_7349);
var k_7351__$1 = cljs.core.nth.call(null,vec__7337_7350,(0),null);
var v_7352__$1 = cljs.core.nth.call(null,vec__7337_7350,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7351__$1),"\": ",v_7352__$1);

var G__7353 = seq__7333_7346;
var G__7354 = chunk__7334_7347;
var G__7355 = count__7335_7348;
var G__7356 = (i__7336_7349 + (1));
seq__7333_7346 = G__7353;
chunk__7334_7347 = G__7354;
count__7335_7348 = G__7355;
i__7336_7349 = G__7356;
continue;
} else {
var temp__4425__auto___7357__$1 = cljs.core.seq.call(null,seq__7333_7346);
if(temp__4425__auto___7357__$1){
var seq__7333_7358__$1 = temp__4425__auto___7357__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7333_7358__$1)){
var c__4946__auto___7359 = cljs.core.chunk_first.call(null,seq__7333_7358__$1);
var G__7360 = cljs.core.chunk_rest.call(null,seq__7333_7358__$1);
var G__7361 = c__4946__auto___7359;
var G__7362 = cljs.core.count.call(null,c__4946__auto___7359);
var G__7363 = (0);
seq__7333_7346 = G__7360;
chunk__7334_7347 = G__7361;
count__7335_7348 = G__7362;
i__7336_7349 = G__7363;
continue;
} else {
var vec__7338_7364 = cljs.core.first.call(null,seq__7333_7358__$1);
var k_7365__$1 = cljs.core.nth.call(null,vec__7338_7364,(0),null);
var v_7366__$1 = cljs.core.nth.call(null,vec__7338_7364,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_7365__$1),"\": ",v_7366__$1);

var G__7367 = cljs.core.next.call(null,seq__7333_7358__$1);
var G__7368 = null;
var G__7369 = (0);
var G__7370 = (0);
seq__7333_7346 = G__7367;
chunk__7334_7347 = G__7368;
count__7335_7348 = G__7369;
i__7336_7349 = G__7370;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__7371){
var map__7372 = p__7371;
var map__7372__$1 = ((((!((map__7372 == null)))?((((map__7372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7372):map__7372);
var form = cljs.core.get.call(null,map__7372__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__7372__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__7374){
var map__7377 = p__7374;
var map__7377__$1 = ((((!((map__7377 == null)))?((((map__7377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7377):map__7377);
var op = cljs.core.get.call(null,map__7377__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7377__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4131__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4131__auto__){
var and__4131__auto____$1 = form;
if(cljs.core.truth_(and__4131__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__7379){
var map__7382 = p__7379;
var map__7382__$1 = ((((!((map__7382 == null)))?((((map__7382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7382):map__7382);
var op = cljs.core.get.call(null,map__7382__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__7382__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4143__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__7384){
var map__7385 = p__7384;
var map__7385__$1 = ((((!((map__7385 == null)))?((((map__7385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7385):map__7385);
var test = cljs.core.get.call(null,map__7385__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__7385__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__7385__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__7385__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__7385__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4143__auto__ = unchecked;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__7387){
var map__7388 = p__7387;
var map__7388__$1 = ((((!((map__7388 == null)))?((((map__7388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7388):map__7388);
var v = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__7388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__7390_7404 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__7391_7405 = null;
var count__7392_7406 = (0);
var i__7393_7407 = (0);
while(true){
if((i__7393_7407 < count__7392_7406)){
var vec__7394_7408 = cljs.core._nth.call(null,chunk__7391_7405,i__7393_7407);
var ts_7409 = cljs.core.nth.call(null,vec__7394_7408,(0),null);
var then_7410 = cljs.core.nth.call(null,vec__7394_7408,(1),null);
var seq__7395_7411 = cljs.core.seq.call(null,ts_7409);
var chunk__7396_7412 = null;
var count__7397_7413 = (0);
var i__7398_7414 = (0);
while(true){
if((i__7398_7414 < count__7397_7413)){
var test_7415 = cljs.core._nth.call(null,chunk__7396_7412,i__7398_7414);
cljs.compiler.emitln.call(null,"case ",test_7415,":");

var G__7416 = seq__7395_7411;
var G__7417 = chunk__7396_7412;
var G__7418 = count__7397_7413;
var G__7419 = (i__7398_7414 + (1));
seq__7395_7411 = G__7416;
chunk__7396_7412 = G__7417;
count__7397_7413 = G__7418;
i__7398_7414 = G__7419;
continue;
} else {
var temp__4425__auto___7420 = cljs.core.seq.call(null,seq__7395_7411);
if(temp__4425__auto___7420){
var seq__7395_7421__$1 = temp__4425__auto___7420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7395_7421__$1)){
var c__4946__auto___7422 = cljs.core.chunk_first.call(null,seq__7395_7421__$1);
var G__7423 = cljs.core.chunk_rest.call(null,seq__7395_7421__$1);
var G__7424 = c__4946__auto___7422;
var G__7425 = cljs.core.count.call(null,c__4946__auto___7422);
var G__7426 = (0);
seq__7395_7411 = G__7423;
chunk__7396_7412 = G__7424;
count__7397_7413 = G__7425;
i__7398_7414 = G__7426;
continue;
} else {
var test_7427 = cljs.core.first.call(null,seq__7395_7421__$1);
cljs.compiler.emitln.call(null,"case ",test_7427,":");

var G__7428 = cljs.core.next.call(null,seq__7395_7421__$1);
var G__7429 = null;
var G__7430 = (0);
var G__7431 = (0);
seq__7395_7411 = G__7428;
chunk__7396_7412 = G__7429;
count__7397_7413 = G__7430;
i__7398_7414 = G__7431;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7410);
} else {
cljs.compiler.emitln.call(null,then_7410);
}

cljs.compiler.emitln.call(null,"break;");

var G__7432 = seq__7390_7404;
var G__7433 = chunk__7391_7405;
var G__7434 = count__7392_7406;
var G__7435 = (i__7393_7407 + (1));
seq__7390_7404 = G__7432;
chunk__7391_7405 = G__7433;
count__7392_7406 = G__7434;
i__7393_7407 = G__7435;
continue;
} else {
var temp__4425__auto___7436 = cljs.core.seq.call(null,seq__7390_7404);
if(temp__4425__auto___7436){
var seq__7390_7437__$1 = temp__4425__auto___7436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7390_7437__$1)){
var c__4946__auto___7438 = cljs.core.chunk_first.call(null,seq__7390_7437__$1);
var G__7439 = cljs.core.chunk_rest.call(null,seq__7390_7437__$1);
var G__7440 = c__4946__auto___7438;
var G__7441 = cljs.core.count.call(null,c__4946__auto___7438);
var G__7442 = (0);
seq__7390_7404 = G__7439;
chunk__7391_7405 = G__7440;
count__7392_7406 = G__7441;
i__7393_7407 = G__7442;
continue;
} else {
var vec__7399_7443 = cljs.core.first.call(null,seq__7390_7437__$1);
var ts_7444 = cljs.core.nth.call(null,vec__7399_7443,(0),null);
var then_7445 = cljs.core.nth.call(null,vec__7399_7443,(1),null);
var seq__7400_7446 = cljs.core.seq.call(null,ts_7444);
var chunk__7401_7447 = null;
var count__7402_7448 = (0);
var i__7403_7449 = (0);
while(true){
if((i__7403_7449 < count__7402_7448)){
var test_7450 = cljs.core._nth.call(null,chunk__7401_7447,i__7403_7449);
cljs.compiler.emitln.call(null,"case ",test_7450,":");

var G__7451 = seq__7400_7446;
var G__7452 = chunk__7401_7447;
var G__7453 = count__7402_7448;
var G__7454 = (i__7403_7449 + (1));
seq__7400_7446 = G__7451;
chunk__7401_7447 = G__7452;
count__7402_7448 = G__7453;
i__7403_7449 = G__7454;
continue;
} else {
var temp__4425__auto___7455__$1 = cljs.core.seq.call(null,seq__7400_7446);
if(temp__4425__auto___7455__$1){
var seq__7400_7456__$1 = temp__4425__auto___7455__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7400_7456__$1)){
var c__4946__auto___7457 = cljs.core.chunk_first.call(null,seq__7400_7456__$1);
var G__7458 = cljs.core.chunk_rest.call(null,seq__7400_7456__$1);
var G__7459 = c__4946__auto___7457;
var G__7460 = cljs.core.count.call(null,c__4946__auto___7457);
var G__7461 = (0);
seq__7400_7446 = G__7458;
chunk__7401_7447 = G__7459;
count__7402_7448 = G__7460;
i__7403_7449 = G__7461;
continue;
} else {
var test_7462 = cljs.core.first.call(null,seq__7400_7456__$1);
cljs.compiler.emitln.call(null,"case ",test_7462,":");

var G__7463 = cljs.core.next.call(null,seq__7400_7456__$1);
var G__7464 = null;
var G__7465 = (0);
var G__7466 = (0);
seq__7400_7446 = G__7463;
chunk__7401_7447 = G__7464;
count__7402_7448 = G__7465;
i__7403_7449 = G__7466;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_7445);
} else {
cljs.compiler.emitln.call(null,then_7445);
}

cljs.compiler.emitln.call(null,"break;");

var G__7467 = cljs.core.next.call(null,seq__7390_7437__$1);
var G__7468 = null;
var G__7469 = (0);
var G__7470 = (0);
seq__7390_7404 = G__7467;
chunk__7391_7405 = G__7468;
count__7392_7406 = G__7469;
i__7393_7407 = G__7470;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__7471){
var map__7472 = p__7471;
var map__7472__$1 = ((((!((map__7472 == null)))?((((map__7472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7472):map__7472);
var throw$ = cljs.core.get.call(null,map__7472__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__7472__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__7477 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__7477,(0),null);
var rstr = cljs.core.nth.call(null,vec__7477,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__7477,fstr,rstr,ret_t,axstr){
return (function (p1__7474_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__7474_SHARP_);
});})(idx,vec__7477,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__7478 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__7478__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__7478),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__7478);
return G__7478__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__7479_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__7479_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__7482 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__7482,(0),null);
var ts = cljs.core.nth.call(null,vec__7482,(1),null);
var n = cljs.core.nth.call(null,vec__7482,(2),null);
var xs = cljs.core.nthnext.call(null,vec__7482,(3));
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__4131__auto__){
var and__4131__auto____$1 = ts;
if(cljs.core.truth_(and__4131__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__7483 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__7483,(0),null);
var ts = cljs.core.nth.call(null,vec__7483,(1),null);
var xs = cljs.core.nthnext.call(null,vec__7483,(2));
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__4131__auto__){
var and__4131__auto____$1 = ts;
if(cljs.core.truth_(and__4131__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args7485 = [];
var len__5201__auto___7512 = arguments.length;
var i__5202__auto___7513 = (0);
while(true){
if((i__5202__auto___7513 < len__5201__auto___7512)){
args7485.push((arguments[i__5202__auto___7513]));

var G__7514 = (i__5202__auto___7513 + (1));
i__5202__auto___7513 = G__7514;
continue;
} else {
}
break;
}

var G__7487 = args7485.length;
switch (G__7487) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7485.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__7503 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__7484_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__7484_SHARP_);
} else {
return p1__7484_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__7503,(0),null);
var ys = cljs.core.nthnext.call(null,vec__7503,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__7504 = cljs.core.seq.call(null,ys);
var chunk__7505 = null;
var count__7506 = (0);
var i__7507 = (0);
while(true){
if((i__7507 < count__7506)){
var next_line = cljs.core._nth.call(null,chunk__7505,i__7507);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__7516 = seq__7504;
var G__7517 = chunk__7505;
var G__7518 = count__7506;
var G__7519 = (i__7507 + (1));
seq__7504 = G__7516;
chunk__7505 = G__7517;
count__7506 = G__7518;
i__7507 = G__7519;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7504);
if(temp__4425__auto__){
var seq__7504__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7504__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7504__$1);
var G__7520 = cljs.core.chunk_rest.call(null,seq__7504__$1);
var G__7521 = c__4946__auto__;
var G__7522 = cljs.core.count.call(null,c__4946__auto__);
var G__7523 = (0);
seq__7504 = G__7520;
chunk__7505 = G__7521;
count__7506 = G__7522;
i__7507 = G__7523;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__7504__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__7524 = cljs.core.next.call(null,seq__7504__$1);
var G__7525 = null;
var G__7526 = (0);
var G__7527 = (0);
seq__7504 = G__7524;
chunk__7505 = G__7525;
count__7506 = G__7526;
i__7507 = G__7527;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__7508_7528 = cljs.core.seq.call(null,docs__$2);
var chunk__7509_7529 = null;
var count__7510_7530 = (0);
var i__7511_7531 = (0);
while(true){
if((i__7511_7531 < count__7510_7530)){
var e_7532 = cljs.core._nth.call(null,chunk__7509_7529,i__7511_7531);
if(cljs.core.truth_(e_7532)){
print_comment_lines.call(null,e_7532);
} else {
}

var G__7533 = seq__7508_7528;
var G__7534 = chunk__7509_7529;
var G__7535 = count__7510_7530;
var G__7536 = (i__7511_7531 + (1));
seq__7508_7528 = G__7533;
chunk__7509_7529 = G__7534;
count__7510_7530 = G__7535;
i__7511_7531 = G__7536;
continue;
} else {
var temp__4425__auto___7537 = cljs.core.seq.call(null,seq__7508_7528);
if(temp__4425__auto___7537){
var seq__7508_7538__$1 = temp__4425__auto___7537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7508_7538__$1)){
var c__4946__auto___7539 = cljs.core.chunk_first.call(null,seq__7508_7538__$1);
var G__7540 = cljs.core.chunk_rest.call(null,seq__7508_7538__$1);
var G__7541 = c__4946__auto___7539;
var G__7542 = cljs.core.count.call(null,c__4946__auto___7539);
var G__7543 = (0);
seq__7508_7528 = G__7540;
chunk__7509_7529 = G__7541;
count__7510_7530 = G__7542;
i__7511_7531 = G__7543;
continue;
} else {
var e_7544 = cljs.core.first.call(null,seq__7508_7538__$1);
if(cljs.core.truth_(e_7544)){
print_comment_lines.call(null,e_7544);
} else {
}

var G__7545 = cljs.core.next.call(null,seq__7508_7538__$1);
var G__7546 = null;
var G__7547 = (0);
var G__7548 = (0);
seq__7508_7528 = G__7545;
chunk__7509_7529 = G__7546;
count__7510_7530 = G__7547;
i__7511_7531 = G__7548;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4131__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__7550_SHARP_){
return goog.string.startsWith(p1__7550_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = opts;
if(cljs.core.truth_(and__4131__auto____$1)){
var and__4131__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4131__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__4131__auto____$2;
}
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__7551){
var map__7552 = p__7551;
var map__7552__$1 = ((((!((map__7552 == null)))?((((map__7552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7552):map__7552);
var name = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__7552__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
return test;
} else {
return and__4131__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__7554){
var map__7571 = p__7554;
var map__7571__$1 = ((((!((map__7571 == null)))?((((map__7571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7571):map__7571);
var name = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__7571__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__7573_7587 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__7574_7588 = null;
var count__7575_7589 = (0);
var i__7576_7590 = (0);
while(true){
if((i__7576_7590 < count__7575_7589)){
var vec__7577_7591 = cljs.core._nth.call(null,chunk__7574_7588,i__7576_7590);
var i_7592 = cljs.core.nth.call(null,vec__7577_7591,(0),null);
var param_7593 = cljs.core.nth.call(null,vec__7577_7591,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7593);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__7594 = seq__7573_7587;
var G__7595 = chunk__7574_7588;
var G__7596 = count__7575_7589;
var G__7597 = (i__7576_7590 + (1));
seq__7573_7587 = G__7594;
chunk__7574_7588 = G__7595;
count__7575_7589 = G__7596;
i__7576_7590 = G__7597;
continue;
} else {
var temp__4425__auto___7598 = cljs.core.seq.call(null,seq__7573_7587);
if(temp__4425__auto___7598){
var seq__7573_7599__$1 = temp__4425__auto___7598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7573_7599__$1)){
var c__4946__auto___7600 = cljs.core.chunk_first.call(null,seq__7573_7599__$1);
var G__7601 = cljs.core.chunk_rest.call(null,seq__7573_7599__$1);
var G__7602 = c__4946__auto___7600;
var G__7603 = cljs.core.count.call(null,c__4946__auto___7600);
var G__7604 = (0);
seq__7573_7587 = G__7601;
chunk__7574_7588 = G__7602;
count__7575_7589 = G__7603;
i__7576_7590 = G__7604;
continue;
} else {
var vec__7578_7605 = cljs.core.first.call(null,seq__7573_7599__$1);
var i_7606 = cljs.core.nth.call(null,vec__7578_7605,(0),null);
var param_7607 = cljs.core.nth.call(null,vec__7578_7605,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_7607);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__7608 = cljs.core.next.call(null,seq__7573_7599__$1);
var G__7609 = null;
var G__7610 = (0);
var G__7611 = (0);
seq__7573_7587 = G__7608;
chunk__7574_7588 = G__7609;
count__7575_7589 = G__7610;
i__7576_7590 = G__7611;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__7579_7612 = cljs.core.seq.call(null,params);
var chunk__7580_7613 = null;
var count__7581_7614 = (0);
var i__7582_7615 = (0);
while(true){
if((i__7582_7615 < count__7581_7614)){
var param_7616 = cljs.core._nth.call(null,chunk__7580_7613,i__7582_7615);
cljs.compiler.emit.call(null,param_7616);

if(cljs.core._EQ_.call(null,param_7616,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7617 = seq__7579_7612;
var G__7618 = chunk__7580_7613;
var G__7619 = count__7581_7614;
var G__7620 = (i__7582_7615 + (1));
seq__7579_7612 = G__7617;
chunk__7580_7613 = G__7618;
count__7581_7614 = G__7619;
i__7582_7615 = G__7620;
continue;
} else {
var temp__4425__auto___7621 = cljs.core.seq.call(null,seq__7579_7612);
if(temp__4425__auto___7621){
var seq__7579_7622__$1 = temp__4425__auto___7621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7579_7622__$1)){
var c__4946__auto___7623 = cljs.core.chunk_first.call(null,seq__7579_7622__$1);
var G__7624 = cljs.core.chunk_rest.call(null,seq__7579_7622__$1);
var G__7625 = c__4946__auto___7623;
var G__7626 = cljs.core.count.call(null,c__4946__auto___7623);
var G__7627 = (0);
seq__7579_7612 = G__7624;
chunk__7580_7613 = G__7625;
count__7581_7614 = G__7626;
i__7582_7615 = G__7627;
continue;
} else {
var param_7628 = cljs.core.first.call(null,seq__7579_7622__$1);
cljs.compiler.emit.call(null,param_7628);

if(cljs.core._EQ_.call(null,param_7628,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7629 = cljs.core.next.call(null,seq__7579_7622__$1);
var G__7630 = null;
var G__7631 = (0);
var G__7632 = (0);
seq__7579_7612 = G__7629;
chunk__7580_7613 = G__7630;
count__7581_7614 = G__7631;
i__7582_7615 = G__7632;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__7583_7633 = cljs.core.seq.call(null,params);
var chunk__7584_7634 = null;
var count__7585_7635 = (0);
var i__7586_7636 = (0);
while(true){
if((i__7586_7636 < count__7585_7635)){
var param_7637 = cljs.core._nth.call(null,chunk__7584_7634,i__7586_7636);
cljs.compiler.emit.call(null,param_7637);

if(cljs.core._EQ_.call(null,param_7637,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7638 = seq__7583_7633;
var G__7639 = chunk__7584_7634;
var G__7640 = count__7585_7635;
var G__7641 = (i__7586_7636 + (1));
seq__7583_7633 = G__7638;
chunk__7584_7634 = G__7639;
count__7585_7635 = G__7640;
i__7586_7636 = G__7641;
continue;
} else {
var temp__4425__auto___7642 = cljs.core.seq.call(null,seq__7583_7633);
if(temp__4425__auto___7642){
var seq__7583_7643__$1 = temp__4425__auto___7642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7583_7643__$1)){
var c__4946__auto___7644 = cljs.core.chunk_first.call(null,seq__7583_7643__$1);
var G__7645 = cljs.core.chunk_rest.call(null,seq__7583_7643__$1);
var G__7646 = c__4946__auto___7644;
var G__7647 = cljs.core.count.call(null,c__4946__auto___7644);
var G__7648 = (0);
seq__7583_7633 = G__7645;
chunk__7584_7634 = G__7646;
count__7585_7635 = G__7647;
i__7586_7636 = G__7648;
continue;
} else {
var param_7649 = cljs.core.first.call(null,seq__7583_7643__$1);
cljs.compiler.emit.call(null,param_7649);

if(cljs.core._EQ_.call(null,param_7649,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7650 = cljs.core.next.call(null,seq__7583_7643__$1);
var G__7651 = null;
var G__7652 = (0);
var G__7653 = (0);
seq__7583_7633 = G__7650;
chunk__7584_7634 = G__7651;
count__7585_7635 = G__7652;
i__7586_7636 = G__7653;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__7658 = cljs.core.seq.call(null,params);
var chunk__7659 = null;
var count__7660 = (0);
var i__7661 = (0);
while(true){
if((i__7661 < count__7660)){
var param = cljs.core._nth.call(null,chunk__7659,i__7661);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7662 = seq__7658;
var G__7663 = chunk__7659;
var G__7664 = count__7660;
var G__7665 = (i__7661 + (1));
seq__7658 = G__7662;
chunk__7659 = G__7663;
count__7660 = G__7664;
i__7661 = G__7665;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7658);
if(temp__4425__auto__){
var seq__7658__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7658__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7658__$1);
var G__7666 = cljs.core.chunk_rest.call(null,seq__7658__$1);
var G__7667 = c__4946__auto__;
var G__7668 = cljs.core.count.call(null,c__4946__auto__);
var G__7669 = (0);
seq__7658 = G__7666;
chunk__7659 = G__7667;
count__7660 = G__7668;
i__7661 = G__7669;
continue;
} else {
var param = cljs.core.first.call(null,seq__7658__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7670 = cljs.core.next.call(null,seq__7658__$1);
var G__7671 = null;
var G__7672 = (0);
var G__7673 = (0);
seq__7658 = G__7670;
chunk__7659 = G__7671;
count__7660 = G__7672;
i__7661 = G__7673;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7674){
var map__7677 = p__7674;
var map__7677__$1 = ((((!((map__7677 == null)))?((((map__7677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7677):map__7677);
var type = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7677__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7679){
var map__7690 = p__7679;
var map__7690__$1 = ((((!((map__7690 == null)))?((((map__7690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7690):map__7690);
var f = map__7690__$1;
var type = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7690__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7700__$1 = (function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7701 = cljs.compiler.munge.call(null,name_7700__$1);
var delegate_name_7702 = [cljs.core.str(mname_7701),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7702," = function (");

var seq__7692_7703 = cljs.core.seq.call(null,params);
var chunk__7693_7704 = null;
var count__7694_7705 = (0);
var i__7695_7706 = (0);
while(true){
if((i__7695_7706 < count__7694_7705)){
var param_7707 = cljs.core._nth.call(null,chunk__7693_7704,i__7695_7706);
cljs.compiler.emit.call(null,param_7707);

if(cljs.core._EQ_.call(null,param_7707,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7708 = seq__7692_7703;
var G__7709 = chunk__7693_7704;
var G__7710 = count__7694_7705;
var G__7711 = (i__7695_7706 + (1));
seq__7692_7703 = G__7708;
chunk__7693_7704 = G__7709;
count__7694_7705 = G__7710;
i__7695_7706 = G__7711;
continue;
} else {
var temp__4425__auto___7712 = cljs.core.seq.call(null,seq__7692_7703);
if(temp__4425__auto___7712){
var seq__7692_7713__$1 = temp__4425__auto___7712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7692_7713__$1)){
var c__4946__auto___7714 = cljs.core.chunk_first.call(null,seq__7692_7713__$1);
var G__7715 = cljs.core.chunk_rest.call(null,seq__7692_7713__$1);
var G__7716 = c__4946__auto___7714;
var G__7717 = cljs.core.count.call(null,c__4946__auto___7714);
var G__7718 = (0);
seq__7692_7703 = G__7715;
chunk__7693_7704 = G__7716;
count__7694_7705 = G__7717;
i__7695_7706 = G__7718;
continue;
} else {
var param_7719 = cljs.core.first.call(null,seq__7692_7713__$1);
cljs.compiler.emit.call(null,param_7719);

if(cljs.core._EQ_.call(null,param_7719,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7720 = cljs.core.next.call(null,seq__7692_7713__$1);
var G__7721 = null;
var G__7722 = (0);
var G__7723 = (0);
seq__7692_7703 = G__7720;
chunk__7693_7704 = G__7721;
count__7694_7705 = G__7722;
i__7695_7706 = G__7723;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_7701," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7724 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7724,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7702,".call(this,");

var seq__7696_7725 = cljs.core.seq.call(null,params);
var chunk__7697_7726 = null;
var count__7698_7727 = (0);
var i__7699_7728 = (0);
while(true){
if((i__7699_7728 < count__7698_7727)){
var param_7729 = cljs.core._nth.call(null,chunk__7697_7726,i__7699_7728);
cljs.compiler.emit.call(null,param_7729);

if(cljs.core._EQ_.call(null,param_7729,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7730 = seq__7696_7725;
var G__7731 = chunk__7697_7726;
var G__7732 = count__7698_7727;
var G__7733 = (i__7699_7728 + (1));
seq__7696_7725 = G__7730;
chunk__7697_7726 = G__7731;
count__7698_7727 = G__7732;
i__7699_7728 = G__7733;
continue;
} else {
var temp__4425__auto___7734 = cljs.core.seq.call(null,seq__7696_7725);
if(temp__4425__auto___7734){
var seq__7696_7735__$1 = temp__4425__auto___7734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7696_7735__$1)){
var c__4946__auto___7736 = cljs.core.chunk_first.call(null,seq__7696_7735__$1);
var G__7737 = cljs.core.chunk_rest.call(null,seq__7696_7735__$1);
var G__7738 = c__4946__auto___7736;
var G__7739 = cljs.core.count.call(null,c__4946__auto___7736);
var G__7740 = (0);
seq__7696_7725 = G__7737;
chunk__7697_7726 = G__7738;
count__7698_7727 = G__7739;
i__7699_7728 = G__7740;
continue;
} else {
var param_7741 = cljs.core.first.call(null,seq__7696_7735__$1);
cljs.compiler.emit.call(null,param_7741);

if(cljs.core._EQ_.call(null,param_7741,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7742 = cljs.core.next.call(null,seq__7696_7735__$1);
var G__7743 = null;
var G__7744 = (0);
var G__7745 = (0);
seq__7696_7725 = G__7742;
chunk__7697_7726 = G__7743;
count__7698_7727 = G__7744;
i__7699_7728 = G__7745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7701,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7701,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7700__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7701,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7702,";");

cljs.compiler.emitln.call(null,"return ",mname_7701,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7749){
var map__7750 = p__7749;
var map__7750__$1 = ((((!((map__7750 == null)))?((((map__7750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7750):map__7750);
var name = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7746_SHARP_){
var and__4131__auto__ = p1__7746_SHARP_;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7746_SHARP_));
} else {
return and__4131__auto__;
}
});})(map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_7771__$1 = (function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7772 = cljs.compiler.munge.call(null,name_7771__$1);
var maxparams_7773 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7774 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7771__$1,mname_7772,maxparams_7773,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_7772),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7771__$1,mname_7772,maxparams_7773,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_7775 = cljs.core.sort_by.call(null,((function (name_7771__$1,mname_7772,maxparams_7773,mmap_7774,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7747_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7747_SHARP_)));
});})(name_7771__$1,mname_7772,maxparams_7773,mmap_7774,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7774));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7772," = null;");

var seq__7752_7776 = cljs.core.seq.call(null,ms_7775);
var chunk__7753_7777 = null;
var count__7754_7778 = (0);
var i__7755_7779 = (0);
while(true){
if((i__7755_7779 < count__7754_7778)){
var vec__7756_7780 = cljs.core._nth.call(null,chunk__7753_7777,i__7755_7779);
var n_7781 = cljs.core.nth.call(null,vec__7756_7780,(0),null);
var meth_7782 = cljs.core.nth.call(null,vec__7756_7780,(1),null);
cljs.compiler.emits.call(null,"var ",n_7781," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7782))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7782);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7782);
}

cljs.compiler.emitln.call(null,";");

var G__7783 = seq__7752_7776;
var G__7784 = chunk__7753_7777;
var G__7785 = count__7754_7778;
var G__7786 = (i__7755_7779 + (1));
seq__7752_7776 = G__7783;
chunk__7753_7777 = G__7784;
count__7754_7778 = G__7785;
i__7755_7779 = G__7786;
continue;
} else {
var temp__4425__auto___7787 = cljs.core.seq.call(null,seq__7752_7776);
if(temp__4425__auto___7787){
var seq__7752_7788__$1 = temp__4425__auto___7787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7752_7788__$1)){
var c__4946__auto___7789 = cljs.core.chunk_first.call(null,seq__7752_7788__$1);
var G__7790 = cljs.core.chunk_rest.call(null,seq__7752_7788__$1);
var G__7791 = c__4946__auto___7789;
var G__7792 = cljs.core.count.call(null,c__4946__auto___7789);
var G__7793 = (0);
seq__7752_7776 = G__7790;
chunk__7753_7777 = G__7791;
count__7754_7778 = G__7792;
i__7755_7779 = G__7793;
continue;
} else {
var vec__7757_7794 = cljs.core.first.call(null,seq__7752_7788__$1);
var n_7795 = cljs.core.nth.call(null,vec__7757_7794,(0),null);
var meth_7796 = cljs.core.nth.call(null,vec__7757_7794,(1),null);
cljs.compiler.emits.call(null,"var ",n_7795," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7796))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7796);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7796);
}

cljs.compiler.emitln.call(null,";");

var G__7797 = cljs.core.next.call(null,seq__7752_7788__$1);
var G__7798 = null;
var G__7799 = (0);
var G__7800 = (0);
seq__7752_7776 = G__7797;
chunk__7753_7777 = G__7798;
count__7754_7778 = G__7799;
i__7755_7779 = G__7800;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7772," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7773),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7773)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7773));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7758_7801 = cljs.core.seq.call(null,ms_7775);
var chunk__7759_7802 = null;
var count__7760_7803 = (0);
var i__7761_7804 = (0);
while(true){
if((i__7761_7804 < count__7760_7803)){
var vec__7762_7805 = cljs.core._nth.call(null,chunk__7759_7802,i__7761_7804);
var n_7806 = cljs.core.nth.call(null,vec__7762_7805,(0),null);
var meth_7807 = cljs.core.nth.call(null,vec__7762_7805,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7807))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7808 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7808," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7809 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7808," = new cljs.core.IndexedSeq(",a_7809,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7806,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7773)),(((cljs.core.count.call(null,maxparams_7773) > (1)))?", ":null),restarg_7808,");");
} else {
var pcnt_7810 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7807));
cljs.compiler.emitln.call(null,"case ",pcnt_7810,":");

cljs.compiler.emitln.call(null,"return ",n_7806,".call(this",(((pcnt_7810 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7810,maxparams_7773))),",")),");");
}

var G__7811 = seq__7758_7801;
var G__7812 = chunk__7759_7802;
var G__7813 = count__7760_7803;
var G__7814 = (i__7761_7804 + (1));
seq__7758_7801 = G__7811;
chunk__7759_7802 = G__7812;
count__7760_7803 = G__7813;
i__7761_7804 = G__7814;
continue;
} else {
var temp__4425__auto___7815 = cljs.core.seq.call(null,seq__7758_7801);
if(temp__4425__auto___7815){
var seq__7758_7816__$1 = temp__4425__auto___7815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7758_7816__$1)){
var c__4946__auto___7817 = cljs.core.chunk_first.call(null,seq__7758_7816__$1);
var G__7818 = cljs.core.chunk_rest.call(null,seq__7758_7816__$1);
var G__7819 = c__4946__auto___7817;
var G__7820 = cljs.core.count.call(null,c__4946__auto___7817);
var G__7821 = (0);
seq__7758_7801 = G__7818;
chunk__7759_7802 = G__7819;
count__7760_7803 = G__7820;
i__7761_7804 = G__7821;
continue;
} else {
var vec__7763_7822 = cljs.core.first.call(null,seq__7758_7816__$1);
var n_7823 = cljs.core.nth.call(null,vec__7763_7822,(0),null);
var meth_7824 = cljs.core.nth.call(null,vec__7763_7822,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7824))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7825 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7825," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7826 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7825," = new cljs.core.IndexedSeq(",a_7826,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7823,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7773)),(((cljs.core.count.call(null,maxparams_7773) > (1)))?", ":null),restarg_7825,");");
} else {
var pcnt_7827 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7824));
cljs.compiler.emitln.call(null,"case ",pcnt_7827,":");

cljs.compiler.emitln.call(null,"return ",n_7823,".call(this",(((pcnt_7827 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7827,maxparams_7773))),",")),");");
}

var G__7828 = cljs.core.next.call(null,seq__7758_7816__$1);
var G__7829 = null;
var G__7830 = (0);
var G__7831 = (0);
seq__7758_7801 = G__7828;
chunk__7759_7802 = G__7829;
count__7760_7803 = G__7830;
i__7761_7804 = G__7831;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7772,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7772,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7771__$1,mname_7772,maxparams_7773,mmap_7774,ms_7775,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7748_SHARP_){
var vec__7764 = p1__7748_SHARP_;
var n = cljs.core.nth.call(null,vec__7764,(0),null);
var m = cljs.core.nth.call(null,vec__7764,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7771__$1,mname_7772,maxparams_7773,mmap_7774,ms_7775,loop_locals,map__7750,map__7750__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_7775),".cljs$lang$applyTo;");
} else {
}

var seq__7765_7832 = cljs.core.seq.call(null,ms_7775);
var chunk__7766_7833 = null;
var count__7767_7834 = (0);
var i__7768_7835 = (0);
while(true){
if((i__7768_7835 < count__7767_7834)){
var vec__7769_7836 = cljs.core._nth.call(null,chunk__7766_7833,i__7768_7835);
var n_7837 = cljs.core.nth.call(null,vec__7769_7836,(0),null);
var meth_7838 = cljs.core.nth.call(null,vec__7769_7836,(1),null);
var c_7839 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7838));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7838))){
cljs.compiler.emitln.call(null,mname_7772,".cljs$core$IFn$_invoke$arity$variadic = ",n_7837,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7772,".cljs$core$IFn$_invoke$arity$",c_7839," = ",n_7837,";");
}

var G__7840 = seq__7765_7832;
var G__7841 = chunk__7766_7833;
var G__7842 = count__7767_7834;
var G__7843 = (i__7768_7835 + (1));
seq__7765_7832 = G__7840;
chunk__7766_7833 = G__7841;
count__7767_7834 = G__7842;
i__7768_7835 = G__7843;
continue;
} else {
var temp__4425__auto___7844 = cljs.core.seq.call(null,seq__7765_7832);
if(temp__4425__auto___7844){
var seq__7765_7845__$1 = temp__4425__auto___7844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7765_7845__$1)){
var c__4946__auto___7846 = cljs.core.chunk_first.call(null,seq__7765_7845__$1);
var G__7847 = cljs.core.chunk_rest.call(null,seq__7765_7845__$1);
var G__7848 = c__4946__auto___7846;
var G__7849 = cljs.core.count.call(null,c__4946__auto___7846);
var G__7850 = (0);
seq__7765_7832 = G__7847;
chunk__7766_7833 = G__7848;
count__7767_7834 = G__7849;
i__7768_7835 = G__7850;
continue;
} else {
var vec__7770_7851 = cljs.core.first.call(null,seq__7765_7845__$1);
var n_7852 = cljs.core.nth.call(null,vec__7770_7851,(0),null);
var meth_7853 = cljs.core.nth.call(null,vec__7770_7851,(1),null);
var c_7854 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7853));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7853))){
cljs.compiler.emitln.call(null,mname_7772,".cljs$core$IFn$_invoke$arity$variadic = ",n_7852,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7772,".cljs$core$IFn$_invoke$arity$",c_7854," = ",n_7852,";");
}

var G__7855 = cljs.core.next.call(null,seq__7765_7845__$1);
var G__7856 = null;
var G__7857 = (0);
var G__7858 = (0);
seq__7765_7832 = G__7855;
chunk__7766_7833 = G__7856;
count__7767_7834 = G__7857;
i__7768_7835 = G__7858;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7772,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7859){
var map__7860 = p__7859;
var map__7860__$1 = ((((!((map__7860 == null)))?((((map__7860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7860):map__7860);
var statements = cljs.core.get.call(null,map__7860__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7860__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7860__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4131__auto__ = statements;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4131__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7862_7866 = cljs.core.seq.call(null,statements);
var chunk__7863_7867 = null;
var count__7864_7868 = (0);
var i__7865_7869 = (0);
while(true){
if((i__7865_7869 < count__7864_7868)){
var s_7870 = cljs.core._nth.call(null,chunk__7863_7867,i__7865_7869);
cljs.compiler.emitln.call(null,s_7870);

var G__7871 = seq__7862_7866;
var G__7872 = chunk__7863_7867;
var G__7873 = count__7864_7868;
var G__7874 = (i__7865_7869 + (1));
seq__7862_7866 = G__7871;
chunk__7863_7867 = G__7872;
count__7864_7868 = G__7873;
i__7865_7869 = G__7874;
continue;
} else {
var temp__4425__auto___7875 = cljs.core.seq.call(null,seq__7862_7866);
if(temp__4425__auto___7875){
var seq__7862_7876__$1 = temp__4425__auto___7875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7862_7876__$1)){
var c__4946__auto___7877 = cljs.core.chunk_first.call(null,seq__7862_7876__$1);
var G__7878 = cljs.core.chunk_rest.call(null,seq__7862_7876__$1);
var G__7879 = c__4946__auto___7877;
var G__7880 = cljs.core.count.call(null,c__4946__auto___7877);
var G__7881 = (0);
seq__7862_7866 = G__7878;
chunk__7863_7867 = G__7879;
count__7864_7868 = G__7880;
i__7865_7869 = G__7881;
continue;
} else {
var s_7882 = cljs.core.first.call(null,seq__7862_7876__$1);
cljs.compiler.emitln.call(null,s_7882);

var G__7883 = cljs.core.next.call(null,seq__7862_7876__$1);
var G__7884 = null;
var G__7885 = (0);
var G__7886 = (0);
seq__7862_7866 = G__7883;
chunk__7863_7867 = G__7884;
count__7864_7868 = G__7885;
i__7865_7869 = G__7886;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__4131__auto__ = statements;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4131__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7887){
var map__7888 = p__7887;
var map__7888__$1 = ((((!((map__7888 == null)))?((((map__7888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7888):map__7888);
var env = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7888__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4143__auto__ = name;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7890,is_loop){
var map__7902 = p__7890;
var map__7902__$1 = ((((!((map__7902 == null)))?((((map__7902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7902):map__7902);
var bindings = cljs.core.get.call(null,map__7902__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7902__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_7904_7913 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_7904_7913,context,map__7902,map__7902__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_7904_7913,context,map__7902,map__7902__$1,bindings,expr,env))
,bindings):null));

try{var seq__7905_7914 = cljs.core.seq.call(null,bindings);
var chunk__7906_7915 = null;
var count__7907_7916 = (0);
var i__7908_7917 = (0);
while(true){
if((i__7908_7917 < count__7907_7916)){
var map__7909_7918 = cljs.core._nth.call(null,chunk__7906_7915,i__7908_7917);
var map__7909_7919__$1 = ((((!((map__7909_7918 == null)))?((((map__7909_7918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7909_7918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7909_7918):map__7909_7918);
var binding_7920 = map__7909_7919__$1;
var init_7921 = cljs.core.get.call(null,map__7909_7919__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7920);

cljs.compiler.emitln.call(null," = ",init_7921,";");

var G__7922 = seq__7905_7914;
var G__7923 = chunk__7906_7915;
var G__7924 = count__7907_7916;
var G__7925 = (i__7908_7917 + (1));
seq__7905_7914 = G__7922;
chunk__7906_7915 = G__7923;
count__7907_7916 = G__7924;
i__7908_7917 = G__7925;
continue;
} else {
var temp__4425__auto___7926 = cljs.core.seq.call(null,seq__7905_7914);
if(temp__4425__auto___7926){
var seq__7905_7927__$1 = temp__4425__auto___7926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7905_7927__$1)){
var c__4946__auto___7928 = cljs.core.chunk_first.call(null,seq__7905_7927__$1);
var G__7929 = cljs.core.chunk_rest.call(null,seq__7905_7927__$1);
var G__7930 = c__4946__auto___7928;
var G__7931 = cljs.core.count.call(null,c__4946__auto___7928);
var G__7932 = (0);
seq__7905_7914 = G__7929;
chunk__7906_7915 = G__7930;
count__7907_7916 = G__7931;
i__7908_7917 = G__7932;
continue;
} else {
var map__7911_7933 = cljs.core.first.call(null,seq__7905_7927__$1);
var map__7911_7934__$1 = ((((!((map__7911_7933 == null)))?((((map__7911_7933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7911_7933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7911_7933):map__7911_7933);
var binding_7935 = map__7911_7934__$1;
var init_7936 = cljs.core.get.call(null,map__7911_7934__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7935);

cljs.compiler.emitln.call(null," = ",init_7936,";");

var G__7937 = cljs.core.next.call(null,seq__7905_7927__$1);
var G__7938 = null;
var G__7939 = (0);
var G__7940 = (0);
seq__7905_7914 = G__7937;
chunk__7906_7915 = G__7938;
count__7907_7916 = G__7939;
i__7908_7917 = G__7940;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_7904_7913;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7941){
var map__7942 = p__7941;
var map__7942__$1 = ((((!((map__7942 == null)))?((((map__7942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7942):map__7942);
var frame = cljs.core.get.call(null,map__7942__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7942__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7942__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5046__auto___7944 = cljs.core.count.call(null,exprs);
var i_7945 = (0);
while(true){
if((i_7945 < n__5046__auto___7944)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7945)," = ",exprs.call(null,i_7945),";");

var G__7946 = (i_7945 + (1));
i_7945 = G__7946;
continue;
} else {
}
break;
}

var n__5046__auto___7947 = cljs.core.count.call(null,exprs);
var i_7948 = (0);
while(true){
if((i_7948 < n__5046__auto___7947)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7948))," = ",temps.call(null,i_7948),";");

var G__7949 = (i_7948 + (1));
i_7948 = G__7949;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7950){
var map__7951 = p__7950;
var map__7951__$1 = ((((!((map__7951 == null)))?((((map__7951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7951):map__7951);
var bindings = cljs.core.get.call(null,map__7951__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7951__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7951__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7953_7961 = cljs.core.seq.call(null,bindings);
var chunk__7954_7962 = null;
var count__7955_7963 = (0);
var i__7956_7964 = (0);
while(true){
if((i__7956_7964 < count__7955_7963)){
var map__7957_7965 = cljs.core._nth.call(null,chunk__7954_7962,i__7956_7964);
var map__7957_7966__$1 = ((((!((map__7957_7965 == null)))?((((map__7957_7965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7957_7965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7957_7965):map__7957_7965);
var binding_7967 = map__7957_7966__$1;
var init_7968 = cljs.core.get.call(null,map__7957_7966__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7967)," = ",init_7968,";");

var G__7969 = seq__7953_7961;
var G__7970 = chunk__7954_7962;
var G__7971 = count__7955_7963;
var G__7972 = (i__7956_7964 + (1));
seq__7953_7961 = G__7969;
chunk__7954_7962 = G__7970;
count__7955_7963 = G__7971;
i__7956_7964 = G__7972;
continue;
} else {
var temp__4425__auto___7973 = cljs.core.seq.call(null,seq__7953_7961);
if(temp__4425__auto___7973){
var seq__7953_7974__$1 = temp__4425__auto___7973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7953_7974__$1)){
var c__4946__auto___7975 = cljs.core.chunk_first.call(null,seq__7953_7974__$1);
var G__7976 = cljs.core.chunk_rest.call(null,seq__7953_7974__$1);
var G__7977 = c__4946__auto___7975;
var G__7978 = cljs.core.count.call(null,c__4946__auto___7975);
var G__7979 = (0);
seq__7953_7961 = G__7976;
chunk__7954_7962 = G__7977;
count__7955_7963 = G__7978;
i__7956_7964 = G__7979;
continue;
} else {
var map__7959_7980 = cljs.core.first.call(null,seq__7953_7974__$1);
var map__7959_7981__$1 = ((((!((map__7959_7980 == null)))?((((map__7959_7980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7959_7980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7959_7980):map__7959_7980);
var binding_7982 = map__7959_7981__$1;
var init_7983 = cljs.core.get.call(null,map__7959_7981__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7982)," = ",init_7983,";");

var G__7984 = cljs.core.next.call(null,seq__7953_7974__$1);
var G__7985 = null;
var G__7986 = (0);
var G__7987 = (0);
seq__7953_7961 = G__7984;
chunk__7954_7962 = G__7985;
count__7955_7963 = G__7986;
i__7956_7964 = G__7987;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7990){
var map__7991 = p__7990;
var map__7991__$1 = ((((!((map__7991 == null)))?((((map__7991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7991):map__7991);
var expr = map__7991__$1;
var f = cljs.core.get.call(null,map__7991__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__7991__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7991__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4131__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4131__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4131__auto__ = protocol;
if(cljs.core.truth_(and__4131__auto__)){
var and__4131__auto____$1 = tag;
if(cljs.core.truth_(and__4131__auto____$1)){
var or__4143__auto__ = (function (){var and__4131__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto____$2)){
var and__4131__auto____$3 = protocol;
if(cljs.core.truth_(and__4131__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4131__auto____$3;
}
} else {
return and__4131__auto____$2;
}
})();
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var and__4131__auto____$2 = (function (){var or__4143__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4143__auto____$1)){
return or__4143__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4131__auto____$2)){
var or__4143__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4143__auto____$1){
return or__4143__auto____$1;
} else {
var and__4131__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__4131__auto____$3){
var and__4131__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4131__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__4131__auto____$4;
}
} else {
return and__4131__auto____$3;
}
}
} else {
return and__4131__auto____$2;
}
}
} else {
return and__4131__auto____$1;
}
} else {
return and__4131__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4143__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4143__auto__){
return or__4143__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__7993 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4131__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4131__auto__)){
return (arity > mfa);
} else {
return and__4131__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env){
return (function (p1__7988_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7988_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env){
return (function (p1__7989_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7989_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7991,map__7991__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7993,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7993,(1),null);
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7994 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7994,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7995 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7995,args)),(((mfa_7995 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7995,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
var or__4143__auto____$1 = js_QMARK_;
if(or__4143__auto____$1){
return or__4143__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4131__auto__;
}
})())){
var fprop_7996 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_7996," ? ",f__$1,fprop_7996,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7997){
var map__7998 = p__7997;
var map__7998__$1 = ((((!((map__7998 == null)))?((((map__7998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7998):map__7998);
var ctor = cljs.core.get.call(null,map__7998__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__7998__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__8000){
var map__8001 = p__8000;
var map__8001__$1 = ((((!((map__8001 == null)))?((((map__8001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8001):map__8001);
var target = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__8001__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__8007_8011 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__8008_8012 = null;
var count__8009_8013 = (0);
var i__8010_8014 = (0);
while(true){
if((i__8010_8014 < count__8009_8013)){
var lib_8015 = cljs.core._nth.call(null,chunk__8008_8012,i__8010_8014);
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8015),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8015),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8015),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8015),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8015),"');");

}
}

var G__8016 = seq__8007_8011;
var G__8017 = chunk__8008_8012;
var G__8018 = count__8009_8013;
var G__8019 = (i__8010_8014 + (1));
seq__8007_8011 = G__8016;
chunk__8008_8012 = G__8017;
count__8009_8013 = G__8018;
i__8010_8014 = G__8019;
continue;
} else {
var temp__4425__auto___8020 = cljs.core.seq.call(null,seq__8007_8011);
if(temp__4425__auto___8020){
var seq__8007_8021__$1 = temp__4425__auto___8020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8007_8021__$1)){
var c__4946__auto___8022 = cljs.core.chunk_first.call(null,seq__8007_8021__$1);
var G__8023 = cljs.core.chunk_rest.call(null,seq__8007_8021__$1);
var G__8024 = c__4946__auto___8022;
var G__8025 = cljs.core.count.call(null,c__4946__auto___8022);
var G__8026 = (0);
seq__8007_8011 = G__8023;
chunk__8008_8012 = G__8024;
count__8009_8013 = G__8025;
i__8010_8014 = G__8026;
continue;
} else {
var lib_8027 = cljs.core.first.call(null,seq__8007_8021__$1);
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8027),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8027),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4143__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_8027),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8027),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_8027),"');");

}
}

var G__8028 = cljs.core.next.call(null,seq__8007_8021__$1);
var G__8029 = null;
var G__8030 = (0);
var G__8031 = (0);
seq__8007_8011 = G__8028;
chunk__8008_8012 = G__8029;
count__8009_8013 = G__8030;
i__8010_8014 = G__8031;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__8032){
var map__8033 = p__8032;
var map__8033__$1 = ((((!((map__8033 == null)))?((((map__8033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8033):map__8033);
var name = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__8033__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__8035){
var map__8036 = p__8035;
var map__8036__$1 = ((((!((map__8036 == null)))?((((map__8036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8036):map__8036);
var t = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8036__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8038_8052 = cljs.core.seq.call(null,protocols);
var chunk__8039_8053 = null;
var count__8040_8054 = (0);
var i__8041_8055 = (0);
while(true){
if((i__8041_8055 < count__8040_8054)){
var protocol_8056 = cljs.core._nth.call(null,chunk__8039_8053,i__8041_8055);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8056)].join('')),"}");

var G__8057 = seq__8038_8052;
var G__8058 = chunk__8039_8053;
var G__8059 = count__8040_8054;
var G__8060 = (i__8041_8055 + (1));
seq__8038_8052 = G__8057;
chunk__8039_8053 = G__8058;
count__8040_8054 = G__8059;
i__8041_8055 = G__8060;
continue;
} else {
var temp__4425__auto___8061 = cljs.core.seq.call(null,seq__8038_8052);
if(temp__4425__auto___8061){
var seq__8038_8062__$1 = temp__4425__auto___8061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8038_8062__$1)){
var c__4946__auto___8063 = cljs.core.chunk_first.call(null,seq__8038_8062__$1);
var G__8064 = cljs.core.chunk_rest.call(null,seq__8038_8062__$1);
var G__8065 = c__4946__auto___8063;
var G__8066 = cljs.core.count.call(null,c__4946__auto___8063);
var G__8067 = (0);
seq__8038_8052 = G__8064;
chunk__8039_8053 = G__8065;
count__8040_8054 = G__8066;
i__8041_8055 = G__8067;
continue;
} else {
var protocol_8068 = cljs.core.first.call(null,seq__8038_8062__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8068)].join('')),"}");

var G__8069 = cljs.core.next.call(null,seq__8038_8062__$1);
var G__8070 = null;
var G__8071 = (0);
var G__8072 = (0);
seq__8038_8052 = G__8069;
chunk__8039_8053 = G__8070;
count__8040_8054 = G__8071;
i__8041_8055 = G__8072;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8042_8073 = cljs.core.seq.call(null,fields__$1);
var chunk__8043_8074 = null;
var count__8044_8075 = (0);
var i__8045_8076 = (0);
while(true){
if((i__8045_8076 < count__8044_8075)){
var fld_8077 = cljs.core._nth.call(null,chunk__8043_8074,i__8045_8076);
cljs.compiler.emitln.call(null,"this.",fld_8077," = ",fld_8077,";");

var G__8078 = seq__8042_8073;
var G__8079 = chunk__8043_8074;
var G__8080 = count__8044_8075;
var G__8081 = (i__8045_8076 + (1));
seq__8042_8073 = G__8078;
chunk__8043_8074 = G__8079;
count__8044_8075 = G__8080;
i__8045_8076 = G__8081;
continue;
} else {
var temp__4425__auto___8082 = cljs.core.seq.call(null,seq__8042_8073);
if(temp__4425__auto___8082){
var seq__8042_8083__$1 = temp__4425__auto___8082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8042_8083__$1)){
var c__4946__auto___8084 = cljs.core.chunk_first.call(null,seq__8042_8083__$1);
var G__8085 = cljs.core.chunk_rest.call(null,seq__8042_8083__$1);
var G__8086 = c__4946__auto___8084;
var G__8087 = cljs.core.count.call(null,c__4946__auto___8084);
var G__8088 = (0);
seq__8042_8073 = G__8085;
chunk__8043_8074 = G__8086;
count__8044_8075 = G__8087;
i__8045_8076 = G__8088;
continue;
} else {
var fld_8089 = cljs.core.first.call(null,seq__8042_8083__$1);
cljs.compiler.emitln.call(null,"this.",fld_8089," = ",fld_8089,";");

var G__8090 = cljs.core.next.call(null,seq__8042_8083__$1);
var G__8091 = null;
var G__8092 = (0);
var G__8093 = (0);
seq__8042_8073 = G__8090;
chunk__8043_8074 = G__8091;
count__8044_8075 = G__8092;
i__8045_8076 = G__8093;
continue;
}
} else {
}
}
break;
}

var seq__8046_8094 = cljs.core.seq.call(null,pmasks);
var chunk__8047_8095 = null;
var count__8048_8096 = (0);
var i__8049_8097 = (0);
while(true){
if((i__8049_8097 < count__8048_8096)){
var vec__8050_8098 = cljs.core._nth.call(null,chunk__8047_8095,i__8049_8097);
var pno_8099 = cljs.core.nth.call(null,vec__8050_8098,(0),null);
var pmask_8100 = cljs.core.nth.call(null,vec__8050_8098,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8099,"$ = ",pmask_8100,";");

var G__8101 = seq__8046_8094;
var G__8102 = chunk__8047_8095;
var G__8103 = count__8048_8096;
var G__8104 = (i__8049_8097 + (1));
seq__8046_8094 = G__8101;
chunk__8047_8095 = G__8102;
count__8048_8096 = G__8103;
i__8049_8097 = G__8104;
continue;
} else {
var temp__4425__auto___8105 = cljs.core.seq.call(null,seq__8046_8094);
if(temp__4425__auto___8105){
var seq__8046_8106__$1 = temp__4425__auto___8105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8046_8106__$1)){
var c__4946__auto___8107 = cljs.core.chunk_first.call(null,seq__8046_8106__$1);
var G__8108 = cljs.core.chunk_rest.call(null,seq__8046_8106__$1);
var G__8109 = c__4946__auto___8107;
var G__8110 = cljs.core.count.call(null,c__4946__auto___8107);
var G__8111 = (0);
seq__8046_8094 = G__8108;
chunk__8047_8095 = G__8109;
count__8048_8096 = G__8110;
i__8049_8097 = G__8111;
continue;
} else {
var vec__8051_8112 = cljs.core.first.call(null,seq__8046_8106__$1);
var pno_8113 = cljs.core.nth.call(null,vec__8051_8112,(0),null);
var pmask_8114 = cljs.core.nth.call(null,vec__8051_8112,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8113,"$ = ",pmask_8114,";");

var G__8115 = cljs.core.next.call(null,seq__8046_8106__$1);
var G__8116 = null;
var G__8117 = (0);
var G__8118 = (0);
seq__8046_8094 = G__8115;
chunk__8047_8095 = G__8116;
count__8048_8096 = G__8117;
i__8049_8097 = G__8118;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__8119){
var map__8120 = p__8119;
var map__8120__$1 = ((((!((map__8120 == null)))?((((map__8120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8120):map__8120);
var t = cljs.core.get.call(null,map__8120__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__8120__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__8120__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__8120__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__8120__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__8122_8136 = cljs.core.seq.call(null,protocols);
var chunk__8123_8137 = null;
var count__8124_8138 = (0);
var i__8125_8139 = (0);
while(true){
if((i__8125_8139 < count__8124_8138)){
var protocol_8140 = cljs.core._nth.call(null,chunk__8123_8137,i__8125_8139);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8140)].join('')),"}");

var G__8141 = seq__8122_8136;
var G__8142 = chunk__8123_8137;
var G__8143 = count__8124_8138;
var G__8144 = (i__8125_8139 + (1));
seq__8122_8136 = G__8141;
chunk__8123_8137 = G__8142;
count__8124_8138 = G__8143;
i__8125_8139 = G__8144;
continue;
} else {
var temp__4425__auto___8145 = cljs.core.seq.call(null,seq__8122_8136);
if(temp__4425__auto___8145){
var seq__8122_8146__$1 = temp__4425__auto___8145;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8122_8146__$1)){
var c__4946__auto___8147 = cljs.core.chunk_first.call(null,seq__8122_8146__$1);
var G__8148 = cljs.core.chunk_rest.call(null,seq__8122_8146__$1);
var G__8149 = c__4946__auto___8147;
var G__8150 = cljs.core.count.call(null,c__4946__auto___8147);
var G__8151 = (0);
seq__8122_8136 = G__8148;
chunk__8123_8137 = G__8149;
count__8124_8138 = G__8150;
i__8125_8139 = G__8151;
continue;
} else {
var protocol_8152 = cljs.core.first.call(null,seq__8122_8146__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_8152)].join('')),"}");

var G__8153 = cljs.core.next.call(null,seq__8122_8146__$1);
var G__8154 = null;
var G__8155 = (0);
var G__8156 = (0);
seq__8122_8136 = G__8153;
chunk__8123_8137 = G__8154;
count__8124_8138 = G__8155;
i__8125_8139 = G__8156;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__8126_8157 = cljs.core.seq.call(null,fields__$1);
var chunk__8127_8158 = null;
var count__8128_8159 = (0);
var i__8129_8160 = (0);
while(true){
if((i__8129_8160 < count__8128_8159)){
var fld_8161 = cljs.core._nth.call(null,chunk__8127_8158,i__8129_8160);
cljs.compiler.emitln.call(null,"this.",fld_8161," = ",fld_8161,";");

var G__8162 = seq__8126_8157;
var G__8163 = chunk__8127_8158;
var G__8164 = count__8128_8159;
var G__8165 = (i__8129_8160 + (1));
seq__8126_8157 = G__8162;
chunk__8127_8158 = G__8163;
count__8128_8159 = G__8164;
i__8129_8160 = G__8165;
continue;
} else {
var temp__4425__auto___8166 = cljs.core.seq.call(null,seq__8126_8157);
if(temp__4425__auto___8166){
var seq__8126_8167__$1 = temp__4425__auto___8166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8126_8167__$1)){
var c__4946__auto___8168 = cljs.core.chunk_first.call(null,seq__8126_8167__$1);
var G__8169 = cljs.core.chunk_rest.call(null,seq__8126_8167__$1);
var G__8170 = c__4946__auto___8168;
var G__8171 = cljs.core.count.call(null,c__4946__auto___8168);
var G__8172 = (0);
seq__8126_8157 = G__8169;
chunk__8127_8158 = G__8170;
count__8128_8159 = G__8171;
i__8129_8160 = G__8172;
continue;
} else {
var fld_8173 = cljs.core.first.call(null,seq__8126_8167__$1);
cljs.compiler.emitln.call(null,"this.",fld_8173," = ",fld_8173,";");

var G__8174 = cljs.core.next.call(null,seq__8126_8167__$1);
var G__8175 = null;
var G__8176 = (0);
var G__8177 = (0);
seq__8126_8157 = G__8174;
chunk__8127_8158 = G__8175;
count__8128_8159 = G__8176;
i__8129_8160 = G__8177;
continue;
}
} else {
}
}
break;
}

var seq__8130_8178 = cljs.core.seq.call(null,pmasks);
var chunk__8131_8179 = null;
var count__8132_8180 = (0);
var i__8133_8181 = (0);
while(true){
if((i__8133_8181 < count__8132_8180)){
var vec__8134_8182 = cljs.core._nth.call(null,chunk__8131_8179,i__8133_8181);
var pno_8183 = cljs.core.nth.call(null,vec__8134_8182,(0),null);
var pmask_8184 = cljs.core.nth.call(null,vec__8134_8182,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8183,"$ = ",pmask_8184,";");

var G__8185 = seq__8130_8178;
var G__8186 = chunk__8131_8179;
var G__8187 = count__8132_8180;
var G__8188 = (i__8133_8181 + (1));
seq__8130_8178 = G__8185;
chunk__8131_8179 = G__8186;
count__8132_8180 = G__8187;
i__8133_8181 = G__8188;
continue;
} else {
var temp__4425__auto___8189 = cljs.core.seq.call(null,seq__8130_8178);
if(temp__4425__auto___8189){
var seq__8130_8190__$1 = temp__4425__auto___8189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8130_8190__$1)){
var c__4946__auto___8191 = cljs.core.chunk_first.call(null,seq__8130_8190__$1);
var G__8192 = cljs.core.chunk_rest.call(null,seq__8130_8190__$1);
var G__8193 = c__4946__auto___8191;
var G__8194 = cljs.core.count.call(null,c__4946__auto___8191);
var G__8195 = (0);
seq__8130_8178 = G__8192;
chunk__8131_8179 = G__8193;
count__8132_8180 = G__8194;
i__8133_8181 = G__8195;
continue;
} else {
var vec__8135_8196 = cljs.core.first.call(null,seq__8130_8190__$1);
var pno_8197 = cljs.core.nth.call(null,vec__8135_8196,(0),null);
var pmask_8198 = cljs.core.nth.call(null,vec__8135_8196,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_8197,"$ = ",pmask_8198,";");

var G__8199 = cljs.core.next.call(null,seq__8130_8190__$1);
var G__8200 = null;
var G__8201 = (0);
var G__8202 = (0);
seq__8130_8178 = G__8199;
chunk__8131_8179 = G__8200;
count__8132_8180 = G__8201;
i__8133_8181 = G__8202;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__8203){
var map__8204 = p__8203;
var map__8204__$1 = ((((!((map__8204 == null)))?((((map__8204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8204):map__8204);
var target = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__8204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__8206){
var map__8207 = p__8206;
var map__8207__$1 = ((((!((map__8207 == null)))?((((map__8207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8207):map__8207);
var op = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__8207__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4131__auto__ = code;
if(cljs.core.truth_(and__4131__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4131__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__7163__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__7163__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__8217 = cljs.core.seq.call(null,table);
var chunk__8218 = null;
var count__8219 = (0);
var i__8220 = (0);
while(true){
if((i__8220 < count__8219)){
var vec__8221 = cljs.core._nth.call(null,chunk__8218,i__8220);
var sym = cljs.core.nth.call(null,vec__8221,(0),null);
var value = cljs.core.nth.call(null,vec__8221,(1),null);
var ns_8223 = cljs.core.namespace.call(null,sym);
var name_8224 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__8225 = seq__8217;
var G__8226 = chunk__8218;
var G__8227 = count__8219;
var G__8228 = (i__8220 + (1));
seq__8217 = G__8225;
chunk__8218 = G__8226;
count__8219 = G__8227;
i__8220 = G__8228;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8217);
if(temp__4425__auto__){
var seq__8217__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8217__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__8217__$1);
var G__8229 = cljs.core.chunk_rest.call(null,seq__8217__$1);
var G__8230 = c__4946__auto__;
var G__8231 = cljs.core.count.call(null,c__4946__auto__);
var G__8232 = (0);
seq__8217 = G__8229;
chunk__8218 = G__8230;
count__8219 = G__8231;
i__8220 = G__8232;
continue;
} else {
var vec__8222 = cljs.core.first.call(null,seq__8217__$1);
var sym = cljs.core.nth.call(null,vec__8222,(0),null);
var value = cljs.core.nth.call(null,vec__8222,(1),null);
var ns_8233 = cljs.core.namespace.call(null,sym);
var name_8234 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__8235 = cljs.core.next.call(null,seq__8217__$1);
var G__8236 = null;
var G__8237 = (0);
var G__8238 = (0);
seq__8217 = G__8235;
chunk__8218 = G__8236;
count__8219 = G__8237;
i__8220 = G__8238;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map