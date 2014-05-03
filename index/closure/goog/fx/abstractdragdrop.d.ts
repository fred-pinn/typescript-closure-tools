// Generated Sat May  3 12:12:10 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
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
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/fx/dragger.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />

declare module goog.fx {

    /**
     * Abstract class that provides reusable functionality for implementing drag
     * and drop functionality.
     *
     * This class also allows clients to define their own subtargeting function
     * so that drop areas can have finer granularity then a singe element. This is
     * accomplished by using a client provided function to map from element and
     * coordinates to a subregion id.
     *
     * This class can also be made aware of scrollable containers that contain
     * drop targets by calling addScrollableContainer. This will cause dnd to
     * take changing scroll positions into account while a drag is occuring.
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class AbstractDragDrop extends goog.events.EventTarget {
        /**
         * Abstract class that provides reusable functionality for implementing drag
         * and drop functionality.
         *
         * This class also allows clients to define their own subtargeting function
         * so that drop areas can have finer granularity then a singe element. This is
         * accomplished by using a client provided function to map from element and
         * coordinates to a subregion id.
         *
         * This class can also be made aware of scrollable containers that contain
         * drop targets by calling addScrollableContainer. This will cause dnd to
         * take changing scroll positions into account while a drag is occuring.
         *
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor();
    
        /**
         * Set class to add to source elements being dragged.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setDragClass(className: string): void;
    
        /**
         * Set class to add to source elements.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setSourceClass(className: string): void;
    
        /**
         * Set class to add to target elements.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setTargetClass(className: string): void;
    
        /**
         * Whether the control has been initialized.
         *
         * @return {boolean} True if it's been initialized.
         */
        isInitialized(): boolean;
    
        /**
         * Add item to drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @throws Error Thrown if called on instance of abstract class
         */
        addItem(element: any /*Element|string*/): void;
    
        /**
         * Associate drop target with drag element.
         *
         * @param {goog.fx.AbstractDragDrop} target Target to add.
         */
        addTarget(target: goog.fx.AbstractDragDrop): void;
    
        /**
         * Sets the SCROLL event target to make drag element follow scrolling.
         *
         * @param {EventTarget} scrollTarget The element that dispatches SCROLL events.
         */
        setScrollTarget(scrollTarget: EventTarget): void;
    
        /**
         * Initialize drag and drop functionality for sources/targets already added.
         * Sources/targets added after init has been called will initialize themselves
         * one by one.
         */
        init(): void;
    
        /**
         * Initializes a single item.
         *
         * @param {goog.fx.DragDropItem} item Item to initialize.
         * @protected
         */
        initItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Called when removing an item. Removes event listeners and classes.
         *
         * @param {goog.fx.DragDropItem} item Item to dispose.
         * @protected
         */
        disposeItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Removes all items.
         */
        removeItems(): void;
    
        /**
         * Starts a drag event for an item if the mouse button stays pressed and the
         * cursor moves a few pixels. Allows dragging of items without first having to
         * register them with addItem.
         *
         * @param {goog.events.BrowserEvent} event Mouse down event.
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         */
        maybeStartDrag(event: goog.events.BrowserEvent, item: goog.fx.DragDropItem): void;
    
        /**
         * Event handler that's used to start drag.
         *
         * @param {goog.events.BrowserEvent} event Mouse move event.
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         */
        startDrag(event: goog.events.BrowserEvent, item: goog.fx.DragDropItem): void;
    
        /**
         * Recalculates the geometry of this source's drag targets.  Call this
         * if the position or visibility of a drag target has changed during
         * a drag, or if targets are added or removed.
         *
         * TODO(user): this is an expensive operation;  more efficient APIs
         * may be necessary.
         */
        recalculateDragTargets(): void;
    
        /**
         * Recalculates the current scroll positions of scrollable containers and
         * allocates targets. Call this if the position of a container changed or if
         * targets are added or removed.
         */
        recalculateScrollableContainers(): void;
    
        /**
         * Creates the Dragger for the drag element.
         * @param {Element} sourceEl Drag source element.
         * @param {Element} el the element created by createDragElement().
         * @param {goog.events.BrowserEvent} event Mouse down event for start of drag.
         * @return {!goog.fx.Dragger} The new Dragger.
         * @protected
         */
        createDraggerFor(sourceEl: Element, el: Element, event: goog.events.BrowserEvent): goog.fx.Dragger;
    
        /**
         * Event handler that's used to stop drag. Fires a drop event if over a valid
         * target.
         *
         * @param {goog.fx.DragEvent} event Drag event.
         */
        endDrag(event: goog.fx.DragEvent): void;
    
        /**
         * Called after a drag operation has finished.
         *
         * @param {goog.fx.DragDropItem=} opt_dropTarget Target for successful drop.
         * @protected
         */
        afterEndDrag(opt_dropTarget?: goog.fx.DragDropItem): void;
    
        /**
         * Called once a drag operation has finished. Removes event listeners and
         * elements.
         *
         * @protected
         */
        disposeDrag(): void;
    
        /**
         * Makes drag and drop aware of a target container that could scroll mid drag.
         * @param {Element} element The scroll container.
         */
        addScrollableContainer(element: Element): void;
    
        /**
         * Removes all scrollable containers.
         */
        removeAllScrollableContainers(): void;
    
        /**
         * Set a function that provides subtargets. A subtargeting function
         * returns an arbitrary identifier for each subtarget of an element.
         * DnD code will generate additional drag over / out events when
         * switching from subtarget to subtarget. This is useful for instance
         * if you are interested if you are on the top half or the bottom half
         * of the element.
         * The provided function will be given the DragDropItem, box, x, y
         * box is the current window coordinates occupied by element
         * x, y is the mouse position in window coordinates
         *
         * @param {Function} f The new subtarget function.
         */
        setSubtargetFunction(f: Function): void;
    
        /**
         * Creates an element for the item being dragged.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {Element} The new drag element.
         */
        createDragElement(sourceEl: Element): Element;
    
        /**
         * Returns the position for the drag element.
         *
         * @param {Element} el Drag source element.
         * @param {Element} dragEl The dragged element created by createDragElement().
         * @param {goog.events.BrowserEvent} event Mouse down event for start of drag.
         * @return {!goog.math.Coordinate} The position for the drag element.
         */
        getDragElementPosition(el: Element, dragEl: Element, event: goog.events.BrowserEvent): goog.math.Coordinate;
    
        /**
         * Returns the dragger object.
         *
         * @return {goog.fx.Dragger} The dragger object used by this drag and drop
         *     instance.
         */
        getDragger(): goog.fx.Dragger;
    
        /**
         * Generates an element to follow the cursor during dragging, given a drag
         * source element.  The default behavior is simply to clone the source element,
         * but this may be overridden in subclasses.  This method is called by
         * {@code createDragElement()} before the drag class is added.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {Element} The new drag element.
         * @protected
         * @suppress {deprecated}
         */
        createDragElementInternal(sourceEl: Element): Element;
    
        /**
         * Calculates the position and dimension of a draggable element.
         *
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         * @param {Element} element The element to calculate the box.
         *
         * @return {!goog.math.Box} Box describing the position and dimension
         *     of element.
         * @protected
         */
        getElementBox(item: goog.fx.DragDropItem, element: Element): goog.math.Box;
    
        /**
         * Checks whatever a given point is inside a given box.
         *
         * @param {number} x Cursor position on the x-axis.
         * @param {number} y Cursor position on the y-axis.
         * @param {goog.math.Box} box Box to check position against.
         * @return {boolean} Whether the given point is inside {@code box}.
         * @protected
         * @deprecated Use goog.math.Box.contains.
         */
        isInside(x: number, y: number, box: goog.math.Box): boolean;
    
        /**
         * Gets the scroll distance as a coordinate object, using
         * the window of the current drag element's dom.
         * @return {!goog.math.Coordinate} Object with scroll offsets 'x' and 'y'.
         * @protected
         */
        getScrollPos(): goog.math.Coordinate;
    
        /**
         * Get the position of a drag event.
         * @param {goog.fx.DragEvent} event Drag event.
         * @return {goog.math.Coordinate} Position of the event.
         * @protected
         */
        getEventPosition(event: goog.fx.DragEvent): goog.math.Coordinate;
    }

    /**
     * Object representing a drag and drop event.
     *
     * @param {string} type Event type.
     * @param {goog.fx.AbstractDragDrop} source Source drag drop object.
     * @param {goog.fx.DragDropItem} sourceItem Source item.
     * @param {goog.fx.AbstractDragDrop=} opt_target Target drag drop object.
     * @param {goog.fx.DragDropItem=} opt_targetItem Target item.
     * @param {Element=} opt_targetElement Target element.
     * @param {number=} opt_clientX X-Position relative to the screen.
     * @param {number=} opt_clientY Y-Position relative to the screen.
     * @param {number=} opt_x X-Position relative to the viewport.
     * @param {number=} opt_y Y-Position relative to the viewport.
     * @param {Object=} opt_subtarget The currently active subtarget.
     * @extends {goog.events.Event}
     * @constructor
     */
    class DragDropEvent extends goog.events.Event {
        /**
         * Object representing a drag and drop event.
         *
         * @param {string} type Event type.
         * @param {goog.fx.AbstractDragDrop} source Source drag drop object.
         * @param {goog.fx.DragDropItem} sourceItem Source item.
         * @param {goog.fx.AbstractDragDrop=} opt_target Target drag drop object.
         * @param {goog.fx.DragDropItem=} opt_targetItem Target item.
         * @param {Element=} opt_targetElement Target element.
         * @param {number=} opt_clientX X-Position relative to the screen.
         * @param {number=} opt_clientY Y-Position relative to the screen.
         * @param {number=} opt_x X-Position relative to the viewport.
         * @param {number=} opt_y Y-Position relative to the viewport.
         * @param {Object=} opt_subtarget The currently active subtarget.
         * @extends {goog.events.Event}
         * @constructor
         */
        constructor(type: string, source: goog.fx.AbstractDragDrop, sourceItem: goog.fx.DragDropItem, opt_target?: goog.fx.AbstractDragDrop, opt_targetItem?: goog.fx.DragDropItem, opt_targetElement?: Element, opt_clientX?: number, opt_clientY?: number, opt_x?: number, opt_y?: number, opt_subtarget?: Object);
    }

    /**
     * Class representing a source or target element for drag and drop operations.
     *
     * @param {Element|string} element Dom Node, or string representation of node
     *     id, to be used as drag source/drop target.
     * @param {Object=} opt_data Data associated with the source/target.
     * @throws Error If no element argument is provided or if the type is invalid
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class DragDropItem extends goog.events.EventTarget {
        /**
         * Class representing a source or target element for drag and drop operations.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @param {Object=} opt_data Data associated with the source/target.
         * @throws Error If no element argument is provided or if the type is invalid
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor(element: any /*Element|string*/, opt_data?: Object);
    
        /**
         * Get the data associated with the source/target.
         * @return {Object|null|undefined} Data associated with the source/target.
         */
        getData(): any /*Object|any (null)|any (undefined)*/;
    
        /**
         * Gets the element that is actually draggable given that the given target was
         * attempted to be dragged. This should be overriden when the element that was
         * given actually contains many items that can be dragged. From the target, you
         * can determine what element should actually be dragged.
         *
         * @param {Element} target The target that was attempted to be dragged.
         * @return {Element} The element that is draggable given the target. If
         *     none are draggable, this will return null.
         */
        getDraggableElement(target: Element): Element;
    
        /**
         * Gets the element that is currently being dragged.
         *
         * @return {Element} The element that is currently being dragged.
         */
        getCurrentDragElement(): Element;
    
        /**
         * Gets all the elements of this item that are potentially draggable/
         *
         * @return {!Array.<Element>} The draggable elements.
         */
        getDraggableElements(): Element[];
    
        /**
         * Sets the dragdrop to which this item belongs.
         * @param {goog.fx.AbstractDragDrop} parent The parent dragdrop.
         */
        setParent(parent: goog.fx.AbstractDragDrop): void;
    }
}

declare module goog.fx.AbstractDragDrop {

    /**
     * Constants for event names
     * @type {Object}
     */
    var EventType: Object;

    /**
     * Constant for distance threshold, in pixels, an element has to be moved to
     * initiate a drag operation.
     * @type {number}
     */
    var initDragDistanceThreshold: number;
}

