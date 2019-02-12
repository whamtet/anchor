// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('dogfort.util.codec');
goog.require('cljs.core');
goog.require('dogfort.util.data');
goog.require('clojure.string');
goog.require('cljs.nodejs');
cljs.nodejs.enable_util_print_BANG_.call(null);
dogfort.util.codec.double_escape = (function dogfort$util$codec$double_escape(x){
return x.replace("\\","\\\\").replace("$","\\$");
});
dogfort.util.codec.number__GT_hex = (function dogfort$util$codec$number__GT_hex(num){
return num.toString((16)).toUpperCase();
});
/**
 * Percent-encode every character in the given string using either the specified
 *   encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_encode = (function dogfort$util$codec$percent_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34701 = arguments.length;
var i__5202__auto___34702 = (0);
while(true){
if((i__5202__auto___34702 < len__5201__auto___34701)){
args__5208__auto__.push((arguments[i__5202__auto___34702]));

var G__34703 = (i__5202__auto___34702 + (1));
i__5202__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__34699){
var vec__34700 = p__34699;
var encoding = cljs.core.nth.call(null,vec__34700,(0),null);
var buf = (new Buffer(unencoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()));
var bytes = cljs.core.map.call(null,((function (buf,vec__34700,encoding){
return (function (p1__34696_SHARP_){
return [cljs.core.str("%"),cljs.core.str(dogfort.util.codec.number__GT_hex.call(null,(buf[p1__34696_SHARP_])))].join('');
});})(buf,vec__34700,encoding))
,cljs.core.range.call(null,buf.length));
return clojure.string.join.call(null,bytes);
});

dogfort.util.codec.percent_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_encode.cljs$lang$applyTo = (function (seq34697){
var G__34698 = cljs.core.first.call(null,seq34697);
var seq34697__$1 = cljs.core.next.call(null,seq34697);
return dogfort.util.codec.percent_encode.cljs$core$IFn$_invoke$arity$variadic(G__34698,seq34697__$1);
});
dogfort.util.codec.parse_bytes = (function dogfort$util$codec$parse_bytes(encoded_bytes){
return (new Buffer(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__34705_SHARP_){
return parseInt(p1__34705_SHARP_,(16));
}),cljs.core.map.call(null,(function (p1__34704_SHARP_){
return cljs.core.subs.call(null,p1__34704_SHARP_,(1));
}),cljs.core.re_seq.call(null,/%../,encoded_bytes))))));
});
/**
 * Decode every percent-encoded character in the given string using the
 *   specified encoding, or UTF-8 by default.
 */
dogfort.util.codec.percent_decode = (function dogfort$util$codec$percent_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34710 = arguments.length;
var i__5202__auto___34711 = (0);
while(true){
if((i__5202__auto___34711 < len__5201__auto___34710)){
args__5208__auto__.push((arguments[i__5202__auto___34711]));

var G__34712 = (i__5202__auto___34711 + (1));
i__5202__auto___34711 = G__34712;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__34708){
var vec__34709 = p__34708;
var encoding = cljs.core.nth.call(null,vec__34709,(0),null);
return clojure.string.replace.call(null,encoded,/(?:%..)+/,((function (vec__34709,encoding){
return (function (chars){
return dogfort.util.codec.parse_bytes.call(null,chars).toString((function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()).replace("\\","\\\\");
});})(vec__34709,encoding))
);
});

dogfort.util.codec.percent_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.percent_decode.cljs$lang$applyTo = (function (seq34706){
var G__34707 = cljs.core.first.call(null,seq34706);
var seq34706__$1 = cljs.core.next.call(null,seq34706);
return dogfort.util.codec.percent_decode.cljs$core$IFn$_invoke$arity$variadic(G__34707,seq34706__$1);
});
/**
 * Returns the url-encoded version of the given string, using either a specified
 *   encoding or UTF-8 by default.
 */
dogfort.util.codec.url_encode = (function dogfort$util$codec$url_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34718 = arguments.length;
var i__5202__auto___34719 = (0);
while(true){
if((i__5202__auto___34719 < len__5201__auto___34718)){
args__5208__auto__.push((arguments[i__5202__auto___34719]));

var G__34720 = (i__5202__auto___34719 + (1));
i__5202__auto___34719 = G__34720;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__34716){
var vec__34717 = p__34716;
var encoding = cljs.core.nth.call(null,vec__34717,(0),null);
return clojure.string.replace.call(null,unencoded,/[^A-Za-z0-9_~.+-]+/,((function (vec__34717,encoding){
return (function (p1__34713_SHARP_){
return dogfort.util.codec.double_escape.call(null,dogfort.util.codec.percent_encode.call(null,p1__34713_SHARP_,encoding));
});})(vec__34717,encoding))
);
});

dogfort.util.codec.url_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_encode.cljs$lang$applyTo = (function (seq34714){
var G__34715 = cljs.core.first.call(null,seq34714);
var seq34714__$1 = cljs.core.next.call(null,seq34714);
return dogfort.util.codec.url_encode.cljs$core$IFn$_invoke$arity$variadic(G__34715,seq34714__$1);
});
/**
 * Returns the url-decoded version of the given string, using either a specified
 *   encoding or UTF-8 by default. If the encoding is invalid, nil is returned.
 */
dogfort.util.codec.url_decode = (function dogfort$util$codec$url_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34725 = arguments.length;
var i__5202__auto___34726 = (0);
while(true){
if((i__5202__auto___34726 < len__5201__auto___34725)){
args__5208__auto__.push((arguments[i__5202__auto___34726]));

var G__34727 = (i__5202__auto___34726 + (1));
i__5202__auto___34726 = G__34727;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__34723){
var vec__34724 = p__34723;
var encoding = cljs.core.nth.call(null,vec__34724,(0),null);
return dogfort.util.codec.percent_decode.call(null,clojure.string.replace.call(null,encoded,/[+]/," "),encoding);
});

dogfort.util.codec.url_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.url_decode.cljs$lang$applyTo = (function (seq34721){
var G__34722 = cljs.core.first.call(null,seq34721);
var seq34721__$1 = cljs.core.next.call(null,seq34721);
return dogfort.util.codec.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__34722,seq34721__$1);
});
/**
 * Encode a Buffer into a base64 encoded string.
 */
dogfort.util.codec.base64_encode = (function dogfort$util$codec$base64_encode(unencoded){
return unencoded.toString("base64");
});
/**
 * Decode a base64 encoded string into a Buffer.
 */
dogfort.util.codec.base64_decode = (function dogfort$util$codec$base64_decode(encoded){
return (new Buffer(encoded,"base64"));
});
dogfort.util.codec.form_encode_STAR_ = (function dogfort$util$codec$form_encode_STAR_(params,encoding){
if(cljs.core.map_QMARK_.call(null,params)){
var encode = (function dogfort$util$codec$form_encode_STAR__$_encode(x){
return dogfort$util$codec$form_encode_STAR_.call(null,x,encoding);
});
var encode_param = (function dogfort$util$codec$form_encode_STAR__$_encode_param(p__34741){
var vec__34743 = p__34741;
var k = cljs.core.nth.call(null,vec__34743,(0),null);
var v = cljs.core.nth.call(null,vec__34743,(1),null);
return [cljs.core.str(encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(encode.call(null,v))].join('');
});
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__34744){
var vec__34745 = p__34744;
var k = cljs.core.nth.call(null,vec__34745,(0),null);
var v = cljs.core.nth.call(null,vec__34745,(1),null);
if((cljs.core.seq_QMARK_.call(null,v)) || (cljs.core.sequential_QMARK_.call(null,v))){
return cljs.core.map.call(null,((function (vec__34745,k,v){
return (function (p1__34729_SHARP_){
return encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,p1__34729_SHARP_], null));
});})(vec__34745,k,v))
,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [encode_param.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null))], null);
}
}),params));
} else {
return dogfort.util.codec.url_encode.call(null,[cljs.core.str(params)].join(''),encoding);
}
});
/**
 * Encode the supplied value into www-form-urlencoded format, often used in
 *   URL query strings and POST request bodies, using the specified encoding.
 *   If the encoding is not specified, it defaults to UTF-8
 */
dogfort.util.codec.form_encode = (function dogfort$util$codec$form_encode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34750 = arguments.length;
var i__5202__auto___34751 = (0);
while(true){
if((i__5202__auto___34751 < len__5201__auto___34750)){
args__5208__auto__.push((arguments[i__5202__auto___34751]));

var G__34752 = (i__5202__auto___34751 + (1));
i__5202__auto___34751 = G__34752;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__34748){
var vec__34749 = p__34748;
var encoding = cljs.core.nth.call(null,vec__34749,(0),null);
return clojure.string.replace.call(null,clojure.string.replace.call(null,dogfort.util.codec.form_encode_STAR_.call(null,x,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})()),/\+/,"%2B"),/%20/,"+");
});

dogfort.util.codec.form_encode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_encode.cljs$lang$applyTo = (function (seq34746){
var G__34747 = cljs.core.first.call(null,seq34746);
var seq34746__$1 = cljs.core.next.call(null,seq34746);
return dogfort.util.codec.form_encode.cljs$core$IFn$_invoke$arity$variadic(G__34747,seq34746__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default.
 */
dogfort.util.codec.form_decode_str = (function dogfort$util$codec$form_decode_str(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34757 = arguments.length;
var i__5202__auto___34758 = (0);
while(true){
if((i__5202__auto___34758 < len__5201__auto___34757)){
args__5208__auto__.push((arguments[i__5202__auto___34758]));

var G__34759 = (i__5202__auto___34758 + (1));
i__5202__auto___34758 = G__34759;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__34755){
var vec__34756 = p__34755;
var encoding = cljs.core.nth.call(null,vec__34756,(0),null);
return dogfort.util.codec.url_decode.call(null,encoded,(function (){var or__4143__auto__ = encoding;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return "utf8";
}
})());
});

dogfort.util.codec.form_decode_str.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode_str.cljs$lang$applyTo = (function (seq34753){
var G__34754 = cljs.core.first.call(null,seq34753);
var seq34753__$1 = cljs.core.next.call(null,seq34753);
return dogfort.util.codec.form_decode_str.cljs$core$IFn$_invoke$arity$variadic(G__34754,seq34753__$1);
});
/**
 * Decode the supplied www-form-urlencoded string using the specified encoding,
 *   or UTF-8 by default. If the encoded value is a string, a string is returned.
 *   If the encoded value is a map of parameters, a map is returned.
 */
dogfort.util.codec.form_decode = (function dogfort$util$codec$form_decode(var_args){
var args__5208__auto__ = [];
var len__5201__auto___34765 = arguments.length;
var i__5202__auto___34766 = (0);
while(true){
if((i__5202__auto___34766 < len__5201__auto___34765)){
args__5208__auto__.push((arguments[i__5202__auto___34766]));

var G__34767 = (i__5202__auto___34766 + (1));
i__5202__auto___34766 = G__34767;
continue;
} else {
}
break;
}

var argseq__5209__auto__ = ((((1) < args__5208__auto__.length))?(new cljs.core.IndexedSeq(args__5208__auto__.slice((1)),(0))):null);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5209__auto__);
});

dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__34762){
var vec__34763 = p__34762;
var encoding = cljs.core.nth.call(null,vec__34763,(0),null);
if((encoded.indexOf("=") < (0))){
return dogfort.util.codec.form_decode_str.call(null,encoded,encoding);
} else {
return cljs.core.reduce.call(null,((function (vec__34763,encoding){
return (function (m,param){
var temp__4423__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__34764 = temp__4423__auto__;
var k = cljs.core.nth.call(null,vec__34764,(0),null);
var v = cljs.core.nth.call(null,vec__34764,(1),null);
return dogfort.util.data.assoc_conj.call(null,m,dogfort.util.codec.form_decode_str.call(null,k,encoding),dogfort.util.codec.form_decode_str.call(null,v,encoding));
} else {
return m;
}
});})(vec__34763,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,encoded,/&/));
}
});

dogfort.util.codec.form_decode.cljs$lang$maxFixedArity = (1);

dogfort.util.codec.form_decode.cljs$lang$applyTo = (function (seq34760){
var G__34761 = cljs.core.first.call(null,seq34760);
var seq34760__$1 = cljs.core.next.call(null,seq34760);
return dogfort.util.codec.form_decode.cljs$core$IFn$_invoke$arity$variadic(G__34761,seq34760__$1);
});

//# sourceMappingURL=codec.js.map