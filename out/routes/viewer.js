// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.viewer');
goog.require('cljs.core');
goog.require('redlobster.http');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('anchor.model');
goog.require('anchor.db');
goog.require('redlobster.stream');
goog.require('routes.index');
goog.require('anchor.util');
routes.viewer.fs = require("fs");

routes.viewer.path_seq = (function routes$viewer$path_seq(s){
return cljs.core.reduce.call(null,(function (v,subpath){
return cljs.core.conj.call(null,v,[cljs.core.str(cljs.core.peek.call(null,v)),cljs.core.str("/"),cljs.core.str(subpath)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,s)], null),cljs.core.rest.call(null,s));
});

routes.viewer.mkdirs = (function routes$viewer$mkdirs(path){
while(true){
if(typeof path === 'string'){
var G__35848 = path.split("/");
path = G__35848;
continue;
} else {
var seq__35842 = cljs.core.seq.call(null,routes.viewer.path_seq.call(null,path));
var chunk__35843 = null;
var count__35844 = (0);
var i__35845 = (0);
while(true){
if((i__35845 < count__35844)){
var subpath = cljs.core._nth.call(null,chunk__35843,i__35845);
try{routes.viewer.fs.mkdirSync(subpath);
}catch (e35846){var e_35849 = e35846;
}
var G__35850 = seq__35842;
var G__35851 = chunk__35843;
var G__35852 = count__35844;
var G__35853 = (i__35845 + (1));
seq__35842 = G__35850;
chunk__35843 = G__35851;
count__35844 = G__35852;
i__35845 = G__35853;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__35842);
if(temp__4425__auto__){
var seq__35842__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35842__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__35842__$1);
var G__35854 = cljs.core.chunk_rest.call(null,seq__35842__$1);
var G__35855 = c__4946__auto__;
var G__35856 = cljs.core.count.call(null,c__4946__auto__);
var G__35857 = (0);
seq__35842 = G__35854;
chunk__35843 = G__35855;
count__35844 = G__35856;
i__35845 = G__35857;
continue;
} else {
var subpath = cljs.core.first.call(null,seq__35842__$1);
try{routes.viewer.fs.mkdirSync(subpath);
}catch (e35847){var e_35858 = e35847;
}
var G__35859 = cljs.core.next.call(null,seq__35842__$1);
var G__35860 = null;
var G__35861 = (0);
var G__35862 = (0);
seq__35842 = G__35859;
chunk__35843 = G__35860;
count__35844 = G__35861;
i__35845 = G__35862;
continue;
}
} else {
return null;
}
}
break;
}
}
break;
}
});

routes.viewer.pipe = (function routes$viewer$pipe(a,b,cb){
a.on("end",cb);

return a.pipe(b);
});

var s_35863 = redlobster.io.slurp.call(null,"resources/public/pdf.js/web/viewer.html");
redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_35863], null),((function (s_35863){
return (function (){
routes.viewer.report_html = cljs.core.deref.call(null,s_35863);
});})(s_35863))
);
routes.viewer.get_matching_companies = (function routes$viewer$get_matching_companies(company){
var suffix = cljs.core.second.call(null,company.split("\\."));
return cljs.core.filter.call(null,((function (suffix){
return (function (p1__35864_SHARP_){
return cljs.core._EQ_.call(null,suffix,cljs.core.second.call(null,p1__35864_SHARP_.split("\\.")));
});})(suffix))
,cljs.core.keys.call(null,anchor.db.get_db.call(null,"report-values")));
});
routes.viewer.clean_text = (function routes$viewer$clean_text(field){
return field.toLowerCase().trim();
});
routes.viewer.get_report_hints = (function routes$viewer$get_report_hints(company,reporting_period){
return anchor.util.recompose_map.call(null,(function (){var iter__4915__auto__ = (function routes$viewer$get_report_hints_$_iter__36323(s__36324){
return (new cljs.core.LazySeq(null,(function (){
var s__36324__$1 = s__36324;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__36324__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var company2 = cljs.core.first.call(null,xs__4977__auto__);
var iterys__4911__auto__ = ((function (s__36324__$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function routes$viewer$get_report_hints_$_iter__36323_$_iter__36325(s__36326){
return (new cljs.core.LazySeq(null,((function (s__36324__$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__36326__$1 = s__36326;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__36326__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var vec__36670 = cljs.core.first.call(null,xs__4977__auto____$1);
var reporting_period2 = cljs.core.nth.call(null,vec__36670,(0),null);
var fields = cljs.core.nth.call(null,vec__36670,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company2,reporting_period2], null))){
var iterys__4911__auto__ = ((function (s__36326__$1,s__36324__$1,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327(s__36328){
return (new cljs.core.LazySeq(null,((function (s__36326__$1,s__36324__$1,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__36328__$1 = s__36328;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__36328__$1);
if(temp__4425__auto____$2){
var xs__4977__auto____$2 = temp__4425__auto____$2;
var vec__36726 = cljs.core.first.call(null,xs__4977__auto____$2);
var field = cljs.core.nth.call(null,vec__36726,(0),null);
var pages = cljs.core.nth.call(null,vec__36726,(1),null);
var iterys__4911__auto__ = ((function (s__36328__$1,s__36326__$1,s__36324__$1,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329(s__36330){
return (new cljs.core.LazySeq(null,((function (s__36328__$1,s__36326__$1,s__36324__$1,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__36330__$1 = s__36330;
while(true){
var temp__4425__auto____$3 = cljs.core.seq.call(null,s__36330__$1);
if(temp__4425__auto____$3){
var xs__4977__auto____$3 = temp__4425__auto____$3;
var vec__36754 = cljs.core.first.call(null,xs__4977__auto____$3);
var page = cljs.core.nth.call(null,vec__36754,(0),null);
var indices = cljs.core.nth.call(null,vec__36754,(1),null);
var iterys__4911__auto__ = ((function (s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329_$_iter__36331(s__36332){
return (new cljs.core.LazySeq(null,((function (s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__36332__$1 = s__36332;
while(true){
var temp__4425__auto____$4 = cljs.core.seq.call(null,s__36332__$1);
if(temp__4425__auto____$4){
var xs__4977__auto____$4 = temp__4425__auto____$4;
var vec__36768 = cljs.core.first.call(null,xs__4977__auto____$4);
var index = cljs.core.nth.call(null,vec__36768,(0),null);
var subindices = cljs.core.nth.call(null,vec__36768,(1),null);
var iterys__4911__auto__ = ((function (s__36332__$1,s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36768,index,subindices,xs__4977__auto____$4,temp__4425__auto____$4,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329_$_iter__36331_$_iter__36333(s__36334){
return (new cljs.core.LazySeq(null,((function (s__36332__$1,s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36768,index,subindices,xs__4977__auto____$4,temp__4425__auto____$4,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__36334__$1 = s__36334;
while(true){
var temp__4425__auto____$5 = cljs.core.seq.call(null,s__36334__$1);
if(temp__4425__auto____$5){
var s__36334__$2 = temp__4425__auto____$5;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36334__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__36334__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__36336 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__36335 = (0);
while(true){
if((i__36335 < size__4914__auto__)){
var vec__36775 = cljs.core._nth.call(null,c__4913__auto__,i__36335);
var subindex = cljs.core.nth.call(null,vec__36775,(0),null);
var map__36776 = cljs.core.nth.call(null,vec__36775,(1),null);
var map__36776__$1 = ((((!((map__36776 == null)))?((((map__36776.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36776.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36776):map__36776);
var left_text = cljs.core.get.call(null,map__36776__$1,"left-text");
var negative_QMARK_ = cljs.core.get.call(null,map__36776__$1,"negative?");
if(cljs.core.truth_(left_text)){
cljs.core.chunk_append.call(null,b__36336,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,routes.viewer.clean_text.call(null,left_text),negative_QMARK_], null));

var G__36781 = (i__36335 + (1));
i__36335 = G__36781;
continue;
} else {
var G__36782 = (i__36335 + (1));
i__36335 = G__36782;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36336),routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329_$_iter__36331_$_iter__36333.call(null,cljs.core.chunk_rest.call(null,s__36334__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36336),null);
}
} else {
var vec__36778 = cljs.core.first.call(null,s__36334__$2);
var subindex = cljs.core.nth.call(null,vec__36778,(0),null);
var map__36779 = cljs.core.nth.call(null,vec__36778,(1),null);
var map__36779__$1 = ((((!((map__36779 == null)))?((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var left_text = cljs.core.get.call(null,map__36779__$1,"left-text");
var negative_QMARK_ = cljs.core.get.call(null,map__36779__$1,"negative?");
if(cljs.core.truth_(left_text)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [field,routes.viewer.clean_text.call(null,left_text),negative_QMARK_], null),routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329_$_iter__36331_$_iter__36333.call(null,cljs.core.rest.call(null,s__36334__$2)));
} else {
var G__36783 = cljs.core.rest.call(null,s__36334__$2);
s__36334__$1 = G__36783;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36332__$1,s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36768,index,subindices,xs__4977__auto____$4,temp__4425__auto____$4,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__36332__$1,s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36768,index,subindices,xs__4977__auto____$4,temp__4425__auto____$4,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,subindices));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329_$_iter__36331.call(null,cljs.core.rest.call(null,s__36332__$1)));
} else {
var G__36784 = cljs.core.rest.call(null,s__36332__$1);
s__36332__$1 = G__36784;
continue;
}
} else {
return null;
}
break;
}
});})(s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__36330__$1,s__36328__$1,s__36326__$1,s__36324__$1,vec__36754,page,indices,xs__4977__auto____$3,temp__4425__auto____$3,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,indices));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327_$_iter__36329.call(null,cljs.core.rest.call(null,s__36330__$1)));
} else {
var G__36785 = cljs.core.rest.call(null,s__36330__$1);
s__36330__$1 = G__36785;
continue;
}
} else {
return null;
}
break;
}
});})(s__36328__$1,s__36326__$1,s__36324__$1,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__36328__$1,s__36326__$1,s__36324__$1,vec__36726,field,pages,xs__4977__auto____$2,temp__4425__auto____$2,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,pages));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,routes$viewer$get_report_hints_$_iter__36323_$_iter__36325_$_iter__36327.call(null,cljs.core.rest.call(null,s__36328__$1)));
} else {
var G__36786 = cljs.core.rest.call(null,s__36328__$1);
s__36328__$1 = G__36786;
continue;
}
} else {
return null;
}
break;
}
});})(s__36326__$1,s__36324__$1,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__36326__$1,s__36324__$1,vec__36670,reporting_period2,fields,xs__4977__auto____$1,temp__4425__auto____$1,company2,xs__4977__auto__,temp__4425__auto__))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,fields));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,routes$viewer$get_report_hints_$_iter__36323_$_iter__36325.call(null,cljs.core.rest.call(null,s__36326__$1)));
} else {
var G__36787 = cljs.core.rest.call(null,s__36326__$1);
s__36326__$1 = G__36787;
continue;
}
} else {
var G__36788 = cljs.core.rest.call(null,s__36326__$1);
s__36326__$1 = G__36788;
continue;
}
} else {
return null;
}
break;
}
});})(s__36324__$1,company2,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__36324__$1,company2,xs__4977__auto__,temp__4425__auto__))
;
var fs__4912__auto__ = cljs.core.seq.call(null,iterys__4911__auto__.call(null,cljs.core.get.call(null,anchor.db.get_db.call(null,"report-values"),company2)));
if(fs__4912__auto__){
return cljs.core.concat.call(null,fs__4912__auto__,routes$viewer$get_report_hints_$_iter__36323.call(null,cljs.core.rest.call(null,s__36324__$1)));
} else {
var G__36789 = cljs.core.rest.call(null,s__36324__$1);
s__36324__$1 = G__36789;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,routes.viewer.get_matching_companies.call(null,company));
})());
});
routes.viewer.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["report"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
var input = cljs.core.map.call(null,cljs.core.str,anchor.model.manual_input);
var input__$1 = (function (){var temp__4423__auto__ = anchor.db.get_db.call(null,"node-order");
if(cljs.core.truth_(temp__4423__auto__)){
var node_order = temp__4423__auto__;
return cljs.core.sort_by.call(null,((function (node_order,temp__4423__auto__,input,company,reporting_period){
return (function (p1__36790_SHARP_){
return node_order.call(null,p1__36790_SHARP_,(0));
});})(node_order,temp__4423__auto__,input,company,reporting_period))
,input);
} else {
return input;
}
})();
return anchor.util.response.call(null,routes.viewer.report_html.replace("matty",routes.index.injectoid_s.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["viewer"], null),new cljs.core.PersistentArrayMap(null, 7, ["company",cljs.core.pr_str.call(null,company),"reporting_period",cljs.core.pr_str.call(null,reporting_period),"inputs",cljs.core.pr_str.call(null,input__$1),"report_values",cljs.core.pr_str.call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-values"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null))),"report_metadata",cljs.core.pr_str.call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-metadata"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null))),"report_manuals",cljs.core.pr_str.call(null,cljs.core.get_in.call(null,anchor.db.get_db.call(null,"report-manuals"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null))),"report_hints",cljs.core.pr_str.call(null,routes.viewer.get_report_hints.call(null,company,reporting_period))], null))));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-report"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new_report"], null),new cljs.core.PersistentArrayMap(null, 1, ["company",cljs.core.pr_str.call(null,company)], null));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["new-report"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var year = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"year","year",335913393)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"year"], null)));
var month = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"month","month",-1960248533)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"month"], null)));
var starting_year = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"starting-year","starting-year",1949050031)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"starting-year"], null)));
var starting_month = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"starting-month","starting-month",-1398701901)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"starting-month"], null)));
var file = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"file","file",-1269645878)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"file"], null)));
var factor = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"factor"], null)));
var url = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"url","url",276297046)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"url"], null)));
var vec__36792 = cljs.core.map.call(null,((function (company,year,month,starting_year,starting_month,file,factor,url){
return (function (p1__36791_SHARP_){
return Number(p1__36791_SHARP_);
});})(company,year,month,starting_year,starting_month,file,factor,url))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month,starting_year,starting_month], null));
var year__$1 = cljs.core.nth.call(null,vec__36792,(0),null);
var month__$1 = cljs.core.nth.call(null,vec__36792,(1),null);
var starting_year__$1 = cljs.core.nth.call(null,vec__36792,(2),null);
var starting_month__$1 = cljs.core.nth.call(null,vec__36792,(3),null);
var reporting_period = [cljs.core.str(year__$1),cljs.core.str(" "),cljs.core.str(month__$1)].join('');
var outfile = anchor.util.format.call(null,"resources/public/reports/%s/%s %s.pdf",company,year__$1,month__$1);
var parent_dir = anchor.util.format.call(null,"resources/public/reports/%s",company);
anchor.db.swap_db.call(null,"report-metadata",cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null),cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["year","month","starting-year","starting-month","factor"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [year__$1,month__$1,starting_year__$1,starting_month__$1,factor], null)));

routes.viewer.mkdirs.call(null,parent_dir);

cljs.core.println.call(null,"url",url);

if(cljs.core.truth_((function (){var G__36793 = url;
var G__36793__$1 = (((G__36793 == null))?null:G__36793.trim());
var G__36793__$2 = (((G__36793__$1 == null))?null:cljs.core.not_empty.call(null,G__36793__$1));
return G__36793__$2;
})())){
var res = redlobster.http.request.call(null,url);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null),((function (res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url){
return (function (){
var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
routes.viewer.pipe.call(null,cljs.core.deref.call(null,res),redlobster.stream.write_file.call(null,outfile),((function (promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url){
return (function (){
return realise.call(null,anchor.util.redirect.call(null,"/report",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365),reporting_period], null)));
});})(promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error,res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url))
);

return promise__5324__auto__;
});})(res,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url))
);
} else {
var _ = redlobster.io.spit.call(null,outfile,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file));
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null),((function (_,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url){
return (function (){
return anchor.util.redirect.call(null,"/report",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company","company",-340475075),company,new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365),reporting_period], null));
});})(_,vec__36792,year__$1,month__$1,starting_year__$1,starting_month__$1,reporting_period,outfile,parent_dir,company,year,month,starting_year,starting_month,file,factor,url))
);
}
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-report-values"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
var report_values = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"report-values","report-values",1890071435)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"report-values"], null)));
var report_manuals = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"report-manuals","report-manuals",1274722360)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"report-manuals"], null)));
anchor.db.swap_db.call(null,"report-values",cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null),anchor.util.clean.call(null,report_values));

anchor.db.swap_db.call(null,"report-manuals",cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null),anchor.util.clean.call(null,report_manuals));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-report-metadata2"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
var report_metadata = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"report-metadata","report-metadata",-2146256583)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"report-metadata"], null)));
anchor.db.swap_db.call(null,"report-metadata",cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null),anchor.util.clean.call(null,report_metadata));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["route-pdf"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
var response = redlobster.http.request.call(null,anchor.util.format.call(null,"http://anchor-demo.s3-website-ap-northeast-1.amazonaws.com/reports/%s/%s.pdf",company,reporting_period));
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response], null),((function (response,company,reporting_period){
return (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.deref.call(null,response)], null);
});})(response,company,reporting_period))
);
}));
}));

//# sourceMappingURL=viewer.js.map