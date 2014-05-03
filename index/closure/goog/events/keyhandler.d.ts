// Generated Sat May  3 12:17:35 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.events {

    /**
     * A wrapper around an element that you want to listen to keyboard events on.
     * @param {Element|Document=} opt_element The element or document to listen on.
     * @param {boolean=} opt_capture Whether to listen for browser events in
     *     capture phase (defaults to false).
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class KeyHandler extends goog.events.EventTarget {
        /**
         * A wrapper around an element that you want to listen to keyboard events on.
         * @param {Element|Document=} opt_element The element or document to listen on.
         * @param {boolean=} opt_capture Whether to listen for browser events in
         *     capture phase (defaults to false).
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_element?: any /*Element|Document*/, opt_capture?: boolean);
    
        /**
         * Resets the stored previous values. Needed to be called for webkit which will
         * not generate a key up for meta key operations. This should only be called
         * when having finished with repeat key possiblities.
         */
        resetState(): void;
    
        /**
         * Handles the events on the element.
         * @param {goog.events.BrowserEvent} e  The keyboard event sent from the
         *     browser.
         */
        handleEvent(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the element listened on for the real keyboard events.
         * @return {Element|Document|null} The element listened on for the real
         *     keyboard events.
         */
        getElement(): any /*Element|Document|any (null)*/;
    
        /**
         * Adds the proper key event listeners to the element.
         * @param {Element|Document} element The element to listen on.
         * @param {boolean=} opt_capture Whether to listen for browser events in
         *     capture phase (defaults to false).
         */
        attach(element: any /*Element|Document*/, opt_capture?: boolean): void;
    
        /**
         * Removes the listeners that may exist.
         */
        detach(): void;
    }

    /**
     * This class is used for the goog.events.KeyHandler.EventType.KEY event and
     * it overrides the key code with the fixed key code.
     * @param {number} keyCode The adjusted key code.
     * @param {number} charCode The unicode character code.
     * @param {boolean} repeat Whether this event was generated by keyboard repeat.
     * @param {Event} browserEvent Browser event object.
     * @constructor
     * @extends {goog.events.BrowserEvent}
     * @final
     */
    class KeyEvent extends goog.events.BrowserEvent {
        /**
         * This class is used for the goog.events.KeyHandler.EventType.KEY event and
         * it overrides the key code with the fixed key code.
         * @param {number} keyCode The adjusted key code.
         * @param {number} charCode The unicode character code.
         * @param {boolean} repeat Whether this event was generated by keyboard repeat.
         * @param {Event} browserEvent Browser event object.
         * @constructor
         * @extends {goog.events.BrowserEvent}
         * @final
         */
        constructor(keyCode: number, charCode: number, repeat: boolean, browserEvent: Event);
    }
}

declare module goog.events.KeyHandler {

    /**
     * Enum type for the events fired by the key handler
     * @enum {string}
     */
    enum EventType { KEY } 
}

