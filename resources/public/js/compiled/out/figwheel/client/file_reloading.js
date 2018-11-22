// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29360_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29360_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29361 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29362 = null;
var count__29363 = (0);
var i__29364 = (0);
while(true){
if((i__29364 < count__29363)){
var n = cljs.core._nth.call(null,chunk__29362,i__29364);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29365 = seq__29361;
var G__29366 = chunk__29362;
var G__29367 = count__29363;
var G__29368 = (i__29364 + (1));
seq__29361 = G__29365;
chunk__29362 = G__29366;
count__29363 = G__29367;
i__29364 = G__29368;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29361);
if(temp__5457__auto__){
var seq__29361__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29361__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29361__$1);
var G__29369 = cljs.core.chunk_rest.call(null,seq__29361__$1);
var G__29370 = c__4319__auto__;
var G__29371 = cljs.core.count.call(null,c__4319__auto__);
var G__29372 = (0);
seq__29361 = G__29369;
chunk__29362 = G__29370;
count__29363 = G__29371;
i__29364 = G__29372;
continue;
} else {
var n = cljs.core.first.call(null,seq__29361__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29373 = cljs.core.next.call(null,seq__29361__$1);
var G__29374 = null;
var G__29375 = (0);
var G__29376 = (0);
seq__29361 = G__29373;
chunk__29362 = G__29374;
count__29363 = G__29375;
i__29364 = G__29376;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29377){
var vec__29378 = p__29377;
var _ = cljs.core.nth.call(null,vec__29378,(0),null);
var v = cljs.core.nth.call(null,vec__29378,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29381){
var vec__29382 = p__29381;
var k = cljs.core.nth.call(null,vec__29382,(0),null);
var v = cljs.core.nth.call(null,vec__29382,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29394_29402 = cljs.core.seq.call(null,deps);
var chunk__29395_29403 = null;
var count__29396_29404 = (0);
var i__29397_29405 = (0);
while(true){
if((i__29397_29405 < count__29396_29404)){
var dep_29406 = cljs.core._nth.call(null,chunk__29395_29403,i__29397_29405);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29406;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29406));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29406,(depth + (1)),state);
} else {
}


var G__29407 = seq__29394_29402;
var G__29408 = chunk__29395_29403;
var G__29409 = count__29396_29404;
var G__29410 = (i__29397_29405 + (1));
seq__29394_29402 = G__29407;
chunk__29395_29403 = G__29408;
count__29396_29404 = G__29409;
i__29397_29405 = G__29410;
continue;
} else {
var temp__5457__auto___29411 = cljs.core.seq.call(null,seq__29394_29402);
if(temp__5457__auto___29411){
var seq__29394_29412__$1 = temp__5457__auto___29411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29394_29412__$1)){
var c__4319__auto___29413 = cljs.core.chunk_first.call(null,seq__29394_29412__$1);
var G__29414 = cljs.core.chunk_rest.call(null,seq__29394_29412__$1);
var G__29415 = c__4319__auto___29413;
var G__29416 = cljs.core.count.call(null,c__4319__auto___29413);
var G__29417 = (0);
seq__29394_29402 = G__29414;
chunk__29395_29403 = G__29415;
count__29396_29404 = G__29416;
i__29397_29405 = G__29417;
continue;
} else {
var dep_29418 = cljs.core.first.call(null,seq__29394_29412__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29418;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29418));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29418,(depth + (1)),state);
} else {
}


var G__29419 = cljs.core.next.call(null,seq__29394_29412__$1);
var G__29420 = null;
var G__29421 = (0);
var G__29422 = (0);
seq__29394_29402 = G__29419;
chunk__29395_29403 = G__29420;
count__29396_29404 = G__29421;
i__29397_29405 = G__29422;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29398){
var vec__29399 = p__29398;
var seq__29400 = cljs.core.seq.call(null,vec__29399);
var first__29401 = cljs.core.first.call(null,seq__29400);
var seq__29400__$1 = cljs.core.next.call(null,seq__29400);
var x = first__29401;
var xs = seq__29400__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29399,seq__29400,first__29401,seq__29400__$1,x,xs,get_deps__$1){
return (function (p1__29385_SHARP_){
return clojure.set.difference.call(null,p1__29385_SHARP_,x);
});})(vec__29399,seq__29400,first__29401,seq__29400__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29423 = cljs.core.seq.call(null,provides);
var chunk__29424 = null;
var count__29425 = (0);
var i__29426 = (0);
while(true){
if((i__29426 < count__29425)){
var prov = cljs.core._nth.call(null,chunk__29424,i__29426);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29427_29435 = cljs.core.seq.call(null,requires);
var chunk__29428_29436 = null;
var count__29429_29437 = (0);
var i__29430_29438 = (0);
while(true){
if((i__29430_29438 < count__29429_29437)){
var req_29439 = cljs.core._nth.call(null,chunk__29428_29436,i__29430_29438);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29439,prov);


var G__29440 = seq__29427_29435;
var G__29441 = chunk__29428_29436;
var G__29442 = count__29429_29437;
var G__29443 = (i__29430_29438 + (1));
seq__29427_29435 = G__29440;
chunk__29428_29436 = G__29441;
count__29429_29437 = G__29442;
i__29430_29438 = G__29443;
continue;
} else {
var temp__5457__auto___29444 = cljs.core.seq.call(null,seq__29427_29435);
if(temp__5457__auto___29444){
var seq__29427_29445__$1 = temp__5457__auto___29444;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29427_29445__$1)){
var c__4319__auto___29446 = cljs.core.chunk_first.call(null,seq__29427_29445__$1);
var G__29447 = cljs.core.chunk_rest.call(null,seq__29427_29445__$1);
var G__29448 = c__4319__auto___29446;
var G__29449 = cljs.core.count.call(null,c__4319__auto___29446);
var G__29450 = (0);
seq__29427_29435 = G__29447;
chunk__29428_29436 = G__29448;
count__29429_29437 = G__29449;
i__29430_29438 = G__29450;
continue;
} else {
var req_29451 = cljs.core.first.call(null,seq__29427_29445__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29451,prov);


var G__29452 = cljs.core.next.call(null,seq__29427_29445__$1);
var G__29453 = null;
var G__29454 = (0);
var G__29455 = (0);
seq__29427_29435 = G__29452;
chunk__29428_29436 = G__29453;
count__29429_29437 = G__29454;
i__29430_29438 = G__29455;
continue;
}
} else {
}
}
break;
}


var G__29456 = seq__29423;
var G__29457 = chunk__29424;
var G__29458 = count__29425;
var G__29459 = (i__29426 + (1));
seq__29423 = G__29456;
chunk__29424 = G__29457;
count__29425 = G__29458;
i__29426 = G__29459;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29423);
if(temp__5457__auto__){
var seq__29423__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29423__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29423__$1);
var G__29460 = cljs.core.chunk_rest.call(null,seq__29423__$1);
var G__29461 = c__4319__auto__;
var G__29462 = cljs.core.count.call(null,c__4319__auto__);
var G__29463 = (0);
seq__29423 = G__29460;
chunk__29424 = G__29461;
count__29425 = G__29462;
i__29426 = G__29463;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29423__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29431_29464 = cljs.core.seq.call(null,requires);
var chunk__29432_29465 = null;
var count__29433_29466 = (0);
var i__29434_29467 = (0);
while(true){
if((i__29434_29467 < count__29433_29466)){
var req_29468 = cljs.core._nth.call(null,chunk__29432_29465,i__29434_29467);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29468,prov);


var G__29469 = seq__29431_29464;
var G__29470 = chunk__29432_29465;
var G__29471 = count__29433_29466;
var G__29472 = (i__29434_29467 + (1));
seq__29431_29464 = G__29469;
chunk__29432_29465 = G__29470;
count__29433_29466 = G__29471;
i__29434_29467 = G__29472;
continue;
} else {
var temp__5457__auto___29473__$1 = cljs.core.seq.call(null,seq__29431_29464);
if(temp__5457__auto___29473__$1){
var seq__29431_29474__$1 = temp__5457__auto___29473__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29431_29474__$1)){
var c__4319__auto___29475 = cljs.core.chunk_first.call(null,seq__29431_29474__$1);
var G__29476 = cljs.core.chunk_rest.call(null,seq__29431_29474__$1);
var G__29477 = c__4319__auto___29475;
var G__29478 = cljs.core.count.call(null,c__4319__auto___29475);
var G__29479 = (0);
seq__29431_29464 = G__29476;
chunk__29432_29465 = G__29477;
count__29433_29466 = G__29478;
i__29434_29467 = G__29479;
continue;
} else {
var req_29480 = cljs.core.first.call(null,seq__29431_29474__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29480,prov);


var G__29481 = cljs.core.next.call(null,seq__29431_29474__$1);
var G__29482 = null;
var G__29483 = (0);
var G__29484 = (0);
seq__29431_29464 = G__29481;
chunk__29432_29465 = G__29482;
count__29433_29466 = G__29483;
i__29434_29467 = G__29484;
continue;
}
} else {
}
}
break;
}


var G__29485 = cljs.core.next.call(null,seq__29423__$1);
var G__29486 = null;
var G__29487 = (0);
var G__29488 = (0);
seq__29423 = G__29485;
chunk__29424 = G__29486;
count__29425 = G__29487;
i__29426 = G__29488;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29489_29493 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29490_29494 = null;
var count__29491_29495 = (0);
var i__29492_29496 = (0);
while(true){
if((i__29492_29496 < count__29491_29495)){
var ns_29497 = cljs.core._nth.call(null,chunk__29490_29494,i__29492_29496);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29497);


var G__29498 = seq__29489_29493;
var G__29499 = chunk__29490_29494;
var G__29500 = count__29491_29495;
var G__29501 = (i__29492_29496 + (1));
seq__29489_29493 = G__29498;
chunk__29490_29494 = G__29499;
count__29491_29495 = G__29500;
i__29492_29496 = G__29501;
continue;
} else {
var temp__5457__auto___29502 = cljs.core.seq.call(null,seq__29489_29493);
if(temp__5457__auto___29502){
var seq__29489_29503__$1 = temp__5457__auto___29502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29489_29503__$1)){
var c__4319__auto___29504 = cljs.core.chunk_first.call(null,seq__29489_29503__$1);
var G__29505 = cljs.core.chunk_rest.call(null,seq__29489_29503__$1);
var G__29506 = c__4319__auto___29504;
var G__29507 = cljs.core.count.call(null,c__4319__auto___29504);
var G__29508 = (0);
seq__29489_29493 = G__29505;
chunk__29490_29494 = G__29506;
count__29491_29495 = G__29507;
i__29492_29496 = G__29508;
continue;
} else {
var ns_29509 = cljs.core.first.call(null,seq__29489_29503__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29509);


var G__29510 = cljs.core.next.call(null,seq__29489_29503__$1);
var G__29511 = null;
var G__29512 = (0);
var G__29513 = (0);
seq__29489_29493 = G__29510;
chunk__29490_29494 = G__29511;
count__29491_29495 = G__29512;
i__29492_29496 = G__29513;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29514__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29515__i = 0, G__29515__a = new Array(arguments.length -  0);
while (G__29515__i < G__29515__a.length) {G__29515__a[G__29515__i] = arguments[G__29515__i + 0]; ++G__29515__i;}
  args = new cljs.core.IndexedSeq(G__29515__a,0,null);
} 
return G__29514__delegate.call(this,args);};
G__29514.cljs$lang$maxFixedArity = 0;
G__29514.cljs$lang$applyTo = (function (arglist__29516){
var args = cljs.core.seq(arglist__29516);
return G__29514__delegate(args);
});
G__29514.cljs$core$IFn$_invoke$arity$variadic = G__29514__delegate;
return G__29514;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29517_SHARP_,p2__29518_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29517_SHARP_)].join('')),p2__29518_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29519_SHARP_,p2__29520_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29519_SHARP_)].join(''),p2__29520_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29521 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29521.addCallback(((function (G__29521){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29521))
);

G__29521.addErrback(((function (G__29521){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29521))
);

return G__29521;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29522){if((e29522 instanceof Error)){
var e = e29522;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29522;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29523){if((e29523 instanceof Error)){
var e = e29523;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29523;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29524 = cljs.core._EQ_;
var expr__29525 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29524.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29525))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29524.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29525))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29524.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29525))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29524,expr__29525){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29524,expr__29525))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29527,callback){
var map__29528 = p__29527;
var map__29528__$1 = ((((!((map__29528 == null)))?(((((map__29528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29528):map__29528);
var file_msg = map__29528__$1;
var request_url = cljs.core.get.call(null,map__29528__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29528,map__29528__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29528,map__29528__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__){
return (function (state_29566){
var state_val_29567 = (state_29566[(1)]);
if((state_val_29567 === (7))){
var inst_29562 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29568_29594 = state_29566__$1;
(statearr_29568_29594[(2)] = inst_29562);

(statearr_29568_29594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (1))){
var state_29566__$1 = state_29566;
var statearr_29569_29595 = state_29566__$1;
(statearr_29569_29595[(2)] = null);

(statearr_29569_29595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (4))){
var inst_29532 = (state_29566[(7)]);
var inst_29532__$1 = (state_29566[(2)]);
var state_29566__$1 = (function (){var statearr_29570 = state_29566;
(statearr_29570[(7)] = inst_29532__$1);

return statearr_29570;
})();
if(cljs.core.truth_(inst_29532__$1)){
var statearr_29571_29596 = state_29566__$1;
(statearr_29571_29596[(1)] = (5));

} else {
var statearr_29572_29597 = state_29566__$1;
(statearr_29572_29597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (15))){
var inst_29547 = (state_29566[(8)]);
var inst_29545 = (state_29566[(9)]);
var inst_29549 = inst_29547.call(null,inst_29545);
var state_29566__$1 = state_29566;
var statearr_29573_29598 = state_29566__$1;
(statearr_29573_29598[(2)] = inst_29549);

(statearr_29573_29598[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (13))){
var inst_29556 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29574_29599 = state_29566__$1;
(statearr_29574_29599[(2)] = inst_29556);

(statearr_29574_29599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (6))){
var state_29566__$1 = state_29566;
var statearr_29575_29600 = state_29566__$1;
(statearr_29575_29600[(2)] = null);

(statearr_29575_29600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (17))){
var inst_29553 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
var statearr_29576_29601 = state_29566__$1;
(statearr_29576_29601[(2)] = inst_29553);

(statearr_29576_29601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (3))){
var inst_29564 = (state_29566[(2)]);
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29566__$1,inst_29564);
} else {
if((state_val_29567 === (12))){
var state_29566__$1 = state_29566;
var statearr_29577_29602 = state_29566__$1;
(statearr_29577_29602[(2)] = null);

(statearr_29577_29602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (2))){
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29566__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29567 === (11))){
var inst_29537 = (state_29566[(10)]);
var inst_29543 = figwheel.client.file_reloading.blocking_load.call(null,inst_29537);
var state_29566__$1 = state_29566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29566__$1,(14),inst_29543);
} else {
if((state_val_29567 === (9))){
var inst_29537 = (state_29566[(10)]);
var state_29566__$1 = state_29566;
if(cljs.core.truth_(inst_29537)){
var statearr_29578_29603 = state_29566__$1;
(statearr_29578_29603[(1)] = (11));

} else {
var statearr_29579_29604 = state_29566__$1;
(statearr_29579_29604[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (5))){
var inst_29538 = (state_29566[(11)]);
var inst_29532 = (state_29566[(7)]);
var inst_29537 = cljs.core.nth.call(null,inst_29532,(0),null);
var inst_29538__$1 = cljs.core.nth.call(null,inst_29532,(1),null);
var state_29566__$1 = (function (){var statearr_29580 = state_29566;
(statearr_29580[(11)] = inst_29538__$1);

(statearr_29580[(10)] = inst_29537);

return statearr_29580;
})();
if(cljs.core.truth_(inst_29538__$1)){
var statearr_29581_29605 = state_29566__$1;
(statearr_29581_29605[(1)] = (8));

} else {
var statearr_29582_29606 = state_29566__$1;
(statearr_29582_29606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (14))){
var inst_29547 = (state_29566[(8)]);
var inst_29537 = (state_29566[(10)]);
var inst_29545 = (state_29566[(2)]);
var inst_29546 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29547__$1 = cljs.core.get.call(null,inst_29546,inst_29537);
var state_29566__$1 = (function (){var statearr_29583 = state_29566;
(statearr_29583[(8)] = inst_29547__$1);

(statearr_29583[(9)] = inst_29545);

return statearr_29583;
})();
if(cljs.core.truth_(inst_29547__$1)){
var statearr_29584_29607 = state_29566__$1;
(statearr_29584_29607[(1)] = (15));

} else {
var statearr_29585_29608 = state_29566__$1;
(statearr_29585_29608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (16))){
var inst_29545 = (state_29566[(9)]);
var inst_29551 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29545);
var state_29566__$1 = state_29566;
var statearr_29586_29609 = state_29566__$1;
(statearr_29586_29609[(2)] = inst_29551);

(statearr_29586_29609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (10))){
var inst_29558 = (state_29566[(2)]);
var state_29566__$1 = (function (){var statearr_29587 = state_29566;
(statearr_29587[(12)] = inst_29558);

return statearr_29587;
})();
var statearr_29588_29610 = state_29566__$1;
(statearr_29588_29610[(2)] = null);

(statearr_29588_29610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29567 === (8))){
var inst_29538 = (state_29566[(11)]);
var inst_29540 = eval(inst_29538);
var state_29566__$1 = state_29566;
var statearr_29589_29611 = state_29566__$1;
(statearr_29589_29611[(2)] = inst_29540);

(statearr_29589_29611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27251__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27162__auto__ = null;
var figwheel$client$file_reloading$state_machine__27162__auto____0 = (function (){
var statearr_29590 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29590[(0)] = figwheel$client$file_reloading$state_machine__27162__auto__);

(statearr_29590[(1)] = (1));

return statearr_29590;
});
var figwheel$client$file_reloading$state_machine__27162__auto____1 = (function (state_29566){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_29566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e29591){if((e29591 instanceof Object)){
var ex__27165__auto__ = e29591;
var statearr_29592_29612 = state_29566;
(statearr_29592_29612[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29613 = state_29566;
state_29566 = G__29613;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27162__auto__ = function(state_29566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27162__auto____1.call(this,state_29566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27162__auto____0;
figwheel$client$file_reloading$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27162__auto____1;
return figwheel$client$file_reloading$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__))
})();
var state__27253__auto__ = (function (){var statearr_29593 = f__27252__auto__.call(null);
(statearr_29593[(6)] = c__27251__auto__);

return statearr_29593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__))
);

return c__27251__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29615 = arguments.length;
switch (G__29615) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29617,callback){
var map__29618 = p__29617;
var map__29618__$1 = ((((!((map__29618 == null)))?(((((map__29618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29618):map__29618);
var file_msg = map__29618__$1;
var namespace = cljs.core.get.call(null,map__29618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29618,map__29618__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29618,map__29618__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29620){
var map__29621 = p__29620;
var map__29621__$1 = ((((!((map__29621 == null)))?(((((map__29621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29621):map__29621);
var file_msg = map__29621__$1;
var namespace = cljs.core.get.call(null,map__29621__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29623){
var map__29624 = p__29623;
var map__29624__$1 = ((((!((map__29624 == null)))?(((((map__29624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29624):map__29624);
var file_msg = map__29624__$1;
var namespace = cljs.core.get.call(null,map__29624__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29626,callback){
var map__29627 = p__29626;
var map__29627__$1 = ((((!((map__29627 == null)))?(((((map__29627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29627):map__29627);
var file_msg = map__29627__$1;
var request_url = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27251__auto___29677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___29677,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___29677,out){
return (function (state_29662){
var state_val_29663 = (state_29662[(1)]);
if((state_val_29663 === (1))){
var inst_29636 = cljs.core.seq.call(null,files);
var inst_29637 = cljs.core.first.call(null,inst_29636);
var inst_29638 = cljs.core.next.call(null,inst_29636);
var inst_29639 = files;
var state_29662__$1 = (function (){var statearr_29664 = state_29662;
(statearr_29664[(7)] = inst_29639);

(statearr_29664[(8)] = inst_29638);

(statearr_29664[(9)] = inst_29637);

return statearr_29664;
})();
var statearr_29665_29678 = state_29662__$1;
(statearr_29665_29678[(2)] = null);

(statearr_29665_29678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (2))){
var inst_29639 = (state_29662[(7)]);
var inst_29645 = (state_29662[(10)]);
var inst_29644 = cljs.core.seq.call(null,inst_29639);
var inst_29645__$1 = cljs.core.first.call(null,inst_29644);
var inst_29646 = cljs.core.next.call(null,inst_29644);
var inst_29647 = (inst_29645__$1 == null);
var inst_29648 = cljs.core.not.call(null,inst_29647);
var state_29662__$1 = (function (){var statearr_29666 = state_29662;
(statearr_29666[(11)] = inst_29646);

(statearr_29666[(10)] = inst_29645__$1);

return statearr_29666;
})();
if(inst_29648){
var statearr_29667_29679 = state_29662__$1;
(statearr_29667_29679[(1)] = (4));

} else {
var statearr_29668_29680 = state_29662__$1;
(statearr_29668_29680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (3))){
var inst_29660 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29662__$1,inst_29660);
} else {
if((state_val_29663 === (4))){
var inst_29645 = (state_29662[(10)]);
var inst_29650 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29645);
var state_29662__$1 = state_29662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29662__$1,(7),inst_29650);
} else {
if((state_val_29663 === (5))){
var inst_29656 = cljs.core.async.close_BANG_.call(null,out);
var state_29662__$1 = state_29662;
var statearr_29669_29681 = state_29662__$1;
(statearr_29669_29681[(2)] = inst_29656);

(statearr_29669_29681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (6))){
var inst_29658 = (state_29662[(2)]);
var state_29662__$1 = state_29662;
var statearr_29670_29682 = state_29662__$1;
(statearr_29670_29682[(2)] = inst_29658);

(statearr_29670_29682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29663 === (7))){
var inst_29646 = (state_29662[(11)]);
var inst_29652 = (state_29662[(2)]);
var inst_29653 = cljs.core.async.put_BANG_.call(null,out,inst_29652);
var inst_29639 = inst_29646;
var state_29662__$1 = (function (){var statearr_29671 = state_29662;
(statearr_29671[(12)] = inst_29653);

(statearr_29671[(7)] = inst_29639);

return statearr_29671;
})();
var statearr_29672_29683 = state_29662__$1;
(statearr_29672_29683[(2)] = null);

(statearr_29672_29683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27251__auto___29677,out))
;
return ((function (switch__27161__auto__,c__27251__auto___29677,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____0 = (function (){
var statearr_29673 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29673[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__);

(statearr_29673[(1)] = (1));

return statearr_29673;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____1 = (function (state_29662){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_29662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e29674){if((e29674 instanceof Object)){
var ex__27165__auto__ = e29674;
var statearr_29675_29684 = state_29662;
(statearr_29675_29684[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29685 = state_29662;
state_29662 = G__29685;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__ = function(state_29662){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____1.call(this,state_29662);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___29677,out))
})();
var state__27253__auto__ = (function (){var statearr_29676 = f__27252__auto__.call(null);
(statearr_29676[(6)] = c__27251__auto___29677);

return statearr_29676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___29677,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29686,opts){
var map__29687 = p__29686;
var map__29687__$1 = ((((!((map__29687 == null)))?(((((map__29687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29687):map__29687);
var eval_body = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29689){var e = e29689;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29690_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29690_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29691){
var vec__29692 = p__29691;
var k = cljs.core.nth.call(null,vec__29692,(0),null);
var v = cljs.core.nth.call(null,vec__29692,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29695){
var vec__29696 = p__29695;
var k = cljs.core.nth.call(null,vec__29696,(0),null);
var v = cljs.core.nth.call(null,vec__29696,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29702,p__29703){
var map__29704 = p__29702;
var map__29704__$1 = ((((!((map__29704 == null)))?(((((map__29704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29704):map__29704);
var opts = map__29704__$1;
var before_jsload = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29704__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29705 = p__29703;
var map__29705__$1 = ((((!((map__29705 == null)))?(((((map__29705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29705):map__29705);
var msg = map__29705__$1;
var files = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29705__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29859){
var state_val_29860 = (state_29859[(1)]);
if((state_val_29860 === (7))){
var inst_29722 = (state_29859[(7)]);
var inst_29719 = (state_29859[(8)]);
var inst_29721 = (state_29859[(9)]);
var inst_29720 = (state_29859[(10)]);
var inst_29727 = cljs.core._nth.call(null,inst_29720,inst_29722);
var inst_29728 = figwheel.client.file_reloading.eval_body.call(null,inst_29727,opts);
var inst_29729 = (inst_29722 + (1));
var tmp29861 = inst_29719;
var tmp29862 = inst_29721;
var tmp29863 = inst_29720;
var inst_29719__$1 = tmp29861;
var inst_29720__$1 = tmp29863;
var inst_29721__$1 = tmp29862;
var inst_29722__$1 = inst_29729;
var state_29859__$1 = (function (){var statearr_29864 = state_29859;
(statearr_29864[(7)] = inst_29722__$1);

(statearr_29864[(8)] = inst_29719__$1);

(statearr_29864[(9)] = inst_29721__$1);

(statearr_29864[(10)] = inst_29720__$1);

(statearr_29864[(11)] = inst_29728);

return statearr_29864;
})();
var statearr_29865_29948 = state_29859__$1;
(statearr_29865_29948[(2)] = null);

(statearr_29865_29948[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (20))){
var inst_29762 = (state_29859[(12)]);
var inst_29770 = figwheel.client.file_reloading.sort_files.call(null,inst_29762);
var state_29859__$1 = state_29859;
var statearr_29866_29949 = state_29859__$1;
(statearr_29866_29949[(2)] = inst_29770);

(statearr_29866_29949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (27))){
var state_29859__$1 = state_29859;
var statearr_29867_29950 = state_29859__$1;
(statearr_29867_29950[(2)] = null);

(statearr_29867_29950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (1))){
var inst_29711 = (state_29859[(13)]);
var inst_29708 = before_jsload.call(null,files);
var inst_29709 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29710 = (function (){return ((function (inst_29711,inst_29708,inst_29709,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29699_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29699_SHARP_);
});
;})(inst_29711,inst_29708,inst_29709,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29711__$1 = cljs.core.filter.call(null,inst_29710,files);
var inst_29712 = cljs.core.not_empty.call(null,inst_29711__$1);
var state_29859__$1 = (function (){var statearr_29868 = state_29859;
(statearr_29868[(14)] = inst_29708);

(statearr_29868[(15)] = inst_29709);

(statearr_29868[(13)] = inst_29711__$1);

return statearr_29868;
})();
if(cljs.core.truth_(inst_29712)){
var statearr_29869_29951 = state_29859__$1;
(statearr_29869_29951[(1)] = (2));

} else {
var statearr_29870_29952 = state_29859__$1;
(statearr_29870_29952[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (24))){
var state_29859__$1 = state_29859;
var statearr_29871_29953 = state_29859__$1;
(statearr_29871_29953[(2)] = null);

(statearr_29871_29953[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (39))){
var inst_29812 = (state_29859[(16)]);
var state_29859__$1 = state_29859;
var statearr_29872_29954 = state_29859__$1;
(statearr_29872_29954[(2)] = inst_29812);

(statearr_29872_29954[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (46))){
var inst_29854 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29873_29955 = state_29859__$1;
(statearr_29873_29955[(2)] = inst_29854);

(statearr_29873_29955[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (4))){
var inst_29756 = (state_29859[(2)]);
var inst_29757 = cljs.core.List.EMPTY;
var inst_29758 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29757);
var inst_29759 = (function (){return ((function (inst_29756,inst_29757,inst_29758,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29700_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29700_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29700_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29700_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29756,inst_29757,inst_29758,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29760 = cljs.core.filter.call(null,inst_29759,files);
var inst_29761 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29762 = cljs.core.concat.call(null,inst_29760,inst_29761);
var state_29859__$1 = (function (){var statearr_29874 = state_29859;
(statearr_29874[(12)] = inst_29762);

(statearr_29874[(17)] = inst_29758);

(statearr_29874[(18)] = inst_29756);

return statearr_29874;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29875_29956 = state_29859__$1;
(statearr_29875_29956[(1)] = (16));

} else {
var statearr_29876_29957 = state_29859__$1;
(statearr_29876_29957[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (15))){
var inst_29746 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29877_29958 = state_29859__$1;
(statearr_29877_29958[(2)] = inst_29746);

(statearr_29877_29958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (21))){
var inst_29772 = (state_29859[(19)]);
var inst_29772__$1 = (state_29859[(2)]);
var inst_29773 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29772__$1);
var state_29859__$1 = (function (){var statearr_29878 = state_29859;
(statearr_29878[(19)] = inst_29772__$1);

return statearr_29878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29859__$1,(22),inst_29773);
} else {
if((state_val_29860 === (31))){
var inst_29857 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29859__$1,inst_29857);
} else {
if((state_val_29860 === (32))){
var inst_29812 = (state_29859[(16)]);
var inst_29817 = inst_29812.cljs$lang$protocol_mask$partition0$;
var inst_29818 = (inst_29817 & (64));
var inst_29819 = inst_29812.cljs$core$ISeq$;
var inst_29820 = (cljs.core.PROTOCOL_SENTINEL === inst_29819);
var inst_29821 = ((inst_29818) || (inst_29820));
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29821)){
var statearr_29879_29959 = state_29859__$1;
(statearr_29879_29959[(1)] = (35));

} else {
var statearr_29880_29960 = state_29859__$1;
(statearr_29880_29960[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (40))){
var inst_29834 = (state_29859[(20)]);
var inst_29833 = (state_29859[(2)]);
var inst_29834__$1 = cljs.core.get.call(null,inst_29833,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29835 = cljs.core.get.call(null,inst_29833,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29836 = cljs.core.not_empty.call(null,inst_29834__$1);
var state_29859__$1 = (function (){var statearr_29881 = state_29859;
(statearr_29881[(21)] = inst_29835);

(statearr_29881[(20)] = inst_29834__$1);

return statearr_29881;
})();
if(cljs.core.truth_(inst_29836)){
var statearr_29882_29961 = state_29859__$1;
(statearr_29882_29961[(1)] = (41));

} else {
var statearr_29883_29962 = state_29859__$1;
(statearr_29883_29962[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (33))){
var state_29859__$1 = state_29859;
var statearr_29884_29963 = state_29859__$1;
(statearr_29884_29963[(2)] = false);

(statearr_29884_29963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (13))){
var inst_29732 = (state_29859[(22)]);
var inst_29736 = cljs.core.chunk_first.call(null,inst_29732);
var inst_29737 = cljs.core.chunk_rest.call(null,inst_29732);
var inst_29738 = cljs.core.count.call(null,inst_29736);
var inst_29719 = inst_29737;
var inst_29720 = inst_29736;
var inst_29721 = inst_29738;
var inst_29722 = (0);
var state_29859__$1 = (function (){var statearr_29885 = state_29859;
(statearr_29885[(7)] = inst_29722);

(statearr_29885[(8)] = inst_29719);

(statearr_29885[(9)] = inst_29721);

(statearr_29885[(10)] = inst_29720);

return statearr_29885;
})();
var statearr_29886_29964 = state_29859__$1;
(statearr_29886_29964[(2)] = null);

(statearr_29886_29964[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (22))){
var inst_29780 = (state_29859[(23)]);
var inst_29775 = (state_29859[(24)]);
var inst_29772 = (state_29859[(19)]);
var inst_29776 = (state_29859[(25)]);
var inst_29775__$1 = (state_29859[(2)]);
var inst_29776__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29775__$1);
var inst_29777 = (function (){var all_files = inst_29772;
var res_SINGLEQUOTE_ = inst_29775__$1;
var res = inst_29776__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29780,inst_29775,inst_29772,inst_29776,inst_29775__$1,inst_29776__$1,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29701_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29701_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29780,inst_29775,inst_29772,inst_29776,inst_29775__$1,inst_29776__$1,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29778 = cljs.core.filter.call(null,inst_29777,inst_29775__$1);
var inst_29779 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29780__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29779);
var inst_29781 = cljs.core.not_empty.call(null,inst_29780__$1);
var state_29859__$1 = (function (){var statearr_29887 = state_29859;
(statearr_29887[(23)] = inst_29780__$1);

(statearr_29887[(24)] = inst_29775__$1);

(statearr_29887[(26)] = inst_29778);

(statearr_29887[(25)] = inst_29776__$1);

return statearr_29887;
})();
if(cljs.core.truth_(inst_29781)){
var statearr_29888_29965 = state_29859__$1;
(statearr_29888_29965[(1)] = (23));

} else {
var statearr_29889_29966 = state_29859__$1;
(statearr_29889_29966[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (36))){
var state_29859__$1 = state_29859;
var statearr_29890_29967 = state_29859__$1;
(statearr_29890_29967[(2)] = false);

(statearr_29890_29967[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (41))){
var inst_29834 = (state_29859[(20)]);
var inst_29838 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29839 = cljs.core.map.call(null,inst_29838,inst_29834);
var inst_29840 = cljs.core.pr_str.call(null,inst_29839);
var inst_29841 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29840)].join('');
var inst_29842 = figwheel.client.utils.log.call(null,inst_29841);
var state_29859__$1 = state_29859;
var statearr_29891_29968 = state_29859__$1;
(statearr_29891_29968[(2)] = inst_29842);

(statearr_29891_29968[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (43))){
var inst_29835 = (state_29859[(21)]);
var inst_29845 = (state_29859[(2)]);
var inst_29846 = cljs.core.not_empty.call(null,inst_29835);
var state_29859__$1 = (function (){var statearr_29892 = state_29859;
(statearr_29892[(27)] = inst_29845);

return statearr_29892;
})();
if(cljs.core.truth_(inst_29846)){
var statearr_29893_29969 = state_29859__$1;
(statearr_29893_29969[(1)] = (44));

} else {
var statearr_29894_29970 = state_29859__$1;
(statearr_29894_29970[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (29))){
var inst_29812 = (state_29859[(16)]);
var inst_29780 = (state_29859[(23)]);
var inst_29775 = (state_29859[(24)]);
var inst_29778 = (state_29859[(26)]);
var inst_29772 = (state_29859[(19)]);
var inst_29776 = (state_29859[(25)]);
var inst_29808 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29811 = (function (){var all_files = inst_29772;
var res_SINGLEQUOTE_ = inst_29775;
var res = inst_29776;
var files_not_loaded = inst_29778;
var dependencies_that_loaded = inst_29780;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29812,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29808,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29810){
var map__29895 = p__29810;
var map__29895__$1 = ((((!((map__29895 == null)))?(((((map__29895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29895):map__29895);
var namespace = cljs.core.get.call(null,map__29895__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29812,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29808,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29812__$1 = cljs.core.group_by.call(null,inst_29811,inst_29778);
var inst_29814 = (inst_29812__$1 == null);
var inst_29815 = cljs.core.not.call(null,inst_29814);
var state_29859__$1 = (function (){var statearr_29897 = state_29859;
(statearr_29897[(16)] = inst_29812__$1);

(statearr_29897[(28)] = inst_29808);

return statearr_29897;
})();
if(inst_29815){
var statearr_29898_29971 = state_29859__$1;
(statearr_29898_29971[(1)] = (32));

} else {
var statearr_29899_29972 = state_29859__$1;
(statearr_29899_29972[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (44))){
var inst_29835 = (state_29859[(21)]);
var inst_29848 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29835);
var inst_29849 = cljs.core.pr_str.call(null,inst_29848);
var inst_29850 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29849)].join('');
var inst_29851 = figwheel.client.utils.log.call(null,inst_29850);
var state_29859__$1 = state_29859;
var statearr_29900_29973 = state_29859__$1;
(statearr_29900_29973[(2)] = inst_29851);

(statearr_29900_29973[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (6))){
var inst_29753 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29901_29974 = state_29859__$1;
(statearr_29901_29974[(2)] = inst_29753);

(statearr_29901_29974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (28))){
var inst_29778 = (state_29859[(26)]);
var inst_29805 = (state_29859[(2)]);
var inst_29806 = cljs.core.not_empty.call(null,inst_29778);
var state_29859__$1 = (function (){var statearr_29902 = state_29859;
(statearr_29902[(29)] = inst_29805);

return statearr_29902;
})();
if(cljs.core.truth_(inst_29806)){
var statearr_29903_29975 = state_29859__$1;
(statearr_29903_29975[(1)] = (29));

} else {
var statearr_29904_29976 = state_29859__$1;
(statearr_29904_29976[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (25))){
var inst_29776 = (state_29859[(25)]);
var inst_29792 = (state_29859[(2)]);
var inst_29793 = cljs.core.not_empty.call(null,inst_29776);
var state_29859__$1 = (function (){var statearr_29905 = state_29859;
(statearr_29905[(30)] = inst_29792);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29793)){
var statearr_29906_29977 = state_29859__$1;
(statearr_29906_29977[(1)] = (26));

} else {
var statearr_29907_29978 = state_29859__$1;
(statearr_29907_29978[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (34))){
var inst_29828 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29828)){
var statearr_29908_29979 = state_29859__$1;
(statearr_29908_29979[(1)] = (38));

} else {
var statearr_29909_29980 = state_29859__$1;
(statearr_29909_29980[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (17))){
var state_29859__$1 = state_29859;
var statearr_29910_29981 = state_29859__$1;
(statearr_29910_29981[(2)] = recompile_dependents);

(statearr_29910_29981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (3))){
var state_29859__$1 = state_29859;
var statearr_29911_29982 = state_29859__$1;
(statearr_29911_29982[(2)] = null);

(statearr_29911_29982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (12))){
var inst_29749 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29912_29983 = state_29859__$1;
(statearr_29912_29983[(2)] = inst_29749);

(statearr_29912_29983[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (2))){
var inst_29711 = (state_29859[(13)]);
var inst_29718 = cljs.core.seq.call(null,inst_29711);
var inst_29719 = inst_29718;
var inst_29720 = null;
var inst_29721 = (0);
var inst_29722 = (0);
var state_29859__$1 = (function (){var statearr_29913 = state_29859;
(statearr_29913[(7)] = inst_29722);

(statearr_29913[(8)] = inst_29719);

(statearr_29913[(9)] = inst_29721);

(statearr_29913[(10)] = inst_29720);

return statearr_29913;
})();
var statearr_29914_29984 = state_29859__$1;
(statearr_29914_29984[(2)] = null);

(statearr_29914_29984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (23))){
var inst_29780 = (state_29859[(23)]);
var inst_29775 = (state_29859[(24)]);
var inst_29778 = (state_29859[(26)]);
var inst_29772 = (state_29859[(19)]);
var inst_29776 = (state_29859[(25)]);
var inst_29783 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29785 = (function (){var all_files = inst_29772;
var res_SINGLEQUOTE_ = inst_29775;
var res = inst_29776;
var files_not_loaded = inst_29778;
var dependencies_that_loaded = inst_29780;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29783,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29784){
var map__29915 = p__29784;
var map__29915__$1 = ((((!((map__29915 == null)))?(((((map__29915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29915):map__29915);
var request_url = cljs.core.get.call(null,map__29915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29783,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29786 = cljs.core.reverse.call(null,inst_29780);
var inst_29787 = cljs.core.map.call(null,inst_29785,inst_29786);
var inst_29788 = cljs.core.pr_str.call(null,inst_29787);
var inst_29789 = figwheel.client.utils.log.call(null,inst_29788);
var state_29859__$1 = (function (){var statearr_29917 = state_29859;
(statearr_29917[(31)] = inst_29783);

return statearr_29917;
})();
var statearr_29918_29985 = state_29859__$1;
(statearr_29918_29985[(2)] = inst_29789);

(statearr_29918_29985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (35))){
var state_29859__$1 = state_29859;
var statearr_29919_29986 = state_29859__$1;
(statearr_29919_29986[(2)] = true);

(statearr_29919_29986[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (19))){
var inst_29762 = (state_29859[(12)]);
var inst_29768 = figwheel.client.file_reloading.expand_files.call(null,inst_29762);
var state_29859__$1 = state_29859;
var statearr_29920_29987 = state_29859__$1;
(statearr_29920_29987[(2)] = inst_29768);

(statearr_29920_29987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (11))){
var state_29859__$1 = state_29859;
var statearr_29921_29988 = state_29859__$1;
(statearr_29921_29988[(2)] = null);

(statearr_29921_29988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (9))){
var inst_29751 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29922_29989 = state_29859__$1;
(statearr_29922_29989[(2)] = inst_29751);

(statearr_29922_29989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (5))){
var inst_29722 = (state_29859[(7)]);
var inst_29721 = (state_29859[(9)]);
var inst_29724 = (inst_29722 < inst_29721);
var inst_29725 = inst_29724;
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29725)){
var statearr_29923_29990 = state_29859__$1;
(statearr_29923_29990[(1)] = (7));

} else {
var statearr_29924_29991 = state_29859__$1;
(statearr_29924_29991[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (14))){
var inst_29732 = (state_29859[(22)]);
var inst_29741 = cljs.core.first.call(null,inst_29732);
var inst_29742 = figwheel.client.file_reloading.eval_body.call(null,inst_29741,opts);
var inst_29743 = cljs.core.next.call(null,inst_29732);
var inst_29719 = inst_29743;
var inst_29720 = null;
var inst_29721 = (0);
var inst_29722 = (0);
var state_29859__$1 = (function (){var statearr_29925 = state_29859;
(statearr_29925[(7)] = inst_29722);

(statearr_29925[(8)] = inst_29719);

(statearr_29925[(9)] = inst_29721);

(statearr_29925[(10)] = inst_29720);

(statearr_29925[(32)] = inst_29742);

return statearr_29925;
})();
var statearr_29926_29992 = state_29859__$1;
(statearr_29926_29992[(2)] = null);

(statearr_29926_29992[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (45))){
var state_29859__$1 = state_29859;
var statearr_29927_29993 = state_29859__$1;
(statearr_29927_29993[(2)] = null);

(statearr_29927_29993[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (26))){
var inst_29780 = (state_29859[(23)]);
var inst_29775 = (state_29859[(24)]);
var inst_29778 = (state_29859[(26)]);
var inst_29772 = (state_29859[(19)]);
var inst_29776 = (state_29859[(25)]);
var inst_29795 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29797 = (function (){var all_files = inst_29772;
var res_SINGLEQUOTE_ = inst_29775;
var res = inst_29776;
var files_not_loaded = inst_29778;
var dependencies_that_loaded = inst_29780;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29795,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29796){
var map__29928 = p__29796;
var map__29928__$1 = ((((!((map__29928 == null)))?(((((map__29928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var namespace = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29795,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29798 = cljs.core.map.call(null,inst_29797,inst_29776);
var inst_29799 = cljs.core.pr_str.call(null,inst_29798);
var inst_29800 = figwheel.client.utils.log.call(null,inst_29799);
var inst_29801 = (function (){var all_files = inst_29772;
var res_SINGLEQUOTE_ = inst_29775;
var res = inst_29776;
var files_not_loaded = inst_29778;
var dependencies_that_loaded = inst_29780;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29795,inst_29797,inst_29798,inst_29799,inst_29800,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29780,inst_29775,inst_29778,inst_29772,inst_29776,inst_29795,inst_29797,inst_29798,inst_29799,inst_29800,state_val_29860,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29802 = setTimeout(inst_29801,(10));
var state_29859__$1 = (function (){var statearr_29930 = state_29859;
(statearr_29930[(33)] = inst_29795);

(statearr_29930[(34)] = inst_29800);

return statearr_29930;
})();
var statearr_29931_29994 = state_29859__$1;
(statearr_29931_29994[(2)] = inst_29802);

(statearr_29931_29994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (16))){
var state_29859__$1 = state_29859;
var statearr_29932_29995 = state_29859__$1;
(statearr_29932_29995[(2)] = reload_dependents);

(statearr_29932_29995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (38))){
var inst_29812 = (state_29859[(16)]);
var inst_29830 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29812);
var state_29859__$1 = state_29859;
var statearr_29933_29996 = state_29859__$1;
(statearr_29933_29996[(2)] = inst_29830);

(statearr_29933_29996[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (30))){
var state_29859__$1 = state_29859;
var statearr_29934_29997 = state_29859__$1;
(statearr_29934_29997[(2)] = null);

(statearr_29934_29997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (10))){
var inst_29732 = (state_29859[(22)]);
var inst_29734 = cljs.core.chunked_seq_QMARK_.call(null,inst_29732);
var state_29859__$1 = state_29859;
if(inst_29734){
var statearr_29935_29998 = state_29859__$1;
(statearr_29935_29998[(1)] = (13));

} else {
var statearr_29936_29999 = state_29859__$1;
(statearr_29936_29999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (18))){
var inst_29766 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
if(cljs.core.truth_(inst_29766)){
var statearr_29937_30000 = state_29859__$1;
(statearr_29937_30000[(1)] = (19));

} else {
var statearr_29938_30001 = state_29859__$1;
(statearr_29938_30001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (42))){
var state_29859__$1 = state_29859;
var statearr_29939_30002 = state_29859__$1;
(statearr_29939_30002[(2)] = null);

(statearr_29939_30002[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (37))){
var inst_29825 = (state_29859[(2)]);
var state_29859__$1 = state_29859;
var statearr_29940_30003 = state_29859__$1;
(statearr_29940_30003[(2)] = inst_29825);

(statearr_29940_30003[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29860 === (8))){
var inst_29719 = (state_29859[(8)]);
var inst_29732 = (state_29859[(22)]);
var inst_29732__$1 = cljs.core.seq.call(null,inst_29719);
var state_29859__$1 = (function (){var statearr_29941 = state_29859;
(statearr_29941[(22)] = inst_29732__$1);

return statearr_29941;
})();
if(inst_29732__$1){
var statearr_29942_30004 = state_29859__$1;
(statearr_29942_30004[(1)] = (10));

} else {
var statearr_29943_30005 = state_29859__$1;
(statearr_29943_30005[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27161__auto__,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____0 = (function (){
var statearr_29944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29944[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__);

(statearr_29944[(1)] = (1));

return statearr_29944;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____1 = (function (state_29859){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_29859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e29945){if((e29945 instanceof Object)){
var ex__27165__auto__ = e29945;
var statearr_29946_30006 = state_29859;
(statearr_29946_30006[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30007 = state_29859;
state_29859 = G__30007;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__ = function(state_29859){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____1.call(this,state_29859);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27253__auto__ = (function (){var statearr_29947 = f__27252__auto__.call(null);
(statearr_29947[(6)] = c__27251__auto__);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__,map__29704,map__29704__$1,opts,before_jsload,on_jsload,reload_dependents,map__29705,map__29705__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27251__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30010,link){
var map__30011 = p__30010;
var map__30011__$1 = ((((!((map__30011 == null)))?(((((map__30011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30011):map__30011);
var file = cljs.core.get.call(null,map__30011__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30011,map__30011__$1,file){
return (function (p1__30008_SHARP_,p2__30009_SHARP_){
if(cljs.core._EQ_.call(null,p1__30008_SHARP_,p2__30009_SHARP_)){
return p1__30008_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30011,map__30011__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30014){
var map__30015 = p__30014;
var map__30015__$1 = ((((!((map__30015 == null)))?(((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var match_length = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30015__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30013_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30013_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30017_SHARP_,p2__30018_SHARP_){
return cljs.core.assoc.call(null,p1__30017_SHARP_,cljs.core.get.call(null,p2__30018_SHARP_,key),p2__30018_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30019 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30019);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30019);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30020,p__30021){
var map__30022 = p__30020;
var map__30022__$1 = ((((!((map__30022 == null)))?(((((map__30022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30022):map__30022);
var on_cssload = cljs.core.get.call(null,map__30022__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30023 = p__30021;
var map__30023__$1 = ((((!((map__30023 == null)))?(((((map__30023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30023):map__30023);
var files_msg = map__30023__$1;
var files = cljs.core.get.call(null,map__30023__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1542912636479
