/// <reference path="../../../../globals.d.ts" />
/// <reference path="./starttag.d.ts" />

declare module goog.dom.pattern {

    class FullTag extends goog.dom.pattern.StartTag {
    
        /**
         * Pattern object that matches a full tag including all its children.
         *
         * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
         *     expression to match against the tag name.
         * @param {Object=} opt_attrs Optional map of attribute names to desired values.
         *     This pattern will only match when all attributes are present and match
         *     the string or regular expression value provided here.
         * @param {Object=} opt_styles Optional map of CSS style names to desired
         *     values. This pattern will only match when all styles are present and
         *     match the string or regular expression value provided here.
         * @param {Function=} opt_test Optional function that takes the element as a
         *     parameter and returns true if this pattern should match it.
         * @constructor
         * @extends {goog.dom.pattern.StartTag}
         * @final
         */
        constructor(tag: string, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
        /**
         * Pattern object that matches a full tag including all its children.
         *
         * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
         *     expression to match against the tag name.
         * @param {Object=} opt_attrs Optional map of attribute names to desired values.
         *     This pattern will only match when all attributes are present and match
         *     the string or regular expression value provided here.
         * @param {Object=} opt_styles Optional map of CSS style names to desired
         *     values. This pattern will only match when all styles are present and
         *     match the string or regular expression value provided here.
         * @param {Function=} opt_test Optional function that takes the element as a
         *     parameter and returns true if this pattern should match it.
         * @constructor
         * @extends {goog.dom.pattern.StartTag}
         * @final
         */
        constructor(tag: RegExp, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
    }
}