// Generated Sat May  3 12:15:33 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/tree/basenode.d.ts" />
/// <reference path="../../../goog/ui/tree/treenode.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/trie.d.ts" />
/// <reference path="../../../goog/ui/tree/typeahead.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />

declare module goog.ui.tree {

    /**
     * This creates a TreeControl object. A tree control provides a way to
     * view a hierarchical set of data.
     * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
     * @param {Object=} opt_config The configuration for the tree. See
     *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
     *    will be used.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.tree.BaseNode}
     */
    class TreeControl extends goog.ui.tree.BaseNode {
        /**
         * This creates a TreeControl object. A tree control provides a way to
         * view a hierarchical set of data.
         * @param {string|!goog.html.SafeHtml} html The HTML content of the node label.
         * @param {Object=} opt_config The configuration for the tree. See
         *    goog.ui.tree.TreeControl.defaultConfig. If not specified, a default config
         *    will be used.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.tree.BaseNode}
         */
        constructor(html: any /*string|goog.html.SafeHtml*/, opt_config?: Object, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {boolean} Whether the tree has keyboard focus.
         */
        hasFocus(): boolean;
    
        /**
         * Sets the selected item.
         * @param {goog.ui.tree.BaseNode} node The item to select.
         */
        setSelectedItem(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Returns the selected item.
         * @return {goog.ui.tree.BaseNode} The currently selected item.
         */
        getSelectedItem(): goog.ui.tree.BaseNode;
    
        /**
         * Sets whether to show lines.
         * @param {boolean} b Whether to show lines.
         */
        setShowLines(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show lines.
         */
        getShowLines(): boolean;
    
        /**
         * Sets whether to show root lines.
         * @param {boolean} b Whether to show root lines.
         */
        setShowRootLines(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show root lines.
         */
        getShowRootLines(): boolean;
    
        /**
         * Sets whether to show expand icons.
         * @param {boolean} b Whether to show expand icons.
         */
        setShowExpandIcons(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show expand icons.
         */
        getShowExpandIcons(): boolean;
    
        /**
         * Sets whether to show the root node.
         * @param {boolean} b Whether to show the root node.
         */
        setShowRootNode(b: boolean): void;
    
        /**
         * @return {boolean} Whether to show the root node.
         */
        getShowRootNode(): boolean;
    
        /**
         * Handles key down on the tree.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} The handled value.
         */
        handleKeyEvent(e: goog.events.BrowserEvent): boolean;
    
        /**
         * Creates a new tree node using the same config as the root.
         * @param {string=} opt_html The HTML content of the node label.
         * @return {!goog.ui.tree.TreeNode} The new item.
         */
        createNode(opt_html?: string): goog.ui.tree.TreeNode;
    
        /**
         * Allows the caller to notify that the given node has been added or just had
         * been updated in the tree.
         * @param {goog.ui.tree.BaseNode} node New node being added or existing node
         *    that just had been updated.
         */
        setNode(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Allows the caller to notify that the given node is being removed from the
         * tree.
         * @param {goog.ui.tree.BaseNode} node Node being removed.
         */
        removeNode(node: goog.ui.tree.BaseNode): void;
    
        /**
         * Clear the typeahead buffer.
         */
        clearTypeAhead(): void;
    }
}

declare module goog.ui.tree.TreeControl {

    /**
     * A default configuration for the tree.
     */
    var defaultConfig: any /*missing*/;
}

