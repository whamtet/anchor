// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('graph.viz');
goog.require('cljs.core');
goog.require('graph.dot');
goog.require('anchor.model');
goog.require('cljs.nodejs');
goog.require('redlobster.stream');
goog.require('redlobster.promise');
graph.viz.child_process = require("child_process");
/**
 * Takes a string containing a GraphViz dot file, and returns a string containing SVG.  This requires that GraphViz
 *   is installed on the local machine.
 */
graph.viz.dot__GT_svg = (function graph$viz$dot__GT_svg(s){
var promise__5324__auto__ = redlobster.promise.promise.call(null);
var realise__5325__auto__ = ((function (promise__5324__auto__){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__))
;
var realise_error__5327__auto__ = ((function (promise__5324__auto__,realise__5325__auto__){
return (function (promise__5324__auto____$1,value__5326__auto__){
return redlobster.promise.realise_error.call(null,promise__5324__auto____$1,value__5326__auto__);
});})(promise__5324__auto__,realise__5325__auto__))
;
var realise = cljs.core.partial.call(null,realise__5325__auto__,promise__5324__auto__);
var realise_error = cljs.core.partial.call(null,realise_error__5327__auto__,promise__5324__auto__);
redlobster.stream.write_stream.call(null,graph.viz.child_process.exec(((cljs.core._EQ_.call(null,"darwin",process.platform))?"dot -Tsvg":"/app/user/dot -Tsvg"),((function (promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error){
return (function (err,stdout,stderr){
return realise.call(null,stdout);
});})(promise__5324__auto__,realise__5325__auto__,realise_error__5327__auto__,realise,realise_error))
).stdin,s);

return promise__5324__auto__;
});
graph.viz.graph__GT_svg = cljs.core.comp.call(null,graph.viz.dot__GT_svg,graph.dot.graph__GT_dot);

//# sourceMappingURL=viz.js.map