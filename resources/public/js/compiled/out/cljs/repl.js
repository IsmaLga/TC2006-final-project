// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30823){
var map__30824 = p__30823;
var map__30824__$1 = ((((!((map__30824 == null)))?(((((map__30824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30824):map__30824);
var m = map__30824__$1;
var n = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30826_30848 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30827_30849 = null;
var count__30828_30850 = (0);
var i__30829_30851 = (0);
while(true){
if((i__30829_30851 < count__30828_30850)){
var f_30852 = cljs.core._nth.call(null,chunk__30827_30849,i__30829_30851);
cljs.core.println.call(null,"  ",f_30852);


var G__30853 = seq__30826_30848;
var G__30854 = chunk__30827_30849;
var G__30855 = count__30828_30850;
var G__30856 = (i__30829_30851 + (1));
seq__30826_30848 = G__30853;
chunk__30827_30849 = G__30854;
count__30828_30850 = G__30855;
i__30829_30851 = G__30856;
continue;
} else {
var temp__5457__auto___30857 = cljs.core.seq.call(null,seq__30826_30848);
if(temp__5457__auto___30857){
var seq__30826_30858__$1 = temp__5457__auto___30857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30826_30858__$1)){
var c__4319__auto___30859 = cljs.core.chunk_first.call(null,seq__30826_30858__$1);
var G__30860 = cljs.core.chunk_rest.call(null,seq__30826_30858__$1);
var G__30861 = c__4319__auto___30859;
var G__30862 = cljs.core.count.call(null,c__4319__auto___30859);
var G__30863 = (0);
seq__30826_30848 = G__30860;
chunk__30827_30849 = G__30861;
count__30828_30850 = G__30862;
i__30829_30851 = G__30863;
continue;
} else {
var f_30864 = cljs.core.first.call(null,seq__30826_30858__$1);
cljs.core.println.call(null,"  ",f_30864);


var G__30865 = cljs.core.next.call(null,seq__30826_30858__$1);
var G__30866 = null;
var G__30867 = (0);
var G__30868 = (0);
seq__30826_30848 = G__30865;
chunk__30827_30849 = G__30866;
count__30828_30850 = G__30867;
i__30829_30851 = G__30868;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30869 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30869);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30869)))?cljs.core.second.call(null,arglists_30869):arglists_30869));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30830_30870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30831_30871 = null;
var count__30832_30872 = (0);
var i__30833_30873 = (0);
while(true){
if((i__30833_30873 < count__30832_30872)){
var vec__30834_30874 = cljs.core._nth.call(null,chunk__30831_30871,i__30833_30873);
var name_30875 = cljs.core.nth.call(null,vec__30834_30874,(0),null);
var map__30837_30876 = cljs.core.nth.call(null,vec__30834_30874,(1),null);
var map__30837_30877__$1 = ((((!((map__30837_30876 == null)))?(((((map__30837_30876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30837_30876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30837_30876):map__30837_30876);
var doc_30878 = cljs.core.get.call(null,map__30837_30877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30879 = cljs.core.get.call(null,map__30837_30877__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30875);

cljs.core.println.call(null," ",arglists_30879);

if(cljs.core.truth_(doc_30878)){
cljs.core.println.call(null," ",doc_30878);
} else {
}


var G__30880 = seq__30830_30870;
var G__30881 = chunk__30831_30871;
var G__30882 = count__30832_30872;
var G__30883 = (i__30833_30873 + (1));
seq__30830_30870 = G__30880;
chunk__30831_30871 = G__30881;
count__30832_30872 = G__30882;
i__30833_30873 = G__30883;
continue;
} else {
var temp__5457__auto___30884 = cljs.core.seq.call(null,seq__30830_30870);
if(temp__5457__auto___30884){
var seq__30830_30885__$1 = temp__5457__auto___30884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30830_30885__$1)){
var c__4319__auto___30886 = cljs.core.chunk_first.call(null,seq__30830_30885__$1);
var G__30887 = cljs.core.chunk_rest.call(null,seq__30830_30885__$1);
var G__30888 = c__4319__auto___30886;
var G__30889 = cljs.core.count.call(null,c__4319__auto___30886);
var G__30890 = (0);
seq__30830_30870 = G__30887;
chunk__30831_30871 = G__30888;
count__30832_30872 = G__30889;
i__30833_30873 = G__30890;
continue;
} else {
var vec__30839_30891 = cljs.core.first.call(null,seq__30830_30885__$1);
var name_30892 = cljs.core.nth.call(null,vec__30839_30891,(0),null);
var map__30842_30893 = cljs.core.nth.call(null,vec__30839_30891,(1),null);
var map__30842_30894__$1 = ((((!((map__30842_30893 == null)))?(((((map__30842_30893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30842_30893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30842_30893):map__30842_30893);
var doc_30895 = cljs.core.get.call(null,map__30842_30894__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30896 = cljs.core.get.call(null,map__30842_30894__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30892);

cljs.core.println.call(null," ",arglists_30896);

if(cljs.core.truth_(doc_30895)){
cljs.core.println.call(null," ",doc_30895);
} else {
}


var G__30897 = cljs.core.next.call(null,seq__30830_30885__$1);
var G__30898 = null;
var G__30899 = (0);
var G__30900 = (0);
seq__30830_30870 = G__30897;
chunk__30831_30871 = G__30898;
count__30832_30872 = G__30899;
i__30833_30873 = G__30900;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30844 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30845 = null;
var count__30846 = (0);
var i__30847 = (0);
while(true){
if((i__30847 < count__30846)){
var role = cljs.core._nth.call(null,chunk__30845,i__30847);
var temp__5457__auto___30901__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30901__$1)){
var spec_30902 = temp__5457__auto___30901__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30902));
} else {
}


var G__30903 = seq__30844;
var G__30904 = chunk__30845;
var G__30905 = count__30846;
var G__30906 = (i__30847 + (1));
seq__30844 = G__30903;
chunk__30845 = G__30904;
count__30846 = G__30905;
i__30847 = G__30906;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30844);
if(temp__5457__auto____$1){
var seq__30844__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30844__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30844__$1);
var G__30907 = cljs.core.chunk_rest.call(null,seq__30844__$1);
var G__30908 = c__4319__auto__;
var G__30909 = cljs.core.count.call(null,c__4319__auto__);
var G__30910 = (0);
seq__30844 = G__30907;
chunk__30845 = G__30908;
count__30846 = G__30909;
i__30847 = G__30910;
continue;
} else {
var role = cljs.core.first.call(null,seq__30844__$1);
var temp__5457__auto___30911__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30911__$2)){
var spec_30912 = temp__5457__auto___30911__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30912));
} else {
}


var G__30913 = cljs.core.next.call(null,seq__30844__$1);
var G__30914 = null;
var G__30915 = (0);
var G__30916 = (0);
seq__30844 = G__30913;
chunk__30845 = G__30914;
count__30846 = G__30915;
i__30847 = G__30916;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1542912638440
