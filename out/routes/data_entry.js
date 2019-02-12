// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('routes.data_entry');
goog.require('cljs.core');
goog.require('routes.index');
goog.require('anchor.db');
goog.require('anchor.util');
goog.require('anchor.get_icon');
goog.require('redlobster.promise');
routes.data_entry.routes = dogfort.middleware.routes.routes.call(null,(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data-entry"], null),(function (request__6549__auto____$1){
return routes.index.page.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data_entry"], null),new cljs.core.PersistentArrayMap(null, 3, ["report_metadata",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"report-metadata")),"period_coefficients",cljs.core.pr_str.call(null,anchor.db.get_db.call(null,"period-coefficients")),"company_names",cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete-report"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var reporting_period = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"reporting-period","reporting-period",-1789385365)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"reporting-period"], null)));
anchor.db.swap_db.call(null,"report-metadata",anchor.util.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null));

anchor.db.swap_db.call(null,"report-values",anchor.util.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null));

anchor.db.swap_db.call(null,"report-manuals",anchor.util.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [company,reporting_period], null));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["delete-company"], null),(function (request__6549__auto____$1){
var company = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"company","company",-340475075)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"company"], null)));
var seq__35509_35513 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["report-metadata","report-values","report-manuals","company-sectors","company-metadata"], null));
var chunk__35510_35514 = null;
var count__35511_35515 = (0);
var i__35512_35516 = (0);
while(true){
if((i__35512_35516 < count__35511_35515)){
var db_35517 = cljs.core._nth.call(null,chunk__35510_35514,i__35512_35516);
anchor.db.swap_db.call(null,db_35517,cljs.core.dissoc,company);

var G__35518 = seq__35509_35513;
var G__35519 = chunk__35510_35514;
var G__35520 = count__35511_35515;
var G__35521 = (i__35512_35516 + (1));
seq__35509_35513 = G__35518;
chunk__35510_35514 = G__35519;
count__35511_35515 = G__35520;
i__35512_35516 = G__35521;
continue;
} else {
var temp__4425__auto___35522 = cljs.core.seq.call(null,seq__35509_35513);
if(temp__4425__auto___35522){
var seq__35509_35523__$1 = temp__4425__auto___35522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35509_35523__$1)){
var c__4946__auto___35524 = cljs.core.chunk_first.call(null,seq__35509_35523__$1);
var G__35525 = cljs.core.chunk_rest.call(null,seq__35509_35523__$1);
var G__35526 = c__4946__auto___35524;
var G__35527 = cljs.core.count.call(null,c__4946__auto___35524);
var G__35528 = (0);
seq__35509_35513 = G__35525;
chunk__35510_35514 = G__35526;
count__35511_35515 = G__35527;
i__35512_35516 = G__35528;
continue;
} else {
var db_35529 = cljs.core.first.call(null,seq__35509_35523__$1);
anchor.db.swap_db.call(null,db_35529,cljs.core.dissoc,company);

var G__35530 = cljs.core.next.call(null,seq__35509_35523__$1);
var G__35531 = null;
var G__35532 = (0);
var G__35533 = (0);
seq__35509_35513 = G__35530;
chunk__35510_35514 = G__35531;
count__35511_35515 = G__35532;
i__35512_35516 = G__35533;
continue;
}
} else {
}
}
break;
}

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-report-metadata"], null),(function (request__6549__auto____$1){
var report_metadata = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"report-metadata","report-metadata",-2146256583)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"report-metadata"], null)));
anchor.db.set_db.call(null,"report-metadata",anchor.util.clean.call(null,report_metadata));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["update-period-coefficients"], null),(function (request__6549__auto____$1){
var period_coefficients = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"period-coefficients","period-coefficients",1174253692)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"period-coefficients"], null)));
anchor.db.set_db.call(null,"period-coefficients",anchor.util.clean.call(null,period_coefficients));

return anchor.util.ok_response;
}));
}),(function (request__6549__auto__){
return dogfort.middleware.routes.eval_route.call(null,request__6549__auto__,new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["add-company"], null),(function (request__6549__auto____$1){
var name = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"name"], null)));
var website = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"website","website",649297111)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"website"], null)));
var favicon_QMARK_ = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"favicon?","favicon?",1414307101)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"favicon?"], null)));
var yahoo_finance_id = cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"yahoo-finance-id","yahoo-finance-id",2057675030)], null),cljs.core.get_in.call(null,request__6549__auto____$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),"yahoo-finance-id"], null)));
if(cljs.core.truth_((function (){var and__4131__auto__ = cljs.core.not_empty.call(null,website);
if(cljs.core.truth_(and__4131__auto__)){
return cljs.core.not.call(null,favicon_QMARK_);
} else {
return and__4131__auto__;
}
})())){
var link = anchor.get_icon.get_icon.call(null,website);
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [link], null),((function (link,name,website,favicon_QMARK_,yahoo_finance_id){
return (function (){
var favicon_link = ((typeof cljs.core.deref.call(null,link) === 'string')?cljs.core.deref.call(null,link):null);
anchor.db.swap_db.call(null,"company-metadata",cljs.core.assoc,yahoo_finance_id,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","website","favicon?","favicon-link"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,website,favicon_QMARK_,favicon_link], null)));

return anchor.util.pr_response.call(null,anchor.db.get_db.call(null,"company-metadata"));
});})(link,name,website,favicon_QMARK_,yahoo_finance_id))
);
} else {
anchor.db.swap_db.call(null,"company-metadata",cljs.core.assoc,yahoo_finance_id,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","website","favicon?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,website,favicon_QMARK_], null)));

return anchor.util.pr_response.call(null,anchor.db.get_db.call(null,"company-metadata"));
}
}));
}));

//# sourceMappingURL=data_entry.js.map