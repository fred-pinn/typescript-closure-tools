// Generated Sat May  3 12:14:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />

declare module goog.net {

    /**
     * Base class for network status information providers.
     * @interface
     * @extends {goog.events.Listenable}
     */
    interface NetworkStatusMonitor extends goog.events.Listenable {
    
        /**
         * @return {boolean} Whether the system is online or otherwise.
         */
        isOnline(): boolean;
    }
}

declare module goog.net.NetworkStatusMonitor {

    /**
     * Enum for the events dispatched by the OnlineHandler.
     * @enum {string}
     */
    enum EventType { ONLINE, OFFLINE } 
}

