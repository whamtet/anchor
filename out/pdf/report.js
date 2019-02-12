// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('pdf.report');
goog.require('cljs.core');
goog.require('anchor.util');
goog.require('anchor.update_calculations');
goog.require('cljs_pdfkit.core');
goog.require('redlobster.promise');
pdf.report.footer_page = (function pdf$report$footer_page(body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),anchor.util.timestamp.call(null),(60),(520)], null)], null);
});
pdf.report.safe_nth = (function pdf$report$safe_nth(s,n){
if((n < cljs.core.count.call(null,s))){
return cljs.core.nth.call(null,s,n);
} else {
return null;
}
});
pdf.report.transpose = (function pdf$report$transpose(table){
var num_cols = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,table));
var iter__4915__auto__ = ((function (num_cols){
return (function pdf$report$transpose_$_iter__35731(s__35732){
return (new cljs.core.LazySeq(null,((function (num_cols){
return (function (){
var s__35732__$1 = s__35732;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35732__$1);
if(temp__4425__auto__){
var s__35732__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35732__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35732__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35734 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35733 = (0);
while(true){
if((i__35733 < size__4914__auto__)){
var col_num = cljs.core._nth.call(null,c__4913__auto__,i__35733);
cljs.core.chunk_append.call(null,b__35734,cljs.core.map.call(null,((function (i__35733,col_num,c__4913__auto__,size__4914__auto__,b__35734,s__35732__$2,temp__4425__auto__,num_cols){
return (function (p1__35726_SHARP_){
return pdf.report.safe_nth.call(null,p1__35726_SHARP_,col_num);
});})(i__35733,col_num,c__4913__auto__,size__4914__auto__,b__35734,s__35732__$2,temp__4425__auto__,num_cols))
,table));

var G__35735 = (i__35733 + (1));
i__35733 = G__35735;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35734),pdf$report$transpose_$_iter__35731.call(null,cljs.core.chunk_rest.call(null,s__35732__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35734),null);
}
} else {
var col_num = cljs.core.first.call(null,s__35732__$2);
return cljs.core.cons.call(null,cljs.core.map.call(null,((function (col_num,s__35732__$2,temp__4425__auto__,num_cols){
return (function (p1__35726_SHARP_){
return pdf.report.safe_nth.call(null,p1__35726_SHARP_,col_num);
});})(col_num,s__35732__$2,temp__4425__auto__,num_cols))
,table),pdf$report$transpose_$_iter__35731.call(null,cljs.core.rest.call(null,s__35732__$2)));
}
} else {
return null;
}
break;
}
});})(num_cols))
,null,null));
});})(num_cols))
;
return iter__4915__auto__.call(null,cljs.core.range.call(null,num_cols));
});
pdf.report.table = (function pdf$report$table(rows){
var cols = pdf.report.transpose.call(null,rows);
var col_width = ((function (cols){
return (function (p1__35736_SHARP_){
var x__4474__auto__ = (10);
var y__4475__auto__ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,p1__35736_SHARP_));
return ((x__4474__auto__ > y__4475__auto__) ? x__4474__auto__ : y__4475__auto__);
});})(cols))
;
var col_widths = cljs.core.map.call(null,col_width,cols);
var col_x = cljs.core.cons.call(null,(0),anchor.util.cumul.call(null,col_widths));
return cljs.core.map_indexed.call(null,((function (cols,col_width,col_widths,col_x){
return (function (i,row){
return cljs.core.map.call(null,((function (cols,col_width,col_widths,col_x){
return (function (col_x__$1,col){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font","font",-1506159249),((cljs.core._EQ_.call(null,(0),i))?"Helvetica-Bold":"Helvetica")], null),col,((8) * col_x__$1),((14) * i)], null);
});})(cols,col_width,col_widths,col_x))
,col_x,row);
});})(cols,col_width,col_widths,col_x))
,rows);
});
pdf.report.disp_num = (function pdf$report$disp_num(x){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [","], null),cljs.core.partition_all.call(null,(3),cljs.core.reverse.call(null,[cljs.core.str(x)].join('')))))));
});
pdf.report.disp_percent = (function pdf$report$disp_percent(x){
return (x * (100)).toFixed((2));
});
pdf.report.table2 = (function pdf$report$table2(values){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Company","Discount to Fair Value","Discount to NAV","Cash","Net Income","Market Cap"], null),(function (){var iter__4915__auto__ = (function pdf$report$table2_$_iter__35757(s__35758){
return (new cljs.core.LazySeq(null,(function (){
var s__35758__$1 = s__35758;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35758__$1);
if(temp__4425__auto__){
var s__35758__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35758__$2)){
var c__4913__auto__ = cljs.core.chunk_first.call(null,s__35758__$2);
var size__4914__auto__ = cljs.core.count.call(null,c__4913__auto__);
var b__35760 = cljs.core.chunk_buffer.call(null,size__4914__auto__);
if((function (){var i__35759 = (0);
while(true){
if((i__35759 < size__4914__auto__)){
var vec__35767 = cljs.core._nth.call(null,c__4913__auto__,i__35759);
var company = cljs.core.nth.call(null,vec__35767,(0),null);
var map__35768 = cljs.core.nth.call(null,vec__35767,(1),null);
var map__35768__$1 = ((((!((map__35768 == null)))?((((map__35768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35768):map__35768);
var fair_value_discount = cljs.core.get.call(null,map__35768__$1,"fair-value-discount");
var nav_discount = cljs.core.get.call(null,map__35768__$1,"nav-discount");
var cash = cljs.core.get.call(null,map__35768__$1,"cash");
var net_income = cljs.core.get.call(null,map__35768__$1,"net-income");
var market_cap = cljs.core.get.call(null,map__35768__$1,"market-cap");
cljs.core.chunk_append.call(null,b__35760,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,pdf.report.disp_percent.call(null,fair_value_discount),pdf.report.disp_percent.call(null,nav_discount),pdf.report.disp_num.call(null,cash),pdf.report.disp_num.call(null,net_income),pdf.report.disp_num.call(null,market_cap)], null));

var G__35777 = (i__35759 + (1));
i__35759 = G__35777;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35760),pdf$report$table2_$_iter__35757.call(null,cljs.core.chunk_rest.call(null,s__35758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35760),null);
}
} else {
var vec__35770 = cljs.core.first.call(null,s__35758__$2);
var company = cljs.core.nth.call(null,vec__35770,(0),null);
var map__35771 = cljs.core.nth.call(null,vec__35770,(1),null);
var map__35771__$1 = ((((!((map__35771 == null)))?((((map__35771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35771):map__35771);
var fair_value_discount = cljs.core.get.call(null,map__35771__$1,"fair-value-discount");
var nav_discount = cljs.core.get.call(null,map__35771__$1,"nav-discount");
var cash = cljs.core.get.call(null,map__35771__$1,"cash");
var net_income = cljs.core.get.call(null,map__35771__$1,"net-income");
var market_cap = cljs.core.get.call(null,map__35771__$1,"market-cap");
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,pdf.report.disp_percent.call(null,fair_value_discount),pdf.report.disp_percent.call(null,nav_discount),pdf.report.disp_num.call(null,cash),pdf.report.disp_num.call(null,net_income),pdf.report.disp_num.call(null,market_cap)], null),pdf$report$table2_$_iter__35757.call(null,cljs.core.rest.call(null,s__35758__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4915__auto__.call(null,cljs.core.sort_by.call(null,((function (iter__4915__auto__){
return (function (p__35773){
var vec__35774 = p__35773;
var _ = cljs.core.nth.call(null,vec__35774,(0),null);
var map__35775 = cljs.core.nth.call(null,vec__35774,(1),null);
var map__35775__$1 = ((((!((map__35775 == null)))?((((map__35775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35775):map__35775);
var x = cljs.core.get.call(null,map__35775__$1,"fair-value-discount");
return x;
});})(iter__4915__auto__))
,values));
})());
});
pdf.report.doc = (function pdf$report$doc(values){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pdf","pdf",1586765132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout","layout",-2120940921),"landscape",new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str("Anchor Financial Report "),cljs.core.str(anchor.util.datestamp.call(null))].join('')], null)], null),pdf.report.footer_page.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(100)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null),[cljs.core.str("Daily Report "),cljs.core.str(anchor.util.datestamp.call(null))].join(''),(0),(-30)], null),pdf.report.table.call(null,pdf.report.table2.call(null,values))], null))], null);
});
pdf.report.pdf = (function pdf$report$pdf(){
var nums = anchor.update_calculations.nums.call(null);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nums], null),((function (nums){
return (function (){
return cljs_pdfkit.core.pdf.call(null,pdf.report.doc.call(null,cljs.core.deref.call(null,nums)));
});})(nums))
);
});

//# sourceMappingURL=report.js.map