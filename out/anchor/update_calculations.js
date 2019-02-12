// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.update_calculations');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('anchor.model');
goog.require('anchor.db');
goog.require('anchor.yahoo');
goog.require('anchor.util');
goog.require('clojure.string');
goog.require('cljs.reader');
anchor.update_calculations.parse_value = (function anchor$update_calculations$parse_value(value){
return Number(cljs.core.reduce.call(null,(function (s,to_remove){
return clojure.string.replace.call(null,s,to_remove,"");
}),value,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [",","(",")"], null)));
});
/**
 * parse manually typed values
 */
anchor.update_calculations.parse_values = (function anchor$update_calculations$parse_values(values){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,anchor.update_calculations.parse_value,cljs.core.remove.call(null,cljs.core.empty_QMARK_,values.split(" "))));
});
anchor.update_calculations.manual_overrides = (function anchor$update_calculations$manual_overrides(company,reporting_period,factor){
var factor__$1 = (factor * new cljs.core.PersistentArrayMap(null, 3, ["1",(1),"k",(1000),"M",(1000000)], null).call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-metadata"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period,"factor"], null))));
return anchor.util.value_map.call(null,((function (factor__$1){
return (function (p1__34856_SHARP_){
return (factor__$1 * anchor.update_calculations.parse_values.call(null,p1__34856_SHARP_));
});})(factor__$1))
,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-manuals"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null)));
});
anchor.update_calculations.get_values_at = (function anchor$update_calculations$get_values_at(company,reporting_period,factor){
var factor__$1 = (factor * new cljs.core.PersistentArrayMap(null, 3, ["1",(1),"k",(1000),"M",(1000000)], null).call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-metadata"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period,"factor"], null))));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4915__auto__ = ((function (factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113(s__35114){
return (new cljs.core.LazySeq(null,((function (factor__$1){
return (function (){
var s__35114__$1 = s__35114;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35114__$1);
if(temp__4425__auto__){
var s__35114__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35114__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35114__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35116 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35115 = (0);
while(true){
if((i__35115 < size__4914__auto__)){
var vec__35243 = cljs.core._nth.call(null,c__4913__auto__,i__35115);
var field = cljs.core.nth.call(null,vec__35243,(0),null);
var pages = cljs.core.nth.call(null,vec__35243,(1),null);
cljs.core.chunk_append.call(null,b__35116,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4915__auto__ = ((function (i__35115,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244(s__35245){
return (new cljs.core.LazySeq(null,((function (i__35115,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35245__$1 = s__35245;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35245__$1);
if(temp__4425__auto____$1){
var xs__4977__auto__ = temp__4425__auto____$1;
var vec__35279 = cljs.core.first.call(null,xs__4977__auto__);
var page = cljs.core.nth.call(null,vec__35279,(0),null);
var items = cljs.core.nth.call(null,vec__35279,(1),null);
var iterys__4911__auto__ = ((function (s__35245__$1,i__35115,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244_$_iter__35246(s__35247){
return (new cljs.core.LazySeq(null,((function (s__35245__$1,i__35115,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35247__$1 = s__35247;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__35247__$1);
if(temp__4425__auto____$2){
var xs__4977__auto____$1 = temp__4425__auto____$2;
var vec__35293 = cljs.core.first.call(null,xs__4977__auto____$1);
var item = cljs.core.nth.call(null,vec__35293,(0),null);
var subitems = cljs.core.nth.call(null,vec__35293,(1),null);
var iterys__4911__auto__ = ((function (s__35247__$1,s__35245__$1,i__35115,vec__35293,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244_$_iter__35246_$_iter__35248(s__35249){
return (new cljs.core.LazySeq(null,((function (s__35247__$1,s__35245__$1,i__35115,vec__35293,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35249__$1 = s__35249;
while(true){
var temp__4425__auto____$3 = cljs.core.seq.call(null,s__35249__$1);
if(temp__4425__auto____$3){
var s__35249__$2 = temp__4425__auto____$3;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35249__$2)){
var c__4913__auto____$1 = cljs.core.chunk_first.call(null,s__35249__$2);
var size__4914__auto____$1 = cljs.core.count.call(null,c__4913__auto____$1);
var b__35251 = cljs.core.chunk_buffer.call(null,size__4914__auto____$1);
if((function (){var i__35250 = (0);
while(true){
if((i__35250 < size__4914__auto____$1)){
var vec__35300 = cljs.core._nth.call(null,c__4913__auto____$1,i__35250);
var subitem = cljs.core.nth.call(null,vec__35300,(0),null);
var map__35301 = cljs.core.nth.call(null,vec__35300,(1),null);
var map__35301__$1 = ((((!((map__35301 == null)))?((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35301):map__35301);
var negative_QMARK_ = cljs.core.get.call(null,map__35301__$1,"negative?");
var value = cljs.core.get.call(null,map__35301__$1,"value");
if(cljs.core.truth_(value)){
var value__$1 = (factor__$1 * anchor.update_calculations.parse_value.call(null,value));
cljs.core.chunk_append.call(null,b__35251,(cljs.core.truth_(negative_QMARK_)?(- value__$1):value__$1));

var G__35369 = (i__35250 + (1));
i__35250 = G__35369;
continue;
} else {
var G__35370 = (i__35250 + (1));
i__35250 = G__35370;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35251),anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244_$_iter__35246_$_iter__35248.call(null,cljs.core.chunk_rest.call(null,s__35249__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35251),null);
}
} else {
var vec__35303 = cljs.core.first.call(null,s__35249__$2);
var subitem = cljs.core.nth.call(null,vec__35303,(0),null);
var map__35304 = cljs.core.nth.call(null,vec__35303,(1),null);
var map__35304__$1 = ((((!((map__35304 == null)))?((((map__35304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35304):map__35304);
var negative_QMARK_ = cljs.core.get.call(null,map__35304__$1,"negative?");
var value = cljs.core.get.call(null,map__35304__$1,"value");
if(cljs.core.truth_(value)){
var value__$1 = (factor__$1 * anchor.update_calculations.parse_value.call(null,value));
return cljs.core.cons.call(null,(cljs.core.truth_(negative_QMARK_)?(- value__$1):value__$1),anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244_$_iter__35246_$_iter__35248.call(null,cljs.core.rest.call(null,s__35249__$2)));
} else {
var G__35371 = cljs.core.rest.call(null,s__35249__$2);
s__35249__$1 = G__35371;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35247__$1,s__35245__$1,i__35115,vec__35293,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(s__35247__$1,s__35245__$1,i__35115,vec__35293,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,subitems));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244_$_iter__35246.call(null,cljs.core.rest.call(null,s__35247__$1)));
} else {
var G__35372 = cljs.core.rest.call(null,s__35247__$1);
s__35247__$1 = G__35372;
continue;
}
} else {
return null;
}
break;
}
});})(s__35245__$1,i__35115,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(s__35245__$1,i__35115,vec__35279,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,items));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35244.call(null,cljs.core.rest.call(null,s__35245__$1)));
} else {
var G__35373 = cljs.core.rest.call(null,s__35245__$1);
s__35245__$1 = G__35373;
continue;
}
} else {
return null;
}
break;
}
});})(i__35115,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(i__35115,vec__35243,field,pages,c__4913__auto__,size__4914__auto__,b__35116,s__35114__$2,temp__4425__auto__,factor__$1))
;
return iter__4915__auto__.call(null,pages);
})())], null));

var G__35374 = (i__35115 + (1));
i__35115 = G__35374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35116),anchor$update_calculations$get_values_at_$_iter__35113.call(null,cljs.core.chunk_rest.call(null,s__35114__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35116),null);
}
} else {
var vec__35306 = cljs.core.first.call(null,s__35114__$2);
var field = cljs.core.nth.call(null,vec__35306,(0),null);
var pages = cljs.core.nth.call(null,vec__35306,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,cljs.core.reduce.call(null,cljs.core._PLUS_,(function (){var iter__4915__auto__ = ((function (vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307(s__35308){
return (new cljs.core.LazySeq(null,((function (vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35308__$1 = s__35308;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__35308__$1);
if(temp__4425__auto____$1){
var xs__4977__auto__ = temp__4425__auto____$1;
var vec__35342 = cljs.core.first.call(null,xs__4977__auto__);
var page = cljs.core.nth.call(null,vec__35342,(0),null);
var items = cljs.core.nth.call(null,vec__35342,(1),null);
var iterys__4911__auto__ = ((function (s__35308__$1,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307_$_iter__35309(s__35310){
return (new cljs.core.LazySeq(null,((function (s__35308__$1,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35310__$1 = s__35310;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__35310__$1);
if(temp__4425__auto____$2){
var xs__4977__auto____$1 = temp__4425__auto____$2;
var vec__35356 = cljs.core.first.call(null,xs__4977__auto____$1);
var item = cljs.core.nth.call(null,vec__35356,(0),null);
var subitems = cljs.core.nth.call(null,vec__35356,(1),null);
var iterys__4911__auto__ = ((function (s__35310__$1,s__35308__$1,vec__35356,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307_$_iter__35309_$_iter__35311(s__35312){
return (new cljs.core.LazySeq(null,((function (s__35310__$1,s__35308__$1,vec__35356,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1){
return (function (){
var s__35312__$1 = s__35312;
while(true){
var temp__4425__auto____$3 = cljs.core.seq.call(null,s__35312__$1);
if(temp__4425__auto____$3){
var s__35312__$2 = temp__4425__auto____$3;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35312__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35312__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35314 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35313 = (0);
while(true){
if((i__35313 < size__4914__auto__)){
var vec__35363 = cljs.core._nth.call(null,c__4913__auto__,i__35313);
var subitem = cljs.core.nth.call(null,vec__35363,(0),null);
var map__35364 = cljs.core.nth.call(null,vec__35363,(1),null);
var map__35364__$1 = ((((!((map__35364 == null)))?((((map__35364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35364):map__35364);
var negative_QMARK_ = cljs.core.get.call(null,map__35364__$1,"negative?");
var value = cljs.core.get.call(null,map__35364__$1,"value");
if(cljs.core.truth_(value)){
var value__$1 = (factor__$1 * anchor.update_calculations.parse_value.call(null,value));
cljs.core.chunk_append.call(null,b__35314,(cljs.core.truth_(negative_QMARK_)?(- value__$1):value__$1));

var G__35375 = (i__35313 + (1));
i__35313 = G__35375;
continue;
} else {
var G__35376 = (i__35313 + (1));
i__35313 = G__35376;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35314),anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307_$_iter__35309_$_iter__35311.call(null,cljs.core.chunk_rest.call(null,s__35312__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35314),null);
}
} else {
var vec__35366 = cljs.core.first.call(null,s__35312__$2);
var subitem = cljs.core.nth.call(null,vec__35366,(0),null);
var map__35367 = cljs.core.nth.call(null,vec__35366,(1),null);
var map__35367__$1 = ((((!((map__35367 == null)))?((((map__35367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35367):map__35367);
var negative_QMARK_ = cljs.core.get.call(null,map__35367__$1,"negative?");
var value = cljs.core.get.call(null,map__35367__$1,"value");
if(cljs.core.truth_(value)){
var value__$1 = (factor__$1 * anchor.update_calculations.parse_value.call(null,value));
return cljs.core.cons.call(null,(cljs.core.truth_(negative_QMARK_)?(- value__$1):value__$1),anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307_$_iter__35309_$_iter__35311.call(null,cljs.core.rest.call(null,s__35312__$2)));
} else {
var G__35377 = cljs.core.rest.call(null,s__35312__$2);
s__35312__$1 = G__35377;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35310__$1,s__35308__$1,vec__35356,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(s__35310__$1,s__35308__$1,vec__35356,item,subitems,xs__4977__auto____$1,temp__4425__auto____$2,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,subitems));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307_$_iter__35309.call(null,cljs.core.rest.call(null,s__35310__$1)));
} else {
var G__35378 = cljs.core.rest.call(null,s__35310__$1);
s__35310__$1 = G__35378;
continue;
}
} else {
return null;
}
break;
}
});})(s__35308__$1,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(s__35308__$1,vec__35342,page,items,xs__4977__auto__,temp__4425__auto____$1,vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,items));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,anchor$update_calculations$get_values_at_$_iter__35113_$_iter__35307.call(null,cljs.core.rest.call(null,s__35308__$1)));
} else {
var G__35379 = cljs.core.rest.call(null,s__35308__$1);
s__35308__$1 = G__35379;
continue;
}
} else {
return null;
}
break;
}
});})(vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
,null,null));
});})(vec__35306,field,pages,s__35114__$2,temp__4425__auto__,factor__$1))
;
return iter__4915__auto__.call(null,pages);
})())], null),anchor$update_calculations$get_values_at_$_iter__35113.call(null,cljs.core.rest.call(null,s__35114__$2)));
}
} else {
return null;
}
break;
}
});})(factor__$1))
,null,null));
});})(factor__$1))
;
return iter__4915__auto__.call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-values"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null)));
})());
});
anchor.update_calculations.date_value = (function anchor$update_calculations$date_value(s){
var x = (function (p1__35381_SHARP_){
return Number(p1__35381_SHARP_);
});
var vec__35383 = cljs.core.map.call(null,x,s.split(" "));
var year = cljs.core.nth.call(null,vec__35383,(0),null);
var month = cljs.core.nth.call(null,vec__35383,(1),null);
return (((0) - year) - (month / (12)));
});
anchor.update_calculations.manual_values = (function anchor$update_calculations$manual_values(company){
var factors = cljs.core.map.call(null,cljs.reader.read_string,cljs.core.remove.call(null,cljs.core.empty_QMARK_,cljs.core.get.call(null,anchor.db.get_db.call(null,"period-coefficients"),company,"").split(" ")));
var sorted_reporting_periods = cljs.core.sort_by.call(null,anchor.update_calculations.date_value,cljs.core.keys.call(null,cljs.core.get.call(null,anchor.db.get_db.call(null,"report-metadata"),company)));
var values = cljs.core.map.call(null,((function (factors,sorted_reporting_periods){
return (function (p1__35384_SHARP_,p2__35385_SHARP_){
return anchor.update_calculations.get_values_at.call(null,company,p1__35384_SHARP_,p2__35385_SHARP_);
});})(factors,sorted_reporting_periods))
,sorted_reporting_periods,factors);
var values2 = cljs.core.map.call(null,((function (factors,sorted_reporting_periods,values){
return (function (p1__35386_SHARP_,p2__35387_SHARP_){
return anchor.update_calculations.manual_overrides.call(null,company,p1__35386_SHARP_,p2__35387_SHARP_);
});})(factors,sorted_reporting_periods,values))
,sorted_reporting_periods,factors);
var values__$1 = cljs.core.map.call(null,((function (factors,sorted_reporting_periods,values,values2){
return (function (p1__35388_SHARP_,p2__35389_SHARP_){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,p1__35388_SHARP_,p2__35389_SHARP_);
});})(factors,sorted_reporting_periods,values,values2))
,values,values2);
var reduced_values = (cljs.core.truth_(cljs.core.not_empty.call(null,values__$1))?cljs.core.reduce.call(null,((function (factors,sorted_reporting_periods,values,values2,values__$1){
return (function (p1__35390_SHARP_,p2__35391_SHARP_){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,p1__35390_SHARP_,p2__35391_SHARP_);
});})(factors,sorted_reporting_periods,values,values2,values__$1))
,values__$1):null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4915__auto__ = ((function (factors,sorted_reporting_periods,values,values2,values__$1,reduced_values){
return (function anchor$update_calculations$manual_values_$_iter__35401(s__35402){
return (new cljs.core.LazySeq(null,((function (factors,sorted_reporting_periods,values,values2,values__$1,reduced_values){
return (function (){
var s__35402__$1 = s__35402;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35402__$1);
if(temp__4425__auto__){
var s__35402__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35402__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35402__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35404 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35403 = (0);
while(true){
if((i__35403 < size__4914__auto__)){
var vec__35407 = cljs.core._nth.call(null,c__4913__auto__,i__35403);
var k = cljs.core.nth.call(null,vec__35407,(0),null);
var v = cljs.core.nth.call(null,vec__35407,(1),null);
cljs.core.chunk_append.call(null,b__35404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,"Balance Sheet",cljs.core.get.call(null,anchor.db.get_db.call(null,"node-types"),k)))?cljs.core.some.call(null,((function (i__35403,vec__35407,k,v,c__4913__auto__,size__4914__auto__,b__35404,s__35402__$2,temp__4425__auto__,factors,sorted_reporting_periods,values,values2,values__$1,reduced_values){
return (function (p1__35392_SHARP_){
return cljs.core.get.call(null,p1__35392_SHARP_,k);
});})(i__35403,vec__35407,k,v,c__4913__auto__,size__4914__auto__,b__35404,s__35402__$2,temp__4425__auto__,factors,sorted_reporting_periods,values,values2,values__$1,reduced_values))
,values__$1):v)], null));

var G__35409 = (i__35403 + (1));
i__35403 = G__35409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35404),anchor$update_calculations$manual_values_$_iter__35401.call(null,cljs.core.chunk_rest.call(null,s__35402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35404),null);
}
} else {
var vec__35408 = cljs.core.first.call(null,s__35402__$2);
var k = cljs.core.nth.call(null,vec__35408,(0),null);
var v = cljs.core.nth.call(null,vec__35408,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.call(null,"Balance Sheet",cljs.core.get.call(null,anchor.db.get_db.call(null,"node-types"),k)))?cljs.core.some.call(null,((function (vec__35408,k,v,s__35402__$2,temp__4425__auto__,factors,sorted_reporting_periods,values,values2,values__$1,reduced_values){
return (function (p1__35392_SHARP_){
return cljs.core.get.call(null,p1__35392_SHARP_,k);
});})(vec__35408,k,v,s__35402__$2,temp__4425__auto__,factors,sorted_reporting_periods,values,values2,values__$1,reduced_values))
,values__$1):v)], null),anchor$update_calculations$manual_values_$_iter__35401.call(null,cljs.core.rest.call(null,s__35402__$2)));
}
} else {
return null;
}
break;
}
});})(factors,sorted_reporting_periods,values,values2,values__$1,reduced_values))
,null,null));
});})(factors,sorted_reporting_periods,values,values2,values__$1,reduced_values))
;
return iter__4915__auto__.call(null,reduced_values);
})());
});
anchor.update_calculations.cap_rate = (function anchor$update_calculations$cap_rate(company){
var proportion = cljs.core.get.call(null,anchor.db.get_db.call(null,"company-sectors"),company,new cljs.core.PersistentArrayMap(null, 1, ["General",(100)], null));
return ((cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (proportion){
return (function (p__35412){
var vec__35413 = p__35412;
var sector = cljs.core.nth.call(null,vec__35413,(0),null);
var proportion__$1 = cljs.core.nth.call(null,vec__35413,(1),null);
return (proportion__$1 * cljs.core.get.call(null,anchor.db.get_db.call(null,"economic-sectors"),sector));
});})(proportion))
,proportion)) / cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,proportion))) / (100));
});
anchor.update_calculations.default_inputs = new cljs.core.PersistentArrayMap(null, 2, ["new-project-return",(0),"new-project-expenditure",(0)], null);
anchor.update_calculations.inputs = (function anchor$update_calculations$inputs(companies){
var manual_values = cljs.core.map.call(null,anchor.update_calculations.manual_values,companies);
var cap_rates = cljs.core.map.call(null,anchor.update_calculations.cap_rate,companies);
var manual_values2 = anchor.db.get_db.call(null,"manual-values");
cljs.core.prn.call(null,new cljs.core.Symbol(null,"fuck","fuck",396469492,null));

var yahoo_data = anchor.yahoo.data2.call(null,companies);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [yahoo_data], null),((function (yahoo_data,manual_values,cap_rates,manual_values2){
return (function (){
return cljs.core.zipmap.call(null,companies,cljs.core.map.call(null,((function (yahoo_data,manual_values,cap_rates,manual_values2){
return (function (company,manual,cap_rate,yahoo_data__$1){
return cljs.core.merge.call(null,anchor.update_calculations.default_inputs,manual,yahoo_data__$1,new cljs.core.PersistentArrayMap(null, 1, ["cap-rate",cap_rate], null),cljs.core.get.call(null,manual_values2,company));
});})(yahoo_data,manual_values,cap_rates,manual_values2))
,companies,manual_values,cap_rates,cljs.core.deref.call(null,yahoo_data)));
});})(yahoo_data,manual_values,cap_rates,manual_values2))
);
});
anchor.update_calculations.nums = (function anchor$update_calculations$nums(var_args){
var args35414 = [];
var len__5201__auto___35419 = arguments.length;
var i__5202__auto___35420 = (0);
while(true){
if((i__5202__auto___35420 < len__5201__auto___35419)){
args35414.push((arguments[i__5202__auto___35420]));

var G__35421 = (i__5202__auto___35420 + (1));
i__5202__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var G__35416 = args35414.length;
switch (G__35416) {
case 0:
return anchor.update_calculations.nums.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return anchor.update_calculations.nums.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35414.length)].join('')));

}
});

anchor.update_calculations.nums.cljs$core$IFn$_invoke$arity$0 = (function (){
return anchor.update_calculations.nums.call(null,cljs.core.keys.call(null,anchor.db.get_db.call(null,"report-metadata")));
});

anchor.update_calculations.nums.cljs$core$IFn$_invoke$arity$1 = (function (companies){
var inputs = anchor.update_calculations.inputs.call(null,companies);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [inputs], null),((function (inputs){
return (function (){
cljs.core.prn.call(null,new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),inputs);

var output = cljs.core.map.call(null,((function (inputs){
return (function (p__35417){
var vec__35418 = p__35417;
var company = cljs.core.nth.call(null,vec__35418,(0),null);
var input = cljs.core.nth.call(null,vec__35418,(1),null);
return anchor.model.add_output.call(null,company,input);
});})(inputs))
,cljs.core.deref.call(null,inputs));
return redlobster.promise.defer_until_realised.call(null,output,((function (output,inputs){
return (function (){
var output__$1 = cljs.core.map.call(null,cljs.core.deref,output);
return cljs.core.zipmap.call(null,companies,output__$1);
});})(output,inputs))
);
});})(inputs))
);
});

anchor.update_calculations.nums.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=update_calculations.js.map