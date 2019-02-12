// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_pdfkit.core');
goog.require('cljs.core');
goog.require('cljs_pdfkit.optimize_dom');
goog.require('cljs_pdfkit.util');
cljs_pdfkit.core.PDFDocument = require("pdfkit");
cljs_pdfkit.core.handle_tag;
cljs_pdfkit.core.draw_tag;
cljs_pdfkit.core.default_stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null);
cljs_pdfkit.core.print_through = (function cljs_pdfkit$core$print_through(x){
cljs.core.println.call(null,x);

return x;
});
cljs_pdfkit.core.page = (function cljs_pdfkit$core$page(doc,page__$1,pdf_opts){
var vec__6944 = cljs_pdfkit.optimize_dom.add_style.call(null,page__$1);
var page_tag = cljs.core.nth.call(null,vec__6944,(0),null);
var opts = cljs.core.nth.call(null,vec__6944,(1),null);
var children = cljs.core.nthnext.call(null,vec__6944,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"page","page",849072397),page_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Symbol(null,"page-tag","page-tag",-403138499,null))))].join('')))})());
var opts__$1 = cljs.core.merge.call(null,opts,cljs.core.select_keys.call(null,pdf_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921)], null)));
var opts__$2 = cljs.core.clj__GT_js.call(null,opts__$1);
doc.addPage(opts__$2);

return cljs_pdfkit.core.handle_tag.call(null,doc,cljs_pdfkit.core.default_stack,cljs_pdfkit.optimize_dom.optimize_dom.call(null,cljs.core.vec.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,children))));
});
/**
 * Create a pdf with a vector of the form
 * 
 *   [:pdf opts & pages]
 * 
 *   opts takes the form
 *   {:info
 *  {:title "Title of the Document"
 *   :author "Author"
 *   :subject - "Subject"
 *   :keywords - "Keywords"}
 * :layout "landscape"}
 *   
 */
cljs_pdfkit.core.pdf = (function cljs_pdfkit$core$pdf(dom){
var vec__6950 = cljs_pdfkit.optimize_dom.add_style.call(null,dom);
var pdf_tag = cljs.core.nth.call(null,vec__6950,(0),null);
var opts = cljs.core.nth.call(null,vec__6950,(1),null);
var children = cljs.core.nthnext.call(null,vec__6950,(2));
var _ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pdf","pdf",1586765132),pdf_tag))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.Symbol(null,"pdf-tag","pdf-tag",1229214313,null))))].join('')))})());
var opts__$1 = cljs.core.assoc.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),cljs_pdfkit.util.capitalize_map),new cljs.core.Keyword(null,"autoFirstPage","autoFirstPage",1771180266),false);
var doc = (new cljs_pdfkit.core.PDFDocument(cljs.core.clj__GT_js.call(null,opts__$1)));
var children__$1 = cljs.core.remove.call(null,cljs.core.seq_QMARK_,cljs.core.tree_seq.call(null,cljs.core.seq_QMARK_,cljs.core.identity,children));
var seq__6951_6955 = cljs.core.seq.call(null,children__$1);
var chunk__6952_6956 = null;
var count__6953_6957 = (0);
var i__6954_6958 = (0);
while(true){
if((i__6954_6958 < count__6953_6957)){
var child_6959 = cljs.core._nth.call(null,chunk__6952_6956,i__6954_6958);
cljs_pdfkit.core.page.call(null,doc,child_6959,opts__$1);

var G__6960 = seq__6951_6955;
var G__6961 = chunk__6952_6956;
var G__6962 = count__6953_6957;
var G__6963 = (i__6954_6958 + (1));
seq__6951_6955 = G__6960;
chunk__6952_6956 = G__6961;
count__6953_6957 = G__6962;
i__6954_6958 = G__6963;
continue;
} else {
var temp__4425__auto___6964 = cljs.core.seq.call(null,seq__6951_6955);
if(temp__4425__auto___6964){
var seq__6951_6965__$1 = temp__4425__auto___6964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6951_6965__$1)){
var c__4946__auto___6966 = cljs.core.chunk_first.call(null,seq__6951_6965__$1);
var G__6967 = cljs.core.chunk_rest.call(null,seq__6951_6965__$1);
var G__6968 = c__4946__auto___6966;
var G__6969 = cljs.core.count.call(null,c__4946__auto___6966);
var G__6970 = (0);
seq__6951_6955 = G__6967;
chunk__6952_6956 = G__6968;
count__6953_6957 = G__6969;
i__6954_6958 = G__6970;
continue;
} else {
var child_6971 = cljs.core.first.call(null,seq__6951_6965__$1);
cljs_pdfkit.core.page.call(null,doc,child_6971,opts__$1);

var G__6972 = cljs.core.next.call(null,seq__6951_6965__$1);
var G__6973 = null;
var G__6974 = (0);
var G__6975 = (0);
seq__6951_6955 = G__6972;
chunk__6952_6956 = G__6973;
count__6953_6957 = G__6974;
i__6954_6958 = G__6975;
continue;
}
} else {
}
}
break;
}

return doc;
});
cljs_pdfkit.core.make_linear_gradient = (function cljs_pdfkit$core$make_linear_gradient(doc,p__6976){
var map__6986 = p__6976;
var map__6986__$1 = ((((!((map__6986 == null)))?((((map__6986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6986):map__6986);
var vec__6987 = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__6987,(0),null);
var y1 = cljs.core.nth.call(null,vec__6987,(1),null);
var x2 = cljs.core.nth.call(null,vec__6987,(2),null);
var y2 = cljs.core.nth.call(null,vec__6987,(3),null);
var stops = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.linearGradient(x1,y1,x2,y2);
var seq__6989_6995 = cljs.core.seq.call(null,stops);
var chunk__6990_6996 = null;
var count__6991_6997 = (0);
var i__6992_6998 = (0);
while(true){
if((i__6992_6998 < count__6991_6997)){
var vec__6993_6999 = cljs.core._nth.call(null,chunk__6990_6996,i__6992_6998);
var point_7000 = cljs.core.nth.call(null,vec__6993_6999,(0),null);
var color_7001 = cljs.core.nth.call(null,vec__6993_6999,(1),null);
grad.stop(point_7000,color_7001);

var G__7002 = seq__6989_6995;
var G__7003 = chunk__6990_6996;
var G__7004 = count__6991_6997;
var G__7005 = (i__6992_6998 + (1));
seq__6989_6995 = G__7002;
chunk__6990_6996 = G__7003;
count__6991_6997 = G__7004;
i__6992_6998 = G__7005;
continue;
} else {
var temp__4425__auto___7006 = cljs.core.seq.call(null,seq__6989_6995);
if(temp__4425__auto___7006){
var seq__6989_7007__$1 = temp__4425__auto___7006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6989_7007__$1)){
var c__4946__auto___7008 = cljs.core.chunk_first.call(null,seq__6989_7007__$1);
var G__7009 = cljs.core.chunk_rest.call(null,seq__6989_7007__$1);
var G__7010 = c__4946__auto___7008;
var G__7011 = cljs.core.count.call(null,c__4946__auto___7008);
var G__7012 = (0);
seq__6989_6995 = G__7009;
chunk__6990_6996 = G__7010;
count__6991_6997 = G__7011;
i__6992_6998 = G__7012;
continue;
} else {
var vec__6994_7013 = cljs.core.first.call(null,seq__6989_7007__$1);
var point_7014 = cljs.core.nth.call(null,vec__6994_7013,(0),null);
var color_7015 = cljs.core.nth.call(null,vec__6994_7013,(1),null);
grad.stop(point_7014,color_7015);

var G__7016 = cljs.core.next.call(null,seq__6989_7007__$1);
var G__7017 = null;
var G__7018 = (0);
var G__7019 = (0);
seq__6989_6995 = G__7016;
chunk__6990_6996 = G__7017;
count__6991_6997 = G__7018;
i__6992_6998 = G__7019;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.make_radial_gradient = (function cljs_pdfkit$core$make_radial_gradient(doc,p__7020){
var map__7030 = p__7020;
var map__7030__$1 = ((((!((map__7030 == null)))?((((map__7030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7030):map__7030);
var vec__7031 = cljs.core.get.call(null,map__7030__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var x1 = cljs.core.nth.call(null,vec__7031,(0),null);
var y1 = cljs.core.nth.call(null,vec__7031,(1),null);
var r1 = cljs.core.nth.call(null,vec__7031,(2),null);
var x2 = cljs.core.nth.call(null,vec__7031,(3),null);
var y2 = cljs.core.nth.call(null,vec__7031,(4),null);
var r2 = cljs.core.nth.call(null,vec__7031,(5),null);
var stops = cljs.core.get.call(null,map__7030__$1,new cljs.core.Keyword(null,"stops","stops",-1205459005));
var grad = doc.radialGradient(x1,y1,r1,x2,y2,r2);
var seq__7033_7039 = cljs.core.seq.call(null,stops);
var chunk__7034_7040 = null;
var count__7035_7041 = (0);
var i__7036_7042 = (0);
while(true){
if((i__7036_7042 < count__7035_7041)){
var vec__7037_7043 = cljs.core._nth.call(null,chunk__7034_7040,i__7036_7042);
var a_7044 = cljs.core.nth.call(null,vec__7037_7043,(0),null);
var color_7045 = cljs.core.nth.call(null,vec__7037_7043,(1),null);
var b_7046 = cljs.core.nth.call(null,vec__7037_7043,(2),null);
grad.stop(a_7044,color_7045,b_7046);

var G__7047 = seq__7033_7039;
var G__7048 = chunk__7034_7040;
var G__7049 = count__7035_7041;
var G__7050 = (i__7036_7042 + (1));
seq__7033_7039 = G__7047;
chunk__7034_7040 = G__7048;
count__7035_7041 = G__7049;
i__7036_7042 = G__7050;
continue;
} else {
var temp__4425__auto___7051 = cljs.core.seq.call(null,seq__7033_7039);
if(temp__4425__auto___7051){
var seq__7033_7052__$1 = temp__4425__auto___7051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7033_7052__$1)){
var c__4946__auto___7053 = cljs.core.chunk_first.call(null,seq__7033_7052__$1);
var G__7054 = cljs.core.chunk_rest.call(null,seq__7033_7052__$1);
var G__7055 = c__4946__auto___7053;
var G__7056 = cljs.core.count.call(null,c__4946__auto___7053);
var G__7057 = (0);
seq__7033_7039 = G__7054;
chunk__7034_7040 = G__7055;
count__7035_7041 = G__7056;
i__7036_7042 = G__7057;
continue;
} else {
var vec__7038_7058 = cljs.core.first.call(null,seq__7033_7052__$1);
var a_7059 = cljs.core.nth.call(null,vec__7038_7058,(0),null);
var color_7060 = cljs.core.nth.call(null,vec__7038_7058,(1),null);
var b_7061 = cljs.core.nth.call(null,vec__7038_7058,(2),null);
grad.stop(a_7059,color_7060,b_7061);

var G__7062 = cljs.core.next.call(null,seq__7033_7052__$1);
var G__7063 = null;
var G__7064 = (0);
var G__7065 = (0);
seq__7033_7039 = G__7062;
chunk__7034_7040 = G__7063;
count__7035_7041 = G__7064;
i__7036_7042 = G__7065;
continue;
}
} else {
}
}
break;
}

return grad;
});
cljs_pdfkit.core.apply_state = (function cljs_pdfkit$core$apply_state(doc,opts){
if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)))){
doc.fillColor(opts.call(null,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)))){
doc.lineJoin(opts.call(null,new cljs.core.Keyword(null,"line-join","line-join",-1560936092)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)))){
doc.strokeColor(opts.call(null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)))){
doc.strokeOpacity(opts.call(null,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)))){
doc.miterLimit(opts.call(null,new cljs.core.Keyword(null,"miter-limit","miter-limit",-1242625357)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)))){
doc.lineWidth(opts.call(null,new cljs.core.Keyword(null,"line-width","line-width",-906934988)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)))){
doc.opacity(opts.call(null,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)))){
doc.lineCap(opts.call(null,new cljs.core.Keyword(null,"line-cap","line-cap",448406012)));
} else {
}

if(cljs.core.truth_(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)))){
return doc.fillOpacity(opts.call(null,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170)));
} else {
return null;
}
});
cljs_pdfkit.core.apply_stack_frame = (function cljs_pdfkit$core$apply_stack_frame(doc,p__7066,save_QMARK_){
var map__7069 = p__7066;
var map__7069__$1 = ((((!((map__7069 == null)))?((((map__7069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7069):map__7069);
var font = cljs.core.get.call(null,map__7069__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var font_size = cljs.core.get.call(null,map__7069__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
if(cljs.core.truth_(save_QMARK_)){
doc.save();
} else {
doc.restore();
}

if(cljs.core.truth_(font)){
if(typeof font === 'string'){
doc.font(font);
} else {
doc.font(cljs.core.first.call(null,font),cljs.core.second.call(null,font));
}
} else {
}

if(cljs.core.truth_(font_size)){
return doc.fontSize(font_size);
} else {
return null;
}
});
cljs_pdfkit.core.handle_tag = (function cljs_pdfkit$core$handle_tag(doc,stack,p__7071){
var vec__7076 = p__7071;
var tag = cljs.core.nth.call(null,vec__7076,(0),null);
var tag_opts = cljs.core.nth.call(null,vec__7076,(1),null);
var children = cljs.core.nthnext.call(null,vec__7076,(2));
var v = vec__7076;
var map__7077 = tag_opts;
var map__7077__$1 = ((((!((map__7077 == null)))?((((map__7077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7077):map__7077);
var font_size = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var linear_gradient = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047));
var fill_and_stroke = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"fill-and-stroke","fill-and-stroke",1756742695));
var scale = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"scale","scale",-230427353));
var fill = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
var dash = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"dash","dash",23821356));
var radial_gradient = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259));
var font = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var rotate = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"rotate","rotate",152705015));
var translate = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"translate","translate",1336199447));
var stack_frame = cljs.core.select_keys.call(null,tag_opts,cljs_pdfkit.optimize_dom.root_properties2);
var new_stack = cljs.core.conj.call(null,stack,cljs.core.merge.call(null,cljs.core.peek.call(null,stack),stack_frame));
var save_stack_QMARK_ = (function (){var or__4143__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"clip","clip",830998499),tag);
if(or__4143__auto__){
return or__4143__auto__;
} else {
return cljs.core.not_empty.call(null,tag_opts);
}
})();
if(cljs.core.truth_(save_stack_QMARK_)){
cljs_pdfkit.core.apply_stack_frame.call(null,doc,stack_frame,true);
} else {
}

cljs_pdfkit.core.apply_state.call(null,doc,tag_opts);

if(cljs.core.truth_(dash)){
doc.dash(cljs.core.first.call(null,dash),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,dash)));
} else {
}

if(cljs.core.truth_(translate)){
doc.translate(cljs.core.first.call(null,translate),cljs.core.second.call(null,translate));
} else {
}

if(cljs.core.truth_(rotate)){
doc.rotate(cljs.core.first.call(null,rotate),cljs.core.clj__GT_js.call(null,cljs.core.second.call(null,rotate)));
} else {
}

if(cljs.core.truth_(scale)){
var vec__7079_7080 = ((typeof scale === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [scale,scale], null):scale);
var x_7081 = cljs.core.nth.call(null,vec__7079_7080,(0),null);
var y_7082 = cljs.core.nth.call(null,vec__7079_7080,(1),null);
doc.scale(x_7081,y_7082);
} else {
}

cljs_pdfkit.core.draw_tag.call(null,tag,doc,new_stack,tag_opts,children);

if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clip","clip",830998499),null,new cljs.core.Keyword(null,"do","do",46310725),null,new cljs.core.Keyword(null,"style","style",-496642736),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null).call(null,tag))){
} else {
if(cljs.core.truth_(fill_and_stroke)){
doc.fillAndStroke(cljs.core.first.call(null,fill_and_stroke),cljs.core.second.call(null,fill_and_stroke));
} else {
if(cljs.core.truth_(linear_gradient)){
doc.fill(cljs_pdfkit.core.make_linear_gradient.call(null,doc,linear_gradient));
} else {
if(cljs.core.truth_(radial_gradient)){
doc.fill(cljs_pdfkit.core.make_radial_gradient.call(null,doc,radial_gradient));
} else {
if(cljs.core.truth_(fill)){
if(cljs.core.coll_QMARK_.call(null,fill)){
doc.fill.apply(doc,cljs.core.clj__GT_js.call(null,fill));
} else {
doc.fill(fill);
}
} else {
doc.stroke();

}
}
}
}
}

if(cljs.core.truth_(save_stack_QMARK_)){
return cljs_pdfkit.core.apply_stack_frame.call(null,doc,cljs.core.peek.call(null,stack),false);
} else {
return null;
}
});
if(typeof cljs_pdfkit.core.draw_tag !== 'undefined'){
} else {
cljs_pdfkit.core.draw_tag = (function (){var method_table__5056__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5057__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5060__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs-pdfkit.core","draw-tag"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5060__auto__,method_table__5056__auto__,prefer_table__5057__auto__,method_cache__5058__auto__,cached_hierarchy__5059__auto__));
})();
}
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"note","note",1426297904),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7083){
var vec__7084 = p__7083;
var x = cljs.core.nth.call(null,vec__7084,(0),null);
var y = cljs.core.nth.call(null,vec__7084,(1),null);
var width = cljs.core.nth.call(null,vec__7084,(2),null);
var height = cljs.core.nth.call(null,vec__7084,(3),null);
var contents = cljs.core.nth.call(null,vec__7084,(4),null);
return doc__6915__auto__.note(x,y,width,height,contents,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"link","link",-1769163468),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7085){
var vec__7086 = p__7085;
var x = cljs.core.nth.call(null,vec__7086,(0),null);
var y = cljs.core.nth.call(null,vec__7086,(1),null);
var width = cljs.core.nth.call(null,vec__7086,(2),null);
var height = cljs.core.nth.call(null,vec__7086,(3),null);
var url = cljs.core.nth.call(null,vec__7086,(4),null);
return doc__6915__auto__.link(x,y,width,height,url,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"highlight","highlight",-800930873),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7087){
var vec__7088 = p__7087;
var x = cljs.core.nth.call(null,vec__7088,(0),null);
var y = cljs.core.nth.call(null,vec__7088,(1),null);
var width = cljs.core.nth.call(null,vec__7088,(2),null);
var height = cljs.core.nth.call(null,vec__7088,(3),null);
return doc__6915__auto__.highlight(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"underline","underline",2018066703),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7089){
var vec__7090 = p__7089;
var x = cljs.core.nth.call(null,vec__7090,(0),null);
var y = cljs.core.nth.call(null,vec__7090,(1),null);
var width = cljs.core.nth.call(null,vec__7090,(2),null);
var height = cljs.core.nth.call(null,vec__7090,(3),null);
return doc__6915__auto__.underline(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"strike","strike",-1173815471),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7091){
var vec__7092 = p__7091;
var x = cljs.core.nth.call(null,vec__7092,(0),null);
var y = cljs.core.nth.call(null,vec__7092,(1),null);
var width = cljs.core.nth.call(null,vec__7092,(2),null);
var height = cljs.core.nth.call(null,vec__7092,(3),null);
return doc__6915__auto__.strike(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"lineAnnotation","lineAnnotation",-1656470988),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7093){
var vec__7094 = p__7093;
var x1 = cljs.core.nth.call(null,vec__7094,(0),null);
var y1 = cljs.core.nth.call(null,vec__7094,(1),null);
var x2 = cljs.core.nth.call(null,vec__7094,(2),null);
var y2 = cljs.core.nth.call(null,vec__7094,(3),null);
return doc__6915__auto__.lineAnnotation(x1,y1,x2,y2,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rectAnnotation","rectAnnotation",-1860365626),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7095){
var vec__7096 = p__7095;
var x = cljs.core.nth.call(null,vec__7096,(0),null);
var y = cljs.core.nth.call(null,vec__7096,(1),null);
var width = cljs.core.nth.call(null,vec__7096,(2),null);
var height = cljs.core.nth.call(null,vec__7096,(3),null);
return doc__6915__auto__.rectAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipseAnnotation","ellipseAnnotation",-578264907),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7097){
var vec__7098 = p__7097;
var x = cljs.core.nth.call(null,vec__7098,(0),null);
var y = cljs.core.nth.call(null,vec__7098,(1),null);
var width = cljs.core.nth.call(null,vec__7098,(2),null);
var height = cljs.core.nth.call(null,vec__7098,(3),null);
return doc__6915__auto__.ellipseAnnotation(x,y,width,height,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));

cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"textAnnotation","textAnnotation",-1223996839),(function (tag__6914__auto__,doc__6915__auto__,stack__6916__auto__,opts__6917__auto__,p__7099){
var vec__7100 = p__7099;
var x = cljs.core.nth.call(null,vec__7100,(0),null);
var y = cljs.core.nth.call(null,vec__7100,(1),null);
var width = cljs.core.nth.call(null,vec__7100,(2),null);
var height = cljs.core.nth.call(null,vec__7100,(3),null);
var text = cljs.core.nth.call(null,vec__7100,(4),null);
return doc__6915__auto__.textAnnotation(x,y,width,height,text,cljs.core.clj__GT_js.call(null,opts__6917__auto__));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"image","image",-58725096),(function (tag,doc,stack,opts,p__7101){
var vec__7102 = p__7101;
var source = cljs.core.nth.call(null,vec__7102,(0),null);
var x = cljs.core.nth.call(null,vec__7102,(1),null);
var y = cljs.core.nth.call(null,vec__7102,(2),null);
var opts__$1 = cljs.core.nth.call(null,vec__7102,(3),null);
return doc.image(source,x,y,cljs.core.clj__GT_js.call(null,opts__$1));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"text","text",-1790561697),(function (tag,doc,stack,p__7103,p__7104){
var map__7105 = p__7103;
var map__7105__$1 = ((((!((map__7105 == null)))?((((map__7105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7105):map__7105);
var opts = map__7105__$1;
var move_down = cljs.core.get.call(null,map__7105__$1,new cljs.core.Keyword(null,"move-down","move-down",-1149356017));
var vec__7106 = p__7104;
var text = cljs.core.nth.call(null,vec__7106,(0),null);
var x = cljs.core.nth.call(null,vec__7106,(1),null);
var y = cljs.core.nth.call(null,vec__7106,(2),null);
if(cljs.core.truth_(x)){
doc.text(text,x,y,cljs_pdfkit.util.camelize_js.call(null,opts));
} else {
doc.text(text,cljs_pdfkit.util.camelize_js.call(null,opts));
}

if(cljs.core.truth_(move_down)){
return doc.moveDown(move_down);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"clip","clip",830998499),(function (tag,doc,stack,opts,p__7108){
var vec__7109 = p__7108;
var vec__7110 = cljs.core.nth.call(null,vec__7109,(0),null);
var clip_tag = cljs.core.nth.call(null,vec__7110,(0),null);
var clip_opts = cljs.core.nth.call(null,vec__7110,(1),null);
var clip_children = cljs.core.nthnext.call(null,vec__7110,(2));
var children = cljs.core.nthnext.call(null,vec__7109,(1));
cljs_pdfkit.core.draw_tag.call(null,clip_tag,doc,stack,opts,clip_children).clip();

var seq__7111 = cljs.core.seq.call(null,children);
var chunk__7112 = null;
var count__7113 = (0);
var i__7114 = (0);
while(true){
if((i__7114 < count__7113)){
var child = cljs.core._nth.call(null,chunk__7112,i__7114);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__7115 = seq__7111;
var G__7116 = chunk__7112;
var G__7117 = count__7113;
var G__7118 = (i__7114 + (1));
seq__7111 = G__7115;
chunk__7112 = G__7116;
count__7113 = G__7117;
i__7114 = G__7118;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7111);
if(temp__4425__auto__){
var seq__7111__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7111__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7111__$1);
var G__7119 = cljs.core.chunk_rest.call(null,seq__7111__$1);
var G__7120 = c__4946__auto__;
var G__7121 = cljs.core.count.call(null,c__4946__auto__);
var G__7122 = (0);
seq__7111 = G__7119;
chunk__7112 = G__7120;
count__7113 = G__7121;
i__7114 = G__7122;
continue;
} else {
var child = cljs.core.first.call(null,seq__7111__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__7123 = cljs.core.next.call(null,seq__7111__$1);
var G__7124 = null;
var G__7125 = (0);
var G__7126 = (0);
seq__7111 = G__7123;
chunk__7112 = G__7124;
count__7113 = G__7125;
i__7114 = G__7126;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"do","do",46310725),(function (tag,doc,stack,opts,p__7127){
var vec__7128 = p__7127;
var child = cljs.core.nth.call(null,vec__7128,(0),null);
return eval(child);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (tag,doc,stack,opts,p__7129){
var vec__7130 = p__7129;
var x = cljs.core.nth.call(null,vec__7130,(0),null);
var y = cljs.core.nth.call(null,vec__7130,(1),null);
var width = cljs.core.nth.call(null,vec__7130,(2),null);
var height = cljs.core.nth.call(null,vec__7130,(3),null);
return doc.rect(x,y,width,height);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"rounded-rect","rounded-rect",-1655760547),(function (tag,doc,stack,opts,p__7131){
var vec__7132 = p__7131;
var x = cljs.core.nth.call(null,vec__7132,(0),null);
var y = cljs.core.nth.call(null,vec__7132,(1),null);
var width = cljs.core.nth.call(null,vec__7132,(2),null);
var height = cljs.core.nth.call(null,vec__7132,(3),null);
var corner_radius = cljs.core.nth.call(null,vec__7132,(4),null);
return doc.roundedRect(x,y,width,height,corner_radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (tag,doc,stack,opts,p__7133){
var vec__7134 = p__7133;
var x = cljs.core.nth.call(null,vec__7134,(0),null);
var y = cljs.core.nth.call(null,vec__7134,(1),null);
var radius_x = cljs.core.nth.call(null,vec__7134,(2),null);
var radius_y = cljs.core.nth.call(null,vec__7134,(3),null);
return doc.ellipse(x,y,radius_x,(function (){var or__4143__auto__ = radius_y;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return radius_x;
}
})());
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (tag,doc,stack,opts,p__7135){
var vec__7136 = p__7135;
var x = cljs.core.nth.call(null,vec__7136,(0),null);
var y = cljs.core.nth.call(null,vec__7136,(1),null);
var radius = cljs.core.nth.call(null,vec__7136,(2),null);
return doc.circle(x,y,radius);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (tag,doc,stack,opts,points){
return doc.polygon.apply(doc,cljs.core.clj__GT_js.call(null,points));
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"path","path",-188191168),(function (tag,doc,stack,opts,p__7137){
var vec__7138 = p__7137;
var path = cljs.core.nth.call(null,vec__7138,(0),null);
return doc.path(path);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"style","style",-496642736),(function (tag,doc,stack,opts,children){
var seq__7139 = cljs.core.seq.call(null,children);
var chunk__7140 = null;
var count__7141 = (0);
var i__7142 = (0);
while(true){
if((i__7142 < count__7141)){
var child = cljs.core._nth.call(null,chunk__7140,i__7142);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__7143 = seq__7139;
var G__7144 = chunk__7140;
var G__7145 = count__7141;
var G__7146 = (i__7142 + (1));
seq__7139 = G__7143;
chunk__7140 = G__7144;
count__7141 = G__7145;
i__7142 = G__7146;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7139);
if(temp__4425__auto__){
var seq__7139__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7139__$1)){
var c__4946__auto__ = cljs.core.chunk_first.call(null,seq__7139__$1);
var G__7147 = cljs.core.chunk_rest.call(null,seq__7139__$1);
var G__7148 = c__4946__auto__;
var G__7149 = cljs.core.count.call(null,c__4946__auto__);
var G__7150 = (0);
seq__7139 = G__7147;
chunk__7140 = G__7148;
count__7141 = G__7149;
i__7142 = G__7150;
continue;
} else {
var child = cljs.core.first.call(null,seq__7139__$1);
cljs_pdfkit.core.handle_tag.call(null,doc,stack,child);

var G__7151 = cljs.core.next.call(null,seq__7139__$1);
var G__7152 = null;
var G__7153 = (0);
var G__7154 = (0);
seq__7139 = G__7151;
chunk__7140 = G__7152;
count__7141 = G__7153;
i__7142 = G__7154;
continue;
}
} else {
return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"line","line",212345235),(function (tag,doc,stack,opts,p__7155){
var vec__7156 = p__7155;
var x1 = cljs.core.nth.call(null,vec__7156,(0),null);
var y1 = cljs.core.nth.call(null,vec__7156,(1),null);
var x2 = cljs.core.nth.call(null,vec__7156,(2),null);
var y2 = cljs.core.nth.call(null,vec__7156,(3),null);
doc.moveTo(x1,y1);

return doc.lineTo(x2,y2);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"quadratic-curve","quadratic-curve",1423731804),(function (tag,doc,stack,opts,p__7157){
var vec__7158 = p__7157;
var x1 = cljs.core.nth.call(null,vec__7158,(0),null);
var y1 = cljs.core.nth.call(null,vec__7158,(1),null);
var x2 = cljs.core.nth.call(null,vec__7158,(2),null);
var y2 = cljs.core.nth.call(null,vec__7158,(3),null);
var x3 = cljs.core.nth.call(null,vec__7158,(4),null);
var y3 = cljs.core.nth.call(null,vec__7158,(5),null);
doc.moveTo(x1,y1);

return doc.quadraticCurveTo(x2,y2,x3,y3);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"bezier-curve","bezier-curve",-2032784108),(function (tag,doc,stack,opts,p__7159){
var vec__7160 = p__7159;
var x1 = cljs.core.nth.call(null,vec__7160,(0),null);
var y1 = cljs.core.nth.call(null,vec__7160,(1),null);
var x2 = cljs.core.nth.call(null,vec__7160,(2),null);
var y2 = cljs.core.nth.call(null,vec__7160,(3),null);
var x3 = cljs.core.nth.call(null,vec__7160,(4),null);
var y3 = cljs.core.nth.call(null,vec__7160,(5),null);
var x4 = cljs.core.nth.call(null,vec__7160,(6),null);
var y4 = cljs.core.nth.call(null,vec__7160,(7),null);
doc.moveTo(x1,y1);

return doc.bezierCurveTo(x2,y2,x3,y3,x4,y4);
}));
cljs.core._add_method.call(null,cljs_pdfkit.core.draw_tag,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tag){
throw (new Error([cljs.core.str(tag),cljs.core.str(" tag not supported")].join('')));
}));

//# sourceMappingURL=core.js.map