// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.yahoo');
goog.require('cljs.core');
goog.require('redlobster.io');
goog.require('redlobster.promise');
goog.require('anchor.db');
goog.require('anchor.util');
goog.require('clojure.string');
goog.require('cljs.reader');
anchor.yahoo.stocks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INTC","BABA","TSLA","AIR.PA","YHOO"], null);
anchor.yahoo.fmt_str = "http://download.finance.yahoo.com/d/quotes.csv?s=%s&f=nsl1j2";
anchor.yahoo.parse_cell = (function anchor$yahoo$parse_cell(s){
var t = Number(s);
if(cljs.core.not.call(null,isNaN(t))){
return t;
} else {
return clojure.string.replace.call(null,s,"\"","");
}
});
anchor.yahoo.parse_line = (function anchor$yahoo$parse_line(line){
return cljs.core.map.call(null,anchor.yahoo.parse_cell,line.split(","));
});
anchor.yahoo.parse_csv = (function anchor$yahoo$parse_csv(s){
return cljs.core.map.call(null,anchor.yahoo.parse_line,s.split("\n"));
});
anchor.yahoo.data = (function anchor$yahoo$data(stocks){
var quotes = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",stocks));
var s = redlobster.io.slurp.call(null,anchor.util.format.call(null,anchor.yahoo.fmt_str,quotes));
return redlobster.promise.defer_until_realised.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),((function (s,quotes){
return (function (){
var csv = anchor.yahoo.parse_csv.call(null,cljs.core.deref.call(null,s).trim());
var m = anchor.util.map_by.call(null,cljs.core.second,csv);
return cljs.core.map.call(null,((function (csv,m,s,quotes){
return (function (p1__34850_SHARP_){
var vec__34853 = m.call(null,p1__34850_SHARP_);
var name = cljs.core.nth.call(null,vec__34853,(0),null);
var symbol = cljs.core.nth.call(null,vec__34853,(1),null);
var share_price = cljs.core.nth.call(null,vec__34853,(2),null);
var shares_outstanding = cljs.core.nth.call(null,vec__34853,(3),null);
return cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["name","share-price","shares-outstanding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,share_price,shares_outstanding], null));
});})(csv,m,s,quotes))
,stocks);
});})(s,quotes))
);
});
anchor.yahoo.data2 = anchor.util.memoize_promise.call(null,anchor.yahoo.data);

//# sourceMappingURL=yahoo.js.map