// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('anchor.web');
goog.require('cljs.core');
goog.require('routes.bberg');
goog.require('routes.program_graph');
goog.require('routes.data_entry');
goog.require('dogfort.middleware.multipart_params');
goog.require('routes.allocation');
goog.require('dogfort.middleware.defaults');
goog.require('dogfort.middleware.session');
goog.require('routes.settings');
goog.require('routes.report');
goog.require('routes.viewer');
goog.require('routes.sectors');
goog.require('dogfort.middleware.edn');
goog.require('dogfort.middleware.cookies');
goog.require('routes.index2');
goog.require('dogfort.middleware.routes');
goog.require('dogfort.middleware.file');
goog.require('dogfort.http');
goog.require('dogfort.middleware.params');
goog.require('dogfort.middleware.keyword_params');
goog.require('anchor.optimize');
anchor.web.routes = dogfort.middleware.routes.routes.call(null,routes.allocation.routes,routes.bberg.routes,routes.data_entry.routes,routes.index2.routes,routes.program_graph.routes,routes.report.routes,routes.sectors.routes,routes.settings.routes,routes.viewer.routes,dogfort.middleware.routes.not_found);
anchor.web.main = (function anchor$web$main(){
var port = (function (){var or__4143__auto__ = process.env.PORT;
if(cljs.core.truth_(or__4143__auto__)){
return or__4143__auto__;
} else {
return (5000);
}
})();
cljs.core.println.call(null,"starting on port",port,"on node",process.version);

return dogfort.http.run_http.call(null,dogfort.middleware.defaults.wrap_defaults.call(null,anchor.web.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-file","wrap-file",-1438240540),"resources/public"], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"port","port",1534937262),port], null));
});
cljs.core._STAR_main_cli_fn_STAR_ = anchor.web.main;

//# sourceMappingURL=web.js.map