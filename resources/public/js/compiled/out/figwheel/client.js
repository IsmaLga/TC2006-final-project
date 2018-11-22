// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31111){if((e31111 instanceof Error)){
var e = e31111;
return "Error: Unable to stringify";
} else {
throw e31111;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31114 = arguments.length;
switch (G__31114) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31112_SHARP_){
if(typeof p1__31112_SHARP_ === 'string'){
return p1__31112_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31112_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31117 = arguments.length;
var i__4500__auto___31118 = (0);
while(true){
if((i__4500__auto___31118 < len__4499__auto___31117)){
args__4502__auto__.push((arguments[i__4500__auto___31118]));

var G__31119 = (i__4500__auto___31118 + (1));
i__4500__auto___31118 = G__31119;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31116){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31116));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31121 = arguments.length;
var i__4500__auto___31122 = (0);
while(true){
if((i__4500__auto___31122 < len__4499__auto___31121)){
args__4502__auto__.push((arguments[i__4500__auto___31122]));

var G__31123 = (i__4500__auto___31122 + (1));
i__4500__auto___31122 = G__31123;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31120){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31120));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31124){
var map__31125 = p__31124;
var map__31125__$1 = ((((!((map__31125 == null)))?(((((map__31125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31125):map__31125);
var message = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27251__auto___31204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___31204,ch){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___31204,ch){
return (function (state_31176){
var state_val_31177 = (state_31176[(1)]);
if((state_val_31177 === (7))){
var inst_31172 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31178_31205 = state_31176__$1;
(statearr_31178_31205[(2)] = inst_31172);

(statearr_31178_31205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (1))){
var state_31176__$1 = state_31176;
var statearr_31179_31206 = state_31176__$1;
(statearr_31179_31206[(2)] = null);

(statearr_31179_31206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (4))){
var inst_31129 = (state_31176[(7)]);
var inst_31129__$1 = (state_31176[(2)]);
var state_31176__$1 = (function (){var statearr_31180 = state_31176;
(statearr_31180[(7)] = inst_31129__$1);

return statearr_31180;
})();
if(cljs.core.truth_(inst_31129__$1)){
var statearr_31181_31207 = state_31176__$1;
(statearr_31181_31207[(1)] = (5));

} else {
var statearr_31182_31208 = state_31176__$1;
(statearr_31182_31208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (15))){
var inst_31136 = (state_31176[(8)]);
var inst_31151 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31136);
var inst_31152 = cljs.core.first.call(null,inst_31151);
var inst_31153 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31152);
var inst_31154 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31153)].join('');
var inst_31155 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31154);
var state_31176__$1 = state_31176;
var statearr_31183_31209 = state_31176__$1;
(statearr_31183_31209[(2)] = inst_31155);

(statearr_31183_31209[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (13))){
var inst_31160 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31184_31210 = state_31176__$1;
(statearr_31184_31210[(2)] = inst_31160);

(statearr_31184_31210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (6))){
var state_31176__$1 = state_31176;
var statearr_31185_31211 = state_31176__$1;
(statearr_31185_31211[(2)] = null);

(statearr_31185_31211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (17))){
var inst_31158 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31186_31212 = state_31176__$1;
(statearr_31186_31212[(2)] = inst_31158);

(statearr_31186_31212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (3))){
var inst_31174 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31176__$1,inst_31174);
} else {
if((state_val_31177 === (12))){
var inst_31135 = (state_31176[(9)]);
var inst_31149 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31135,opts);
var state_31176__$1 = state_31176;
if(cljs.core.truth_(inst_31149)){
var statearr_31187_31213 = state_31176__$1;
(statearr_31187_31213[(1)] = (15));

} else {
var statearr_31188_31214 = state_31176__$1;
(statearr_31188_31214[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (2))){
var state_31176__$1 = state_31176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31176__$1,(4),ch);
} else {
if((state_val_31177 === (11))){
var inst_31136 = (state_31176[(8)]);
var inst_31141 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31142 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31136);
var inst_31143 = cljs.core.async.timeout.call(null,(1000));
var inst_31144 = [inst_31142,inst_31143];
var inst_31145 = (new cljs.core.PersistentVector(null,2,(5),inst_31141,inst_31144,null));
var state_31176__$1 = state_31176;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31176__$1,(14),inst_31145);
} else {
if((state_val_31177 === (9))){
var inst_31136 = (state_31176[(8)]);
var inst_31162 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31163 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31136);
var inst_31164 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31163);
var inst_31165 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31164)].join('');
var inst_31166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31165);
var state_31176__$1 = (function (){var statearr_31189 = state_31176;
(statearr_31189[(10)] = inst_31162);

return statearr_31189;
})();
var statearr_31190_31215 = state_31176__$1;
(statearr_31190_31215[(2)] = inst_31166);

(statearr_31190_31215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (5))){
var inst_31129 = (state_31176[(7)]);
var inst_31131 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31132 = (new cljs.core.PersistentArrayMap(null,2,inst_31131,null));
var inst_31133 = (new cljs.core.PersistentHashSet(null,inst_31132,null));
var inst_31134 = figwheel.client.focus_msgs.call(null,inst_31133,inst_31129);
var inst_31135 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31134);
var inst_31136 = cljs.core.first.call(null,inst_31134);
var inst_31137 = figwheel.client.autoload_QMARK_.call(null);
var state_31176__$1 = (function (){var statearr_31191 = state_31176;
(statearr_31191[(9)] = inst_31135);

(statearr_31191[(8)] = inst_31136);

return statearr_31191;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31192_31216 = state_31176__$1;
(statearr_31192_31216[(1)] = (8));

} else {
var statearr_31193_31217 = state_31176__$1;
(statearr_31193_31217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (14))){
var inst_31147 = (state_31176[(2)]);
var state_31176__$1 = state_31176;
var statearr_31194_31218 = state_31176__$1;
(statearr_31194_31218[(2)] = inst_31147);

(statearr_31194_31218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (16))){
var state_31176__$1 = state_31176;
var statearr_31195_31219 = state_31176__$1;
(statearr_31195_31219[(2)] = null);

(statearr_31195_31219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (10))){
var inst_31168 = (state_31176[(2)]);
var state_31176__$1 = (function (){var statearr_31196 = state_31176;
(statearr_31196[(11)] = inst_31168);

return statearr_31196;
})();
var statearr_31197_31220 = state_31176__$1;
(statearr_31197_31220[(2)] = null);

(statearr_31197_31220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31177 === (8))){
var inst_31135 = (state_31176[(9)]);
var inst_31139 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31135,opts);
var state_31176__$1 = state_31176;
if(cljs.core.truth_(inst_31139)){
var statearr_31198_31221 = state_31176__$1;
(statearr_31198_31221[(1)] = (11));

} else {
var statearr_31199_31222 = state_31176__$1;
(statearr_31199_31222[(1)] = (12));

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
});})(c__27251__auto___31204,ch))
;
return ((function (switch__27161__auto__,c__27251__auto___31204,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____0 = (function (){
var statearr_31200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31200[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__);

(statearr_31200[(1)] = (1));

return statearr_31200;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____1 = (function (state_31176){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_31176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e31201){if((e31201 instanceof Object)){
var ex__27165__auto__ = e31201;
var statearr_31202_31223 = state_31176;
(statearr_31202_31223[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31224 = state_31176;
state_31176 = G__31224;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__ = function(state_31176){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____1.call(this,state_31176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27162__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___31204,ch))
})();
var state__27253__auto__ = (function (){var statearr_31203 = f__27252__auto__.call(null);
(statearr_31203[(6)] = c__27251__auto___31204);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___31204,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31225_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31225_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31229 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31229){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31227 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31228 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31227,_STAR_print_fn_STAR_31228,sb,base_path_31229){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31227,_STAR_print_fn_STAR_31228,sb,base_path_31229))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31228;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31227;
}}catch (e31226){if((e31226 instanceof Error)){
var e = e31226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31229], null));
} else {
var e = e31226;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31229))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31230){
var map__31231 = p__31230;
var map__31231__$1 = ((((!((map__31231 == null)))?(((((map__31231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31231):map__31231);
var opts = map__31231__$1;
var build_id = cljs.core.get.call(null,map__31231__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31231,map__31231__$1,opts,build_id){
return (function (p__31233){
var vec__31234 = p__31233;
var seq__31235 = cljs.core.seq.call(null,vec__31234);
var first__31236 = cljs.core.first.call(null,seq__31235);
var seq__31235__$1 = cljs.core.next.call(null,seq__31235);
var map__31237 = first__31236;
var map__31237__$1 = ((((!((map__31237 == null)))?(((((map__31237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31237):map__31237);
var msg = map__31237__$1;
var msg_name = cljs.core.get.call(null,map__31237__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31235__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31234,seq__31235,first__31236,seq__31235__$1,map__31237,map__31237__$1,msg,msg_name,_,map__31231,map__31231__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31234,seq__31235,first__31236,seq__31235__$1,map__31237,map__31237__$1,msg,msg_name,_,map__31231,map__31231__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31231,map__31231__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31239){
var vec__31240 = p__31239;
var seq__31241 = cljs.core.seq.call(null,vec__31240);
var first__31242 = cljs.core.first.call(null,seq__31241);
var seq__31241__$1 = cljs.core.next.call(null,seq__31241);
var map__31243 = first__31242;
var map__31243__$1 = ((((!((map__31243 == null)))?(((((map__31243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31243):map__31243);
var msg = map__31243__$1;
var msg_name = cljs.core.get.call(null,map__31243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31241__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31245){
var map__31246 = p__31245;
var map__31246__$1 = ((((!((map__31246 == null)))?(((((map__31246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31246):map__31246);
var on_compile_warning = cljs.core.get.call(null,map__31246__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31246__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31246,map__31246__$1,on_compile_warning,on_compile_fail){
return (function (p__31248){
var vec__31249 = p__31248;
var seq__31250 = cljs.core.seq.call(null,vec__31249);
var first__31251 = cljs.core.first.call(null,seq__31250);
var seq__31250__$1 = cljs.core.next.call(null,seq__31250);
var map__31252 = first__31251;
var map__31252__$1 = ((((!((map__31252 == null)))?(((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var msg = map__31252__$1;
var msg_name = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31250__$1;
var pred__31254 = cljs.core._EQ_;
var expr__31255 = msg_name;
if(cljs.core.truth_(pred__31254.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31255))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31254.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31255))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31246,map__31246__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__,msg_hist,msg_names,msg){
return (function (state_31344){
var state_val_31345 = (state_31344[(1)]);
if((state_val_31345 === (7))){
var inst_31264 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31264)){
var statearr_31346_31393 = state_31344__$1;
(statearr_31346_31393[(1)] = (8));

} else {
var statearr_31347_31394 = state_31344__$1;
(statearr_31347_31394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (20))){
var inst_31338 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31348_31395 = state_31344__$1;
(statearr_31348_31395[(2)] = inst_31338);

(statearr_31348_31395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (27))){
var inst_31334 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31349_31396 = state_31344__$1;
(statearr_31349_31396[(2)] = inst_31334);

(statearr_31349_31396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (1))){
var inst_31257 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31257)){
var statearr_31350_31397 = state_31344__$1;
(statearr_31350_31397[(1)] = (2));

} else {
var statearr_31351_31398 = state_31344__$1;
(statearr_31351_31398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (24))){
var inst_31336 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31352_31399 = state_31344__$1;
(statearr_31352_31399[(2)] = inst_31336);

(statearr_31352_31399[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (4))){
var inst_31342 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31344__$1,inst_31342);
} else {
if((state_val_31345 === (15))){
var inst_31340 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31353_31400 = state_31344__$1;
(statearr_31353_31400[(2)] = inst_31340);

(statearr_31353_31400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (21))){
var inst_31293 = (state_31344[(2)]);
var inst_31294 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31295 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31294);
var state_31344__$1 = (function (){var statearr_31354 = state_31344;
(statearr_31354[(7)] = inst_31293);

return statearr_31354;
})();
var statearr_31355_31401 = state_31344__$1;
(statearr_31355_31401[(2)] = inst_31295);

(statearr_31355_31401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (31))){
var inst_31323 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31323)){
var statearr_31356_31402 = state_31344__$1;
(statearr_31356_31402[(1)] = (34));

} else {
var statearr_31357_31403 = state_31344__$1;
(statearr_31357_31403[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (32))){
var inst_31332 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31358_31404 = state_31344__$1;
(statearr_31358_31404[(2)] = inst_31332);

(statearr_31358_31404[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (33))){
var inst_31319 = (state_31344[(2)]);
var inst_31320 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31321 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31320);
var state_31344__$1 = (function (){var statearr_31359 = state_31344;
(statearr_31359[(8)] = inst_31319);

return statearr_31359;
})();
var statearr_31360_31405 = state_31344__$1;
(statearr_31360_31405[(2)] = inst_31321);

(statearr_31360_31405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (13))){
var inst_31278 = figwheel.client.heads_up.clear.call(null);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(16),inst_31278);
} else {
if((state_val_31345 === (22))){
var inst_31299 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31300 = figwheel.client.heads_up.append_warning_message.call(null,inst_31299);
var state_31344__$1 = state_31344;
var statearr_31361_31406 = state_31344__$1;
(statearr_31361_31406[(2)] = inst_31300);

(statearr_31361_31406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (36))){
var inst_31330 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31362_31407 = state_31344__$1;
(statearr_31362_31407[(2)] = inst_31330);

(statearr_31362_31407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (29))){
var inst_31310 = (state_31344[(2)]);
var inst_31311 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31312 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31311);
var state_31344__$1 = (function (){var statearr_31363 = state_31344;
(statearr_31363[(9)] = inst_31310);

return statearr_31363;
})();
var statearr_31364_31408 = state_31344__$1;
(statearr_31364_31408[(2)] = inst_31312);

(statearr_31364_31408[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (6))){
var inst_31259 = (state_31344[(10)]);
var state_31344__$1 = state_31344;
var statearr_31365_31409 = state_31344__$1;
(statearr_31365_31409[(2)] = inst_31259);

(statearr_31365_31409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (28))){
var inst_31306 = (state_31344[(2)]);
var inst_31307 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31308 = figwheel.client.heads_up.display_warning.call(null,inst_31307);
var state_31344__$1 = (function (){var statearr_31366 = state_31344;
(statearr_31366[(11)] = inst_31306);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(29),inst_31308);
} else {
if((state_val_31345 === (25))){
var inst_31304 = figwheel.client.heads_up.clear.call(null);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(28),inst_31304);
} else {
if((state_val_31345 === (34))){
var inst_31325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(37),inst_31325);
} else {
if((state_val_31345 === (17))){
var inst_31284 = (state_31344[(2)]);
var inst_31285 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31286 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31285);
var state_31344__$1 = (function (){var statearr_31367 = state_31344;
(statearr_31367[(12)] = inst_31284);

return statearr_31367;
})();
var statearr_31368_31410 = state_31344__$1;
(statearr_31368_31410[(2)] = inst_31286);

(statearr_31368_31410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (3))){
var inst_31276 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31276)){
var statearr_31369_31411 = state_31344__$1;
(statearr_31369_31411[(1)] = (13));

} else {
var statearr_31370_31412 = state_31344__$1;
(statearr_31370_31412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (12))){
var inst_31272 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31371_31413 = state_31344__$1;
(statearr_31371_31413[(2)] = inst_31272);

(statearr_31371_31413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (2))){
var inst_31259 = (state_31344[(10)]);
var inst_31259__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31344__$1 = (function (){var statearr_31372 = state_31344;
(statearr_31372[(10)] = inst_31259__$1);

return statearr_31372;
})();
if(cljs.core.truth_(inst_31259__$1)){
var statearr_31373_31414 = state_31344__$1;
(statearr_31373_31414[(1)] = (5));

} else {
var statearr_31374_31415 = state_31344__$1;
(statearr_31374_31415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (23))){
var inst_31302 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31302)){
var statearr_31375_31416 = state_31344__$1;
(statearr_31375_31416[(1)] = (25));

} else {
var statearr_31376_31417 = state_31344__$1;
(statearr_31376_31417[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (35))){
var state_31344__$1 = state_31344;
var statearr_31377_31418 = state_31344__$1;
(statearr_31377_31418[(2)] = null);

(statearr_31377_31418[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (19))){
var inst_31297 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31297)){
var statearr_31378_31419 = state_31344__$1;
(statearr_31378_31419[(1)] = (22));

} else {
var statearr_31379_31420 = state_31344__$1;
(statearr_31379_31420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (11))){
var inst_31268 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31380_31421 = state_31344__$1;
(statearr_31380_31421[(2)] = inst_31268);

(statearr_31380_31421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (9))){
var inst_31270 = figwheel.client.heads_up.clear.call(null);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(12),inst_31270);
} else {
if((state_val_31345 === (5))){
var inst_31261 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31344__$1 = state_31344;
var statearr_31381_31422 = state_31344__$1;
(statearr_31381_31422[(2)] = inst_31261);

(statearr_31381_31422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (14))){
var inst_31288 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31288)){
var statearr_31382_31423 = state_31344__$1;
(statearr_31382_31423[(1)] = (18));

} else {
var statearr_31383_31424 = state_31344__$1;
(statearr_31383_31424[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (26))){
var inst_31314 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31344__$1 = state_31344;
if(cljs.core.truth_(inst_31314)){
var statearr_31384_31425 = state_31344__$1;
(statearr_31384_31425[(1)] = (30));

} else {
var statearr_31385_31426 = state_31344__$1;
(statearr_31385_31426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (16))){
var inst_31280 = (state_31344[(2)]);
var inst_31281 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31282 = figwheel.client.heads_up.display_exception.call(null,inst_31281);
var state_31344__$1 = (function (){var statearr_31386 = state_31344;
(statearr_31386[(13)] = inst_31280);

return statearr_31386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(17),inst_31282);
} else {
if((state_val_31345 === (30))){
var inst_31316 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31317 = figwheel.client.heads_up.display_warning.call(null,inst_31316);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(33),inst_31317);
} else {
if((state_val_31345 === (10))){
var inst_31274 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31387_31427 = state_31344__$1;
(statearr_31387_31427[(2)] = inst_31274);

(statearr_31387_31427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (18))){
var inst_31290 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31291 = figwheel.client.heads_up.display_exception.call(null,inst_31290);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(21),inst_31291);
} else {
if((state_val_31345 === (37))){
var inst_31327 = (state_31344[(2)]);
var state_31344__$1 = state_31344;
var statearr_31388_31428 = state_31344__$1;
(statearr_31388_31428[(2)] = inst_31327);

(statearr_31388_31428[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31345 === (8))){
var inst_31266 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31344__$1 = state_31344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31344__$1,(11),inst_31266);
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
});})(c__27251__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27161__auto__,c__27251__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____1 = (function (state_31344){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_31344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__27165__auto__ = e31390;
var statearr_31391_31429 = state_31344;
(statearr_31391_31429[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31430 = state_31344;
state_31344 = G__31430;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__ = function(state_31344){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____1.call(this,state_31344);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__,msg_hist,msg_names,msg))
})();
var state__27253__auto__ = (function (){var statearr_31392 = f__27252__auto__.call(null);
(statearr_31392[(6)] = c__27251__auto__);

return statearr_31392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__,msg_hist,msg_names,msg))
);

return c__27251__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27251__auto___31459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___31459,ch){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___31459,ch){
return (function (state_31445){
var state_val_31446 = (state_31445[(1)]);
if((state_val_31446 === (1))){
var state_31445__$1 = state_31445;
var statearr_31447_31460 = state_31445__$1;
(statearr_31447_31460[(2)] = null);

(statearr_31447_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (2))){
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(4),ch);
} else {
if((state_val_31446 === (3))){
var inst_31443 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31445__$1,inst_31443);
} else {
if((state_val_31446 === (4))){
var inst_31433 = (state_31445[(7)]);
var inst_31433__$1 = (state_31445[(2)]);
var state_31445__$1 = (function (){var statearr_31448 = state_31445;
(statearr_31448[(7)] = inst_31433__$1);

return statearr_31448;
})();
if(cljs.core.truth_(inst_31433__$1)){
var statearr_31449_31461 = state_31445__$1;
(statearr_31449_31461[(1)] = (5));

} else {
var statearr_31450_31462 = state_31445__$1;
(statearr_31450_31462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (5))){
var inst_31433 = (state_31445[(7)]);
var inst_31435 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31433);
var state_31445__$1 = state_31445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(8),inst_31435);
} else {
if((state_val_31446 === (6))){
var state_31445__$1 = state_31445;
var statearr_31451_31463 = state_31445__$1;
(statearr_31451_31463[(2)] = null);

(statearr_31451_31463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (7))){
var inst_31441 = (state_31445[(2)]);
var state_31445__$1 = state_31445;
var statearr_31452_31464 = state_31445__$1;
(statearr_31452_31464[(2)] = inst_31441);

(statearr_31452_31464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31446 === (8))){
var inst_31437 = (state_31445[(2)]);
var state_31445__$1 = (function (){var statearr_31453 = state_31445;
(statearr_31453[(8)] = inst_31437);

return statearr_31453;
})();
var statearr_31454_31465 = state_31445__$1;
(statearr_31454_31465[(2)] = null);

(statearr_31454_31465[(1)] = (2));


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
});})(c__27251__auto___31459,ch))
;
return ((function (switch__27161__auto__,c__27251__auto___31459,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27162__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27162__auto____0 = (function (){
var statearr_31455 = [null,null,null,null,null,null,null,null,null];
(statearr_31455[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27162__auto__);

(statearr_31455[(1)] = (1));

return statearr_31455;
});
var figwheel$client$heads_up_plugin_$_state_machine__27162__auto____1 = (function (state_31445){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_31445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e31456){if((e31456 instanceof Object)){
var ex__27165__auto__ = e31456;
var statearr_31457_31466 = state_31445;
(statearr_31457_31466[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31467 = state_31445;
state_31445 = G__31467;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27162__auto__ = function(state_31445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27162__auto____1.call(this,state_31445);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27162__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27162__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___31459,ch))
})();
var state__27253__auto__ = (function (){var statearr_31458 = f__27252__auto__.call(null);
(statearr_31458[(6)] = c__27251__auto___31459);

return statearr_31458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___31459,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__){
return (function (state_31473){
var state_val_31474 = (state_31473[(1)]);
if((state_val_31474 === (1))){
var inst_31468 = cljs.core.async.timeout.call(null,(3000));
var state_31473__$1 = state_31473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31473__$1,(2),inst_31468);
} else {
if((state_val_31474 === (2))){
var inst_31470 = (state_31473[(2)]);
var inst_31471 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31473__$1 = (function (){var statearr_31475 = state_31473;
(statearr_31475[(7)] = inst_31470);

return statearr_31475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31473__$1,inst_31471);
} else {
return null;
}
}
});})(c__27251__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____0 = (function (){
var statearr_31476 = [null,null,null,null,null,null,null,null];
(statearr_31476[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__);

(statearr_31476[(1)] = (1));

return statearr_31476;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____1 = (function (state_31473){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_31473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__27165__auto__ = e31477;
var statearr_31478_31480 = state_31473;
(statearr_31478_31480[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31481 = state_31473;
state_31473 = G__31481;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__ = function(state_31473){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____1.call(this,state_31473);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27162__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__))
})();
var state__27253__auto__ = (function (){var statearr_31479 = f__27252__auto__.call(null);
(statearr_31479[(6)] = c__27251__auto__);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__))
);

return c__27251__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31488){
var state_val_31489 = (state_31488[(1)]);
if((state_val_31489 === (1))){
var inst_31482 = cljs.core.async.timeout.call(null,(2000));
var state_31488__$1 = state_31488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31488__$1,(2),inst_31482);
} else {
if((state_val_31489 === (2))){
var inst_31484 = (state_31488[(2)]);
var inst_31485 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31486 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31485);
var state_31488__$1 = (function (){var statearr_31490 = state_31488;
(statearr_31490[(7)] = inst_31484);

return statearr_31490;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31488__$1,inst_31486);
} else {
return null;
}
}
});})(c__27251__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____0 = (function (){
var statearr_31491 = [null,null,null,null,null,null,null,null];
(statearr_31491[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__);

(statearr_31491[(1)] = (1));

return statearr_31491;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____1 = (function (state_31488){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_31488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e31492){if((e31492 instanceof Object)){
var ex__27165__auto__ = e31492;
var statearr_31493_31495 = state_31488;
(statearr_31493_31495[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31496 = state_31488;
state_31488 = G__31496;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__ = function(state_31488){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____1.call(this,state_31488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27253__auto__ = (function (){var statearr_31494 = f__27252__auto__.call(null);
(statearr_31494[(6)] = c__27251__auto__);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__,figwheel_version,temp__5457__auto__))
);

return c__27251__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31497){
var map__31498 = p__31497;
var map__31498__$1 = ((((!((map__31498 == null)))?(((((map__31498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31498):map__31498);
var file = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31500 = "";
var G__31500__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31500),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31500);
var G__31500__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31500__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31500__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31500__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31500__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31501){
var map__31502 = p__31501;
var map__31502__$1 = ((((!((map__31502 == null)))?(((((map__31502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31502):map__31502);
var ed = map__31502__$1;
var formatted_exception = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31502__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31504_31508 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31505_31509 = null;
var count__31506_31510 = (0);
var i__31507_31511 = (0);
while(true){
if((i__31507_31511 < count__31506_31510)){
var msg_31512 = cljs.core._nth.call(null,chunk__31505_31509,i__31507_31511);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31512);


var G__31513 = seq__31504_31508;
var G__31514 = chunk__31505_31509;
var G__31515 = count__31506_31510;
var G__31516 = (i__31507_31511 + (1));
seq__31504_31508 = G__31513;
chunk__31505_31509 = G__31514;
count__31506_31510 = G__31515;
i__31507_31511 = G__31516;
continue;
} else {
var temp__5457__auto___31517 = cljs.core.seq.call(null,seq__31504_31508);
if(temp__5457__auto___31517){
var seq__31504_31518__$1 = temp__5457__auto___31517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31504_31518__$1)){
var c__4319__auto___31519 = cljs.core.chunk_first.call(null,seq__31504_31518__$1);
var G__31520 = cljs.core.chunk_rest.call(null,seq__31504_31518__$1);
var G__31521 = c__4319__auto___31519;
var G__31522 = cljs.core.count.call(null,c__4319__auto___31519);
var G__31523 = (0);
seq__31504_31508 = G__31520;
chunk__31505_31509 = G__31521;
count__31506_31510 = G__31522;
i__31507_31511 = G__31523;
continue;
} else {
var msg_31524 = cljs.core.first.call(null,seq__31504_31518__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31524);


var G__31525 = cljs.core.next.call(null,seq__31504_31518__$1);
var G__31526 = null;
var G__31527 = (0);
var G__31528 = (0);
seq__31504_31508 = G__31525;
chunk__31505_31509 = G__31526;
count__31506_31510 = G__31527;
i__31507_31511 = G__31528;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31529){
var map__31530 = p__31529;
var map__31530__$1 = ((((!((map__31530 == null)))?(((((map__31530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31530):map__31530);
var w = map__31530__$1;
var message = cljs.core.get.call(null,map__31530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31532 = cljs.core.seq.call(null,plugins);
var chunk__31533 = null;
var count__31534 = (0);
var i__31535 = (0);
while(true){
if((i__31535 < count__31534)){
var vec__31536 = cljs.core._nth.call(null,chunk__31533,i__31535);
var k = cljs.core.nth.call(null,vec__31536,(0),null);
var plugin = cljs.core.nth.call(null,vec__31536,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31542 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31532,chunk__31533,count__31534,i__31535,pl_31542,vec__31536,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31542.call(null,msg_hist);
});})(seq__31532,chunk__31533,count__31534,i__31535,pl_31542,vec__31536,k,plugin))
);
} else {
}


var G__31543 = seq__31532;
var G__31544 = chunk__31533;
var G__31545 = count__31534;
var G__31546 = (i__31535 + (1));
seq__31532 = G__31543;
chunk__31533 = G__31544;
count__31534 = G__31545;
i__31535 = G__31546;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31532);
if(temp__5457__auto__){
var seq__31532__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31532__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31532__$1);
var G__31547 = cljs.core.chunk_rest.call(null,seq__31532__$1);
var G__31548 = c__4319__auto__;
var G__31549 = cljs.core.count.call(null,c__4319__auto__);
var G__31550 = (0);
seq__31532 = G__31547;
chunk__31533 = G__31548;
count__31534 = G__31549;
i__31535 = G__31550;
continue;
} else {
var vec__31539 = cljs.core.first.call(null,seq__31532__$1);
var k = cljs.core.nth.call(null,vec__31539,(0),null);
var plugin = cljs.core.nth.call(null,vec__31539,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31551 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31532,chunk__31533,count__31534,i__31535,pl_31551,vec__31539,k,plugin,seq__31532__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31551.call(null,msg_hist);
});})(seq__31532,chunk__31533,count__31534,i__31535,pl_31551,vec__31539,k,plugin,seq__31532__$1,temp__5457__auto__))
);
} else {
}


var G__31552 = cljs.core.next.call(null,seq__31532__$1);
var G__31553 = null;
var G__31554 = (0);
var G__31555 = (0);
seq__31532 = G__31552;
chunk__31533 = G__31553;
count__31534 = G__31554;
i__31535 = G__31555;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31557 = arguments.length;
switch (G__31557) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31558_31563 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31559_31564 = null;
var count__31560_31565 = (0);
var i__31561_31566 = (0);
while(true){
if((i__31561_31566 < count__31560_31565)){
var msg_31567 = cljs.core._nth.call(null,chunk__31559_31564,i__31561_31566);
figwheel.client.socket.handle_incoming_message.call(null,msg_31567);


var G__31568 = seq__31558_31563;
var G__31569 = chunk__31559_31564;
var G__31570 = count__31560_31565;
var G__31571 = (i__31561_31566 + (1));
seq__31558_31563 = G__31568;
chunk__31559_31564 = G__31569;
count__31560_31565 = G__31570;
i__31561_31566 = G__31571;
continue;
} else {
var temp__5457__auto___31572 = cljs.core.seq.call(null,seq__31558_31563);
if(temp__5457__auto___31572){
var seq__31558_31573__$1 = temp__5457__auto___31572;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31558_31573__$1)){
var c__4319__auto___31574 = cljs.core.chunk_first.call(null,seq__31558_31573__$1);
var G__31575 = cljs.core.chunk_rest.call(null,seq__31558_31573__$1);
var G__31576 = c__4319__auto___31574;
var G__31577 = cljs.core.count.call(null,c__4319__auto___31574);
var G__31578 = (0);
seq__31558_31563 = G__31575;
chunk__31559_31564 = G__31576;
count__31560_31565 = G__31577;
i__31561_31566 = G__31578;
continue;
} else {
var msg_31579 = cljs.core.first.call(null,seq__31558_31573__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31579);


var G__31580 = cljs.core.next.call(null,seq__31558_31573__$1);
var G__31581 = null;
var G__31582 = (0);
var G__31583 = (0);
seq__31558_31563 = G__31580;
chunk__31559_31564 = G__31581;
count__31560_31565 = G__31582;
i__31561_31566 = G__31583;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31588 = arguments.length;
var i__4500__auto___31589 = (0);
while(true){
if((i__4500__auto___31589 < len__4499__auto___31588)){
args__4502__auto__.push((arguments[i__4500__auto___31589]));

var G__31590 = (i__4500__auto___31589 + (1));
i__4500__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31585){
var map__31586 = p__31585;
var map__31586__$1 = ((((!((map__31586 == null)))?(((((map__31586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);
var opts = map__31586__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31584){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31584));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31591){if((e31591 instanceof Error)){
var e = e31591;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31591;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31592){
var map__31593 = p__31592;
var map__31593__$1 = ((((!((map__31593 == null)))?(((((map__31593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31593):map__31593);
var msg_name = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1542912639172
