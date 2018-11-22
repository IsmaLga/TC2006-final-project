// Compiled by ClojureScript 1.10.238 {}
goog.provide('tictactoe.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
tictactoe.core.new_board = (function tictactoe$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,"V"))));
});
if(typeof tictactoe.core.app_state !== 'undefined'){
} else {
tictactoe.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Clojure Tic Tac Toe",new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.core.new_board.call(null,(3)),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630)], null));
}
tictactoe.core.computer_move = (function tictactoe$core$computer_move(board){
var remaining_spots = (function (){var iter__4292__auto__ = (function tictactoe$core$computer_move_$_iter__37505(s__37506){
return (new cljs.core.LazySeq(null,(function (){
var s__37506__$1 = s__37506;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37506__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__37506__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function tictactoe$core$computer_move_$_iter__37505_$_iter__37507(s__37508){
return (new cljs.core.LazySeq(null,((function (s__37506__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__37508__$1 = s__37508;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__37508__$1);
if(temp__5457__auto____$1){
var s__37508__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37508__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37508__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37510 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37509 = (0);
while(true){
if((i__37509 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__37509);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"V")){
cljs.core.chunk_append.call(null,b__37510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null));

var G__37511 = (i__37509 + (1));
i__37509 = G__37511;
continue;
} else {
var G__37512 = (i__37509 + (1));
i__37509 = G__37512;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37510),tictactoe$core$computer_move_$_iter__37505_$_iter__37507.call(null,cljs.core.chunk_rest.call(null,s__37508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37510),null);
}
} else {
var j = cljs.core.first.call(null,s__37508__$2);
if(cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null)),"V")){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,i], null),tictactoe$core$computer_move_$_iter__37505_$_iter__37507.call(null,cljs.core.rest.call(null,s__37508__$2)));
} else {
var G__37513 = cljs.core.rest.call(null,s__37508__$2);
s__37508__$1 = G__37513;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__37506__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__37506__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,tictactoe$core$computer_move_$_iter__37505.call(null,cljs.core.rest.call(null,s__37506__$1)));
} else {
var G__37514 = cljs.core.rest.call(null,s__37506__$1);
s__37506__$1 = G__37514;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var move = ((cljs.core.seq.call(null,remaining_spots))?cljs.core.rand_nth.call(null,remaining_spots):null);
if(cljs.core.truth_(move)){
return cljs.core.assoc_in.call(null,board,move,"C");
} else {
return board;
}
});
tictactoe.core.straight = (function tictactoe$core$straight(owner,board,p__37515,p__37516,n){
var vec__37517 = p__37515;
var x = cljs.core.nth.call(null,vec__37517,(0),null);
var y = cljs.core.nth.call(null,vec__37517,(1),null);
var vec__37520 = p__37516;
var dx = cljs.core.nth.call(null,vec__37520,(0),null);
var dy = cljs.core.nth.call(null,vec__37520,(1),null);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,(function (){var iter__4292__auto__ = ((function (vec__37517,x,y,vec__37520,dx,dy){
return (function tictactoe$core$straight_$_iter__37523(s__37524){
return (new cljs.core.LazySeq(null,((function (vec__37517,x,y,vec__37520,dx,dy){
return (function (){
var s__37524__$1 = s__37524;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37524__$1);
if(temp__5457__auto__){
var s__37524__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37524__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37524__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37526 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37525 = (0);
while(true){
if((i__37525 < size__4291__auto__)){
var i = cljs.core._nth.call(null,c__4290__auto__,i__37525);
cljs.core.chunk_append.call(null,b__37526,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner));

var G__37527 = (i__37525 + (1));
i__37525 = G__37527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37526),tictactoe$core$straight_$_iter__37523.call(null,cljs.core.chunk_rest.call(null,s__37524__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37526),null);
}
} else {
var i = cljs.core.first.call(null,s__37524__$2);
return cljs.core.cons.call(null,cljs.core._EQ_.call(null,cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((dx * i) + x),((dy * i) + y)], null)),owner),tictactoe$core$straight_$_iter__37523.call(null,cljs.core.rest.call(null,s__37524__$2)));
}
} else {
return null;
}
break;
}
});})(vec__37517,x,y,vec__37520,dx,dy))
,null,null));
});})(vec__37517,x,y,vec__37520,dx,dy))
;
return iter__4292__auto__.call(null,cljs.core.range.call(null,n));
})());
});
tictactoe.core.win_QMARK_ = (function tictactoe$core$win_QMARK_(owner,board,n){
return cljs.core.some.call(null,cljs.core.true_QMARK_,(function (){var iter__4292__auto__ = (function tictactoe$core$win_QMARK__$_iter__37528(s__37529){
return (new cljs.core.LazySeq(null,(function (){
var s__37529__$1 = s__37529;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37529__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__37529__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function tictactoe$core$win_QMARK__$_iter__37528_$_iter__37530(s__37531){
return (new cljs.core.LazySeq(null,((function (s__37529__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__37531__$1 = s__37531;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__37531__$1);
if(temp__5457__auto____$1){
var xs__6012__auto____$1 = temp__5457__auto____$1;
var j = cljs.core.first.call(null,xs__6012__auto____$1);
var iterys__4288__auto__ = ((function (s__37531__$1,s__37529__$1,j,xs__6012__auto____$1,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__){
return (function tictactoe$core$win_QMARK__$_iter__37528_$_iter__37530_$_iter__37532(s__37533){
return (new cljs.core.LazySeq(null,((function (s__37531__$1,s__37529__$1,j,xs__6012__auto____$1,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__37533__$1 = s__37533;
while(true){
var temp__5457__auto____$2 = cljs.core.seq.call(null,s__37533__$1);
if(temp__5457__auto____$2){
var s__37533__$2 = temp__5457__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37533__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37533__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37535 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37534 = (0);
while(true){
if((i__37534 < size__4291__auto__)){
var dir = cljs.core._nth.call(null,c__4290__auto__,i__37534);
cljs.core.chunk_append.call(null,b__37535,tictactoe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n));

var G__37536 = (i__37534 + (1));
i__37534 = G__37536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37535),tictactoe$core$win_QMARK__$_iter__37528_$_iter__37530_$_iter__37532.call(null,cljs.core.chunk_rest.call(null,s__37533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37535),null);
}
} else {
var dir = cljs.core.first.call(null,s__37533__$2);
return cljs.core.cons.call(null,tictactoe.core.straight.call(null,owner,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),dir,n),tictactoe$core$win_QMARK__$_iter__37528_$_iter__37530_$_iter__37532.call(null,cljs.core.rest.call(null,s__37533__$2)));
}
} else {
return null;
}
break;
}
});})(s__37531__$1,s__37529__$1,j,xs__6012__auto____$1,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__37531__$1,s__37529__$1,j,xs__6012__auto____$1,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null)));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,tictactoe$core$win_QMARK__$_iter__37528_$_iter__37530.call(null,cljs.core.rest.call(null,s__37531__$1)));
} else {
var G__37537 = cljs.core.rest.call(null,s__37531__$1);
s__37531__$1 = G__37537;
continue;
}
} else {
return null;
}
break;
}
});})(s__37529__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__37529__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,tictactoe$core$win_QMARK__$_iter__37528.call(null,cljs.core.rest.call(null,s__37529__$1)));
} else {
var G__37538 = cljs.core.rest.call(null,s__37529__$1);
s__37529__$1 = G__37538;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})());
});
tictactoe.core.full_QMARK_ = (function tictactoe$core$full_QMARK_(board){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["C",null,"P",null], null), null),cljs.core.apply.call(null,cljs.core.concat,board));
});
tictactoe.core.game_status = (function tictactoe$core$game_status(board){
if(cljs.core.truth_(tictactoe.core.win_QMARK_.call(null,"P",board,(3)))){
return new cljs.core.Keyword(null,"player-victory","player-victory",-796755525);
} else {
if(cljs.core.truth_(tictactoe.core.win_QMARK_.call(null,"C",board,(3)))){
return new cljs.core.Keyword(null,"computer-victory","computer-victory",-920274681);
} else {
if(cljs.core.truth_(tictactoe.core.full_QMARK_.call(null,board))){
return new cljs.core.Keyword(null,"draw","draw",1358331674);
} else {
return new cljs.core.Keyword(null,"in-progress","in-progress",2126442630);

}
}
}
});
tictactoe.core.update_status = (function tictactoe$core$update_status(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"game-status","game-status",1777284612),tictactoe.core.game_status.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)));
});
tictactoe.core.check_game_status = (function tictactoe$core$check_game_status(state){
return tictactoe.core.update_status.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null),tictactoe.core.computer_move));
});
tictactoe.core.blank = (function tictactoe$core$blank(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),0.9,new cljs.core.Keyword(null,"height","height",1025178622),0.9,new cljs.core.Keyword(null,"fill","fill",883462889),"brown",new cljs.core.Keyword(null,"x","x",2099068185),(0.05 + i),new cljs.core.Keyword(null,"y","y",-1757859776),(0.05 + j),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tictactoe$core$blank_$_blank_click(e){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state)),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630))){
cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null),"P");

if(cljs.core.truth_(tictactoe.core.win_QMARK_.call(null,"P",new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state)),(3)))){
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"player-victory","player-victory",-796755525));
} else {
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,tictactoe.core.check_game_status);
}
} else {
return null;
}
})], null)], null);
});
tictactoe.core.circle = (function tictactoe$core$circle(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"r","r",-471384190),0.35,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"blue",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.09,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"cx","cx",1272694324),(0.5 + i),new cljs.core.Keyword(null,"cy","cy",755331060),(0.5 + j)], null)], null);
});
tictactoe.core.cross = (function tictactoe$core$cross(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"darkred",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.4,new cljs.core.Keyword(null,"transform","transform",1381301764),["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + i)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.5 + j)),") ","scale(0.3)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(-1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(1),new cljs.core.Keyword(null,"y1","y1",589123466),(-1),new cljs.core.Keyword(null,"x2","x2",-1362513475),(-1),new cljs.core.Keyword(null,"y2","y2",-718691301),(1)], null)], null)], null);
});
tictactoe.core.tictactoe = (function tictactoe$core$tictactoe(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),(function (){var G__37539 = new cljs.core.Keyword(null,"game-status","game-status",1777284612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state));
var G__37539__$1 = (((G__37539 instanceof cljs.core.Keyword))?G__37539.fqn:null);
switch (G__37539__$1) {
case "player-victory":
return "It's a win.";

break;
case "computer-victory":
return "You lose.";

break;
case "draw":
return "Draw. ";

break;
default:
return "";

}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function tictactoe$core$tictactoe_$_new_game_click(e){
return cljs.core.swap_BANG_.call(null,tictactoe.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",-1907017633),tictactoe.core.new_board.call(null,(3)),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
})], null),"Play again."], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((3))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((3))].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500)], null)], null),(function (){var iter__4292__auto__ = (function tictactoe$core$tictactoe_$_iter__37540(s__37541){
return (new cljs.core.LazySeq(null,(function (){
var s__37541__$1 = s__37541;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37541__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4288__auto__ = ((function (s__37541__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function tictactoe$core$tictactoe_$_iter__37540_$_iter__37542(s__37543){
return (new cljs.core.LazySeq(null,((function (s__37541__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__37543__$1 = s__37543;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__37543__$1);
if(temp__5457__auto____$1){
var s__37543__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37543__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__37543__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__37545 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__37544 = (0);
while(true){
if((i__37544 < size__4291__auto__)){
var j = cljs.core._nth.call(null,c__4290__auto__,i__37544);
cljs.core.chunk_append.call(null,b__37545,(function (){var G__37546 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
switch (G__37546) {
case "V":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.cross,i,j], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37546)].join('')));

}
})());

var G__37550 = (i__37544 + (1));
i__37544 = G__37550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37545),tictactoe$core$tictactoe_$_iter__37540_$_iter__37542.call(null,cljs.core.chunk_rest.call(null,s__37543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37545),null);
}
} else {
var j = cljs.core.first.call(null,s__37543__$2);
return cljs.core.cons.call(null,(function (){var G__37547 = cljs.core.get_in.call(null,cljs.core.deref.call(null,tictactoe.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
switch (G__37547) {
case "V":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.blank,i,j], null);

break;
case "P":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.circle,i,j], null);

break;
case "C":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.cross,i,j], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37547)].join('')));

}
})(),tictactoe$core$tictactoe_$_iter__37540_$_iter__37542.call(null,cljs.core.rest.call(null,s__37543__$2)));
}
} else {
return null;
}
break;
}
});})(s__37541__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__37541__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,cljs.core.range.call(null,(3))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,tictactoe$core$tictactoe_$_iter__37540.call(null,cljs.core.rest.call(null,s__37541__$1)));
} else {
var G__37552 = cljs.core.rest.call(null,s__37541__$1);
s__37541__$1 = G__37552;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.range.call(null,(3)));
})())], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.core.tictactoe], null),document.getElementById("app"));
tictactoe.core.on_js_reload = (function tictactoe$core$on_js_reload(){
return cljs.core.prn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tictactoe.core.app_state)));
});

//# sourceMappingURL=core.js.map?rel=1542920441153
