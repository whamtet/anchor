// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('graph.dot');
goog.require('cljs.core');
goog.require('clojure.string');
graph.dot.escapable_characters = "\\|{}\"";
/**
 * Escape characters that are significant for the dot format.
 */
graph.dot.escape_string = (function graph$dot$escape_string(s){
return cljs.core.reduce.call(null,(function (p1__9145_SHARP_,p2__9146_SHARP_){
return clojure.string.replace.call(null,p1__9145_SHARP_,[cljs.core.str(p2__9146_SHARP_)].join(''),[cljs.core.str("\\"),cljs.core.str(p2__9146_SHARP_)].join(''));
}),s,graph.dot.escapable_characters);
});
graph.dot.default_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dpi","dpi",-986162832),(100)], null);
graph.dot.default_node_options = cljs.core.PersistentArrayMap.EMPTY;
graph.dot.default_edge_options = cljs.core.PersistentArrayMap.EMPTY;
graph.dot.option_translations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"TP","TP",163239233),false,new cljs.core.Keyword(null,"LR","LR",341359911)], null)], null)], null);
graph.dot.translate_options = (function graph$dot$translate_options(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__9150){
var vec__9151 = p__9150;
var k = cljs.core.nth.call(null,vec__9151,(0),null);
var v = cljs.core.nth.call(null,vec__9151,(1),null);
var temp__4423__auto__ = graph.dot.option_translations.call(null,k);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__9152 = temp__4423__auto__;
var k_STAR_ = cljs.core.nth.call(null,vec__9152,(0),null);
var f = cljs.core.nth.call(null,vec__9152,(1),null);
if(cljs.core.contains_QMARK_.call(null,m,k_STAR_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_STAR_,f.call(null,v)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),m)));
});
graph.dot.__GT_literal = (function graph$dot$__GT_literal(s){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("graph.dot","literal","graph.dot/literal",423906496),true], null));
});
graph.dot.literal_QMARK_ = (function graph$dot$literal_QMARK_(x){
return new cljs.core.Keyword("graph.dot","literal","graph.dot/literal",423906496).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
});
graph.dot.unwrap_literal = (function graph$dot$unwrap_literal(x){
if(cljs.core.truth_(graph.dot.literal_QMARK_.call(null,x))){
return cljs.core.first.call(null,x);
} else {
return x;
}
});
graph.dot.format_options_value = (function graph$dot$format_options_value(v){
if(typeof v === 'string'){
return [cljs.core.str("\""),cljs.core.str(graph.dot.escape_string.call(null,v)),cljs.core.str("\"")].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,v);
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
if(cljs.core.truth_(graph.dot.literal_QMARK_.call(null,v))){
return [cljs.core.str("\""),cljs.core.str(graph.dot.unwrap_literal.call(null,v)),cljs.core.str("\"")].join('');
} else {
return [cljs.core.str("\""),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,graph$dot$format_options_value,v)))),cljs.core.str("\"")].join('');
}
} else {
return [cljs.core.str(v)].join('');

}
}
}
});
graph.dot.format_label = (function graph$dot$format_label(label){
if(cljs.core.sequential_QMARK_.call(null,label)){
return graph.dot.__GT_literal.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," | ",cljs.core.map.call(null,(function (p1__9153_SHARP_){
return [cljs.core.str("{ "),cljs.core.str(graph.dot.unwrap_literal.call(null,graph$dot$format_label.call(null,p1__9153_SHARP_))),cljs.core.str(" }")].join('');
}),label))));
} else {
if(typeof label === 'string'){
return label;
} else {
if((label == null)){
return "";
} else {
return cljs.core.pr_str.call(null,label);

}
}
}
});
graph.dot.format_options = (function graph$dot$format_options(m,separator){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,cljs.core.map.call(null,(function (p__9157){
var vec__9158 = p__9157;
var k = cljs.core.nth.call(null,vec__9158,(0),null);
var v = cljs.core.nth.call(null,vec__9158,(1),null);
return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(graph.dot.format_options_value.call(null,v))].join('');
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),(function (p1__9154_SHARP_){
if(cljs.core.truth_(p1__9154_SHARP_)){
return graph.dot.format_label.call(null,p1__9154_SHARP_);
} else {
return null;
}
}))))));
});
graph.dot.format_edge = (function graph$dot$format_edge(src,dst,p__9160){
var map__9163 = p__9160;
var map__9163__$1 = ((((!((map__9163 == null)))?((((map__9163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9163):map__9163);
var options = map__9163__$1;
var directed_QMARK_ = cljs.core.get.call(null,map__9163__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830));
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),((function (map__9163,map__9163__$1,options,directed_QMARK_){
return (function (p1__9159_SHARP_){
var or__4143__auto__ = p1__9159_SHARP_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "";
}
});})(map__9163,map__9163__$1,options,directed_QMARK_))
);
return [cljs.core.str(src),cljs.core.str((cljs.core.truth_(directed_QMARK_)?" -> ":" -- ")),cljs.core.str(dst),cljs.core.str("["),cljs.core.str(graph.dot.format_options.call(null,cljs.core.dissoc.call(null,options__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830)),", ")),cljs.core.str("]")].join('');
});
graph.dot.format_node = (function graph$dot$format_node(id,p__9165){
var map__9168 = p__9165;
var map__9168__$1 = ((((!((map__9168 == null)))?((((map__9168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9168):map__9168);
var options = map__9168__$1;
var label = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var shape = cljs.core.get.call(null,map__9168__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape__$1 = (function (){var or__4143__auto__ = shape;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
if(cljs.core.sequential_QMARK_.call(null,label)){
return new cljs.core.Keyword(null,"record","record",-779106859);
} else {
return null;
}
}
})();
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4143__auto__ = label;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"shape","shape",1190694006),shape__$1);
return [cljs.core.str(id),cljs.core.str("["),cljs.core.str(graph.dot.format_options.call(null,options__$1,", ")),cljs.core.str("]")].join('');
});
graph.dot._STAR_node__GT_id_STAR_ = null;
graph.dot._STAR_cluster__GT_id_STAR_ = null;
graph.dot.node__GT_id = (function graph$dot$node__GT_id(n){
return graph.dot._STAR_node__GT_id_STAR_.call(null,n);
});
graph.dot.cluster__GT_id = (function graph$dot$cluster__GT_id(s){
return graph.dot._STAR_cluster__GT_id_STAR_.call(null,s);
});
/**
 * Takes a description of a graph, and returns a string describing a GraphViz dot file.
 * 
 * Requires two fields: `nodes`, which is a list of the nodes in the graph, and `adjacent`, which
 * is a function that takes a node and returns a list of adjacent nodes.
 */
graph.dot.graph__GT_dot = (function graph$dot$graph__GT_dot(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9191 = arguments.length;
var i__5202__auto___9192 = (0);
while(true){
if((i__5202__auto___9192 < len__5201__auto___9191)){
args__5208__auto__.push((arguments[i__5202__auto___9192]));

var G__9193 = (i__5202__auto___9192 + (1));
i__5202__auto___9192 = G__9193;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((2) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((2)),(0))):null);
return graph.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5209__auto__);
});

graph.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,adjacent,p__9183){
var map__9184 = p__9183;
var map__9184__$1 = ((((!((map__9184 == null)))?((((map__9184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9184):map__9184);
var graph_descriptor = map__9184__$1;
var directed_QMARK_ = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830),true);
var vertical_QMARK_ = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
var options = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"options","options",99638489));
var node__GT_descriptor = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.constantly.call(null,null));
var edge__GT_descriptor = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.constantly.call(null,null));
var cluster__GT_parent = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.constantly.call(null,null));
var node__GT_cluster = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"node->cluster","node->cluster",-2115231898),cljs.core.constantly.call(null,null));
var cluster__GT_descriptor = cljs.core.get.call(null,map__9184__$1,new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),cljs.core.constantly.call(null,null));
var _STAR_node__GT_id_STAR_9186 = graph.dot._STAR_node__GT_id_STAR_;
var _STAR_cluster__GT_id_STAR_9187 = graph.dot._STAR_cluster__GT_id_STAR_;
graph.dot._STAR_node__GT_id_STAR_ = (function (){var or__4143__auto__ = graph.dot._STAR_node__GT_id_STAR_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.memoize.call(null,((function (or__4143__auto__,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (___9079__auto__){
return cljs.core.gensym.call(null,"node");
});})(or__4143__auto__,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
);
}
})();

graph.dot._STAR_cluster__GT_id_STAR_ = (function (){var or__4143__auto__ = graph.dot._STAR_cluster__GT_id_STAR_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return cljs.core.memoize.call(null,((function (or__4143__auto__,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (___9079__auto__){
return cljs.core.gensym.call(null,"cluster");
});})(or__4143__auto__,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
);
}
})();

try{var current_cluster = new cljs.core.Keyword("graph.dot","cluster","graph.dot/cluster",-438289520).cljs$core$IFn$_invoke$arity$1(graph_descriptor);
var subgraph_QMARK_ = cljs.core.boolean$.call(null,current_cluster);
var cluster__GT_nodes = (cljs.core.truth_(node__GT_cluster)?cljs.core.dissoc.call(null,cljs.core.group_by.call(null,node__GT_cluster,nodes),null):null);
var cluster_QMARK_ = (cljs.core.truth_(cluster__GT_nodes)?cljs.core.comp.call(null,cljs.core.boolean$,cluster__GT_nodes):cljs.core.constantly.call(null,false));
var node_QMARK_ = cljs.core.set.call(null,nodes);
return cljs.core.apply.call(null,cljs.core.str,(cljs.core.truth_(current_cluster)?[cljs.core.str("subgraph "),cljs.core.str(graph.dot.cluster__GT_id.call(null,current_cluster))].join(''):(cljs.core.truth_(directed_QMARK_)?"digraph":"graph"))," {\n",(function (){var edge_options = new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(options);
var node_options = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(options);
return [cljs.core.str("graph["),cljs.core.str(graph.dot.format_options.call(null,graph.dot.translate_options.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.merge.call(null,graph.dot.default_options,options),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9171_SHARP_){
var or__4143__auto__ = p1__9171_SHARP_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
if(subgraph_QMARK_){
return "Monospace";
} else {
return null;
}
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"node","node",581201198))),", ")),cljs.core.str("]\n"),cljs.core.str("node["),cljs.core.str(graph.dot.format_options.call(null,graph.dot.translate_options.call(null,cljs.core.update_in.call(null,node_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9172_SHARP_){
var or__4143__auto__ = p1__9172_SHARP_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
)),", ")),cljs.core.str("]\n"),cljs.core.str("edge["),cljs.core.str(graph.dot.format_options.call(null,graph.dot.translate_options.call(null,cljs.core.update_in.call(null,edge_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9173_SHARP_){
var or__4143__auto__ = p1__9173_SHARP_;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
)),", ")),cljs.core.str("]\n\n")].join('');
})(),cljs.core.interpose.call(null,"\n",cljs.core.concat.call(null,cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9175_SHARP_){
return graph.dot.format_node.call(null,graph.dot.node__GT_id.call(null,p1__9175_SHARP_),cljs.core.merge.call(null,graph.dot.default_node_options,node__GT_descriptor.call(null,p1__9175_SHARP_)));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,cljs.core.remove.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9174_SHARP_){
return cljs.core.not_EQ_.call(null,current_cluster,node__GT_cluster.call(null,p1__9174_SHARP_));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,nodes)),cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9177_SHARP_){
return cljs.core.apply.call(null,graph.dot.graph__GT_dot,nodes,adjacent,cljs.core.apply.call(null,cljs.core.concat,cljs.core.assoc.call(null,graph_descriptor,new cljs.core.Keyword("graph.dot","cluster","graph.dot/cluster",-438289520),p1__9177_SHARP_,new cljs.core.Keyword(null,"options","options",99638489),cluster__GT_descriptor.call(null,p1__9177_SHARP_))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,cljs.core.remove.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9176_SHARP_){
return cljs.core.not_EQ_.call(null,current_cluster,cluster__GT_parent.call(null,p1__9176_SHARP_));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,cljs.core.keys.call(null,cluster__GT_nodes))),((subgraph_QMARK_)?null:cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p__9188){
var vec__9189 = p__9188;
var a = cljs.core.nth.call(null,vec__9189,(0),null);
var vec__9190 = cljs.core.nth.call(null,vec__9189,(1),null);
var type = cljs.core.nth.call(null,vec__9190,(0),null);
var b = cljs.core.nth.call(null,vec__9190,(1),null);
var descriptor = edge__GT_descriptor.call(null,a,b);
var format = ((function (descriptor,vec__9189,a,vec__9190,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9179_SHARP_){
return graph.dot.format_edge.call(null,graph.dot.node__GT_id.call(null,a),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node","node",581201198),type))?graph.dot.node__GT_id.call(null,b):graph.dot.cluster__GT_id.call(null,b)),cljs.core.merge.call(null,graph.dot.default_edge_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directed?","directed?",-323153830),directed_QMARK_], null),p1__9179_SHARP_));
});})(descriptor,vec__9189,a,vec__9190,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
;
if(cljs.core.vector_QMARK_.call(null,descriptor)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,format,descriptor)));
} else {
return format.call(null,descriptor);
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,cljs.core.mapcat.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (node){
return cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,node),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor){
return (function (p1__9178_SHARP_){
if(cljs.core.truth_(node_QMARK_.call(null,p1__9178_SHARP_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),p1__9178_SHARP_], null);
} else {
if(cljs.core.truth_(cluster_QMARK_.call(null,p1__9178_SHARP_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster","cluster",535175621),p1__9178_SHARP_], null);
} else {
return null;

}
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,adjacent.call(null,node))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,_STAR_node__GT_id_STAR_9186,_STAR_cluster__GT_id_STAR_9187,map__9184,map__9184__$1,graph_descriptor,directed_QMARK_,vertical_QMARK_,options,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor))
,nodes))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}\n"], null))));
}finally {graph.dot._STAR_cluster__GT_id_STAR_ = _STAR_cluster__GT_id_STAR_9187;

graph.dot._STAR_node__GT_id_STAR_ = _STAR_node__GT_id_STAR_9186;
}});

graph.dot.graph__GT_dot.cljs$lang$maxFixedArity = (2);

graph.dot.graph__GT_dot.cljs$lang$applyTo = (function (seq9180){
var G__9181 = cljs.core.first.call(null,seq9180);
var seq9180__$1 = cljs.core.next.call(null,seq9180);
var G__9182 = cljs.core.first.call(null,seq9180__$1);
var seq9180__$2 = cljs.core.next.call(null,seq9180__$1);
return graph.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic(G__9181,G__9182,seq9180__$2);
});
/**
 * Like tree-seq, but returns a string containing a GraphViz dot file.  Additional options
 * mimic those in graph->dot.
 */
graph.dot.tree__GT_dot = (function graph$dot$tree__GT_dot(var_args){
var args__5208__auto__ = [];
var len__5201__auto___9202 = arguments.length;
var i__5202__auto___9203 = (0);
while(true){
if((i__5202__auto___9203 < len__5201__auto___9202)){
args__5208__auto__.push((arguments[i__5202__auto___9203]));

var G__9204 = (i__5202__auto___9203 + (1));
i__5202__auto___9203 = G__9204;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((3) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((3)),(0))):null);
return graph.dot.tree__GT_dot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5209__auto__);
});

graph.dot.tree__GT_dot.cljs$core$IFn$_invoke$arity$variadic = (function (branch_QMARK_,children,root,p__9199){
var map__9200 = p__9199;
var map__9200__$1 = ((((!((map__9200 == null)))?((((map__9200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9200):map__9200);
var vertical_QMARK_ = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
var node__GT_descriptor = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.constantly.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),""], null)));
var edge__GT_descriptor = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.constantly.call(null,null));
var cluster__GT_parent = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.constantly.call(null,null));
var node__GT_cluster = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"node->cluster","node->cluster",-2115231898),cljs.core.constantly.call(null,null));
var cluster__GT_descriptor = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),cljs.core.constantly.call(null,null));
var options = cljs.core.get.call(null,map__9200__$1,new cljs.core.Keyword(null,"options","options",99638489));
var node__GT_children = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var nodes = cljs.core.tree_seq.call(null,cljs.core.comp.call(null,branch_QMARK_,cljs.core.second),((function (node__GT_children,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options){
return (function (x){
cljs.core.swap_BANG_.call(null,node__GT_children,cljs.core.assoc,x,cljs.core.map.call(null,cljs.core.vector,cljs.core.repeatedly.call(null,((function (node__GT_children,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options){
return (function (){
return (new graph.dot.Object());
});})(node__GT_children,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options))
),children.call(null,cljs.core.second.call(null,x))));

return cljs.core.deref.call(null,node__GT_children).call(null,x);
});})(node__GT_children,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new graph.dot.Object()),root], null));
return graph.dot.graph__GT_dot.call(null,nodes,((function (node__GT_children,nodes,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options){
return (function (p1__9194_SHARP_){
return cljs.core.deref.call(null,node__GT_children).call(null,p1__9194_SHARP_);
});})(node__GT_children,nodes,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options))
,new cljs.core.Keyword(null,"directed?","directed?",-323153830),true,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.comp.call(null,node__GT_descriptor,cljs.core.second),new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),((function (node__GT_children,nodes,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options){
return (function (a,b){
return edge__GT_descriptor.call(null,cljs.core.second.call(null,a),cljs.core.second.call(null,b));
});})(node__GT_children,nodes,map__9200,map__9200__$1,vertical_QMARK_,node__GT_descriptor,edge__GT_descriptor,cluster__GT_parent,node__GT_cluster,cluster__GT_descriptor,options))
,new cljs.core.Keyword(null,"node->cluster","node->cluster",-2115231898),cljs.core.comp.call(null,node__GT_cluster,cljs.core.second),new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cluster__GT_parent,new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),cluster__GT_descriptor);
});

graph.dot.tree__GT_dot.cljs$lang$maxFixedArity = (3);

graph.dot.tree__GT_dot.cljs$lang$applyTo = (function (seq9195){
var G__9196 = cljs.core.first.call(null,seq9195);
var seq9195__$1 = cljs.core.next.call(null,seq9195);
var G__9197 = cljs.core.first.call(null,seq9195__$1);
var seq9195__$2 = cljs.core.next.call(null,seq9195__$1);
var G__9198 = cljs.core.first.call(null,seq9195__$2);
var seq9195__$3 = cljs.core.next.call(null,seq9195__$2);
return graph.dot.tree__GT_dot.cljs$core$IFn$_invoke$arity$variadic(G__9196,G__9197,G__9198,seq9195__$3);
});

//# sourceMappingURL=dot.js.map