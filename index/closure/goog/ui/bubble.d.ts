// Generated Sat May  3 12:15:32 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/positioning/positioning.d.ts" />
/// <reference path="../../goog/positioning/abstractposition.d.ts" />
/// <reference path="../../goog/positioning/absoluteposition.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/positioning/anchoredposition.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/positioning/clientposition.d.ts" />
/// <reference path="../../goog/positioning/viewportclientposition.d.ts" />
/// <reference path="../../goog/positioning/anchoredviewportposition.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/ui/popupbase.d.ts" />
/// <reference path="../../goog/positioning/viewportposition.d.ts" />
/// <reference path="../../goog/ui/popup.d.ts" />

declare module goog.ui {

    /**
     * The Bubble provides a general purpose bubble implementation that can be
     * anchored to a particular element and displayed for a period of time.
     *
     * @param {string|Element} message HTML string or an element to display inside
     *     the bubble.
     * @param {Object=} opt_config The configuration
     *     for the bubble. If not specified, the default configuration will be
     *     used. {@see goog.ui.Bubble.defaultConfig}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Bubble extends goog.ui.Component {
        /**
         * The Bubble provides a general purpose bubble implementation that can be
         * anchored to a particular element and displayed for a period of time.
         *
         * @param {string|Element} message HTML string or an element to display inside
         *     the bubble.
         * @param {Object=} opt_config The configuration
         *     for the bubble. If not specified, the default configuration will be
         *     used. {@see goog.ui.Bubble.defaultConfig}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(message: any /*string|Element*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Attaches the bubble to an anchor element. Computes the positioning and
         * orientation of the bubble.
         *
         * @param {Element} anchorElement The element to which we are attaching.
         */
        attach(anchorElement: Element): void;
    
        /**
         * Sets the corner of the bubble to used in the positioning algorithm.
         *
         * @param {goog.positioning.Corner} corner The bubble corner used for
         *     positioning constants.
         */
        setPinnedCorner(corner: goog.positioning.Corner): void;
    
        /**
         * Sets the position of the bubble. Pass null for corner in AnchoredPosition
         * for corner to be computed automatically.
         *
         * @param {goog.positioning.AbstractPosition} position The position of the
         *     bubble.
         */
        setPosition(position: goog.positioning.AbstractPosition): void;
    
        /**
         * Sets the timeout after which bubble hides itself.
         *
         * @param {number} timeout Timeout of the bubble.
         */
        setTimeout(timeout: number): void;
    
        /**
         * Sets whether the bubble should be automatically hidden whenever user clicks
         * outside the bubble element.
         *
         * @param {boolean} autoHide Whether to hide if user clicks outside the bubble.
         */
        setAutoHide(autoHide: boolean): void;
    
        /**
         * Sets whether the bubble should be visible.
         *
         * @param {boolean} visible Desired visibility state.
         */
        setVisible(visible: boolean): void;
    
        /**
         * @return {boolean} Whether the bubble is visible.
         */
        isVisible(): boolean;
    
        /**
         * Returns an AnchoredPosition that will position the bubble optimally
         * given the position of the anchor element and the size of the viewport.
         *
         * @param {Element} anchorElement The element to which the bubble is attached.
         * @return {goog.ui.Popup.AnchoredPosition} The AnchoredPosition to give to
         *     {@link #setPosition}.
         */
        getComputedAnchoredPosition(anchorElement: Element): goog.ui.Popup.AnchoredPosition;
    }
}

declare module goog.ui.Bubble {

    /**
     * A default configuration for the bubble.
     *
     * @type {Object}
     */
    var defaultConfig: Object;
}

