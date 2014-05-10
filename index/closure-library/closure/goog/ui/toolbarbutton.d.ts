/// <reference path="../../../globals.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class ToolbarButton extends goog.ui.Button {
    
        /**
         * A button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        /**
         * A button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: Node, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        /**
         * A button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: Node[], opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        /**
         * A button control for a toolbar.
         *
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
         *     render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Button}
         */
        constructor(content: NodeList, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
    }
}