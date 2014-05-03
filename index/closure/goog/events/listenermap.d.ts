// Generated Sat May  3 12:17:28 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.events {

    /**
     * Creates a new listener map.
     * @param {EventTarget|goog.events.Listenable} src The src object.
     * @constructor
     * @final
     */
    class ListenerMap {
        /**
         * Creates a new listener map.
         * @param {EventTarget|goog.events.Listenable} src The src object.
         * @constructor
         * @final
         */
        constructor(src: any /*EventTarget|goog.events.Listenable*/);
    
        /**
         * @return {number} The count of event types in this map that actually
         *     have registered listeners.
         */
        getTypeCount(): number;
    
        /**
         * @return {number} Total number of registered listeners.
         */
        getListenerCount(): number;
    
        /**
         * Adds an event listener. A listener can only be added once to an
         * object and if it is added again the key for the listener is
         * returned.
         *
         * Note that a one-off listener will not change an existing listener,
         * if any. On the other hand a normal listener will change existing
         * one-off listener to become a normal listener.
         *
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean} callOnce Whether the listener is a one-off
         *     listener.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} Unique key for the listener.
         */
        add(type: any /*string|goog.events.EventId*/, listener: Function, callOnce: boolean, opt_useCapture?: boolean, opt_listenerScope?: Object): goog.events.ListenableKey;
    
        /**
         * Removes a matching listener.
         * @param {string|!goog.events.EventId} type The listener event type.
         * @param {!Function} listener This listener callback method.
         * @param {boolean=} opt_useCapture The capture mode of the listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {boolean} Whether any listener was removed.
         */
        remove(type: any /*string|goog.events.EventId*/, listener: Function, opt_useCapture?: boolean, opt_listenerScope?: Object): boolean;
    
        /**
         * Removes the given listener object.
         * @param {goog.events.ListenableKey} listener The listener to remove.
         * @return {boolean} Whether the listener is removed.
         */
        removeByKey(listener: goog.events.ListenableKey): boolean;
    
        /**
         * Removes all listeners from this map. If opt_type is provided, only
         * listeners that match the given type are removed.
         * @param {string|!goog.events.EventId=} opt_type Type of event to remove.
         * @return {number} Number of listeners removed.
         */
        removeAll(opt_type?: any /*string|goog.events.EventId*/): number;
    
        /**
         * Gets all listeners that match the given type and capture mode. The
         * returned array is a copy (but the listener objects are not).
         * @param {string|!goog.events.EventId} type The type of the listeners
         *     to retrieve.
         * @param {boolean} capture The capture mode of the listeners to retrieve.
         * @return {!Array.<goog.events.ListenableKey>} An array of matching
         *     listeners.
         */
        getListeners(type: any /*string|goog.events.EventId*/, capture: boolean): goog.events.ListenableKey[];
    
        /**
         * Gets the goog.events.ListenableKey for the event or null if no such
         * listener is in use.
         *
         * @param {string|!goog.events.EventId} type The type of the listener
         *     to retrieve.
         * @param {!Function} listener The listener function to get.
         * @param {boolean} capture Whether the listener is a capturing listener.
         * @param {Object=} opt_listenerScope Object in whose scope to call the
         *     listener.
         * @return {goog.events.ListenableKey} the found listener or null if not found.
         */
        getListener(type: any /*string|goog.events.EventId*/, listener: Function, capture: boolean, opt_listenerScope?: Object): goog.events.ListenableKey;
    
        /**
         * Whether there is a matching listener. If either the type or capture
         * parameters are unspecified, the function will match on the
         * remaining criteria.
         *
         * @param {string|!goog.events.EventId=} opt_type The type of the listener.
         * @param {boolean=} opt_capture The capture mode of the listener.
         * @return {boolean} Whether there is an active listener matching
         *     the requested type and/or capture phase.
         */
        hasListener(opt_type?: any /*string|goog.events.EventId*/, opt_capture?: boolean): boolean;
    }
}

