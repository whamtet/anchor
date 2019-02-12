// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.http');
goog.require('cljs.core');
goog.require('redlobster.promise');
goog.require('cljs.node');
goog.require('dogfort.util.response');
goog.require('redlobster.stream');
goog.require('redlobster.events');
dogfort.http.http = require("http");
dogfort.http.url = require("url");
dogfort.http.Stream = require("stream");
dogfort.http.ws = require("ws");

/**
 * @interface
 */
dogfort.http.IHTTPResponseWriter = function(){};

/**
 * Write data to a http.ServerResponse
 */
dogfort.http._write_response = (function dogfort$http$_write_response(data,res){
if((!((data == null))) && (!((data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 == null)))){
return data.dogfort$http$IHTTPResponseWriter$_write_response$arity$2(data,res);
} else {
var x__4798__auto__ = (((data == null))?null:data);
var m__4799__auto__ = (dogfort.http._write_response[goog.typeOf(x__4798__auto__)]);
if(!((m__4799__auto__ == null))){
return m__4799__auto__.call(null,data,res);
} else {
var m__4799__auto____$1 = (dogfort.http._write_response["_"]);
if(!((m__4799__auto____$1 == null))){
return m__4799__auto____$1.call(null,data,res);
} else {
throw cljs.core.missing_protocol.call(null,"IHTTPResponseWriter.-write-response",data);
}
}
}
});

dogfort.http.send_result = (function dogfort$http$send_result(res,ring_result){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"keep-alive","keep-alive",-47515827).cljs$core$IFn$_invoke$arity$1(ring_result))){
if(cljs.core.truth_(ring_result)){
var map__8771 = ring_result;
var map__8771__$1 = ((((!((map__8771 == null)))?((((map__8771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8771):map__8771);
var status = cljs.core.get.call(null,map__8771__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var headers = cljs.core.get.call(null,map__8771__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__8771__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var end_stream_QMARK_ = cljs.core.get.call(null,map__8771__$1,new cljs.core.Keyword(null,"end-stream?","end-stream?",-166958884));
res.statusCode = status;

var seq__8773_8779 = cljs.core.seq.call(null,headers);
var chunk__8774_8780 = null;
var count__8775_8781 = (0);
var i__8776_8782 = (0);
while(true){
if((i__8776_8782 < count__8775_8781)){
var vec__8777_8783 = cljs.core._nth.call(null,chunk__8774_8780,i__8776_8782);
var header_8784 = cljs.core.nth.call(null,vec__8777_8783,(0),null);
var value_8785 = cljs.core.nth.call(null,vec__8777_8783,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_8784),cljs.core.clj__GT_js.call(null,value_8785));

var G__8786 = seq__8773_8779;
var G__8787 = chunk__8774_8780;
var G__8788 = count__8775_8781;
var G__8789 = (i__8776_8782 + (1));
seq__8773_8779 = G__8786;
chunk__8774_8780 = G__8787;
count__8775_8781 = G__8788;
i__8776_8782 = G__8789;
continue;
} else {
var temp__4425__auto___8790 = cljs.core.seq.call(null,seq__8773_8779);
if(temp__4425__auto___8790){
var seq__8773_8791__$1 = temp__4425__auto___8790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8773_8791__$1)){
var c__4946__auto___8792 = cljs.core.chunk_first.call(null,seq__8773_8791__$1);
var G__8793 = cljs.core.chunk_rest.call(null,seq__8773_8791__$1);
var G__8794 = c__4946__auto___8792;
var G__8795 = cljs.core.count.call(null,c__4946__auto___8792);
var G__8796 = (0);
seq__8773_8779 = G__8793;
chunk__8774_8780 = G__8794;
count__8775_8781 = G__8795;
i__8776_8782 = G__8796;
continue;
} else {
var vec__8778_8797 = cljs.core.first.call(null,seq__8773_8791__$1);
var header_8798 = cljs.core.nth.call(null,vec__8778_8797,(0),null);
var value_8799 = cljs.core.nth.call(null,vec__8778_8797,(1),null);
res.setHeader(cljs.core.clj__GT_js.call(null,header_8798),cljs.core.clj__GT_js.call(null,value_8799));

var G__8800 = cljs.core.next.call(null,seq__8773_8791__$1);
var G__8801 = null;
var G__8802 = (0);
var G__8803 = (0);
seq__8773_8779 = G__8800;
chunk__8774_8780 = G__8801;
count__8775_8781 = G__8802;
i__8776_8782 = G__8803;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(dogfort.http._write_response.call(null,body,res))){
res.end();
} else {
}

if(cljs.core.truth_((function (){var and__4131__auto__ = redlobster.stream.stream_QMARK_.call(null,body);
if(cljs.core.truth_(and__4131__auto__)){
return end_stream_QMARK_;
} else {
return and__4131__auto__;
}
})())){
return body.end();
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
dogfort.http.send_error_page = (function dogfort$http$send_error_page(res,status,err){
return dogfort.http.send_result.call(null,res,dogfort.util.response.default_response.call(null,(500)));
});
(dogfort.http.IHTTPResponseWriter["null"] = true);

(dogfort.http._write_response["null"] = (function (data,res){
return true;
}));

(dogfort.http.IHTTPResponseWriter["string"] = true);

(dogfort.http._write_response["string"] = (function (data,res){
res.write(data);

return true;
}));

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.PersistentVector.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__8805_8817 = cljs.core.seq.call(null,data__$1);
var chunk__8806_8818 = null;
var count__8807_8819 = (0);
var i__8808_8820 = (0);
while(true){
if((i__8808_8820 < count__8807_8819)){
var i_8821 = cljs.core._nth.call(null,chunk__8806_8818,i__8808_8820);
dogfort.http._write_response.call(null,i_8821,res);

var G__8822 = seq__8805_8817;
var G__8823 = chunk__8806_8818;
var G__8824 = count__8807_8819;
var G__8825 = (i__8808_8820 + (1));
seq__8805_8817 = G__8822;
chunk__8806_8818 = G__8823;
count__8807_8819 = G__8824;
i__8808_8820 = G__8825;
continue;
} else {
var temp__4425__auto___8826 = cljs.core.seq.call(null,seq__8805_8817);
if(temp__4425__auto___8826){
var seq__8805_8827__$1 = temp__4425__auto___8826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8805_8827__$1)){
var c__4946__auto___8828 = cljs.core.chunk_first.call(null,seq__8805_8827__$1);
var G__8829 = cljs.core.chunk_rest.call(null,seq__8805_8827__$1);
var G__8830 = c__4946__auto___8828;
var G__8831 = cljs.core.count.call(null,c__4946__auto___8828);
var G__8832 = (0);
seq__8805_8817 = G__8829;
chunk__8806_8818 = G__8830;
count__8807_8819 = G__8831;
i__8808_8820 = G__8832;
continue;
} else {
var i_8833 = cljs.core.first.call(null,seq__8805_8827__$1);
dogfort.http._write_response.call(null,i_8833,res);

var G__8834 = cljs.core.next.call(null,seq__8805_8827__$1);
var G__8835 = null;
var G__8836 = (0);
var G__8837 = (0);
seq__8805_8817 = G__8834;
chunk__8806_8818 = G__8835;
count__8807_8819 = G__8836;
i__8808_8820 = G__8837;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.List.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__8809_8838 = cljs.core.seq.call(null,data__$1);
var chunk__8810_8839 = null;
var count__8811_8840 = (0);
var i__8812_8841 = (0);
while(true){
if((i__8812_8841 < count__8811_8840)){
var i_8842 = cljs.core._nth.call(null,chunk__8810_8839,i__8812_8841);
dogfort.http._write_response.call(null,i_8842,res);

var G__8843 = seq__8809_8838;
var G__8844 = chunk__8810_8839;
var G__8845 = count__8811_8840;
var G__8846 = (i__8812_8841 + (1));
seq__8809_8838 = G__8843;
chunk__8810_8839 = G__8844;
count__8811_8840 = G__8845;
i__8812_8841 = G__8846;
continue;
} else {
var temp__4425__auto___8847 = cljs.core.seq.call(null,seq__8809_8838);
if(temp__4425__auto___8847){
var seq__8809_8848__$1 = temp__4425__auto___8847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8809_8848__$1)){
var c__4946__auto___8849 = cljs.core.chunk_first.call(null,seq__8809_8848__$1);
var G__8850 = cljs.core.chunk_rest.call(null,seq__8809_8848__$1);
var G__8851 = c__4946__auto___8849;
var G__8852 = cljs.core.count.call(null,c__4946__auto___8849);
var G__8853 = (0);
seq__8809_8838 = G__8850;
chunk__8810_8839 = G__8851;
count__8811_8840 = G__8852;
i__8812_8841 = G__8853;
continue;
} else {
var i_8854 = cljs.core.first.call(null,seq__8809_8848__$1);
dogfort.http._write_response.call(null,i_8854,res);

var G__8855 = cljs.core.next.call(null,seq__8809_8848__$1);
var G__8856 = null;
var G__8857 = (0);
var G__8858 = (0);
seq__8809_8838 = G__8855;
chunk__8810_8839 = G__8856;
count__8811_8840 = G__8857;
i__8812_8841 = G__8858;
continue;
}
} else {
}
}
break;
}

return true;
});

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$ = true;

cljs.core.LazySeq.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
var seq__8813_8859 = cljs.core.seq.call(null,data__$1);
var chunk__8814_8860 = null;
var count__8815_8861 = (0);
var i__8816_8862 = (0);
while(true){
if((i__8816_8862 < count__8815_8861)){
var i_8863 = cljs.core._nth.call(null,chunk__8814_8860,i__8816_8862);
dogfort.http._write_response.call(null,i_8863,res);

var G__8864 = seq__8813_8859;
var G__8865 = chunk__8814_8860;
var G__8866 = count__8815_8861;
var G__8867 = (i__8816_8862 + (1));
seq__8813_8859 = G__8864;
chunk__8814_8860 = G__8865;
count__8815_8861 = G__8866;
i__8816_8862 = G__8867;
continue;
} else {
var temp__4425__auto___8868 = cljs.core.seq.call(null,seq__8813_8859);
if(temp__4425__auto___8868){
var seq__8813_8869__$1 = temp__4425__auto___8868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8813_8869__$1)){
var c__4946__auto___8870 = cljs.core.chunk_first.call(null,seq__8813_8869__$1);
var G__8871 = cljs.core.chunk_rest.call(null,seq__8813_8869__$1);
var G__8872 = c__4946__auto___8870;
var G__8873 = cljs.core.count.call(null,c__4946__auto___8870);
var G__8874 = (0);
seq__8813_8859 = G__8871;
chunk__8814_8860 = G__8872;
count__8815_8861 = G__8873;
i__8816_8862 = G__8874;
continue;
} else {
var i_8875 = cljs.core.first.call(null,seq__8813_8869__$1);
dogfort.http._write_response.call(null,i_8875,res);

var G__8876 = cljs.core.next.call(null,seq__8813_8869__$1);
var G__8877 = null;
var G__8878 = (0);
var G__8879 = (0);
seq__8813_8859 = G__8876;
chunk__8814_8860 = G__8877;
count__8815_8861 = G__8878;
i__8816_8862 = G__8879;
continue;
}
} else {
}
}
break;
}

return true;
});

Buffer.prototype.dogfort$http$IHTTPResponseWriter$ = true;

Buffer.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
res.write(data__$1);

return true;
});

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$ = true;

dogfort.http.Stream.prototype.dogfort$http$IHTTPResponseWriter$_write_response$arity$2 = (function (data,res){
var data__$1 = this;
redlobster.events.on.call(null,data__$1,new cljs.core.Keyword(null,"error","error",-978969032),((function (data__$1){
return (function (p1__8804_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__8804_SHARP_);
});})(data__$1))
);

data__$1.pipe(res);

return false;
});
dogfort.http.build_listener = (function dogfort$http$build_listener(handler,options){
return (function (req,res){
var url = dogfort.http.url.parse(req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,req.headers);
var conn = req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
var peer_cert_fn = conn.getPeerCertificate;
var ring_req = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"ssl-client-cert","ssl-client-cert",661784516),new cljs.core.Keyword(null,"remote-addr","remote-addr",815723977),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"server-port","server-port",663745648),new cljs.core.Keyword(null,"content-length","content-length",441319507),new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"request-method","request-method",1764796830)],[res,(cljs.core.truth_(peer_cert_fn)?peer_cert_fn.call(null):null),conn.remoteAddress,headers,address.call(null,"port"),headers.call(null,"content-length"),headers.call(null,"content-type"),null,uri,address.call(null,"address"),query__$1,req,"http",cljs.core.keyword.call(null,req.method.toLowerCase())]);
var result = handler.call(null,ring_req);
return redlobster.promise.on_realised.call(null,result,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__8880_SHARP_){
return dogfort.http.send_result.call(null,res,p1__8880_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
,((function (url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result){
return (function (p1__8881_SHARP_){
return dogfort.http.send_error_page.call(null,res,(500),p1__8881_SHARP_);
});})(url,uri,query,query__$1,headers,conn,address,peer_cert_fn,ring_req,result))
);
});
});
dogfort.http.ws_handler = (function dogfort$http$ws_handler(handler,websocket){
var upgrade_req = websocket.upgradeReq;
var url = dogfort.http.url.parse(upgrade_req.url);
var uri = url.pathname;
var query = url.search;
var query__$1 = (cljs.core.truth_(query)?query.substring((1)):null);
var headers = cljs.core.js__GT_clj.call(null,upgrade_req.headers);
var conn = upgrade_req.connection;
var address = cljs.core.js__GT_clj.call(null,conn.address());
return handler.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"server-port","server-port",663745648),address.call(null,"port"),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),address.call(null,"address"),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),query__$1,new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket,new cljs.core.Keyword(null,"websocket?","websocket?",1552493139),true,new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null));
});
dogfort.http.run_http = (function dogfort$http$run_http(handler,options){
var server = dogfort.http.http.createServer(dogfort.http.build_listener.call(null,handler,options));
var wss = (new dogfort.http.ws.Server({"server": server}));
wss.on("connection",((function (server,wss){
return (function (p1__8882_SHARP_){
return dogfort.http.ws_handler.call(null,handler,p1__8882_SHARP_);
});})(server,wss))
);

return server.listen(new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(options));
});

//# sourceMappingURL=http.js.map