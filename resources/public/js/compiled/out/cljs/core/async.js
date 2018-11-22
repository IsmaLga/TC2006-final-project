// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27311 = arguments.length;
switch (G__27311) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27312 = (function (f,blockable,meta27313){
this.f = f;
this.blockable = blockable;
this.meta27313 = meta27313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27314,meta27313__$1){
var self__ = this;
var _27314__$1 = this;
return (new cljs.core.async.t_cljs$core$async27312(self__.f,self__.blockable,meta27313__$1));
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27314){
var self__ = this;
var _27314__$1 = this;
return self__.meta27313;
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27312.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27313","meta27313",1379960073,null)], null);
});

cljs.core.async.t_cljs$core$async27312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27312";

cljs.core.async.t_cljs$core$async27312.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27312");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27312.
 */
cljs.core.async.__GT_t_cljs$core$async27312 = (function cljs$core$async$__GT_t_cljs$core$async27312(f__$1,blockable__$1,meta27313){
return (new cljs.core.async.t_cljs$core$async27312(f__$1,blockable__$1,meta27313));
});

}

return (new cljs.core.async.t_cljs$core$async27312(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27318 = arguments.length;
switch (G__27318) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27321 = arguments.length;
switch (G__27321) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27324 = arguments.length;
switch (G__27324) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27326 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27326);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27326,ret){
return (function (){
return fn1.call(null,val_27326);
});})(val_27326,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27328 = arguments.length;
switch (G__27328) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27330 = n;
var x_27331 = (0);
while(true){
if((x_27331 < n__4376__auto___27330)){
(a[x_27331] = (0));

var G__27332 = (x_27331 + (1));
x_27331 = G__27332;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27333 = (i + (1));
i = G__27333;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27334 = (function (flag,meta27335){
this.flag = flag;
this.meta27335 = meta27335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27336,meta27335__$1){
var self__ = this;
var _27336__$1 = this;
return (new cljs.core.async.t_cljs$core$async27334(self__.flag,meta27335__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27336){
var self__ = this;
var _27336__$1 = this;
return self__.meta27335;
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27335","meta27335",-264573639,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27334";

cljs.core.async.t_cljs$core$async27334.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27334");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27334.
 */
cljs.core.async.__GT_t_cljs$core$async27334 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27334(flag__$1,meta27335){
return (new cljs.core.async.t_cljs$core$async27334(flag__$1,meta27335));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27334(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27337 = (function (flag,cb,meta27338){
this.flag = flag;
this.cb = cb;
this.meta27338 = meta27338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27339,meta27338__$1){
var self__ = this;
var _27339__$1 = this;
return (new cljs.core.async.t_cljs$core$async27337(self__.flag,self__.cb,meta27338__$1));
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27339){
var self__ = this;
var _27339__$1 = this;
return self__.meta27338;
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27338","meta27338",1548434970,null)], null);
});

cljs.core.async.t_cljs$core$async27337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27337";

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27337");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27337.
 */
cljs.core.async.__GT_t_cljs$core$async27337 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27337(flag__$1,cb__$1,meta27338){
return (new cljs.core.async.t_cljs$core$async27337(flag__$1,cb__$1,meta27338));
});

}

return (new cljs.core.async.t_cljs$core$async27337(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27340_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27340_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27341_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27341_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27342 = (i + (1));
i = G__27342;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27348 = arguments.length;
var i__4500__auto___27349 = (0);
while(true){
if((i__4500__auto___27349 < len__4499__auto___27348)){
args__4502__auto__.push((arguments[i__4500__auto___27349]));

var G__27350 = (i__4500__auto___27349 + (1));
i__4500__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27345){
var map__27346 = p__27345;
var map__27346__$1 = ((((!((map__27346 == null)))?(((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var opts = map__27346__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27343){
var G__27344 = cljs.core.first.call(null,seq27343);
var seq27343__$1 = cljs.core.next.call(null,seq27343);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27344,seq27343__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27352 = arguments.length;
switch (G__27352) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27251__auto___27398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___27398){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___27398){
return (function (state_27376){
var state_val_27377 = (state_27376[(1)]);
if((state_val_27377 === (7))){
var inst_27372 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27378_27399 = state_27376__$1;
(statearr_27378_27399[(2)] = inst_27372);

(statearr_27378_27399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (1))){
var state_27376__$1 = state_27376;
var statearr_27379_27400 = state_27376__$1;
(statearr_27379_27400[(2)] = null);

(statearr_27379_27400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (4))){
var inst_27355 = (state_27376[(7)]);
var inst_27355__$1 = (state_27376[(2)]);
var inst_27356 = (inst_27355__$1 == null);
var state_27376__$1 = (function (){var statearr_27380 = state_27376;
(statearr_27380[(7)] = inst_27355__$1);

return statearr_27380;
})();
if(cljs.core.truth_(inst_27356)){
var statearr_27381_27401 = state_27376__$1;
(statearr_27381_27401[(1)] = (5));

} else {
var statearr_27382_27402 = state_27376__$1;
(statearr_27382_27402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (13))){
var state_27376__$1 = state_27376;
var statearr_27383_27403 = state_27376__$1;
(statearr_27383_27403[(2)] = null);

(statearr_27383_27403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (6))){
var inst_27355 = (state_27376[(7)]);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27376__$1,(11),to,inst_27355);
} else {
if((state_val_27377 === (3))){
var inst_27374 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27376__$1,inst_27374);
} else {
if((state_val_27377 === (12))){
var state_27376__$1 = state_27376;
var statearr_27384_27404 = state_27376__$1;
(statearr_27384_27404[(2)] = null);

(statearr_27384_27404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (2))){
var state_27376__$1 = state_27376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27376__$1,(4),from);
} else {
if((state_val_27377 === (11))){
var inst_27365 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
if(cljs.core.truth_(inst_27365)){
var statearr_27385_27405 = state_27376__$1;
(statearr_27385_27405[(1)] = (12));

} else {
var statearr_27386_27406 = state_27376__$1;
(statearr_27386_27406[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (9))){
var state_27376__$1 = state_27376;
var statearr_27387_27407 = state_27376__$1;
(statearr_27387_27407[(2)] = null);

(statearr_27387_27407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (5))){
var state_27376__$1 = state_27376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27388_27408 = state_27376__$1;
(statearr_27388_27408[(1)] = (8));

} else {
var statearr_27389_27409 = state_27376__$1;
(statearr_27389_27409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (14))){
var inst_27370 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27390_27410 = state_27376__$1;
(statearr_27390_27410[(2)] = inst_27370);

(statearr_27390_27410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (10))){
var inst_27362 = (state_27376[(2)]);
var state_27376__$1 = state_27376;
var statearr_27391_27411 = state_27376__$1;
(statearr_27391_27411[(2)] = inst_27362);

(statearr_27391_27411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27377 === (8))){
var inst_27359 = cljs.core.async.close_BANG_.call(null,to);
var state_27376__$1 = state_27376;
var statearr_27392_27412 = state_27376__$1;
(statearr_27392_27412[(2)] = inst_27359);

(statearr_27392_27412[(1)] = (10));


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
});})(c__27251__auto___27398))
;
return ((function (switch__27161__auto__,c__27251__auto___27398){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_27376){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__27165__auto__ = e27394;
var statearr_27395_27413 = state_27376;
(statearr_27395_27413[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27414 = state_27376;
state_27376 = G__27414;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_27376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_27376);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___27398))
})();
var state__27253__auto__ = (function (){var statearr_27396 = f__27252__auto__.call(null);
(statearr_27396[(6)] = c__27251__auto___27398);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___27398))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27415){
var vec__27416 = p__27415;
var v = cljs.core.nth.call(null,vec__27416,(0),null);
var p = cljs.core.nth.call(null,vec__27416,(1),null);
var job = vec__27416;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27251__auto___27587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results){
return (function (state_27423){
var state_val_27424 = (state_27423[(1)]);
if((state_val_27424 === (1))){
var state_27423__$1 = state_27423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27423__$1,(2),res,v);
} else {
if((state_val_27424 === (2))){
var inst_27420 = (state_27423[(2)]);
var inst_27421 = cljs.core.async.close_BANG_.call(null,res);
var state_27423__$1 = (function (){var statearr_27425 = state_27423;
(statearr_27425[(7)] = inst_27420);

return statearr_27425;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27423__$1,inst_27421);
} else {
return null;
}
}
});})(c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results))
;
return ((function (switch__27161__auto__,c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_27426 = [null,null,null,null,null,null,null,null];
(statearr_27426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__);

(statearr_27426[(1)] = (1));

return statearr_27426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1 = (function (state_27423){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27427){if((e27427 instanceof Object)){
var ex__27165__auto__ = e27427;
var statearr_27428_27588 = state_27423;
(statearr_27428_27588[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27589 = state_27423;
state_27423 = G__27589;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = function(state_27423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1.call(this,state_27423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results))
})();
var state__27253__auto__ = (function (){var statearr_27429 = f__27252__auto__.call(null);
(statearr_27429[(6)] = c__27251__auto___27587);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___27587,res,vec__27416,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27430){
var vec__27431 = p__27430;
var v = cljs.core.nth.call(null,vec__27431,(0),null);
var p = cljs.core.nth.call(null,vec__27431,(1),null);
var job = vec__27431;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27590 = n;
var __27591 = (0);
while(true){
if((__27591 < n__4376__auto___27590)){
var G__27434_27592 = type;
var G__27434_27593__$1 = (((G__27434_27592 instanceof cljs.core.Keyword))?G__27434_27592.fqn:null);
switch (G__27434_27593__$1) {
case "compute":
var c__27251__auto___27595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27591,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (__27591,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function (state_27447){
var state_val_27448 = (state_27447[(1)]);
if((state_val_27448 === (1))){
var state_27447__$1 = state_27447;
var statearr_27449_27596 = state_27447__$1;
(statearr_27449_27596[(2)] = null);

(statearr_27449_27596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27448 === (2))){
var state_27447__$1 = state_27447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27447__$1,(4),jobs);
} else {
if((state_val_27448 === (3))){
var inst_27445 = (state_27447[(2)]);
var state_27447__$1 = state_27447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27447__$1,inst_27445);
} else {
if((state_val_27448 === (4))){
var inst_27437 = (state_27447[(2)]);
var inst_27438 = process.call(null,inst_27437);
var state_27447__$1 = state_27447;
if(cljs.core.truth_(inst_27438)){
var statearr_27450_27597 = state_27447__$1;
(statearr_27450_27597[(1)] = (5));

} else {
var statearr_27451_27598 = state_27447__$1;
(statearr_27451_27598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27448 === (5))){
var state_27447__$1 = state_27447;
var statearr_27452_27599 = state_27447__$1;
(statearr_27452_27599[(2)] = null);

(statearr_27452_27599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27448 === (6))){
var state_27447__$1 = state_27447;
var statearr_27453_27600 = state_27447__$1;
(statearr_27453_27600[(2)] = null);

(statearr_27453_27600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27448 === (7))){
var inst_27443 = (state_27447[(2)]);
var state_27447__$1 = state_27447;
var statearr_27454_27601 = state_27447__$1;
(statearr_27454_27601[(2)] = inst_27443);

(statearr_27454_27601[(1)] = (3));


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
});})(__27591,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
;
return ((function (__27591,switch__27161__auto__,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_27455 = [null,null,null,null,null,null,null];
(statearr_27455[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__);

(statearr_27455[(1)] = (1));

return statearr_27455;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1 = (function (state_27447){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27456){if((e27456 instanceof Object)){
var ex__27165__auto__ = e27456;
var statearr_27457_27602 = state_27447;
(statearr_27457_27602[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27603 = state_27447;
state_27447 = G__27603;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = function(state_27447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1.call(this,state_27447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__;
})()
;})(__27591,switch__27161__auto__,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
})();
var state__27253__auto__ = (function (){var statearr_27458 = f__27252__auto__.call(null);
(statearr_27458[(6)] = c__27251__auto___27595);

return statearr_27458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(__27591,c__27251__auto___27595,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
);


break;
case "async":
var c__27251__auto___27604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27591,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (__27591,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function (state_27471){
var state_val_27472 = (state_27471[(1)]);
if((state_val_27472 === (1))){
var state_27471__$1 = state_27471;
var statearr_27473_27605 = state_27471__$1;
(statearr_27473_27605[(2)] = null);

(statearr_27473_27605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (2))){
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27471__$1,(4),jobs);
} else {
if((state_val_27472 === (3))){
var inst_27469 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27471__$1,inst_27469);
} else {
if((state_val_27472 === (4))){
var inst_27461 = (state_27471[(2)]);
var inst_27462 = async.call(null,inst_27461);
var state_27471__$1 = state_27471;
if(cljs.core.truth_(inst_27462)){
var statearr_27474_27606 = state_27471__$1;
(statearr_27474_27606[(1)] = (5));

} else {
var statearr_27475_27607 = state_27471__$1;
(statearr_27475_27607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (5))){
var state_27471__$1 = state_27471;
var statearr_27476_27608 = state_27471__$1;
(statearr_27476_27608[(2)] = null);

(statearr_27476_27608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (6))){
var state_27471__$1 = state_27471;
var statearr_27477_27609 = state_27471__$1;
(statearr_27477_27609[(2)] = null);

(statearr_27477_27609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27472 === (7))){
var inst_27467 = (state_27471[(2)]);
var state_27471__$1 = state_27471;
var statearr_27478_27610 = state_27471__$1;
(statearr_27478_27610[(2)] = inst_27467);

(statearr_27478_27610[(1)] = (3));


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
});})(__27591,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
;
return ((function (__27591,switch__27161__auto__,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_27479 = [null,null,null,null,null,null,null];
(statearr_27479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__);

(statearr_27479[(1)] = (1));

return statearr_27479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1 = (function (state_27471){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27480){if((e27480 instanceof Object)){
var ex__27165__auto__ = e27480;
var statearr_27481_27611 = state_27471;
(statearr_27481_27611[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27612 = state_27471;
state_27471 = G__27612;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = function(state_27471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1.call(this,state_27471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__;
})()
;})(__27591,switch__27161__auto__,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
})();
var state__27253__auto__ = (function (){var statearr_27482 = f__27252__auto__.call(null);
(statearr_27482[(6)] = c__27251__auto___27604);

return statearr_27482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(__27591,c__27251__auto___27604,G__27434_27592,G__27434_27593__$1,n__4376__auto___27590,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27434_27593__$1)].join('')));

}

var G__27613 = (__27591 + (1));
__27591 = G__27613;
continue;
} else {
}
break;
}

var c__27251__auto___27614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___27614,jobs,results,process,async){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___27614,jobs,results,process,async){
return (function (state_27504){
var state_val_27505 = (state_27504[(1)]);
if((state_val_27505 === (1))){
var state_27504__$1 = state_27504;
var statearr_27506_27615 = state_27504__$1;
(statearr_27506_27615[(2)] = null);

(statearr_27506_27615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27505 === (2))){
var state_27504__$1 = state_27504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27504__$1,(4),from);
} else {
if((state_val_27505 === (3))){
var inst_27502 = (state_27504[(2)]);
var state_27504__$1 = state_27504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27504__$1,inst_27502);
} else {
if((state_val_27505 === (4))){
var inst_27485 = (state_27504[(7)]);
var inst_27485__$1 = (state_27504[(2)]);
var inst_27486 = (inst_27485__$1 == null);
var state_27504__$1 = (function (){var statearr_27507 = state_27504;
(statearr_27507[(7)] = inst_27485__$1);

return statearr_27507;
})();
if(cljs.core.truth_(inst_27486)){
var statearr_27508_27616 = state_27504__$1;
(statearr_27508_27616[(1)] = (5));

} else {
var statearr_27509_27617 = state_27504__$1;
(statearr_27509_27617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27505 === (5))){
var inst_27488 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27504__$1 = state_27504;
var statearr_27510_27618 = state_27504__$1;
(statearr_27510_27618[(2)] = inst_27488);

(statearr_27510_27618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27505 === (6))){
var inst_27485 = (state_27504[(7)]);
var inst_27490 = (state_27504[(8)]);
var inst_27490__$1 = cljs.core.async.chan.call(null,(1));
var inst_27491 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27492 = [inst_27485,inst_27490__$1];
var inst_27493 = (new cljs.core.PersistentVector(null,2,(5),inst_27491,inst_27492,null));
var state_27504__$1 = (function (){var statearr_27511 = state_27504;
(statearr_27511[(8)] = inst_27490__$1);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27504__$1,(8),jobs,inst_27493);
} else {
if((state_val_27505 === (7))){
var inst_27500 = (state_27504[(2)]);
var state_27504__$1 = state_27504;
var statearr_27512_27619 = state_27504__$1;
(statearr_27512_27619[(2)] = inst_27500);

(statearr_27512_27619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27505 === (8))){
var inst_27490 = (state_27504[(8)]);
var inst_27495 = (state_27504[(2)]);
var state_27504__$1 = (function (){var statearr_27513 = state_27504;
(statearr_27513[(9)] = inst_27495);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27504__$1,(9),results,inst_27490);
} else {
if((state_val_27505 === (9))){
var inst_27497 = (state_27504[(2)]);
var state_27504__$1 = (function (){var statearr_27514 = state_27504;
(statearr_27514[(10)] = inst_27497);

return statearr_27514;
})();
var statearr_27515_27620 = state_27504__$1;
(statearr_27515_27620[(2)] = null);

(statearr_27515_27620[(1)] = (2));


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
});})(c__27251__auto___27614,jobs,results,process,async))
;
return ((function (switch__27161__auto__,c__27251__auto___27614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_27516 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27516[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__);

(statearr_27516[(1)] = (1));

return statearr_27516;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1 = (function (state_27504){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27517){if((e27517 instanceof Object)){
var ex__27165__auto__ = e27517;
var statearr_27518_27621 = state_27504;
(statearr_27518_27621[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27622 = state_27504;
state_27504 = G__27622;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = function(state_27504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1.call(this,state_27504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___27614,jobs,results,process,async))
})();
var state__27253__auto__ = (function (){var statearr_27519 = f__27252__auto__.call(null);
(statearr_27519[(6)] = c__27251__auto___27614);

return statearr_27519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___27614,jobs,results,process,async))
);


var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__,jobs,results,process,async){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__,jobs,results,process,async){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (7))){
var inst_27553 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27559_27623 = state_27557__$1;
(statearr_27559_27623[(2)] = inst_27553);

(statearr_27559_27623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (20))){
var state_27557__$1 = state_27557;
var statearr_27560_27624 = state_27557__$1;
(statearr_27560_27624[(2)] = null);

(statearr_27560_27624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (1))){
var state_27557__$1 = state_27557;
var statearr_27561_27625 = state_27557__$1;
(statearr_27561_27625[(2)] = null);

(statearr_27561_27625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (4))){
var inst_27522 = (state_27557[(7)]);
var inst_27522__$1 = (state_27557[(2)]);
var inst_27523 = (inst_27522__$1 == null);
var state_27557__$1 = (function (){var statearr_27562 = state_27557;
(statearr_27562[(7)] = inst_27522__$1);

return statearr_27562;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27563_27626 = state_27557__$1;
(statearr_27563_27626[(1)] = (5));

} else {
var statearr_27564_27627 = state_27557__$1;
(statearr_27564_27627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (15))){
var inst_27535 = (state_27557[(8)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(18),to,inst_27535);
} else {
if((state_val_27558 === (21))){
var inst_27548 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27565_27628 = state_27557__$1;
(statearr_27565_27628[(2)] = inst_27548);

(statearr_27565_27628[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (13))){
var inst_27550 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27566 = state_27557;
(statearr_27566[(9)] = inst_27550);

return statearr_27566;
})();
var statearr_27567_27629 = state_27557__$1;
(statearr_27567_27629[(2)] = null);

(statearr_27567_27629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (6))){
var inst_27522 = (state_27557[(7)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(11),inst_27522);
} else {
if((state_val_27558 === (17))){
var inst_27543 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27543)){
var statearr_27568_27630 = state_27557__$1;
(statearr_27568_27630[(1)] = (19));

} else {
var statearr_27569_27631 = state_27557__$1;
(statearr_27569_27631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (3))){
var inst_27555 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (12))){
var inst_27532 = (state_27557[(10)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(14),inst_27532);
} else {
if((state_val_27558 === (2))){
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(4),results);
} else {
if((state_val_27558 === (19))){
var state_27557__$1 = state_27557;
var statearr_27570_27632 = state_27557__$1;
(statearr_27570_27632[(2)] = null);

(statearr_27570_27632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (11))){
var inst_27532 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27571 = state_27557;
(statearr_27571[(10)] = inst_27532);

return statearr_27571;
})();
var statearr_27572_27633 = state_27557__$1;
(statearr_27572_27633[(2)] = null);

(statearr_27572_27633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (9))){
var state_27557__$1 = state_27557;
var statearr_27573_27634 = state_27557__$1;
(statearr_27573_27634[(2)] = null);

(statearr_27573_27634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (5))){
var state_27557__$1 = state_27557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27574_27635 = state_27557__$1;
(statearr_27574_27635[(1)] = (8));

} else {
var statearr_27575_27636 = state_27557__$1;
(statearr_27575_27636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (14))){
var inst_27537 = (state_27557[(11)]);
var inst_27535 = (state_27557[(8)]);
var inst_27535__$1 = (state_27557[(2)]);
var inst_27536 = (inst_27535__$1 == null);
var inst_27537__$1 = cljs.core.not.call(null,inst_27536);
var state_27557__$1 = (function (){var statearr_27576 = state_27557;
(statearr_27576[(11)] = inst_27537__$1);

(statearr_27576[(8)] = inst_27535__$1);

return statearr_27576;
})();
if(inst_27537__$1){
var statearr_27577_27637 = state_27557__$1;
(statearr_27577_27637[(1)] = (15));

} else {
var statearr_27578_27638 = state_27557__$1;
(statearr_27578_27638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (16))){
var inst_27537 = (state_27557[(11)]);
var state_27557__$1 = state_27557;
var statearr_27579_27639 = state_27557__$1;
(statearr_27579_27639[(2)] = inst_27537);

(statearr_27579_27639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (10))){
var inst_27529 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27580_27640 = state_27557__$1;
(statearr_27580_27640[(2)] = inst_27529);

(statearr_27580_27640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (18))){
var inst_27540 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27581_27641 = state_27557__$1;
(statearr_27581_27641[(2)] = inst_27540);

(statearr_27581_27641[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (8))){
var inst_27526 = cljs.core.async.close_BANG_.call(null,to);
var state_27557__$1 = state_27557;
var statearr_27582_27642 = state_27557__$1;
(statearr_27582_27642[(2)] = inst_27526);

(statearr_27582_27642[(1)] = (10));


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
});})(c__27251__auto__,jobs,results,process,async))
;
return ((function (switch__27161__auto__,c__27251__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_27583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__);

(statearr_27583[(1)] = (1));

return statearr_27583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1 = (function (state_27557){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27584){if((e27584 instanceof Object)){
var ex__27165__auto__ = e27584;
var statearr_27585_27643 = state_27557;
(statearr_27585_27643[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27644 = state_27557;
state_27557 = G__27644;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__,jobs,results,process,async))
})();
var state__27253__auto__ = (function (){var statearr_27586 = f__27252__auto__.call(null);
(statearr_27586[(6)] = c__27251__auto__);

return statearr_27586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__,jobs,results,process,async))
);

return c__27251__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27646 = arguments.length;
switch (G__27646) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27649 = arguments.length;
switch (G__27649) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27652 = arguments.length;
switch (G__27652) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27251__auto___27701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___27701,tc,fc){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___27701,tc,fc){
return (function (state_27678){
var state_val_27679 = (state_27678[(1)]);
if((state_val_27679 === (7))){
var inst_27674 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27680_27702 = state_27678__$1;
(statearr_27680_27702[(2)] = inst_27674);

(statearr_27680_27702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (1))){
var state_27678__$1 = state_27678;
var statearr_27681_27703 = state_27678__$1;
(statearr_27681_27703[(2)] = null);

(statearr_27681_27703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (4))){
var inst_27655 = (state_27678[(7)]);
var inst_27655__$1 = (state_27678[(2)]);
var inst_27656 = (inst_27655__$1 == null);
var state_27678__$1 = (function (){var statearr_27682 = state_27678;
(statearr_27682[(7)] = inst_27655__$1);

return statearr_27682;
})();
if(cljs.core.truth_(inst_27656)){
var statearr_27683_27704 = state_27678__$1;
(statearr_27683_27704[(1)] = (5));

} else {
var statearr_27684_27705 = state_27678__$1;
(statearr_27684_27705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (13))){
var state_27678__$1 = state_27678;
var statearr_27685_27706 = state_27678__$1;
(statearr_27685_27706[(2)] = null);

(statearr_27685_27706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (6))){
var inst_27655 = (state_27678[(7)]);
var inst_27661 = p.call(null,inst_27655);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27661)){
var statearr_27686_27707 = state_27678__$1;
(statearr_27686_27707[(1)] = (9));

} else {
var statearr_27687_27708 = state_27678__$1;
(statearr_27687_27708[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (3))){
var inst_27676 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27678__$1,inst_27676);
} else {
if((state_val_27679 === (12))){
var state_27678__$1 = state_27678;
var statearr_27688_27709 = state_27678__$1;
(statearr_27688_27709[(2)] = null);

(statearr_27688_27709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (2))){
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27678__$1,(4),ch);
} else {
if((state_val_27679 === (11))){
var inst_27655 = (state_27678[(7)]);
var inst_27665 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27678__$1,(8),inst_27665,inst_27655);
} else {
if((state_val_27679 === (9))){
var state_27678__$1 = state_27678;
var statearr_27689_27710 = state_27678__$1;
(statearr_27689_27710[(2)] = tc);

(statearr_27689_27710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (5))){
var inst_27658 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27659 = cljs.core.async.close_BANG_.call(null,fc);
var state_27678__$1 = (function (){var statearr_27690 = state_27678;
(statearr_27690[(8)] = inst_27658);

return statearr_27690;
})();
var statearr_27691_27711 = state_27678__$1;
(statearr_27691_27711[(2)] = inst_27659);

(statearr_27691_27711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (14))){
var inst_27672 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
var statearr_27692_27712 = state_27678__$1;
(statearr_27692_27712[(2)] = inst_27672);

(statearr_27692_27712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (10))){
var state_27678__$1 = state_27678;
var statearr_27693_27713 = state_27678__$1;
(statearr_27693_27713[(2)] = fc);

(statearr_27693_27713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27679 === (8))){
var inst_27667 = (state_27678[(2)]);
var state_27678__$1 = state_27678;
if(cljs.core.truth_(inst_27667)){
var statearr_27694_27714 = state_27678__$1;
(statearr_27694_27714[(1)] = (12));

} else {
var statearr_27695_27715 = state_27678__$1;
(statearr_27695_27715[(1)] = (13));

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
});})(c__27251__auto___27701,tc,fc))
;
return ((function (switch__27161__auto__,c__27251__auto___27701,tc,fc){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_27696 = [null,null,null,null,null,null,null,null,null];
(statearr_27696[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_27696[(1)] = (1));

return statearr_27696;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_27678){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27697){if((e27697 instanceof Object)){
var ex__27165__auto__ = e27697;
var statearr_27698_27716 = state_27678;
(statearr_27698_27716[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27717 = state_27678;
state_27678 = G__27717;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_27678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_27678);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___27701,tc,fc))
})();
var state__27253__auto__ = (function (){var statearr_27699 = f__27252__auto__.call(null);
(statearr_27699[(6)] = c__27251__auto___27701);

return statearr_27699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___27701,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__){
return (function (state_27738){
var state_val_27739 = (state_27738[(1)]);
if((state_val_27739 === (7))){
var inst_27734 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27740_27758 = state_27738__$1;
(statearr_27740_27758[(2)] = inst_27734);

(statearr_27740_27758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (1))){
var inst_27718 = init;
var state_27738__$1 = (function (){var statearr_27741 = state_27738;
(statearr_27741[(7)] = inst_27718);

return statearr_27741;
})();
var statearr_27742_27759 = state_27738__$1;
(statearr_27742_27759[(2)] = null);

(statearr_27742_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (4))){
var inst_27721 = (state_27738[(8)]);
var inst_27721__$1 = (state_27738[(2)]);
var inst_27722 = (inst_27721__$1 == null);
var state_27738__$1 = (function (){var statearr_27743 = state_27738;
(statearr_27743[(8)] = inst_27721__$1);

return statearr_27743;
})();
if(cljs.core.truth_(inst_27722)){
var statearr_27744_27760 = state_27738__$1;
(statearr_27744_27760[(1)] = (5));

} else {
var statearr_27745_27761 = state_27738__$1;
(statearr_27745_27761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (6))){
var inst_27718 = (state_27738[(7)]);
var inst_27725 = (state_27738[(9)]);
var inst_27721 = (state_27738[(8)]);
var inst_27725__$1 = f.call(null,inst_27718,inst_27721);
var inst_27726 = cljs.core.reduced_QMARK_.call(null,inst_27725__$1);
var state_27738__$1 = (function (){var statearr_27746 = state_27738;
(statearr_27746[(9)] = inst_27725__$1);

return statearr_27746;
})();
if(inst_27726){
var statearr_27747_27762 = state_27738__$1;
(statearr_27747_27762[(1)] = (8));

} else {
var statearr_27748_27763 = state_27738__$1;
(statearr_27748_27763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (3))){
var inst_27736 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27738__$1,inst_27736);
} else {
if((state_val_27739 === (2))){
var state_27738__$1 = state_27738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27738__$1,(4),ch);
} else {
if((state_val_27739 === (9))){
var inst_27725 = (state_27738[(9)]);
var inst_27718 = inst_27725;
var state_27738__$1 = (function (){var statearr_27749 = state_27738;
(statearr_27749[(7)] = inst_27718);

return statearr_27749;
})();
var statearr_27750_27764 = state_27738__$1;
(statearr_27750_27764[(2)] = null);

(statearr_27750_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (5))){
var inst_27718 = (state_27738[(7)]);
var state_27738__$1 = state_27738;
var statearr_27751_27765 = state_27738__$1;
(statearr_27751_27765[(2)] = inst_27718);

(statearr_27751_27765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (10))){
var inst_27732 = (state_27738[(2)]);
var state_27738__$1 = state_27738;
var statearr_27752_27766 = state_27738__$1;
(statearr_27752_27766[(2)] = inst_27732);

(statearr_27752_27766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27739 === (8))){
var inst_27725 = (state_27738[(9)]);
var inst_27728 = cljs.core.deref.call(null,inst_27725);
var state_27738__$1 = state_27738;
var statearr_27753_27767 = state_27738__$1;
(statearr_27753_27767[(2)] = inst_27728);

(statearr_27753_27767[(1)] = (10));


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
});})(c__27251__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27162__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27162__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27754[(0)] = cljs$core$async$reduce_$_state_machine__27162__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var cljs$core$async$reduce_$_state_machine__27162__auto____1 = (function (state_27738){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object)){
var ex__27165__auto__ = e27755;
var statearr_27756_27768 = state_27738;
(statearr_27756_27768[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27769 = state_27738;
state_27738 = G__27769;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27162__auto__ = function(state_27738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27162__auto____1.call(this,state_27738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27162__auto____0;
cljs$core$async$reduce_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27162__auto____1;
return cljs$core$async$reduce_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__))
})();
var state__27253__auto__ = (function (){var statearr_27757 = f__27252__auto__.call(null);
(statearr_27757[(6)] = c__27251__auto__);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__))
);

return c__27251__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__,f__$1){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__,f__$1){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (1))){
var inst_27770 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27775__$1,(2),inst_27770);
} else {
if((state_val_27776 === (2))){
var inst_27772 = (state_27775[(2)]);
var inst_27773 = f__$1.call(null,inst_27772);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27775__$1,inst_27773);
} else {
return null;
}
}
});})(c__27251__auto__,f__$1))
;
return ((function (switch__27161__auto__,c__27251__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27162__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27162__auto____0 = (function (){
var statearr_27777 = [null,null,null,null,null,null,null];
(statearr_27777[(0)] = cljs$core$async$transduce_$_state_machine__27162__auto__);

(statearr_27777[(1)] = (1));

return statearr_27777;
});
var cljs$core$async$transduce_$_state_machine__27162__auto____1 = (function (state_27775){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27778){if((e27778 instanceof Object)){
var ex__27165__auto__ = e27778;
var statearr_27779_27781 = state_27775;
(statearr_27779_27781[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27782 = state_27775;
state_27775 = G__27782;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27162__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27162__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27162__auto____0;
cljs$core$async$transduce_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27162__auto____1;
return cljs$core$async$transduce_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__,f__$1))
})();
var state__27253__auto__ = (function (){var statearr_27780 = f__27252__auto__.call(null);
(statearr_27780[(6)] = c__27251__auto__);

return statearr_27780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__,f__$1))
);

return c__27251__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27784 = arguments.length;
switch (G__27784) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__){
return (function (state_27809){
var state_val_27810 = (state_27809[(1)]);
if((state_val_27810 === (7))){
var inst_27791 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
var statearr_27811_27832 = state_27809__$1;
(statearr_27811_27832[(2)] = inst_27791);

(statearr_27811_27832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (1))){
var inst_27785 = cljs.core.seq.call(null,coll);
var inst_27786 = inst_27785;
var state_27809__$1 = (function (){var statearr_27812 = state_27809;
(statearr_27812[(7)] = inst_27786);

return statearr_27812;
})();
var statearr_27813_27833 = state_27809__$1;
(statearr_27813_27833[(2)] = null);

(statearr_27813_27833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (4))){
var inst_27786 = (state_27809[(7)]);
var inst_27789 = cljs.core.first.call(null,inst_27786);
var state_27809__$1 = state_27809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27809__$1,(7),ch,inst_27789);
} else {
if((state_val_27810 === (13))){
var inst_27803 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
var statearr_27814_27834 = state_27809__$1;
(statearr_27814_27834[(2)] = inst_27803);

(statearr_27814_27834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (6))){
var inst_27794 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
if(cljs.core.truth_(inst_27794)){
var statearr_27815_27835 = state_27809__$1;
(statearr_27815_27835[(1)] = (8));

} else {
var statearr_27816_27836 = state_27809__$1;
(statearr_27816_27836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (3))){
var inst_27807 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27809__$1,inst_27807);
} else {
if((state_val_27810 === (12))){
var state_27809__$1 = state_27809;
var statearr_27817_27837 = state_27809__$1;
(statearr_27817_27837[(2)] = null);

(statearr_27817_27837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (2))){
var inst_27786 = (state_27809[(7)]);
var state_27809__$1 = state_27809;
if(cljs.core.truth_(inst_27786)){
var statearr_27818_27838 = state_27809__$1;
(statearr_27818_27838[(1)] = (4));

} else {
var statearr_27819_27839 = state_27809__$1;
(statearr_27819_27839[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (11))){
var inst_27800 = cljs.core.async.close_BANG_.call(null,ch);
var state_27809__$1 = state_27809;
var statearr_27820_27840 = state_27809__$1;
(statearr_27820_27840[(2)] = inst_27800);

(statearr_27820_27840[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (9))){
var state_27809__$1 = state_27809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27821_27841 = state_27809__$1;
(statearr_27821_27841[(1)] = (11));

} else {
var statearr_27822_27842 = state_27809__$1;
(statearr_27822_27842[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (5))){
var inst_27786 = (state_27809[(7)]);
var state_27809__$1 = state_27809;
var statearr_27823_27843 = state_27809__$1;
(statearr_27823_27843[(2)] = inst_27786);

(statearr_27823_27843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (10))){
var inst_27805 = (state_27809[(2)]);
var state_27809__$1 = state_27809;
var statearr_27824_27844 = state_27809__$1;
(statearr_27824_27844[(2)] = inst_27805);

(statearr_27824_27844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27810 === (8))){
var inst_27786 = (state_27809[(7)]);
var inst_27796 = cljs.core.next.call(null,inst_27786);
var inst_27786__$1 = inst_27796;
var state_27809__$1 = (function (){var statearr_27825 = state_27809;
(statearr_27825[(7)] = inst_27786__$1);

return statearr_27825;
})();
var statearr_27826_27845 = state_27809__$1;
(statearr_27826_27845[(2)] = null);

(statearr_27826_27845[(1)] = (2));


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
});})(c__27251__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_27827 = [null,null,null,null,null,null,null,null];
(statearr_27827[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_27827[(1)] = (1));

return statearr_27827;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_27809){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e27828){if((e27828 instanceof Object)){
var ex__27165__auto__ = e27828;
var statearr_27829_27846 = state_27809;
(statearr_27829_27846[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27847 = state_27809;
state_27809 = G__27847;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_27809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_27809);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__))
})();
var state__27253__auto__ = (function (){var statearr_27830 = f__27252__auto__.call(null);
(statearr_27830[(6)] = c__27251__auto__);

return statearr_27830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__))
);

return c__27251__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27848 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27848 = (function (ch,cs,meta27849){
this.ch = ch;
this.cs = cs;
this.meta27849 = meta27849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27850,meta27849__$1){
var self__ = this;
var _27850__$1 = this;
return (new cljs.core.async.t_cljs$core$async27848(self__.ch,self__.cs,meta27849__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27850){
var self__ = this;
var _27850__$1 = this;
return self__.meta27849;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27849","meta27849",-1087706302,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27848.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27848";

cljs.core.async.t_cljs$core$async27848.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27848");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27848.
 */
cljs.core.async.__GT_t_cljs$core$async27848 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27848(ch__$1,cs__$1,meta27849){
return (new cljs.core.async.t_cljs$core$async27848(ch__$1,cs__$1,meta27849));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27848(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27251__auto___28070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28070,cs,m,dchan,dctr,done){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28070,cs,m,dchan,dctr,done){
return (function (state_27985){
var state_val_27986 = (state_27985[(1)]);
if((state_val_27986 === (7))){
var inst_27981 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_27987_28071 = state_27985__$1;
(statearr_27987_28071[(2)] = inst_27981);

(statearr_27987_28071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (20))){
var inst_27884 = (state_27985[(7)]);
var inst_27896 = cljs.core.first.call(null,inst_27884);
var inst_27897 = cljs.core.nth.call(null,inst_27896,(0),null);
var inst_27898 = cljs.core.nth.call(null,inst_27896,(1),null);
var state_27985__$1 = (function (){var statearr_27988 = state_27985;
(statearr_27988[(8)] = inst_27897);

return statearr_27988;
})();
if(cljs.core.truth_(inst_27898)){
var statearr_27989_28072 = state_27985__$1;
(statearr_27989_28072[(1)] = (22));

} else {
var statearr_27990_28073 = state_27985__$1;
(statearr_27990_28073[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (27))){
var inst_27928 = (state_27985[(9)]);
var inst_27933 = (state_27985[(10)]);
var inst_27853 = (state_27985[(11)]);
var inst_27926 = (state_27985[(12)]);
var inst_27933__$1 = cljs.core._nth.call(null,inst_27926,inst_27928);
var inst_27934 = cljs.core.async.put_BANG_.call(null,inst_27933__$1,inst_27853,done);
var state_27985__$1 = (function (){var statearr_27991 = state_27985;
(statearr_27991[(10)] = inst_27933__$1);

return statearr_27991;
})();
if(cljs.core.truth_(inst_27934)){
var statearr_27992_28074 = state_27985__$1;
(statearr_27992_28074[(1)] = (30));

} else {
var statearr_27993_28075 = state_27985__$1;
(statearr_27993_28075[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (1))){
var state_27985__$1 = state_27985;
var statearr_27994_28076 = state_27985__$1;
(statearr_27994_28076[(2)] = null);

(statearr_27994_28076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (24))){
var inst_27884 = (state_27985[(7)]);
var inst_27903 = (state_27985[(2)]);
var inst_27904 = cljs.core.next.call(null,inst_27884);
var inst_27862 = inst_27904;
var inst_27863 = null;
var inst_27864 = (0);
var inst_27865 = (0);
var state_27985__$1 = (function (){var statearr_27995 = state_27985;
(statearr_27995[(13)] = inst_27864);

(statearr_27995[(14)] = inst_27903);

(statearr_27995[(15)] = inst_27863);

(statearr_27995[(16)] = inst_27865);

(statearr_27995[(17)] = inst_27862);

return statearr_27995;
})();
var statearr_27996_28077 = state_27985__$1;
(statearr_27996_28077[(2)] = null);

(statearr_27996_28077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (39))){
var state_27985__$1 = state_27985;
var statearr_28000_28078 = state_27985__$1;
(statearr_28000_28078[(2)] = null);

(statearr_28000_28078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (4))){
var inst_27853 = (state_27985[(11)]);
var inst_27853__$1 = (state_27985[(2)]);
var inst_27854 = (inst_27853__$1 == null);
var state_27985__$1 = (function (){var statearr_28001 = state_27985;
(statearr_28001[(11)] = inst_27853__$1);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27854)){
var statearr_28002_28079 = state_27985__$1;
(statearr_28002_28079[(1)] = (5));

} else {
var statearr_28003_28080 = state_27985__$1;
(statearr_28003_28080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (15))){
var inst_27864 = (state_27985[(13)]);
var inst_27863 = (state_27985[(15)]);
var inst_27865 = (state_27985[(16)]);
var inst_27862 = (state_27985[(17)]);
var inst_27880 = (state_27985[(2)]);
var inst_27881 = (inst_27865 + (1));
var tmp27997 = inst_27864;
var tmp27998 = inst_27863;
var tmp27999 = inst_27862;
var inst_27862__$1 = tmp27999;
var inst_27863__$1 = tmp27998;
var inst_27864__$1 = tmp27997;
var inst_27865__$1 = inst_27881;
var state_27985__$1 = (function (){var statearr_28004 = state_27985;
(statearr_28004[(13)] = inst_27864__$1);

(statearr_28004[(15)] = inst_27863__$1);

(statearr_28004[(18)] = inst_27880);

(statearr_28004[(16)] = inst_27865__$1);

(statearr_28004[(17)] = inst_27862__$1);

return statearr_28004;
})();
var statearr_28005_28081 = state_27985__$1;
(statearr_28005_28081[(2)] = null);

(statearr_28005_28081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (21))){
var inst_27907 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28009_28082 = state_27985__$1;
(statearr_28009_28082[(2)] = inst_27907);

(statearr_28009_28082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (31))){
var inst_27933 = (state_27985[(10)]);
var inst_27937 = done.call(null,null);
var inst_27938 = cljs.core.async.untap_STAR_.call(null,m,inst_27933);
var state_27985__$1 = (function (){var statearr_28010 = state_27985;
(statearr_28010[(19)] = inst_27937);

return statearr_28010;
})();
var statearr_28011_28083 = state_27985__$1;
(statearr_28011_28083[(2)] = inst_27938);

(statearr_28011_28083[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (32))){
var inst_27928 = (state_27985[(9)]);
var inst_27925 = (state_27985[(20)]);
var inst_27927 = (state_27985[(21)]);
var inst_27926 = (state_27985[(12)]);
var inst_27940 = (state_27985[(2)]);
var inst_27941 = (inst_27928 + (1));
var tmp28006 = inst_27925;
var tmp28007 = inst_27927;
var tmp28008 = inst_27926;
var inst_27925__$1 = tmp28006;
var inst_27926__$1 = tmp28008;
var inst_27927__$1 = tmp28007;
var inst_27928__$1 = inst_27941;
var state_27985__$1 = (function (){var statearr_28012 = state_27985;
(statearr_28012[(22)] = inst_27940);

(statearr_28012[(9)] = inst_27928__$1);

(statearr_28012[(20)] = inst_27925__$1);

(statearr_28012[(21)] = inst_27927__$1);

(statearr_28012[(12)] = inst_27926__$1);

return statearr_28012;
})();
var statearr_28013_28084 = state_27985__$1;
(statearr_28013_28084[(2)] = null);

(statearr_28013_28084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (40))){
var inst_27953 = (state_27985[(23)]);
var inst_27957 = done.call(null,null);
var inst_27958 = cljs.core.async.untap_STAR_.call(null,m,inst_27953);
var state_27985__$1 = (function (){var statearr_28014 = state_27985;
(statearr_28014[(24)] = inst_27957);

return statearr_28014;
})();
var statearr_28015_28085 = state_27985__$1;
(statearr_28015_28085[(2)] = inst_27958);

(statearr_28015_28085[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (33))){
var inst_27944 = (state_27985[(25)]);
var inst_27946 = cljs.core.chunked_seq_QMARK_.call(null,inst_27944);
var state_27985__$1 = state_27985;
if(inst_27946){
var statearr_28016_28086 = state_27985__$1;
(statearr_28016_28086[(1)] = (36));

} else {
var statearr_28017_28087 = state_27985__$1;
(statearr_28017_28087[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (13))){
var inst_27874 = (state_27985[(26)]);
var inst_27877 = cljs.core.async.close_BANG_.call(null,inst_27874);
var state_27985__$1 = state_27985;
var statearr_28018_28088 = state_27985__$1;
(statearr_28018_28088[(2)] = inst_27877);

(statearr_28018_28088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (22))){
var inst_27897 = (state_27985[(8)]);
var inst_27900 = cljs.core.async.close_BANG_.call(null,inst_27897);
var state_27985__$1 = state_27985;
var statearr_28019_28089 = state_27985__$1;
(statearr_28019_28089[(2)] = inst_27900);

(statearr_28019_28089[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (36))){
var inst_27944 = (state_27985[(25)]);
var inst_27948 = cljs.core.chunk_first.call(null,inst_27944);
var inst_27949 = cljs.core.chunk_rest.call(null,inst_27944);
var inst_27950 = cljs.core.count.call(null,inst_27948);
var inst_27925 = inst_27949;
var inst_27926 = inst_27948;
var inst_27927 = inst_27950;
var inst_27928 = (0);
var state_27985__$1 = (function (){var statearr_28020 = state_27985;
(statearr_28020[(9)] = inst_27928);

(statearr_28020[(20)] = inst_27925);

(statearr_28020[(21)] = inst_27927);

(statearr_28020[(12)] = inst_27926);

return statearr_28020;
})();
var statearr_28021_28090 = state_27985__$1;
(statearr_28021_28090[(2)] = null);

(statearr_28021_28090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (41))){
var inst_27944 = (state_27985[(25)]);
var inst_27960 = (state_27985[(2)]);
var inst_27961 = cljs.core.next.call(null,inst_27944);
var inst_27925 = inst_27961;
var inst_27926 = null;
var inst_27927 = (0);
var inst_27928 = (0);
var state_27985__$1 = (function (){var statearr_28022 = state_27985;
(statearr_28022[(9)] = inst_27928);

(statearr_28022[(20)] = inst_27925);

(statearr_28022[(21)] = inst_27927);

(statearr_28022[(27)] = inst_27960);

(statearr_28022[(12)] = inst_27926);

return statearr_28022;
})();
var statearr_28023_28091 = state_27985__$1;
(statearr_28023_28091[(2)] = null);

(statearr_28023_28091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (43))){
var state_27985__$1 = state_27985;
var statearr_28024_28092 = state_27985__$1;
(statearr_28024_28092[(2)] = null);

(statearr_28024_28092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (29))){
var inst_27969 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28025_28093 = state_27985__$1;
(statearr_28025_28093[(2)] = inst_27969);

(statearr_28025_28093[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (44))){
var inst_27978 = (state_27985[(2)]);
var state_27985__$1 = (function (){var statearr_28026 = state_27985;
(statearr_28026[(28)] = inst_27978);

return statearr_28026;
})();
var statearr_28027_28094 = state_27985__$1;
(statearr_28027_28094[(2)] = null);

(statearr_28027_28094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (6))){
var inst_27917 = (state_27985[(29)]);
var inst_27916 = cljs.core.deref.call(null,cs);
var inst_27917__$1 = cljs.core.keys.call(null,inst_27916);
var inst_27918 = cljs.core.count.call(null,inst_27917__$1);
var inst_27919 = cljs.core.reset_BANG_.call(null,dctr,inst_27918);
var inst_27924 = cljs.core.seq.call(null,inst_27917__$1);
var inst_27925 = inst_27924;
var inst_27926 = null;
var inst_27927 = (0);
var inst_27928 = (0);
var state_27985__$1 = (function (){var statearr_28028 = state_27985;
(statearr_28028[(29)] = inst_27917__$1);

(statearr_28028[(9)] = inst_27928);

(statearr_28028[(20)] = inst_27925);

(statearr_28028[(21)] = inst_27927);

(statearr_28028[(30)] = inst_27919);

(statearr_28028[(12)] = inst_27926);

return statearr_28028;
})();
var statearr_28029_28095 = state_27985__$1;
(statearr_28029_28095[(2)] = null);

(statearr_28029_28095[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (28))){
var inst_27925 = (state_27985[(20)]);
var inst_27944 = (state_27985[(25)]);
var inst_27944__$1 = cljs.core.seq.call(null,inst_27925);
var state_27985__$1 = (function (){var statearr_28030 = state_27985;
(statearr_28030[(25)] = inst_27944__$1);

return statearr_28030;
})();
if(inst_27944__$1){
var statearr_28031_28096 = state_27985__$1;
(statearr_28031_28096[(1)] = (33));

} else {
var statearr_28032_28097 = state_27985__$1;
(statearr_28032_28097[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (25))){
var inst_27928 = (state_27985[(9)]);
var inst_27927 = (state_27985[(21)]);
var inst_27930 = (inst_27928 < inst_27927);
var inst_27931 = inst_27930;
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27931)){
var statearr_28033_28098 = state_27985__$1;
(statearr_28033_28098[(1)] = (27));

} else {
var statearr_28034_28099 = state_27985__$1;
(statearr_28034_28099[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (34))){
var state_27985__$1 = state_27985;
var statearr_28035_28100 = state_27985__$1;
(statearr_28035_28100[(2)] = null);

(statearr_28035_28100[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (17))){
var state_27985__$1 = state_27985;
var statearr_28036_28101 = state_27985__$1;
(statearr_28036_28101[(2)] = null);

(statearr_28036_28101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (3))){
var inst_27983 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27985__$1,inst_27983);
} else {
if((state_val_27986 === (12))){
var inst_27912 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28037_28102 = state_27985__$1;
(statearr_28037_28102[(2)] = inst_27912);

(statearr_28037_28102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (2))){
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(4),ch);
} else {
if((state_val_27986 === (23))){
var state_27985__$1 = state_27985;
var statearr_28038_28103 = state_27985__$1;
(statearr_28038_28103[(2)] = null);

(statearr_28038_28103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (35))){
var inst_27967 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28039_28104 = state_27985__$1;
(statearr_28039_28104[(2)] = inst_27967);

(statearr_28039_28104[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (19))){
var inst_27884 = (state_27985[(7)]);
var inst_27888 = cljs.core.chunk_first.call(null,inst_27884);
var inst_27889 = cljs.core.chunk_rest.call(null,inst_27884);
var inst_27890 = cljs.core.count.call(null,inst_27888);
var inst_27862 = inst_27889;
var inst_27863 = inst_27888;
var inst_27864 = inst_27890;
var inst_27865 = (0);
var state_27985__$1 = (function (){var statearr_28040 = state_27985;
(statearr_28040[(13)] = inst_27864);

(statearr_28040[(15)] = inst_27863);

(statearr_28040[(16)] = inst_27865);

(statearr_28040[(17)] = inst_27862);

return statearr_28040;
})();
var statearr_28041_28105 = state_27985__$1;
(statearr_28041_28105[(2)] = null);

(statearr_28041_28105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (11))){
var inst_27884 = (state_27985[(7)]);
var inst_27862 = (state_27985[(17)]);
var inst_27884__$1 = cljs.core.seq.call(null,inst_27862);
var state_27985__$1 = (function (){var statearr_28042 = state_27985;
(statearr_28042[(7)] = inst_27884__$1);

return statearr_28042;
})();
if(inst_27884__$1){
var statearr_28043_28106 = state_27985__$1;
(statearr_28043_28106[(1)] = (16));

} else {
var statearr_28044_28107 = state_27985__$1;
(statearr_28044_28107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (9))){
var inst_27914 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28045_28108 = state_27985__$1;
(statearr_28045_28108[(2)] = inst_27914);

(statearr_28045_28108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (5))){
var inst_27860 = cljs.core.deref.call(null,cs);
var inst_27861 = cljs.core.seq.call(null,inst_27860);
var inst_27862 = inst_27861;
var inst_27863 = null;
var inst_27864 = (0);
var inst_27865 = (0);
var state_27985__$1 = (function (){var statearr_28046 = state_27985;
(statearr_28046[(13)] = inst_27864);

(statearr_28046[(15)] = inst_27863);

(statearr_28046[(16)] = inst_27865);

(statearr_28046[(17)] = inst_27862);

return statearr_28046;
})();
var statearr_28047_28109 = state_27985__$1;
(statearr_28047_28109[(2)] = null);

(statearr_28047_28109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (14))){
var state_27985__$1 = state_27985;
var statearr_28048_28110 = state_27985__$1;
(statearr_28048_28110[(2)] = null);

(statearr_28048_28110[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (45))){
var inst_27975 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28049_28111 = state_27985__$1;
(statearr_28049_28111[(2)] = inst_27975);

(statearr_28049_28111[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (26))){
var inst_27917 = (state_27985[(29)]);
var inst_27971 = (state_27985[(2)]);
var inst_27972 = cljs.core.seq.call(null,inst_27917);
var state_27985__$1 = (function (){var statearr_28050 = state_27985;
(statearr_28050[(31)] = inst_27971);

return statearr_28050;
})();
if(inst_27972){
var statearr_28051_28112 = state_27985__$1;
(statearr_28051_28112[(1)] = (42));

} else {
var statearr_28052_28113 = state_27985__$1;
(statearr_28052_28113[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (16))){
var inst_27884 = (state_27985[(7)]);
var inst_27886 = cljs.core.chunked_seq_QMARK_.call(null,inst_27884);
var state_27985__$1 = state_27985;
if(inst_27886){
var statearr_28053_28114 = state_27985__$1;
(statearr_28053_28114[(1)] = (19));

} else {
var statearr_28054_28115 = state_27985__$1;
(statearr_28054_28115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (38))){
var inst_27964 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28055_28116 = state_27985__$1;
(statearr_28055_28116[(2)] = inst_27964);

(statearr_28055_28116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (30))){
var state_27985__$1 = state_27985;
var statearr_28056_28117 = state_27985__$1;
(statearr_28056_28117[(2)] = null);

(statearr_28056_28117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (10))){
var inst_27863 = (state_27985[(15)]);
var inst_27865 = (state_27985[(16)]);
var inst_27873 = cljs.core._nth.call(null,inst_27863,inst_27865);
var inst_27874 = cljs.core.nth.call(null,inst_27873,(0),null);
var inst_27875 = cljs.core.nth.call(null,inst_27873,(1),null);
var state_27985__$1 = (function (){var statearr_28057 = state_27985;
(statearr_28057[(26)] = inst_27874);

return statearr_28057;
})();
if(cljs.core.truth_(inst_27875)){
var statearr_28058_28118 = state_27985__$1;
(statearr_28058_28118[(1)] = (13));

} else {
var statearr_28059_28119 = state_27985__$1;
(statearr_28059_28119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (18))){
var inst_27910 = (state_27985[(2)]);
var state_27985__$1 = state_27985;
var statearr_28060_28120 = state_27985__$1;
(statearr_28060_28120[(2)] = inst_27910);

(statearr_28060_28120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (42))){
var state_27985__$1 = state_27985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27985__$1,(45),dchan);
} else {
if((state_val_27986 === (37))){
var inst_27853 = (state_27985[(11)]);
var inst_27944 = (state_27985[(25)]);
var inst_27953 = (state_27985[(23)]);
var inst_27953__$1 = cljs.core.first.call(null,inst_27944);
var inst_27954 = cljs.core.async.put_BANG_.call(null,inst_27953__$1,inst_27853,done);
var state_27985__$1 = (function (){var statearr_28061 = state_27985;
(statearr_28061[(23)] = inst_27953__$1);

return statearr_28061;
})();
if(cljs.core.truth_(inst_27954)){
var statearr_28062_28121 = state_27985__$1;
(statearr_28062_28121[(1)] = (39));

} else {
var statearr_28063_28122 = state_27985__$1;
(statearr_28063_28122[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27986 === (8))){
var inst_27864 = (state_27985[(13)]);
var inst_27865 = (state_27985[(16)]);
var inst_27867 = (inst_27865 < inst_27864);
var inst_27868 = inst_27867;
var state_27985__$1 = state_27985;
if(cljs.core.truth_(inst_27868)){
var statearr_28064_28123 = state_27985__$1;
(statearr_28064_28123[(1)] = (10));

} else {
var statearr_28065_28124 = state_27985__$1;
(statearr_28065_28124[(1)] = (11));

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
});})(c__27251__auto___28070,cs,m,dchan,dctr,done))
;
return ((function (switch__27161__auto__,c__27251__auto___28070,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27162__auto__ = null;
var cljs$core$async$mult_$_state_machine__27162__auto____0 = (function (){
var statearr_28066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28066[(0)] = cljs$core$async$mult_$_state_machine__27162__auto__);

(statearr_28066[(1)] = (1));

return statearr_28066;
});
var cljs$core$async$mult_$_state_machine__27162__auto____1 = (function (state_27985){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_27985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object)){
var ex__27165__auto__ = e28067;
var statearr_28068_28125 = state_27985;
(statearr_28068_28125[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28126 = state_27985;
state_27985 = G__28126;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27162__auto__ = function(state_27985){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27162__auto____1.call(this,state_27985);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27162__auto____0;
cljs$core$async$mult_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27162__auto____1;
return cljs$core$async$mult_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28070,cs,m,dchan,dctr,done))
})();
var state__27253__auto__ = (function (){var statearr_28069 = f__27252__auto__.call(null);
(statearr_28069[(6)] = c__27251__auto___28070);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28070,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28128 = arguments.length;
switch (G__28128) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28140 = arguments.length;
var i__4500__auto___28141 = (0);
while(true){
if((i__4500__auto___28141 < len__4499__auto___28140)){
args__4502__auto__.push((arguments[i__4500__auto___28141]));

var G__28142 = (i__4500__auto___28141 + (1));
i__4500__auto___28141 = G__28142;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28134){
var map__28135 = p__28134;
var map__28135__$1 = ((((!((map__28135 == null)))?(((((map__28135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28135):map__28135);
var opts = map__28135__$1;
var statearr_28137_28143 = state;
(statearr_28137_28143[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28135,map__28135__$1,opts){
return (function (val){
var statearr_28138_28144 = state;
(statearr_28138_28144[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28135,map__28135__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28139_28145 = state;
(statearr_28139_28145[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28130){
var G__28131 = cljs.core.first.call(null,seq28130);
var seq28130__$1 = cljs.core.next.call(null,seq28130);
var G__28132 = cljs.core.first.call(null,seq28130__$1);
var seq28130__$2 = cljs.core.next.call(null,seq28130__$1);
var G__28133 = cljs.core.first.call(null,seq28130__$2);
var seq28130__$3 = cljs.core.next.call(null,seq28130__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28131,G__28132,G__28133,seq28130__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28146 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28147){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28147 = meta28147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28148,meta28147__$1){
var self__ = this;
var _28148__$1 = this;
return (new cljs.core.async.t_cljs$core$async28146(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28147__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28148){
var self__ = this;
var _28148__$1 = this;
return self__.meta28147;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28147","meta28147",-1569340361,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28146";

cljs.core.async.t_cljs$core$async28146.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28146");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28146.
 */
cljs.core.async.__GT_t_cljs$core$async28146 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28146(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28147){
return (new cljs.core.async.t_cljs$core$async28146(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28147));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28146(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27251__auto___28310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28250){
var state_val_28251 = (state_28250[(1)]);
if((state_val_28251 === (7))){
var inst_28165 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28252_28311 = state_28250__$1;
(statearr_28252_28311[(2)] = inst_28165);

(statearr_28252_28311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (20))){
var inst_28177 = (state_28250[(7)]);
var state_28250__$1 = state_28250;
var statearr_28253_28312 = state_28250__$1;
(statearr_28253_28312[(2)] = inst_28177);

(statearr_28253_28312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (27))){
var state_28250__$1 = state_28250;
var statearr_28254_28313 = state_28250__$1;
(statearr_28254_28313[(2)] = null);

(statearr_28254_28313[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (1))){
var inst_28152 = (state_28250[(8)]);
var inst_28152__$1 = calc_state.call(null);
var inst_28154 = (inst_28152__$1 == null);
var inst_28155 = cljs.core.not.call(null,inst_28154);
var state_28250__$1 = (function (){var statearr_28255 = state_28250;
(statearr_28255[(8)] = inst_28152__$1);

return statearr_28255;
})();
if(inst_28155){
var statearr_28256_28314 = state_28250__$1;
(statearr_28256_28314[(1)] = (2));

} else {
var statearr_28257_28315 = state_28250__$1;
(statearr_28257_28315[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (24))){
var inst_28224 = (state_28250[(9)]);
var inst_28210 = (state_28250[(10)]);
var inst_28201 = (state_28250[(11)]);
var inst_28224__$1 = inst_28201.call(null,inst_28210);
var state_28250__$1 = (function (){var statearr_28258 = state_28250;
(statearr_28258[(9)] = inst_28224__$1);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28224__$1)){
var statearr_28259_28316 = state_28250__$1;
(statearr_28259_28316[(1)] = (29));

} else {
var statearr_28260_28317 = state_28250__$1;
(statearr_28260_28317[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (4))){
var inst_28168 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28168)){
var statearr_28261_28318 = state_28250__$1;
(statearr_28261_28318[(1)] = (8));

} else {
var statearr_28262_28319 = state_28250__$1;
(statearr_28262_28319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (15))){
var inst_28195 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28195)){
var statearr_28263_28320 = state_28250__$1;
(statearr_28263_28320[(1)] = (19));

} else {
var statearr_28264_28321 = state_28250__$1;
(statearr_28264_28321[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (21))){
var inst_28200 = (state_28250[(12)]);
var inst_28200__$1 = (state_28250[(2)]);
var inst_28201 = cljs.core.get.call(null,inst_28200__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28202 = cljs.core.get.call(null,inst_28200__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28203 = cljs.core.get.call(null,inst_28200__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28250__$1 = (function (){var statearr_28265 = state_28250;
(statearr_28265[(13)] = inst_28202);

(statearr_28265[(12)] = inst_28200__$1);

(statearr_28265[(11)] = inst_28201);

return statearr_28265;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28250__$1,(22),inst_28203);
} else {
if((state_val_28251 === (31))){
var inst_28232 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28232)){
var statearr_28266_28322 = state_28250__$1;
(statearr_28266_28322[(1)] = (32));

} else {
var statearr_28267_28323 = state_28250__$1;
(statearr_28267_28323[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (32))){
var inst_28209 = (state_28250[(14)]);
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28250__$1,(35),out,inst_28209);
} else {
if((state_val_28251 === (33))){
var inst_28200 = (state_28250[(12)]);
var inst_28177 = inst_28200;
var state_28250__$1 = (function (){var statearr_28268 = state_28250;
(statearr_28268[(7)] = inst_28177);

return statearr_28268;
})();
var statearr_28269_28324 = state_28250__$1;
(statearr_28269_28324[(2)] = null);

(statearr_28269_28324[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (13))){
var inst_28177 = (state_28250[(7)]);
var inst_28184 = inst_28177.cljs$lang$protocol_mask$partition0$;
var inst_28185 = (inst_28184 & (64));
var inst_28186 = inst_28177.cljs$core$ISeq$;
var inst_28187 = (cljs.core.PROTOCOL_SENTINEL === inst_28186);
var inst_28188 = ((inst_28185) || (inst_28187));
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28188)){
var statearr_28270_28325 = state_28250__$1;
(statearr_28270_28325[(1)] = (16));

} else {
var statearr_28271_28326 = state_28250__$1;
(statearr_28271_28326[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (22))){
var inst_28209 = (state_28250[(14)]);
var inst_28210 = (state_28250[(10)]);
var inst_28208 = (state_28250[(2)]);
var inst_28209__$1 = cljs.core.nth.call(null,inst_28208,(0),null);
var inst_28210__$1 = cljs.core.nth.call(null,inst_28208,(1),null);
var inst_28211 = (inst_28209__$1 == null);
var inst_28212 = cljs.core._EQ_.call(null,inst_28210__$1,change);
var inst_28213 = ((inst_28211) || (inst_28212));
var state_28250__$1 = (function (){var statearr_28272 = state_28250;
(statearr_28272[(14)] = inst_28209__$1);

(statearr_28272[(10)] = inst_28210__$1);

return statearr_28272;
})();
if(cljs.core.truth_(inst_28213)){
var statearr_28273_28327 = state_28250__$1;
(statearr_28273_28327[(1)] = (23));

} else {
var statearr_28274_28328 = state_28250__$1;
(statearr_28274_28328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (36))){
var inst_28200 = (state_28250[(12)]);
var inst_28177 = inst_28200;
var state_28250__$1 = (function (){var statearr_28275 = state_28250;
(statearr_28275[(7)] = inst_28177);

return statearr_28275;
})();
var statearr_28276_28329 = state_28250__$1;
(statearr_28276_28329[(2)] = null);

(statearr_28276_28329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (29))){
var inst_28224 = (state_28250[(9)]);
var state_28250__$1 = state_28250;
var statearr_28277_28330 = state_28250__$1;
(statearr_28277_28330[(2)] = inst_28224);

(statearr_28277_28330[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (6))){
var state_28250__$1 = state_28250;
var statearr_28278_28331 = state_28250__$1;
(statearr_28278_28331[(2)] = false);

(statearr_28278_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (28))){
var inst_28220 = (state_28250[(2)]);
var inst_28221 = calc_state.call(null);
var inst_28177 = inst_28221;
var state_28250__$1 = (function (){var statearr_28279 = state_28250;
(statearr_28279[(15)] = inst_28220);

(statearr_28279[(7)] = inst_28177);

return statearr_28279;
})();
var statearr_28280_28332 = state_28250__$1;
(statearr_28280_28332[(2)] = null);

(statearr_28280_28332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (25))){
var inst_28246 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28281_28333 = state_28250__$1;
(statearr_28281_28333[(2)] = inst_28246);

(statearr_28281_28333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (34))){
var inst_28244 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28282_28334 = state_28250__$1;
(statearr_28282_28334[(2)] = inst_28244);

(statearr_28282_28334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (17))){
var state_28250__$1 = state_28250;
var statearr_28283_28335 = state_28250__$1;
(statearr_28283_28335[(2)] = false);

(statearr_28283_28335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (3))){
var state_28250__$1 = state_28250;
var statearr_28284_28336 = state_28250__$1;
(statearr_28284_28336[(2)] = false);

(statearr_28284_28336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (12))){
var inst_28248 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28250__$1,inst_28248);
} else {
if((state_val_28251 === (2))){
var inst_28152 = (state_28250[(8)]);
var inst_28157 = inst_28152.cljs$lang$protocol_mask$partition0$;
var inst_28158 = (inst_28157 & (64));
var inst_28159 = inst_28152.cljs$core$ISeq$;
var inst_28160 = (cljs.core.PROTOCOL_SENTINEL === inst_28159);
var inst_28161 = ((inst_28158) || (inst_28160));
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28161)){
var statearr_28285_28337 = state_28250__$1;
(statearr_28285_28337[(1)] = (5));

} else {
var statearr_28286_28338 = state_28250__$1;
(statearr_28286_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (23))){
var inst_28209 = (state_28250[(14)]);
var inst_28215 = (inst_28209 == null);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28215)){
var statearr_28287_28339 = state_28250__$1;
(statearr_28287_28339[(1)] = (26));

} else {
var statearr_28288_28340 = state_28250__$1;
(statearr_28288_28340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (35))){
var inst_28235 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
if(cljs.core.truth_(inst_28235)){
var statearr_28289_28341 = state_28250__$1;
(statearr_28289_28341[(1)] = (36));

} else {
var statearr_28290_28342 = state_28250__$1;
(statearr_28290_28342[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (19))){
var inst_28177 = (state_28250[(7)]);
var inst_28197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28177);
var state_28250__$1 = state_28250;
var statearr_28291_28343 = state_28250__$1;
(statearr_28291_28343[(2)] = inst_28197);

(statearr_28291_28343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (11))){
var inst_28177 = (state_28250[(7)]);
var inst_28181 = (inst_28177 == null);
var inst_28182 = cljs.core.not.call(null,inst_28181);
var state_28250__$1 = state_28250;
if(inst_28182){
var statearr_28292_28344 = state_28250__$1;
(statearr_28292_28344[(1)] = (13));

} else {
var statearr_28293_28345 = state_28250__$1;
(statearr_28293_28345[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (9))){
var inst_28152 = (state_28250[(8)]);
var state_28250__$1 = state_28250;
var statearr_28294_28346 = state_28250__$1;
(statearr_28294_28346[(2)] = inst_28152);

(statearr_28294_28346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (5))){
var state_28250__$1 = state_28250;
var statearr_28295_28347 = state_28250__$1;
(statearr_28295_28347[(2)] = true);

(statearr_28295_28347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (14))){
var state_28250__$1 = state_28250;
var statearr_28296_28348 = state_28250__$1;
(statearr_28296_28348[(2)] = false);

(statearr_28296_28348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (26))){
var inst_28210 = (state_28250[(10)]);
var inst_28217 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28210);
var state_28250__$1 = state_28250;
var statearr_28297_28349 = state_28250__$1;
(statearr_28297_28349[(2)] = inst_28217);

(statearr_28297_28349[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (16))){
var state_28250__$1 = state_28250;
var statearr_28298_28350 = state_28250__$1;
(statearr_28298_28350[(2)] = true);

(statearr_28298_28350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (38))){
var inst_28240 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28299_28351 = state_28250__$1;
(statearr_28299_28351[(2)] = inst_28240);

(statearr_28299_28351[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (30))){
var inst_28202 = (state_28250[(13)]);
var inst_28210 = (state_28250[(10)]);
var inst_28201 = (state_28250[(11)]);
var inst_28227 = cljs.core.empty_QMARK_.call(null,inst_28201);
var inst_28228 = inst_28202.call(null,inst_28210);
var inst_28229 = cljs.core.not.call(null,inst_28228);
var inst_28230 = ((inst_28227) && (inst_28229));
var state_28250__$1 = state_28250;
var statearr_28300_28352 = state_28250__$1;
(statearr_28300_28352[(2)] = inst_28230);

(statearr_28300_28352[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (10))){
var inst_28152 = (state_28250[(8)]);
var inst_28173 = (state_28250[(2)]);
var inst_28174 = cljs.core.get.call(null,inst_28173,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28175 = cljs.core.get.call(null,inst_28173,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28176 = cljs.core.get.call(null,inst_28173,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28177 = inst_28152;
var state_28250__$1 = (function (){var statearr_28301 = state_28250;
(statearr_28301[(16)] = inst_28176);

(statearr_28301[(17)] = inst_28175);

(statearr_28301[(18)] = inst_28174);

(statearr_28301[(7)] = inst_28177);

return statearr_28301;
})();
var statearr_28302_28353 = state_28250__$1;
(statearr_28302_28353[(2)] = null);

(statearr_28302_28353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (18))){
var inst_28192 = (state_28250[(2)]);
var state_28250__$1 = state_28250;
var statearr_28303_28354 = state_28250__$1;
(statearr_28303_28354[(2)] = inst_28192);

(statearr_28303_28354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (37))){
var state_28250__$1 = state_28250;
var statearr_28304_28355 = state_28250__$1;
(statearr_28304_28355[(2)] = null);

(statearr_28304_28355[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28251 === (8))){
var inst_28152 = (state_28250[(8)]);
var inst_28170 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28152);
var state_28250__$1 = state_28250;
var statearr_28305_28356 = state_28250__$1;
(statearr_28305_28356[(2)] = inst_28170);

(statearr_28305_28356[(1)] = (10));


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
});})(c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27161__auto__,c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27162__auto__ = null;
var cljs$core$async$mix_$_state_machine__27162__auto____0 = (function (){
var statearr_28306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28306[(0)] = cljs$core$async$mix_$_state_machine__27162__auto__);

(statearr_28306[(1)] = (1));

return statearr_28306;
});
var cljs$core$async$mix_$_state_machine__27162__auto____1 = (function (state_28250){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28307){if((e28307 instanceof Object)){
var ex__27165__auto__ = e28307;
var statearr_28308_28357 = state_28250;
(statearr_28308_28357[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28358 = state_28250;
state_28250 = G__28358;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27162__auto__ = function(state_28250){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27162__auto____1.call(this,state_28250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27162__auto____0;
cljs$core$async$mix_$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27162__auto____1;
return cljs$core$async$mix_$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27253__auto__ = (function (){var statearr_28309 = f__27252__auto__.call(null);
(statearr_28309[(6)] = c__27251__auto___28310);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28310,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28360 = arguments.length;
switch (G__28360) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28364 = arguments.length;
switch (G__28364) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28362_SHARP_){
if(cljs.core.truth_(p1__28362_SHARP_.call(null,topic))){
return p1__28362_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28362_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28365 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28366){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28366 = meta28366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28367,meta28366__$1){
var self__ = this;
var _28367__$1 = this;
return (new cljs.core.async.t_cljs$core$async28365(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28366__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28367){
var self__ = this;
var _28367__$1 = this;
return self__.meta28366;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28366","meta28366",-127160344,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28365";

cljs.core.async.t_cljs$core$async28365.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28365");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28365.
 */
cljs.core.async.__GT_t_cljs$core$async28365 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28366){
return (new cljs.core.async.t_cljs$core$async28365(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28366));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28365(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27251__auto___28485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28485,mults,ensure_mult,p){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28485,mults,ensure_mult,p){
return (function (state_28439){
var state_val_28440 = (state_28439[(1)]);
if((state_val_28440 === (7))){
var inst_28435 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28441_28486 = state_28439__$1;
(statearr_28441_28486[(2)] = inst_28435);

(statearr_28441_28486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (20))){
var state_28439__$1 = state_28439;
var statearr_28442_28487 = state_28439__$1;
(statearr_28442_28487[(2)] = null);

(statearr_28442_28487[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (1))){
var state_28439__$1 = state_28439;
var statearr_28443_28488 = state_28439__$1;
(statearr_28443_28488[(2)] = null);

(statearr_28443_28488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (24))){
var inst_28418 = (state_28439[(7)]);
var inst_28427 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28418);
var state_28439__$1 = state_28439;
var statearr_28444_28489 = state_28439__$1;
(statearr_28444_28489[(2)] = inst_28427);

(statearr_28444_28489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (4))){
var inst_28370 = (state_28439[(8)]);
var inst_28370__$1 = (state_28439[(2)]);
var inst_28371 = (inst_28370__$1 == null);
var state_28439__$1 = (function (){var statearr_28445 = state_28439;
(statearr_28445[(8)] = inst_28370__$1);

return statearr_28445;
})();
if(cljs.core.truth_(inst_28371)){
var statearr_28446_28490 = state_28439__$1;
(statearr_28446_28490[(1)] = (5));

} else {
var statearr_28447_28491 = state_28439__$1;
(statearr_28447_28491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (15))){
var inst_28412 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28448_28492 = state_28439__$1;
(statearr_28448_28492[(2)] = inst_28412);

(statearr_28448_28492[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (21))){
var inst_28432 = (state_28439[(2)]);
var state_28439__$1 = (function (){var statearr_28449 = state_28439;
(statearr_28449[(9)] = inst_28432);

return statearr_28449;
})();
var statearr_28450_28493 = state_28439__$1;
(statearr_28450_28493[(2)] = null);

(statearr_28450_28493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (13))){
var inst_28394 = (state_28439[(10)]);
var inst_28396 = cljs.core.chunked_seq_QMARK_.call(null,inst_28394);
var state_28439__$1 = state_28439;
if(inst_28396){
var statearr_28451_28494 = state_28439__$1;
(statearr_28451_28494[(1)] = (16));

} else {
var statearr_28452_28495 = state_28439__$1;
(statearr_28452_28495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (22))){
var inst_28424 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28424)){
var statearr_28453_28496 = state_28439__$1;
(statearr_28453_28496[(1)] = (23));

} else {
var statearr_28454_28497 = state_28439__$1;
(statearr_28454_28497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (6))){
var inst_28418 = (state_28439[(7)]);
var inst_28420 = (state_28439[(11)]);
var inst_28370 = (state_28439[(8)]);
var inst_28418__$1 = topic_fn.call(null,inst_28370);
var inst_28419 = cljs.core.deref.call(null,mults);
var inst_28420__$1 = cljs.core.get.call(null,inst_28419,inst_28418__$1);
var state_28439__$1 = (function (){var statearr_28455 = state_28439;
(statearr_28455[(7)] = inst_28418__$1);

(statearr_28455[(11)] = inst_28420__$1);

return statearr_28455;
})();
if(cljs.core.truth_(inst_28420__$1)){
var statearr_28456_28498 = state_28439__$1;
(statearr_28456_28498[(1)] = (19));

} else {
var statearr_28457_28499 = state_28439__$1;
(statearr_28457_28499[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (25))){
var inst_28429 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28458_28500 = state_28439__$1;
(statearr_28458_28500[(2)] = inst_28429);

(statearr_28458_28500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (17))){
var inst_28394 = (state_28439[(10)]);
var inst_28403 = cljs.core.first.call(null,inst_28394);
var inst_28404 = cljs.core.async.muxch_STAR_.call(null,inst_28403);
var inst_28405 = cljs.core.async.close_BANG_.call(null,inst_28404);
var inst_28406 = cljs.core.next.call(null,inst_28394);
var inst_28380 = inst_28406;
var inst_28381 = null;
var inst_28382 = (0);
var inst_28383 = (0);
var state_28439__$1 = (function (){var statearr_28459 = state_28439;
(statearr_28459[(12)] = inst_28380);

(statearr_28459[(13)] = inst_28382);

(statearr_28459[(14)] = inst_28381);

(statearr_28459[(15)] = inst_28383);

(statearr_28459[(16)] = inst_28405);

return statearr_28459;
})();
var statearr_28460_28501 = state_28439__$1;
(statearr_28460_28501[(2)] = null);

(statearr_28460_28501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (3))){
var inst_28437 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28439__$1,inst_28437);
} else {
if((state_val_28440 === (12))){
var inst_28414 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28461_28502 = state_28439__$1;
(statearr_28461_28502[(2)] = inst_28414);

(statearr_28461_28502[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (2))){
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28439__$1,(4),ch);
} else {
if((state_val_28440 === (23))){
var state_28439__$1 = state_28439;
var statearr_28462_28503 = state_28439__$1;
(statearr_28462_28503[(2)] = null);

(statearr_28462_28503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (19))){
var inst_28420 = (state_28439[(11)]);
var inst_28370 = (state_28439[(8)]);
var inst_28422 = cljs.core.async.muxch_STAR_.call(null,inst_28420);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28439__$1,(22),inst_28422,inst_28370);
} else {
if((state_val_28440 === (11))){
var inst_28380 = (state_28439[(12)]);
var inst_28394 = (state_28439[(10)]);
var inst_28394__$1 = cljs.core.seq.call(null,inst_28380);
var state_28439__$1 = (function (){var statearr_28463 = state_28439;
(statearr_28463[(10)] = inst_28394__$1);

return statearr_28463;
})();
if(inst_28394__$1){
var statearr_28464_28504 = state_28439__$1;
(statearr_28464_28504[(1)] = (13));

} else {
var statearr_28465_28505 = state_28439__$1;
(statearr_28465_28505[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (9))){
var inst_28416 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28466_28506 = state_28439__$1;
(statearr_28466_28506[(2)] = inst_28416);

(statearr_28466_28506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (5))){
var inst_28377 = cljs.core.deref.call(null,mults);
var inst_28378 = cljs.core.vals.call(null,inst_28377);
var inst_28379 = cljs.core.seq.call(null,inst_28378);
var inst_28380 = inst_28379;
var inst_28381 = null;
var inst_28382 = (0);
var inst_28383 = (0);
var state_28439__$1 = (function (){var statearr_28467 = state_28439;
(statearr_28467[(12)] = inst_28380);

(statearr_28467[(13)] = inst_28382);

(statearr_28467[(14)] = inst_28381);

(statearr_28467[(15)] = inst_28383);

return statearr_28467;
})();
var statearr_28468_28507 = state_28439__$1;
(statearr_28468_28507[(2)] = null);

(statearr_28468_28507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (14))){
var state_28439__$1 = state_28439;
var statearr_28472_28508 = state_28439__$1;
(statearr_28472_28508[(2)] = null);

(statearr_28472_28508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (16))){
var inst_28394 = (state_28439[(10)]);
var inst_28398 = cljs.core.chunk_first.call(null,inst_28394);
var inst_28399 = cljs.core.chunk_rest.call(null,inst_28394);
var inst_28400 = cljs.core.count.call(null,inst_28398);
var inst_28380 = inst_28399;
var inst_28381 = inst_28398;
var inst_28382 = inst_28400;
var inst_28383 = (0);
var state_28439__$1 = (function (){var statearr_28473 = state_28439;
(statearr_28473[(12)] = inst_28380);

(statearr_28473[(13)] = inst_28382);

(statearr_28473[(14)] = inst_28381);

(statearr_28473[(15)] = inst_28383);

return statearr_28473;
})();
var statearr_28474_28509 = state_28439__$1;
(statearr_28474_28509[(2)] = null);

(statearr_28474_28509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (10))){
var inst_28380 = (state_28439[(12)]);
var inst_28382 = (state_28439[(13)]);
var inst_28381 = (state_28439[(14)]);
var inst_28383 = (state_28439[(15)]);
var inst_28388 = cljs.core._nth.call(null,inst_28381,inst_28383);
var inst_28389 = cljs.core.async.muxch_STAR_.call(null,inst_28388);
var inst_28390 = cljs.core.async.close_BANG_.call(null,inst_28389);
var inst_28391 = (inst_28383 + (1));
var tmp28469 = inst_28380;
var tmp28470 = inst_28382;
var tmp28471 = inst_28381;
var inst_28380__$1 = tmp28469;
var inst_28381__$1 = tmp28471;
var inst_28382__$1 = tmp28470;
var inst_28383__$1 = inst_28391;
var state_28439__$1 = (function (){var statearr_28475 = state_28439;
(statearr_28475[(12)] = inst_28380__$1);

(statearr_28475[(13)] = inst_28382__$1);

(statearr_28475[(14)] = inst_28381__$1);

(statearr_28475[(15)] = inst_28383__$1);

(statearr_28475[(17)] = inst_28390);

return statearr_28475;
})();
var statearr_28476_28510 = state_28439__$1;
(statearr_28476_28510[(2)] = null);

(statearr_28476_28510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (18))){
var inst_28409 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28477_28511 = state_28439__$1;
(statearr_28477_28511[(2)] = inst_28409);

(statearr_28477_28511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (8))){
var inst_28382 = (state_28439[(13)]);
var inst_28383 = (state_28439[(15)]);
var inst_28385 = (inst_28383 < inst_28382);
var inst_28386 = inst_28385;
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28386)){
var statearr_28478_28512 = state_28439__$1;
(statearr_28478_28512[(1)] = (10));

} else {
var statearr_28479_28513 = state_28439__$1;
(statearr_28479_28513[(1)] = (11));

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
});})(c__27251__auto___28485,mults,ensure_mult,p))
;
return ((function (switch__27161__auto__,c__27251__auto___28485,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28480[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28480[(1)] = (1));

return statearr_28480;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28439){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28481){if((e28481 instanceof Object)){
var ex__27165__auto__ = e28481;
var statearr_28482_28514 = state_28439;
(statearr_28482_28514[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28515 = state_28439;
state_28439 = G__28515;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28485,mults,ensure_mult,p))
})();
var state__27253__auto__ = (function (){var statearr_28483 = f__27252__auto__.call(null);
(statearr_28483[(6)] = c__27251__auto___28485);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28485,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28517 = arguments.length;
switch (G__28517) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28520 = arguments.length;
switch (G__28520) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28523 = arguments.length;
switch (G__28523) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27251__auto___28590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28562){
var state_val_28563 = (state_28562[(1)]);
if((state_val_28563 === (7))){
var state_28562__$1 = state_28562;
var statearr_28564_28591 = state_28562__$1;
(statearr_28564_28591[(2)] = null);

(statearr_28564_28591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (1))){
var state_28562__$1 = state_28562;
var statearr_28565_28592 = state_28562__$1;
(statearr_28565_28592[(2)] = null);

(statearr_28565_28592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (4))){
var inst_28526 = (state_28562[(7)]);
var inst_28528 = (inst_28526 < cnt);
var state_28562__$1 = state_28562;
if(cljs.core.truth_(inst_28528)){
var statearr_28566_28593 = state_28562__$1;
(statearr_28566_28593[(1)] = (6));

} else {
var statearr_28567_28594 = state_28562__$1;
(statearr_28567_28594[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (15))){
var inst_28558 = (state_28562[(2)]);
var state_28562__$1 = state_28562;
var statearr_28568_28595 = state_28562__$1;
(statearr_28568_28595[(2)] = inst_28558);

(statearr_28568_28595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (13))){
var inst_28551 = cljs.core.async.close_BANG_.call(null,out);
var state_28562__$1 = state_28562;
var statearr_28569_28596 = state_28562__$1;
(statearr_28569_28596[(2)] = inst_28551);

(statearr_28569_28596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (6))){
var state_28562__$1 = state_28562;
var statearr_28570_28597 = state_28562__$1;
(statearr_28570_28597[(2)] = null);

(statearr_28570_28597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (3))){
var inst_28560 = (state_28562[(2)]);
var state_28562__$1 = state_28562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28562__$1,inst_28560);
} else {
if((state_val_28563 === (12))){
var inst_28548 = (state_28562[(8)]);
var inst_28548__$1 = (state_28562[(2)]);
var inst_28549 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28548__$1);
var state_28562__$1 = (function (){var statearr_28571 = state_28562;
(statearr_28571[(8)] = inst_28548__$1);

return statearr_28571;
})();
if(cljs.core.truth_(inst_28549)){
var statearr_28572_28598 = state_28562__$1;
(statearr_28572_28598[(1)] = (13));

} else {
var statearr_28573_28599 = state_28562__$1;
(statearr_28573_28599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (2))){
var inst_28525 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28526 = (0);
var state_28562__$1 = (function (){var statearr_28574 = state_28562;
(statearr_28574[(9)] = inst_28525);

(statearr_28574[(7)] = inst_28526);

return statearr_28574;
})();
var statearr_28575_28600 = state_28562__$1;
(statearr_28575_28600[(2)] = null);

(statearr_28575_28600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (11))){
var inst_28526 = (state_28562[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28562,(10),Object,null,(9));
var inst_28535 = chs__$1.call(null,inst_28526);
var inst_28536 = done.call(null,inst_28526);
var inst_28537 = cljs.core.async.take_BANG_.call(null,inst_28535,inst_28536);
var state_28562__$1 = state_28562;
var statearr_28576_28601 = state_28562__$1;
(statearr_28576_28601[(2)] = inst_28537);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (9))){
var inst_28526 = (state_28562[(7)]);
var inst_28539 = (state_28562[(2)]);
var inst_28540 = (inst_28526 + (1));
var inst_28526__$1 = inst_28540;
var state_28562__$1 = (function (){var statearr_28577 = state_28562;
(statearr_28577[(10)] = inst_28539);

(statearr_28577[(7)] = inst_28526__$1);

return statearr_28577;
})();
var statearr_28578_28602 = state_28562__$1;
(statearr_28578_28602[(2)] = null);

(statearr_28578_28602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (5))){
var inst_28546 = (state_28562[(2)]);
var state_28562__$1 = (function (){var statearr_28579 = state_28562;
(statearr_28579[(11)] = inst_28546);

return statearr_28579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28562__$1,(12),dchan);
} else {
if((state_val_28563 === (14))){
var inst_28548 = (state_28562[(8)]);
var inst_28553 = cljs.core.apply.call(null,f,inst_28548);
var state_28562__$1 = state_28562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28562__$1,(16),out,inst_28553);
} else {
if((state_val_28563 === (16))){
var inst_28555 = (state_28562[(2)]);
var state_28562__$1 = (function (){var statearr_28580 = state_28562;
(statearr_28580[(12)] = inst_28555);

return statearr_28580;
})();
var statearr_28581_28603 = state_28562__$1;
(statearr_28581_28603[(2)] = null);

(statearr_28581_28603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (10))){
var inst_28530 = (state_28562[(2)]);
var inst_28531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28562__$1 = (function (){var statearr_28582 = state_28562;
(statearr_28582[(13)] = inst_28530);

return statearr_28582;
})();
var statearr_28583_28604 = state_28562__$1;
(statearr_28583_28604[(2)] = inst_28531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28562__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (8))){
var inst_28544 = (state_28562[(2)]);
var state_28562__$1 = state_28562;
var statearr_28584_28605 = state_28562__$1;
(statearr_28584_28605[(2)] = inst_28544);

(statearr_28584_28605[(1)] = (5));


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
});})(c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27161__auto__,c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28585[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28585[(1)] = (1));

return statearr_28585;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28562){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28586){if((e28586 instanceof Object)){
var ex__27165__auto__ = e28586;
var statearr_28587_28606 = state_28562;
(statearr_28587_28606[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28607 = state_28562;
state_28562 = G__28607;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28562){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28562);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27253__auto__ = (function (){var statearr_28588 = f__27252__auto__.call(null);
(statearr_28588[(6)] = c__27251__auto___28590);

return statearr_28588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28590,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28610 = arguments.length;
switch (G__28610) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___28664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28664,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28664,out){
return (function (state_28642){
var state_val_28643 = (state_28642[(1)]);
if((state_val_28643 === (7))){
var inst_28621 = (state_28642[(7)]);
var inst_28622 = (state_28642[(8)]);
var inst_28621__$1 = (state_28642[(2)]);
var inst_28622__$1 = cljs.core.nth.call(null,inst_28621__$1,(0),null);
var inst_28623 = cljs.core.nth.call(null,inst_28621__$1,(1),null);
var inst_28624 = (inst_28622__$1 == null);
var state_28642__$1 = (function (){var statearr_28644 = state_28642;
(statearr_28644[(7)] = inst_28621__$1);

(statearr_28644[(9)] = inst_28623);

(statearr_28644[(8)] = inst_28622__$1);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28624)){
var statearr_28645_28665 = state_28642__$1;
(statearr_28645_28665[(1)] = (8));

} else {
var statearr_28646_28666 = state_28642__$1;
(statearr_28646_28666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (1))){
var inst_28611 = cljs.core.vec.call(null,chs);
var inst_28612 = inst_28611;
var state_28642__$1 = (function (){var statearr_28647 = state_28642;
(statearr_28647[(10)] = inst_28612);

return statearr_28647;
})();
var statearr_28648_28667 = state_28642__$1;
(statearr_28648_28667[(2)] = null);

(statearr_28648_28667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (4))){
var inst_28612 = (state_28642[(10)]);
var state_28642__$1 = state_28642;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28642__$1,(7),inst_28612);
} else {
if((state_val_28643 === (6))){
var inst_28638 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
var statearr_28649_28668 = state_28642__$1;
(statearr_28649_28668[(2)] = inst_28638);

(statearr_28649_28668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (3))){
var inst_28640 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28642__$1,inst_28640);
} else {
if((state_val_28643 === (2))){
var inst_28612 = (state_28642[(10)]);
var inst_28614 = cljs.core.count.call(null,inst_28612);
var inst_28615 = (inst_28614 > (0));
var state_28642__$1 = state_28642;
if(cljs.core.truth_(inst_28615)){
var statearr_28651_28669 = state_28642__$1;
(statearr_28651_28669[(1)] = (4));

} else {
var statearr_28652_28670 = state_28642__$1;
(statearr_28652_28670[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (11))){
var inst_28612 = (state_28642[(10)]);
var inst_28631 = (state_28642[(2)]);
var tmp28650 = inst_28612;
var inst_28612__$1 = tmp28650;
var state_28642__$1 = (function (){var statearr_28653 = state_28642;
(statearr_28653[(11)] = inst_28631);

(statearr_28653[(10)] = inst_28612__$1);

return statearr_28653;
})();
var statearr_28654_28671 = state_28642__$1;
(statearr_28654_28671[(2)] = null);

(statearr_28654_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (9))){
var inst_28622 = (state_28642[(8)]);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28642__$1,(11),out,inst_28622);
} else {
if((state_val_28643 === (5))){
var inst_28636 = cljs.core.async.close_BANG_.call(null,out);
var state_28642__$1 = state_28642;
var statearr_28655_28672 = state_28642__$1;
(statearr_28655_28672[(2)] = inst_28636);

(statearr_28655_28672[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (10))){
var inst_28634 = (state_28642[(2)]);
var state_28642__$1 = state_28642;
var statearr_28656_28673 = state_28642__$1;
(statearr_28656_28673[(2)] = inst_28634);

(statearr_28656_28673[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28643 === (8))){
var inst_28612 = (state_28642[(10)]);
var inst_28621 = (state_28642[(7)]);
var inst_28623 = (state_28642[(9)]);
var inst_28622 = (state_28642[(8)]);
var inst_28626 = (function (){var cs = inst_28612;
var vec__28617 = inst_28621;
var v = inst_28622;
var c = inst_28623;
return ((function (cs,vec__28617,v,c,inst_28612,inst_28621,inst_28623,inst_28622,state_val_28643,c__27251__auto___28664,out){
return (function (p1__28608_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28608_SHARP_);
});
;})(cs,vec__28617,v,c,inst_28612,inst_28621,inst_28623,inst_28622,state_val_28643,c__27251__auto___28664,out))
})();
var inst_28627 = cljs.core.filterv.call(null,inst_28626,inst_28612);
var inst_28612__$1 = inst_28627;
var state_28642__$1 = (function (){var statearr_28657 = state_28642;
(statearr_28657[(10)] = inst_28612__$1);

return statearr_28657;
})();
var statearr_28658_28674 = state_28642__$1;
(statearr_28658_28674[(2)] = null);

(statearr_28658_28674[(1)] = (2));


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
});})(c__27251__auto___28664,out))
;
return ((function (switch__27161__auto__,c__27251__auto___28664,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28659 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28659[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28659[(1)] = (1));

return statearr_28659;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28642){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28660){if((e28660 instanceof Object)){
var ex__27165__auto__ = e28660;
var statearr_28661_28675 = state_28642;
(statearr_28661_28675[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28676 = state_28642;
state_28642 = G__28676;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28642);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28664,out))
})();
var state__27253__auto__ = (function (){var statearr_28662 = f__27252__auto__.call(null);
(statearr_28662[(6)] = c__27251__auto___28664);

return statearr_28662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28664,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28678 = arguments.length;
switch (G__28678) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___28723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28723,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28723,out){
return (function (state_28702){
var state_val_28703 = (state_28702[(1)]);
if((state_val_28703 === (7))){
var inst_28684 = (state_28702[(7)]);
var inst_28684__$1 = (state_28702[(2)]);
var inst_28685 = (inst_28684__$1 == null);
var inst_28686 = cljs.core.not.call(null,inst_28685);
var state_28702__$1 = (function (){var statearr_28704 = state_28702;
(statearr_28704[(7)] = inst_28684__$1);

return statearr_28704;
})();
if(inst_28686){
var statearr_28705_28724 = state_28702__$1;
(statearr_28705_28724[(1)] = (8));

} else {
var statearr_28706_28725 = state_28702__$1;
(statearr_28706_28725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (1))){
var inst_28679 = (0);
var state_28702__$1 = (function (){var statearr_28707 = state_28702;
(statearr_28707[(8)] = inst_28679);

return statearr_28707;
})();
var statearr_28708_28726 = state_28702__$1;
(statearr_28708_28726[(2)] = null);

(statearr_28708_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (4))){
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28702__$1,(7),ch);
} else {
if((state_val_28703 === (6))){
var inst_28697 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28709_28727 = state_28702__$1;
(statearr_28709_28727[(2)] = inst_28697);

(statearr_28709_28727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (3))){
var inst_28699 = (state_28702[(2)]);
var inst_28700 = cljs.core.async.close_BANG_.call(null,out);
var state_28702__$1 = (function (){var statearr_28710 = state_28702;
(statearr_28710[(9)] = inst_28699);

return statearr_28710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28702__$1,inst_28700);
} else {
if((state_val_28703 === (2))){
var inst_28679 = (state_28702[(8)]);
var inst_28681 = (inst_28679 < n);
var state_28702__$1 = state_28702;
if(cljs.core.truth_(inst_28681)){
var statearr_28711_28728 = state_28702__$1;
(statearr_28711_28728[(1)] = (4));

} else {
var statearr_28712_28729 = state_28702__$1;
(statearr_28712_28729[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (11))){
var inst_28679 = (state_28702[(8)]);
var inst_28689 = (state_28702[(2)]);
var inst_28690 = (inst_28679 + (1));
var inst_28679__$1 = inst_28690;
var state_28702__$1 = (function (){var statearr_28713 = state_28702;
(statearr_28713[(8)] = inst_28679__$1);

(statearr_28713[(10)] = inst_28689);

return statearr_28713;
})();
var statearr_28714_28730 = state_28702__$1;
(statearr_28714_28730[(2)] = null);

(statearr_28714_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (9))){
var state_28702__$1 = state_28702;
var statearr_28715_28731 = state_28702__$1;
(statearr_28715_28731[(2)] = null);

(statearr_28715_28731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (5))){
var state_28702__$1 = state_28702;
var statearr_28716_28732 = state_28702__$1;
(statearr_28716_28732[(2)] = null);

(statearr_28716_28732[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (10))){
var inst_28694 = (state_28702[(2)]);
var state_28702__$1 = state_28702;
var statearr_28717_28733 = state_28702__$1;
(statearr_28717_28733[(2)] = inst_28694);

(statearr_28717_28733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28703 === (8))){
var inst_28684 = (state_28702[(7)]);
var state_28702__$1 = state_28702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28702__$1,(11),out,inst_28684);
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
});})(c__27251__auto___28723,out))
;
return ((function (switch__27161__auto__,c__27251__auto___28723,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28718[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28718[(1)] = (1));

return statearr_28718;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28702){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28719){if((e28719 instanceof Object)){
var ex__27165__auto__ = e28719;
var statearr_28720_28734 = state_28702;
(statearr_28720_28734[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28735 = state_28702;
state_28702 = G__28735;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28702){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28702);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28723,out))
})();
var state__27253__auto__ = (function (){var statearr_28721 = f__27252__auto__.call(null);
(statearr_28721[(6)] = c__27251__auto___28723);

return statearr_28721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28723,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28737 = (function (f,ch,meta28738){
this.f = f;
this.ch = ch;
this.meta28738 = meta28738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28739,meta28738__$1){
var self__ = this;
var _28739__$1 = this;
return (new cljs.core.async.t_cljs$core$async28737(self__.f,self__.ch,meta28738__$1));
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28739){
var self__ = this;
var _28739__$1 = this;
return self__.meta28738;
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28740 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28740 = (function (f,ch,meta28738,_,fn1,meta28741){
this.f = f;
this.ch = ch;
this.meta28738 = meta28738;
this._ = _;
this.fn1 = fn1;
this.meta28741 = meta28741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28742,meta28741__$1){
var self__ = this;
var _28742__$1 = this;
return (new cljs.core.async.t_cljs$core$async28740(self__.f,self__.ch,self__.meta28738,self__._,self__.fn1,meta28741__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28742){
var self__ = this;
var _28742__$1 = this;
return self__.meta28741;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28736_SHARP_){
return f1.call(null,(((p1__28736_SHARP_ == null))?null:self__.f.call(null,p1__28736_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28737","cljs.core.async/t_cljs$core$async28737",-1789742789,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28741","meta28741",750526068,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28740.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28740";

cljs.core.async.t_cljs$core$async28740.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28740");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28740.
 */
cljs.core.async.__GT_t_cljs$core$async28740 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28740(f__$1,ch__$1,meta28738__$1,___$2,fn1__$1,meta28741){
return (new cljs.core.async.t_cljs$core$async28740(f__$1,ch__$1,meta28738__$1,___$2,fn1__$1,meta28741));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28740(self__.f,self__.ch,self__.meta28738,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28737.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28738","meta28738",-1436967506,null)], null);
});

cljs.core.async.t_cljs$core$async28737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28737";

cljs.core.async.t_cljs$core$async28737.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28737");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28737.
 */
cljs.core.async.__GT_t_cljs$core$async28737 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28737(f__$1,ch__$1,meta28738){
return (new cljs.core.async.t_cljs$core$async28737(f__$1,ch__$1,meta28738));
});

}

return (new cljs.core.async.t_cljs$core$async28737(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28743 = (function (f,ch,meta28744){
this.f = f;
this.ch = ch;
this.meta28744 = meta28744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28745,meta28744__$1){
var self__ = this;
var _28745__$1 = this;
return (new cljs.core.async.t_cljs$core$async28743(self__.f,self__.ch,meta28744__$1));
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28745){
var self__ = this;
var _28745__$1 = this;
return self__.meta28744;
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28744","meta28744",-1219143562,null)], null);
});

cljs.core.async.t_cljs$core$async28743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28743";

cljs.core.async.t_cljs$core$async28743.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28743");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28743.
 */
cljs.core.async.__GT_t_cljs$core$async28743 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28743(f__$1,ch__$1,meta28744){
return (new cljs.core.async.t_cljs$core$async28743(f__$1,ch__$1,meta28744));
});

}

return (new cljs.core.async.t_cljs$core$async28743(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28746 = (function (p,ch,meta28747){
this.p = p;
this.ch = ch;
this.meta28747 = meta28747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28748,meta28747__$1){
var self__ = this;
var _28748__$1 = this;
return (new cljs.core.async.t_cljs$core$async28746(self__.p,self__.ch,meta28747__$1));
});

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28748){
var self__ = this;
var _28748__$1 = this;
return self__.meta28747;
});

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28747","meta28747",812716547,null)], null);
});

cljs.core.async.t_cljs$core$async28746.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28746";

cljs.core.async.t_cljs$core$async28746.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28746");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28746.
 */
cljs.core.async.__GT_t_cljs$core$async28746 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28746(p__$1,ch__$1,meta28747){
return (new cljs.core.async.t_cljs$core$async28746(p__$1,ch__$1,meta28747));
});

}

return (new cljs.core.async.t_cljs$core$async28746(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28750 = arguments.length;
switch (G__28750) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___28790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28790,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28790,out){
return (function (state_28771){
var state_val_28772 = (state_28771[(1)]);
if((state_val_28772 === (7))){
var inst_28767 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28773_28791 = state_28771__$1;
(statearr_28773_28791[(2)] = inst_28767);

(statearr_28773_28791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (1))){
var state_28771__$1 = state_28771;
var statearr_28774_28792 = state_28771__$1;
(statearr_28774_28792[(2)] = null);

(statearr_28774_28792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (4))){
var inst_28753 = (state_28771[(7)]);
var inst_28753__$1 = (state_28771[(2)]);
var inst_28754 = (inst_28753__$1 == null);
var state_28771__$1 = (function (){var statearr_28775 = state_28771;
(statearr_28775[(7)] = inst_28753__$1);

return statearr_28775;
})();
if(cljs.core.truth_(inst_28754)){
var statearr_28776_28793 = state_28771__$1;
(statearr_28776_28793[(1)] = (5));

} else {
var statearr_28777_28794 = state_28771__$1;
(statearr_28777_28794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (6))){
var inst_28753 = (state_28771[(7)]);
var inst_28758 = p.call(null,inst_28753);
var state_28771__$1 = state_28771;
if(cljs.core.truth_(inst_28758)){
var statearr_28778_28795 = state_28771__$1;
(statearr_28778_28795[(1)] = (8));

} else {
var statearr_28779_28796 = state_28771__$1;
(statearr_28779_28796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (3))){
var inst_28769 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28771__$1,inst_28769);
} else {
if((state_val_28772 === (2))){
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(4),ch);
} else {
if((state_val_28772 === (11))){
var inst_28761 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28780_28797 = state_28771__$1;
(statearr_28780_28797[(2)] = inst_28761);

(statearr_28780_28797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (9))){
var state_28771__$1 = state_28771;
var statearr_28781_28798 = state_28771__$1;
(statearr_28781_28798[(2)] = null);

(statearr_28781_28798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (5))){
var inst_28756 = cljs.core.async.close_BANG_.call(null,out);
var state_28771__$1 = state_28771;
var statearr_28782_28799 = state_28771__$1;
(statearr_28782_28799[(2)] = inst_28756);

(statearr_28782_28799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (10))){
var inst_28764 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28783 = state_28771;
(statearr_28783[(8)] = inst_28764);

return statearr_28783;
})();
var statearr_28784_28800 = state_28771__$1;
(statearr_28784_28800[(2)] = null);

(statearr_28784_28800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (8))){
var inst_28753 = (state_28771[(7)]);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28771__$1,(11),out,inst_28753);
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
});})(c__27251__auto___28790,out))
;
return ((function (switch__27161__auto__,c__27251__auto___28790,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28785 = [null,null,null,null,null,null,null,null,null];
(statearr_28785[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28785[(1)] = (1));

return statearr_28785;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28771){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28786){if((e28786 instanceof Object)){
var ex__27165__auto__ = e28786;
var statearr_28787_28801 = state_28771;
(statearr_28787_28801[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28802 = state_28771;
state_28771 = G__28802;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28790,out))
})();
var state__27253__auto__ = (function (){var statearr_28788 = f__27252__auto__.call(null);
(statearr_28788[(6)] = c__27251__auto___28790);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28790,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28804 = arguments.length;
switch (G__28804) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27251__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto__){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto__){
return (function (state_28867){
var state_val_28868 = (state_28867[(1)]);
if((state_val_28868 === (7))){
var inst_28863 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28869_28907 = state_28867__$1;
(statearr_28869_28907[(2)] = inst_28863);

(statearr_28869_28907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (20))){
var inst_28833 = (state_28867[(7)]);
var inst_28844 = (state_28867[(2)]);
var inst_28845 = cljs.core.next.call(null,inst_28833);
var inst_28819 = inst_28845;
var inst_28820 = null;
var inst_28821 = (0);
var inst_28822 = (0);
var state_28867__$1 = (function (){var statearr_28870 = state_28867;
(statearr_28870[(8)] = inst_28844);

(statearr_28870[(9)] = inst_28822);

(statearr_28870[(10)] = inst_28820);

(statearr_28870[(11)] = inst_28819);

(statearr_28870[(12)] = inst_28821);

return statearr_28870;
})();
var statearr_28871_28908 = state_28867__$1;
(statearr_28871_28908[(2)] = null);

(statearr_28871_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (1))){
var state_28867__$1 = state_28867;
var statearr_28872_28909 = state_28867__$1;
(statearr_28872_28909[(2)] = null);

(statearr_28872_28909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (4))){
var inst_28808 = (state_28867[(13)]);
var inst_28808__$1 = (state_28867[(2)]);
var inst_28809 = (inst_28808__$1 == null);
var state_28867__$1 = (function (){var statearr_28873 = state_28867;
(statearr_28873[(13)] = inst_28808__$1);

return statearr_28873;
})();
if(cljs.core.truth_(inst_28809)){
var statearr_28874_28910 = state_28867__$1;
(statearr_28874_28910[(1)] = (5));

} else {
var statearr_28875_28911 = state_28867__$1;
(statearr_28875_28911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (15))){
var state_28867__$1 = state_28867;
var statearr_28879_28912 = state_28867__$1;
(statearr_28879_28912[(2)] = null);

(statearr_28879_28912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (21))){
var state_28867__$1 = state_28867;
var statearr_28880_28913 = state_28867__$1;
(statearr_28880_28913[(2)] = null);

(statearr_28880_28913[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (13))){
var inst_28822 = (state_28867[(9)]);
var inst_28820 = (state_28867[(10)]);
var inst_28819 = (state_28867[(11)]);
var inst_28821 = (state_28867[(12)]);
var inst_28829 = (state_28867[(2)]);
var inst_28830 = (inst_28822 + (1));
var tmp28876 = inst_28820;
var tmp28877 = inst_28819;
var tmp28878 = inst_28821;
var inst_28819__$1 = tmp28877;
var inst_28820__$1 = tmp28876;
var inst_28821__$1 = tmp28878;
var inst_28822__$1 = inst_28830;
var state_28867__$1 = (function (){var statearr_28881 = state_28867;
(statearr_28881[(9)] = inst_28822__$1);

(statearr_28881[(14)] = inst_28829);

(statearr_28881[(10)] = inst_28820__$1);

(statearr_28881[(11)] = inst_28819__$1);

(statearr_28881[(12)] = inst_28821__$1);

return statearr_28881;
})();
var statearr_28882_28914 = state_28867__$1;
(statearr_28882_28914[(2)] = null);

(statearr_28882_28914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (22))){
var state_28867__$1 = state_28867;
var statearr_28883_28915 = state_28867__$1;
(statearr_28883_28915[(2)] = null);

(statearr_28883_28915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (6))){
var inst_28808 = (state_28867[(13)]);
var inst_28817 = f.call(null,inst_28808);
var inst_28818 = cljs.core.seq.call(null,inst_28817);
var inst_28819 = inst_28818;
var inst_28820 = null;
var inst_28821 = (0);
var inst_28822 = (0);
var state_28867__$1 = (function (){var statearr_28884 = state_28867;
(statearr_28884[(9)] = inst_28822);

(statearr_28884[(10)] = inst_28820);

(statearr_28884[(11)] = inst_28819);

(statearr_28884[(12)] = inst_28821);

return statearr_28884;
})();
var statearr_28885_28916 = state_28867__$1;
(statearr_28885_28916[(2)] = null);

(statearr_28885_28916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (17))){
var inst_28833 = (state_28867[(7)]);
var inst_28837 = cljs.core.chunk_first.call(null,inst_28833);
var inst_28838 = cljs.core.chunk_rest.call(null,inst_28833);
var inst_28839 = cljs.core.count.call(null,inst_28837);
var inst_28819 = inst_28838;
var inst_28820 = inst_28837;
var inst_28821 = inst_28839;
var inst_28822 = (0);
var state_28867__$1 = (function (){var statearr_28886 = state_28867;
(statearr_28886[(9)] = inst_28822);

(statearr_28886[(10)] = inst_28820);

(statearr_28886[(11)] = inst_28819);

(statearr_28886[(12)] = inst_28821);

return statearr_28886;
})();
var statearr_28887_28917 = state_28867__$1;
(statearr_28887_28917[(2)] = null);

(statearr_28887_28917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (3))){
var inst_28865 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28867__$1,inst_28865);
} else {
if((state_val_28868 === (12))){
var inst_28853 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28888_28918 = state_28867__$1;
(statearr_28888_28918[(2)] = inst_28853);

(statearr_28888_28918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (2))){
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28867__$1,(4),in$);
} else {
if((state_val_28868 === (23))){
var inst_28861 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28889_28919 = state_28867__$1;
(statearr_28889_28919[(2)] = inst_28861);

(statearr_28889_28919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (19))){
var inst_28848 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28890_28920 = state_28867__$1;
(statearr_28890_28920[(2)] = inst_28848);

(statearr_28890_28920[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (11))){
var inst_28833 = (state_28867[(7)]);
var inst_28819 = (state_28867[(11)]);
var inst_28833__$1 = cljs.core.seq.call(null,inst_28819);
var state_28867__$1 = (function (){var statearr_28891 = state_28867;
(statearr_28891[(7)] = inst_28833__$1);

return statearr_28891;
})();
if(inst_28833__$1){
var statearr_28892_28921 = state_28867__$1;
(statearr_28892_28921[(1)] = (14));

} else {
var statearr_28893_28922 = state_28867__$1;
(statearr_28893_28922[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (9))){
var inst_28855 = (state_28867[(2)]);
var inst_28856 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28867__$1 = (function (){var statearr_28894 = state_28867;
(statearr_28894[(15)] = inst_28855);

return statearr_28894;
})();
if(cljs.core.truth_(inst_28856)){
var statearr_28895_28923 = state_28867__$1;
(statearr_28895_28923[(1)] = (21));

} else {
var statearr_28896_28924 = state_28867__$1;
(statearr_28896_28924[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (5))){
var inst_28811 = cljs.core.async.close_BANG_.call(null,out);
var state_28867__$1 = state_28867;
var statearr_28897_28925 = state_28867__$1;
(statearr_28897_28925[(2)] = inst_28811);

(statearr_28897_28925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (14))){
var inst_28833 = (state_28867[(7)]);
var inst_28835 = cljs.core.chunked_seq_QMARK_.call(null,inst_28833);
var state_28867__$1 = state_28867;
if(inst_28835){
var statearr_28898_28926 = state_28867__$1;
(statearr_28898_28926[(1)] = (17));

} else {
var statearr_28899_28927 = state_28867__$1;
(statearr_28899_28927[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (16))){
var inst_28851 = (state_28867[(2)]);
var state_28867__$1 = state_28867;
var statearr_28900_28928 = state_28867__$1;
(statearr_28900_28928[(2)] = inst_28851);

(statearr_28900_28928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28868 === (10))){
var inst_28822 = (state_28867[(9)]);
var inst_28820 = (state_28867[(10)]);
var inst_28827 = cljs.core._nth.call(null,inst_28820,inst_28822);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(13),out,inst_28827);
} else {
if((state_val_28868 === (18))){
var inst_28833 = (state_28867[(7)]);
var inst_28842 = cljs.core.first.call(null,inst_28833);
var state_28867__$1 = state_28867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28867__$1,(20),out,inst_28842);
} else {
if((state_val_28868 === (8))){
var inst_28822 = (state_28867[(9)]);
var inst_28821 = (state_28867[(12)]);
var inst_28824 = (inst_28822 < inst_28821);
var inst_28825 = inst_28824;
var state_28867__$1 = state_28867;
if(cljs.core.truth_(inst_28825)){
var statearr_28901_28929 = state_28867__$1;
(statearr_28901_28929[(1)] = (10));

} else {
var statearr_28902_28930 = state_28867__$1;
(statearr_28902_28930[(1)] = (11));

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
});})(c__27251__auto__))
;
return ((function (switch__27161__auto__,c__27251__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____0 = (function (){
var statearr_28903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28903[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__);

(statearr_28903[(1)] = (1));

return statearr_28903;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____1 = (function (state_28867){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28904){if((e28904 instanceof Object)){
var ex__27165__auto__ = e28904;
var statearr_28905_28931 = state_28867;
(statearr_28905_28931[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28932 = state_28867;
state_28867 = G__28932;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__ = function(state_28867){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____1.call(this,state_28867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27162__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto__))
})();
var state__27253__auto__ = (function (){var statearr_28906 = f__27252__auto__.call(null);
(statearr_28906[(6)] = c__27251__auto__);

return statearr_28906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto__))
);

return c__27251__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28934 = arguments.length;
switch (G__28934) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28937 = arguments.length;
switch (G__28937) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28940 = arguments.length;
switch (G__28940) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___28987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___28987,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___28987,out){
return (function (state_28964){
var state_val_28965 = (state_28964[(1)]);
if((state_val_28965 === (7))){
var inst_28959 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28966_28988 = state_28964__$1;
(statearr_28966_28988[(2)] = inst_28959);

(statearr_28966_28988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (1))){
var inst_28941 = null;
var state_28964__$1 = (function (){var statearr_28967 = state_28964;
(statearr_28967[(7)] = inst_28941);

return statearr_28967;
})();
var statearr_28968_28989 = state_28964__$1;
(statearr_28968_28989[(2)] = null);

(statearr_28968_28989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (4))){
var inst_28944 = (state_28964[(8)]);
var inst_28944__$1 = (state_28964[(2)]);
var inst_28945 = (inst_28944__$1 == null);
var inst_28946 = cljs.core.not.call(null,inst_28945);
var state_28964__$1 = (function (){var statearr_28969 = state_28964;
(statearr_28969[(8)] = inst_28944__$1);

return statearr_28969;
})();
if(inst_28946){
var statearr_28970_28990 = state_28964__$1;
(statearr_28970_28990[(1)] = (5));

} else {
var statearr_28971_28991 = state_28964__$1;
(statearr_28971_28991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (6))){
var state_28964__$1 = state_28964;
var statearr_28972_28992 = state_28964__$1;
(statearr_28972_28992[(2)] = null);

(statearr_28972_28992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (3))){
var inst_28961 = (state_28964[(2)]);
var inst_28962 = cljs.core.async.close_BANG_.call(null,out);
var state_28964__$1 = (function (){var statearr_28973 = state_28964;
(statearr_28973[(9)] = inst_28961);

return statearr_28973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28964__$1,inst_28962);
} else {
if((state_val_28965 === (2))){
var state_28964__$1 = state_28964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28964__$1,(4),ch);
} else {
if((state_val_28965 === (11))){
var inst_28944 = (state_28964[(8)]);
var inst_28953 = (state_28964[(2)]);
var inst_28941 = inst_28944;
var state_28964__$1 = (function (){var statearr_28974 = state_28964;
(statearr_28974[(7)] = inst_28941);

(statearr_28974[(10)] = inst_28953);

return statearr_28974;
})();
var statearr_28975_28993 = state_28964__$1;
(statearr_28975_28993[(2)] = null);

(statearr_28975_28993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (9))){
var inst_28944 = (state_28964[(8)]);
var state_28964__$1 = state_28964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28964__$1,(11),out,inst_28944);
} else {
if((state_val_28965 === (5))){
var inst_28941 = (state_28964[(7)]);
var inst_28944 = (state_28964[(8)]);
var inst_28948 = cljs.core._EQ_.call(null,inst_28944,inst_28941);
var state_28964__$1 = state_28964;
if(inst_28948){
var statearr_28977_28994 = state_28964__$1;
(statearr_28977_28994[(1)] = (8));

} else {
var statearr_28978_28995 = state_28964__$1;
(statearr_28978_28995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (10))){
var inst_28956 = (state_28964[(2)]);
var state_28964__$1 = state_28964;
var statearr_28979_28996 = state_28964__$1;
(statearr_28979_28996[(2)] = inst_28956);

(statearr_28979_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28965 === (8))){
var inst_28941 = (state_28964[(7)]);
var tmp28976 = inst_28941;
var inst_28941__$1 = tmp28976;
var state_28964__$1 = (function (){var statearr_28980 = state_28964;
(statearr_28980[(7)] = inst_28941__$1);

return statearr_28980;
})();
var statearr_28981_28997 = state_28964__$1;
(statearr_28981_28997[(2)] = null);

(statearr_28981_28997[(1)] = (2));


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
});})(c__27251__auto___28987,out))
;
return ((function (switch__27161__auto__,c__27251__auto___28987,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_28982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28982[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_28982[(1)] = (1));

return statearr_28982;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_28964){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_28964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e28983){if((e28983 instanceof Object)){
var ex__27165__auto__ = e28983;
var statearr_28984_28998 = state_28964;
(statearr_28984_28998[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28999 = state_28964;
state_28964 = G__28999;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_28964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_28964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___28987,out))
})();
var state__27253__auto__ = (function (){var statearr_28985 = f__27252__auto__.call(null);
(statearr_28985[(6)] = c__27251__auto___28987);

return statearr_28985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___28987,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29001 = arguments.length;
switch (G__29001) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___29067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___29067,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___29067,out){
return (function (state_29039){
var state_val_29040 = (state_29039[(1)]);
if((state_val_29040 === (7))){
var inst_29035 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29041_29068 = state_29039__$1;
(statearr_29041_29068[(2)] = inst_29035);

(statearr_29041_29068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (1))){
var inst_29002 = (new Array(n));
var inst_29003 = inst_29002;
var inst_29004 = (0);
var state_29039__$1 = (function (){var statearr_29042 = state_29039;
(statearr_29042[(7)] = inst_29004);

(statearr_29042[(8)] = inst_29003);

return statearr_29042;
})();
var statearr_29043_29069 = state_29039__$1;
(statearr_29043_29069[(2)] = null);

(statearr_29043_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (4))){
var inst_29007 = (state_29039[(9)]);
var inst_29007__$1 = (state_29039[(2)]);
var inst_29008 = (inst_29007__$1 == null);
var inst_29009 = cljs.core.not.call(null,inst_29008);
var state_29039__$1 = (function (){var statearr_29044 = state_29039;
(statearr_29044[(9)] = inst_29007__$1);

return statearr_29044;
})();
if(inst_29009){
var statearr_29045_29070 = state_29039__$1;
(statearr_29045_29070[(1)] = (5));

} else {
var statearr_29046_29071 = state_29039__$1;
(statearr_29046_29071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (15))){
var inst_29029 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29047_29072 = state_29039__$1;
(statearr_29047_29072[(2)] = inst_29029);

(statearr_29047_29072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (13))){
var state_29039__$1 = state_29039;
var statearr_29048_29073 = state_29039__$1;
(statearr_29048_29073[(2)] = null);

(statearr_29048_29073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (6))){
var inst_29004 = (state_29039[(7)]);
var inst_29025 = (inst_29004 > (0));
var state_29039__$1 = state_29039;
if(cljs.core.truth_(inst_29025)){
var statearr_29049_29074 = state_29039__$1;
(statearr_29049_29074[(1)] = (12));

} else {
var statearr_29050_29075 = state_29039__$1;
(statearr_29050_29075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (3))){
var inst_29037 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29039__$1,inst_29037);
} else {
if((state_val_29040 === (12))){
var inst_29003 = (state_29039[(8)]);
var inst_29027 = cljs.core.vec.call(null,inst_29003);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29039__$1,(15),out,inst_29027);
} else {
if((state_val_29040 === (2))){
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29039__$1,(4),ch);
} else {
if((state_val_29040 === (11))){
var inst_29019 = (state_29039[(2)]);
var inst_29020 = (new Array(n));
var inst_29003 = inst_29020;
var inst_29004 = (0);
var state_29039__$1 = (function (){var statearr_29051 = state_29039;
(statearr_29051[(10)] = inst_29019);

(statearr_29051[(7)] = inst_29004);

(statearr_29051[(8)] = inst_29003);

return statearr_29051;
})();
var statearr_29052_29076 = state_29039__$1;
(statearr_29052_29076[(2)] = null);

(statearr_29052_29076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (9))){
var inst_29003 = (state_29039[(8)]);
var inst_29017 = cljs.core.vec.call(null,inst_29003);
var state_29039__$1 = state_29039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29039__$1,(11),out,inst_29017);
} else {
if((state_val_29040 === (5))){
var inst_29007 = (state_29039[(9)]);
var inst_29004 = (state_29039[(7)]);
var inst_29012 = (state_29039[(11)]);
var inst_29003 = (state_29039[(8)]);
var inst_29011 = (inst_29003[inst_29004] = inst_29007);
var inst_29012__$1 = (inst_29004 + (1));
var inst_29013 = (inst_29012__$1 < n);
var state_29039__$1 = (function (){var statearr_29053 = state_29039;
(statearr_29053[(12)] = inst_29011);

(statearr_29053[(11)] = inst_29012__$1);

return statearr_29053;
})();
if(cljs.core.truth_(inst_29013)){
var statearr_29054_29077 = state_29039__$1;
(statearr_29054_29077[(1)] = (8));

} else {
var statearr_29055_29078 = state_29039__$1;
(statearr_29055_29078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (14))){
var inst_29032 = (state_29039[(2)]);
var inst_29033 = cljs.core.async.close_BANG_.call(null,out);
var state_29039__$1 = (function (){var statearr_29057 = state_29039;
(statearr_29057[(13)] = inst_29032);

return statearr_29057;
})();
var statearr_29058_29079 = state_29039__$1;
(statearr_29058_29079[(2)] = inst_29033);

(statearr_29058_29079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (10))){
var inst_29023 = (state_29039[(2)]);
var state_29039__$1 = state_29039;
var statearr_29059_29080 = state_29039__$1;
(statearr_29059_29080[(2)] = inst_29023);

(statearr_29059_29080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29040 === (8))){
var inst_29012 = (state_29039[(11)]);
var inst_29003 = (state_29039[(8)]);
var tmp29056 = inst_29003;
var inst_29003__$1 = tmp29056;
var inst_29004 = inst_29012;
var state_29039__$1 = (function (){var statearr_29060 = state_29039;
(statearr_29060[(7)] = inst_29004);

(statearr_29060[(8)] = inst_29003__$1);

return statearr_29060;
})();
var statearr_29061_29081 = state_29039__$1;
(statearr_29061_29081[(2)] = null);

(statearr_29061_29081[(1)] = (2));


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
});})(c__27251__auto___29067,out))
;
return ((function (switch__27161__auto__,c__27251__auto___29067,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_29039){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_29039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object)){
var ex__27165__auto__ = e29063;
var statearr_29064_29082 = state_29039;
(statearr_29064_29082[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29083 = state_29039;
state_29039 = G__29083;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_29039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_29039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___29067,out))
})();
var state__27253__auto__ = (function (){var statearr_29065 = f__27252__auto__.call(null);
(statearr_29065[(6)] = c__27251__auto___29067);

return statearr_29065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___29067,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29085 = arguments.length;
switch (G__29085) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27251__auto___29155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27251__auto___29155,out){
return (function (){
var f__27252__auto__ = (function (){var switch__27161__auto__ = ((function (c__27251__auto___29155,out){
return (function (state_29127){
var state_val_29128 = (state_29127[(1)]);
if((state_val_29128 === (7))){
var inst_29123 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29129_29156 = state_29127__$1;
(statearr_29129_29156[(2)] = inst_29123);

(statearr_29129_29156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (1))){
var inst_29086 = [];
var inst_29087 = inst_29086;
var inst_29088 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29127__$1 = (function (){var statearr_29130 = state_29127;
(statearr_29130[(7)] = inst_29087);

(statearr_29130[(8)] = inst_29088);

return statearr_29130;
})();
var statearr_29131_29157 = state_29127__$1;
(statearr_29131_29157[(2)] = null);

(statearr_29131_29157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (4))){
var inst_29091 = (state_29127[(9)]);
var inst_29091__$1 = (state_29127[(2)]);
var inst_29092 = (inst_29091__$1 == null);
var inst_29093 = cljs.core.not.call(null,inst_29092);
var state_29127__$1 = (function (){var statearr_29132 = state_29127;
(statearr_29132[(9)] = inst_29091__$1);

return statearr_29132;
})();
if(inst_29093){
var statearr_29133_29158 = state_29127__$1;
(statearr_29133_29158[(1)] = (5));

} else {
var statearr_29134_29159 = state_29127__$1;
(statearr_29134_29159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (15))){
var inst_29117 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29135_29160 = state_29127__$1;
(statearr_29135_29160[(2)] = inst_29117);

(statearr_29135_29160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (13))){
var state_29127__$1 = state_29127;
var statearr_29136_29161 = state_29127__$1;
(statearr_29136_29161[(2)] = null);

(statearr_29136_29161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (6))){
var inst_29087 = (state_29127[(7)]);
var inst_29112 = inst_29087.length;
var inst_29113 = (inst_29112 > (0));
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29113)){
var statearr_29137_29162 = state_29127__$1;
(statearr_29137_29162[(1)] = (12));

} else {
var statearr_29138_29163 = state_29127__$1;
(statearr_29138_29163[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (3))){
var inst_29125 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29127__$1,inst_29125);
} else {
if((state_val_29128 === (12))){
var inst_29087 = (state_29127[(7)]);
var inst_29115 = cljs.core.vec.call(null,inst_29087);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29127__$1,(15),out,inst_29115);
} else {
if((state_val_29128 === (2))){
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29127__$1,(4),ch);
} else {
if((state_val_29128 === (11))){
var inst_29091 = (state_29127[(9)]);
var inst_29095 = (state_29127[(10)]);
var inst_29105 = (state_29127[(2)]);
var inst_29106 = [];
var inst_29107 = inst_29106.push(inst_29091);
var inst_29087 = inst_29106;
var inst_29088 = inst_29095;
var state_29127__$1 = (function (){var statearr_29139 = state_29127;
(statearr_29139[(11)] = inst_29105);

(statearr_29139[(12)] = inst_29107);

(statearr_29139[(7)] = inst_29087);

(statearr_29139[(8)] = inst_29088);

return statearr_29139;
})();
var statearr_29140_29164 = state_29127__$1;
(statearr_29140_29164[(2)] = null);

(statearr_29140_29164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (9))){
var inst_29087 = (state_29127[(7)]);
var inst_29103 = cljs.core.vec.call(null,inst_29087);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29127__$1,(11),out,inst_29103);
} else {
if((state_val_29128 === (5))){
var inst_29091 = (state_29127[(9)]);
var inst_29095 = (state_29127[(10)]);
var inst_29088 = (state_29127[(8)]);
var inst_29095__$1 = f.call(null,inst_29091);
var inst_29096 = cljs.core._EQ_.call(null,inst_29095__$1,inst_29088);
var inst_29097 = cljs.core.keyword_identical_QMARK_.call(null,inst_29088,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29098 = ((inst_29096) || (inst_29097));
var state_29127__$1 = (function (){var statearr_29141 = state_29127;
(statearr_29141[(10)] = inst_29095__$1);

return statearr_29141;
})();
if(cljs.core.truth_(inst_29098)){
var statearr_29142_29165 = state_29127__$1;
(statearr_29142_29165[(1)] = (8));

} else {
var statearr_29143_29166 = state_29127__$1;
(statearr_29143_29166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (14))){
var inst_29120 = (state_29127[(2)]);
var inst_29121 = cljs.core.async.close_BANG_.call(null,out);
var state_29127__$1 = (function (){var statearr_29145 = state_29127;
(statearr_29145[(13)] = inst_29120);

return statearr_29145;
})();
var statearr_29146_29167 = state_29127__$1;
(statearr_29146_29167[(2)] = inst_29121);

(statearr_29146_29167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (10))){
var inst_29110 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29147_29168 = state_29127__$1;
(statearr_29147_29168[(2)] = inst_29110);

(statearr_29147_29168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (8))){
var inst_29087 = (state_29127[(7)]);
var inst_29091 = (state_29127[(9)]);
var inst_29095 = (state_29127[(10)]);
var inst_29100 = inst_29087.push(inst_29091);
var tmp29144 = inst_29087;
var inst_29087__$1 = tmp29144;
var inst_29088 = inst_29095;
var state_29127__$1 = (function (){var statearr_29148 = state_29127;
(statearr_29148[(14)] = inst_29100);

(statearr_29148[(7)] = inst_29087__$1);

(statearr_29148[(8)] = inst_29088);

return statearr_29148;
})();
var statearr_29149_29169 = state_29127__$1;
(statearr_29149_29169[(2)] = null);

(statearr_29149_29169[(1)] = (2));


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
});})(c__27251__auto___29155,out))
;
return ((function (switch__27161__auto__,c__27251__auto___29155,out){
return (function() {
var cljs$core$async$state_machine__27162__auto__ = null;
var cljs$core$async$state_machine__27162__auto____0 = (function (){
var statearr_29150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29150[(0)] = cljs$core$async$state_machine__27162__auto__);

(statearr_29150[(1)] = (1));

return statearr_29150;
});
var cljs$core$async$state_machine__27162__auto____1 = (function (state_29127){
while(true){
var ret_value__27163__auto__ = (function (){try{while(true){
var result__27164__auto__ = switch__27161__auto__.call(null,state_29127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27164__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27164__auto__;
}
break;
}
}catch (e29151){if((e29151 instanceof Object)){
var ex__27165__auto__ = e29151;
var statearr_29152_29170 = state_29127;
(statearr_29152_29170[(5)] = ex__27165__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27163__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29171 = state_29127;
state_29127 = G__29171;
continue;
} else {
return ret_value__27163__auto__;
}
break;
}
});
cljs$core$async$state_machine__27162__auto__ = function(state_29127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27162__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27162__auto____1.call(this,state_29127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27162__auto____0;
cljs$core$async$state_machine__27162__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27162__auto____1;
return cljs$core$async$state_machine__27162__auto__;
})()
;})(switch__27161__auto__,c__27251__auto___29155,out))
})();
var state__27253__auto__ = (function (){var statearr_29153 = f__27252__auto__.call(null);
(statearr_29153[(6)] = c__27251__auto___29155);

return statearr_29153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27253__auto__);
});})(c__27251__auto___29155,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1542912635487
