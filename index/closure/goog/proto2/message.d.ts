// Generated Sat May  3 12:11:53 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/proto2/fielddescriptor.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/proto2/descriptor.d.ts" />

declare module goog.proto2 {

    /**
     * Abstract base class for all Protocol Buffer 2 messages. It will be
     * subclassed in the code generated by the Protocol Compiler. Any other
     * subclasses are prohibited.
     * @constructor
     */
    class Message {
        /**
         * Abstract base class for all Protocol Buffer 2 messages. It will be
         * subclassed in the code generated by the Protocol Compiler. Any other
         * subclasses are prohibited.
         * @constructor
         */
        constructor();
    
        /**
         * Initializes the message with a lazy deserializer and its associated data.
         * This method should be called by internal methods ONLY.
         *
         * @param {goog.proto2.LazyDeserializer} deserializer The lazy deserializer to
         *   use to decode the data on the fly.
         *
         * @param {*} data The data to decode/deserialize.
         */
        initializeForLazyDeserializer(deserializer: goog.proto2.LazyDeserializer, data: any): void;
    
        /**
         * Sets the value of an unknown field, by tag.
         *
         * @param {number} tag The tag of an unknown field (must be >= 1).
         * @param {*} value The value for that unknown field.
         */
        setUnknown(tag: number, value: any): void;
    
        /**
         * Iterates over all the unknown fields in the message.
         *
         * @param {function(number, *)} callback A callback method
         *     which gets invoked for each unknown field.
         * @param {Object=} opt_scope The scope under which to execute the callback.
         *     If not given, the current message will be used.
         */
        forEachUnknown(callback: (_0: number, _1: any) => any /*missing*/, opt_scope?: Object): void;
    
        /**
         * Returns the descriptor which describes the current message.
         *
         * This only works if we assume people never subclass protobufs.
         *
         * @return {!goog.proto2.Descriptor} The descriptor.
         */
        getDescriptor(): goog.proto2.Descriptor;
    
        /**
         * Returns whether there is a value stored at the field specified by the
         * given field descriptor.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to check
         *     if there is a value.
         *
         * @return {boolean} True if a value was found.
         */
        has(field: goog.proto2.FieldDescriptor): boolean;
    
        /**
         * Returns the array of values found for the given repeated field.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to
         *     return the values.
         *
         * @return {!Array} The values found.
         */
        arrayOf(field: goog.proto2.FieldDescriptor): any[];
    
        /**
         * Returns the number of values stored in the given field.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to count
         *     the number of values.
         *
         * @return {number} The count of the values in the given field.
         */
        countOf(field: goog.proto2.FieldDescriptor): number;
    
        /**
         * Returns the value stored at the field specified by the
         * given field descriptor.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to get the
         *     value.
         * @param {number=} opt_index If the field is repeated, the index to use when
         *     looking up the value.
         *
         * @return {*} The value found or null if none.
         */
        get(field: goog.proto2.FieldDescriptor, opt_index?: number): any;
    
        /**
         * Returns the value stored at the field specified by the
         * given field descriptor or the default value if none exists.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to get the
         *     value.
         * @param {number=} opt_index If the field is repeated, the index to use when
         *     looking up the value.
         *
         * @return {*} The value found or the default if none.
         */
        getOrDefault(field: goog.proto2.FieldDescriptor, opt_index?: number): any;
    
        /**
         * Stores the given value to the field specified by the
         * given field descriptor. Note that the field must not be repeated.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to set
         *     the value.
         * @param {*} value The new value for the field.
         */
        set(field: goog.proto2.FieldDescriptor, value: any): void;
    
        /**
         * Adds the given value to the field specified by the
         * given field descriptor. Note that the field must be repeated.
         *
         * @param {goog.proto2.FieldDescriptor} field The field in which to add the
         *     the value.
         * @param {*} value The new value to add to the field.
         */
        add(field: goog.proto2.FieldDescriptor, value: any): void;
    
        /**
         * Clears the field specified.
         *
         * @param {goog.proto2.FieldDescriptor} field The field to clear.
         */
        clear(field: goog.proto2.FieldDescriptor): void;
    
        /**
         * Compares this message with another one ignoring the unknown fields.
         * @param {*} other The other message.
         * @return {boolean} Whether they are equal. Returns false if the {@code other}
         *     argument is a different type of message or not a message.
         */
        equals(other: any): boolean;
    
        /**
         * Recursively copies the known fields from the given message to this message.
         * Removes the fields which are not present in the source message.
         * @param {!goog.proto2.Message} message The source message.
         */
        copyFrom(message: goog.proto2.Message): void;
    
        /**
         * Merges the given message into this message.
         *
         * Singular fields will be overwritten, except for embedded messages which will
         * be merged. Repeated fields will be concatenated.
         * @param {!goog.proto2.Message} message The source message.
         */
        mergeFrom(message: goog.proto2.Message): void;
    
        /**
         * @return {!goog.proto2.Message} Recursive clone of the message only including
         *     the known fields.
         */
        clone(): goog.proto2.Message;
    
        /**
         * Fills in the protocol buffer with default values. Any fields that are
         * already set will not be overridden.
         * @param {boolean} simpleFieldsToo If true, all fields will be initialized;
         *     if false, only the nested messages and groups.
         */
        initDefaults(simpleFieldsToo: boolean): void;
    
        /**
         * Returns the whether or not the field indicated by the given tag
         * has a value.
         *
         * GENERATED CODE USE ONLY. Basis of the has{Field} methods.
         *
         * @param {number} tag The tag.
         *
         * @return {boolean} Whether the message has a value for the field.
         */
        has$Value(tag: number): boolean;
    
        /**
         * Gets the value at the field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the get{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {number=} opt_index If the field is a repeated field, the index
         *     at which to get the value.
         *
         * @return {*} The value found or null for none.
         * @protected
         */
        get$Value(tag: number, opt_index?: number): any;
    
        /**
         * Gets the value at the field indicated by the given tag or the default value
         * if none.
         *
         * GENERATED CODE USE ONLY. Basis of the get{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {number=} opt_index If the field is a repeated field, the index
         *     at which to get the value.
         *
         * @return {*} The value found or the default value if none set.
         * @protected
         */
        get$ValueOrDefault(tag: number, opt_index?: number): any;
    
        /**
         * Gets the values at the field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the {field}Array methods.
         *
         * @param {number} tag The field's tag index.
         *
         * @return {!Array} The values found. If none, returns an empty array.
         * @protected
         */
        array$Values(tag: number): any[];
    
        /**
         * Returns the number of values stored in the field by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the {field}Count methods.
         *
         * @param {number} tag The tag.
         *
         * @return {number} The number of values.
         * @protected
         */
        count$Values(tag: number): number;
    
        /**
         * Sets the value of the *non-repeating* field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the set{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {*} value The field's value.
         * @protected
         */
        set$Value(tag: number, value: any): void;
    
        /**
         * Adds the value to the *repeating* field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the add{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {*} value The value to add.
         * @protected
         */
        add$Value(tag: number, value: any): void;
    
        /**
         * Clears the field specified by tag.
         *
         * GENERATED CODE USE ONLY. Basis of the clear{Field} methods.
         *
         * @param {number} tag The tag of the field to clear.
         * @protected
         */
        clear$Field(tag: number): void;
    }
}

declare module goog.proto2.Message {

    /**
     * An enumeration defining the possible field types.
     * Should be a mirror of that defined in descriptor.h.
     *
     * TODO(user): Remove this alias.  The code generator generates code that
     * references this enum, so it needs to exist until the code generator is
     * changed.  The enum was moved to from Message to FieldDescriptor to avoid a
     * dependency cycle.
     *
     * Use goog.proto2.FieldDescriptor.FieldType instead.
     *
     * @enum {number}
     */
    enum FieldType { DOUBLE, FLOAT, INT64, UINT64, INT32, FIXED64, FIXED32, BOOL, STRING, GROUP, MESSAGE, BYTES, UINT32, ENUM, SFIXED32, SFIXED64, SINT32, SINT64 } 

    /**
     * Sets the metadata that represents the definition of this message.
     *
     * GENERATED CODE USE ONLY. Called when constructing message classes.
     *
     * @param {!Function} messageType Constructor for the
     *     message type to which this metadata applies.
     * @param {Object} metadataObj The object containing the metadata.
     */
    function set$Metadata(messageType: Function, metadataObj: Object): void;
}

