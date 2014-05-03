// Generated Sat May  3 12:18:13 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />

declare module goog.async {

    /**
     * A ConditionalDelay object invokes the associated function after a specified
     * interval delay and checks its return value. If the function returns
     * {@code true} the conditional delay is cancelled and {@see #onSuccess}
     * is called. Otherwise this object keeps to invoke the deferred function until
     * either it returns {@code true} or the timeout is exceeded. In the latter case
     * the {@see #onFailure} method will be called.
     *
     * The interval duration and timeout can be specified each time the delay is
     * started. Calling start on an active delay will reset the timer.
     *
     * @param {function():boolean} listener Function to call when the delay
     *     completes. Should return a value that type-converts to {@code true} if
     *     the call succeeded and this delay should be stopped.
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ConditionalDelay extends goog.Disposable {
        /**
         * A ConditionalDelay object invokes the associated function after a specified
         * interval delay and checks its return value. If the function returns
         * {@code true} the conditional delay is cancelled and {@see #onSuccess}
         * is called. Otherwise this object keeps to invoke the deferred function until
         * either it returns {@code true} or the timeout is exceeded. In the latter case
         * the {@see #onFailure} method will be called.
         *
         * The interval duration and timeout can be specified each time the delay is
         * started. Calling start on an active delay will reset the timer.
         *
         * @param {function():boolean} listener Function to call when the delay
         *     completes. Should return a value that type-converts to {@code true} if
         *     the call succeeded and this delay should be stopped.
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(listener: () => boolean, opt_handler?: Object);
    
        /**
         * Starts the delay timer. The provided listener function will be called
         * repeatedly after the specified interval until the function returns
         * {@code true} or the timeout is exceeded. Calling start on an active timer
         * will stop the timer first.
         * @param {number=} opt_interval The time interval between the function
         *     invocations (in milliseconds). Default is 0.
         * @param {number=} opt_timeout The timeout interval (in milliseconds). Takes
         *     precedence over the {@code opt_interval}, i.e. if the timeout is less
         *     than the invocation interval, the function will be called when the
         *     timeout is exceeded. A negative value means no timeout. Default is 0.
         */
        start(opt_interval?: number, opt_timeout?: number): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    
        /**
         * @return {boolean} True if the listener has been executed and returned
         *     {@code true} since the last call to {@see #start}.
         */
        isDone(): boolean;
    
        /**
         * Called when the listener has been successfully executed and returned
         * {@code true}. The {@see #isDone} method should return {@code true} by now.
         * Designed for inheritance, should be overridden by subclasses or on the
         * instances if they care.
         */
        onSuccess(): void;
    
        /**
         * Called when this delayed call is cancelled because the timeout has been
         * exceeded, and the listener has never returned {@code true}.
         * Designed for inheritance, should be overridden by subclasses or on the
         * instances if they care.
         */
        onFailure(): void;
    }
}

