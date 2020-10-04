/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.quick_fea_types = (function() {

    /**
     * Namespace quick_fea_types.
     * @exports quick_fea_types
     * @namespace
     */
    var quick_fea_types = {};

    quick_fea_types.Node = (function() {

        /**
         * Properties of a Node.
         * @memberof quick_fea_types
         * @interface INode
         * @property {string|null} [id] Node id
         * @property {string|null} [name] Node name
         * @property {number|null} [x] Node x
         * @property {number|null} [y] Node y
         * @property {number|null} [z] Node z
         */

        /**
         * Constructs a new Node.
         * @memberof quick_fea_types
         * @classdesc Represents a Node.
         * @implements INode
         * @constructor
         * @param {quick_fea_types.INode=} [properties] Properties to set
         */
        function Node(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Node id.
         * @member {string} id
         * @memberof quick_fea_types.Node
         * @instance
         */
        Node.prototype.id = "";

        /**
         * Node name.
         * @member {string} name
         * @memberof quick_fea_types.Node
         * @instance
         */
        Node.prototype.name = "";

        /**
         * Node x.
         * @member {number} x
         * @memberof quick_fea_types.Node
         * @instance
         */
        Node.prototype.x = 0;

        /**
         * Node y.
         * @member {number} y
         * @memberof quick_fea_types.Node
         * @instance
         */
        Node.prototype.y = 0;

        /**
         * Node z.
         * @member {number} z
         * @memberof quick_fea_types.Node
         * @instance
         */
        Node.prototype.z = 0;

        /**
         * Creates a new Node instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.Node
         * @static
         * @param {quick_fea_types.INode=} [properties] Properties to set
         * @returns {quick_fea_types.Node} Node instance
         */
        Node.create = function create(properties) {
            return new Node(properties);
        };

        /**
         * Encodes the specified Node message. Does not implicitly {@link quick_fea_types.Node.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.Node
         * @static
         * @param {quick_fea_types.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.z);
            return writer;
        };

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link quick_fea_types.Node.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.Node
         * @static
         * @param {quick_fea_types.INode} message Node message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Node.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.Node();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.x = reader.double();
                    break;
                case 4:
                    message.y = reader.double();
                    break;
                case 5:
                    message.z = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.Node
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.Node} Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Node.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Node message.
         * @function verify
         * @memberof quick_fea_types.Node
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Node.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.Node
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.Node} Node
         */
        Node.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.Node)
                return object;
            var message = new $root.quick_fea_types.Node();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.Node
         * @static
         * @param {quick_fea_types.Node} message Node
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Node.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };

        /**
         * Converts this Node to JSON.
         * @function toJSON
         * @memberof quick_fea_types.Node
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Node.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Node;
    })();

    quick_fea_types.Frame = (function() {

        /**
         * Properties of a Frame.
         * @memberof quick_fea_types
         * @interface IFrame
         * @property {string|null} [id] Frame id
         * @property {string|null} [name] Frame name
         * @property {string|null} [startNodeId] Frame startNodeId
         * @property {string|null} [endNodeId] Frame endNodeId
         * @property {string|null} [materialId] Frame materialId
         * @property {string|null} [sectionId] Frame sectionId
         * @property {number|null} [rotation] Frame rotation
         * @property {quick_fea_types.MaterialCategory|null} [materialCategory] Frame materialCategory
         * @property {quick_fea_types.SectionCategory|null} [sectionCategory] Frame sectionCategory
         * @property {quick_fea_types.IFrameStiffnessModifiers|null} [stiffnessModifiers] Frame stiffnessModifiers
         * @property {quick_fea_types.IFrameEndReleases|null} [startReleases] Frame startReleases
         * @property {quick_fea_types.IFrameEndReleases|null} [endReleases] Frame endReleases
         */

        /**
         * Constructs a new Frame.
         * @memberof quick_fea_types
         * @classdesc Represents a Frame.
         * @implements IFrame
         * @constructor
         * @param {quick_fea_types.IFrame=} [properties] Properties to set
         */
        function Frame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Frame id.
         * @member {string} id
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.id = "";

        /**
         * Frame name.
         * @member {string} name
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.name = "";

        /**
         * Frame startNodeId.
         * @member {string} startNodeId
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.startNodeId = "";

        /**
         * Frame endNodeId.
         * @member {string} endNodeId
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.endNodeId = "";

        /**
         * Frame materialId.
         * @member {string} materialId
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.materialId = "";

        /**
         * Frame sectionId.
         * @member {string} sectionId
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.sectionId = "";

        /**
         * Frame rotation.
         * @member {number} rotation
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.rotation = 0;

        /**
         * Frame materialCategory.
         * @member {quick_fea_types.MaterialCategory} materialCategory
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.materialCategory = 0;

        /**
         * Frame sectionCategory.
         * @member {quick_fea_types.SectionCategory} sectionCategory
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.sectionCategory = 0;

        /**
         * Frame stiffnessModifiers.
         * @member {quick_fea_types.IFrameStiffnessModifiers|null|undefined} stiffnessModifiers
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.stiffnessModifiers = null;

        /**
         * Frame startReleases.
         * @member {quick_fea_types.IFrameEndReleases|null|undefined} startReleases
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.startReleases = null;

        /**
         * Frame endReleases.
         * @member {quick_fea_types.IFrameEndReleases|null|undefined} endReleases
         * @memberof quick_fea_types.Frame
         * @instance
         */
        Frame.prototype.endReleases = null;

        /**
         * Creates a new Frame instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.Frame
         * @static
         * @param {quick_fea_types.IFrame=} [properties] Properties to set
         * @returns {quick_fea_types.Frame} Frame instance
         */
        Frame.create = function create(properties) {
            return new Frame(properties);
        };

        /**
         * Encodes the specified Frame message. Does not implicitly {@link quick_fea_types.Frame.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.Frame
         * @static
         * @param {quick_fea_types.IFrame} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.startNodeId != null && Object.hasOwnProperty.call(message, "startNodeId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.startNodeId);
            if (message.endNodeId != null && Object.hasOwnProperty.call(message, "endNodeId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.endNodeId);
            if (message.materialId != null && Object.hasOwnProperty.call(message, "materialId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.materialId);
            if (message.sectionId != null && Object.hasOwnProperty.call(message, "sectionId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sectionId);
            if (message.rotation != null && Object.hasOwnProperty.call(message, "rotation"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.rotation);
            if (message.materialCategory != null && Object.hasOwnProperty.call(message, "materialCategory"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.materialCategory);
            if (message.sectionCategory != null && Object.hasOwnProperty.call(message, "sectionCategory"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.sectionCategory);
            if (message.stiffnessModifiers != null && Object.hasOwnProperty.call(message, "stiffnessModifiers"))
                $root.quick_fea_types.FrameStiffnessModifiers.encode(message.stiffnessModifiers, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.startReleases != null && Object.hasOwnProperty.call(message, "startReleases"))
                $root.quick_fea_types.FrameEndReleases.encode(message.startReleases, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.endReleases != null && Object.hasOwnProperty.call(message, "endReleases"))
                $root.quick_fea_types.FrameEndReleases.encode(message.endReleases, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Frame message, length delimited. Does not implicitly {@link quick_fea_types.Frame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.Frame
         * @static
         * @param {quick_fea_types.IFrame} message Frame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Frame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.Frame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.Frame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.startNodeId = reader.string();
                    break;
                case 4:
                    message.endNodeId = reader.string();
                    break;
                case 5:
                    message.materialId = reader.string();
                    break;
                case 6:
                    message.sectionId = reader.string();
                    break;
                case 7:
                    message.rotation = reader.double();
                    break;
                case 8:
                    message.materialCategory = reader.int32();
                    break;
                case 9:
                    message.sectionCategory = reader.int32();
                    break;
                case 10:
                    message.stiffnessModifiers = $root.quick_fea_types.FrameStiffnessModifiers.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.startReleases = $root.quick_fea_types.FrameEndReleases.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.endReleases = $root.quick_fea_types.FrameEndReleases.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.Frame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.Frame} Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Frame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Frame message.
         * @function verify
         * @memberof quick_fea_types.Frame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Frame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.startNodeId != null && message.hasOwnProperty("startNodeId"))
                if (!$util.isString(message.startNodeId))
                    return "startNodeId: string expected";
            if (message.endNodeId != null && message.hasOwnProperty("endNodeId"))
                if (!$util.isString(message.endNodeId))
                    return "endNodeId: string expected";
            if (message.materialId != null && message.hasOwnProperty("materialId"))
                if (!$util.isString(message.materialId))
                    return "materialId: string expected";
            if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                if (!$util.isString(message.sectionId))
                    return "sectionId: string expected";
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                if (typeof message.rotation !== "number")
                    return "rotation: number expected";
            if (message.materialCategory != null && message.hasOwnProperty("materialCategory"))
                switch (message.materialCategory) {
                default:
                    return "materialCategory: enum value expected";
                case 0:
                    break;
                }
            if (message.sectionCategory != null && message.hasOwnProperty("sectionCategory"))
                switch (message.sectionCategory) {
                default:
                    return "sectionCategory: enum value expected";
                case 0:
                    break;
                }
            if (message.stiffnessModifiers != null && message.hasOwnProperty("stiffnessModifiers")) {
                var error = $root.quick_fea_types.FrameStiffnessModifiers.verify(message.stiffnessModifiers);
                if (error)
                    return "stiffnessModifiers." + error;
            }
            if (message.startReleases != null && message.hasOwnProperty("startReleases")) {
                var error = $root.quick_fea_types.FrameEndReleases.verify(message.startReleases);
                if (error)
                    return "startReleases." + error;
            }
            if (message.endReleases != null && message.hasOwnProperty("endReleases")) {
                var error = $root.quick_fea_types.FrameEndReleases.verify(message.endReleases);
                if (error)
                    return "endReleases." + error;
            }
            return null;
        };

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.Frame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.Frame} Frame
         */
        Frame.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.Frame)
                return object;
            var message = new $root.quick_fea_types.Frame();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.startNodeId != null)
                message.startNodeId = String(object.startNodeId);
            if (object.endNodeId != null)
                message.endNodeId = String(object.endNodeId);
            if (object.materialId != null)
                message.materialId = String(object.materialId);
            if (object.sectionId != null)
                message.sectionId = String(object.sectionId);
            if (object.rotation != null)
                message.rotation = Number(object.rotation);
            switch (object.materialCategory) {
            case "ISOTROPIC":
            case 0:
                message.materialCategory = 0;
                break;
            }
            switch (object.sectionCategory) {
            case "HOMOGENOUS":
            case 0:
                message.sectionCategory = 0;
                break;
            }
            if (object.stiffnessModifiers != null) {
                if (typeof object.stiffnessModifiers !== "object")
                    throw TypeError(".quick_fea_types.Frame.stiffnessModifiers: object expected");
                message.stiffnessModifiers = $root.quick_fea_types.FrameStiffnessModifiers.fromObject(object.stiffnessModifiers);
            }
            if (object.startReleases != null) {
                if (typeof object.startReleases !== "object")
                    throw TypeError(".quick_fea_types.Frame.startReleases: object expected");
                message.startReleases = $root.quick_fea_types.FrameEndReleases.fromObject(object.startReleases);
            }
            if (object.endReleases != null) {
                if (typeof object.endReleases !== "object")
                    throw TypeError(".quick_fea_types.Frame.endReleases: object expected");
                message.endReleases = $root.quick_fea_types.FrameEndReleases.fromObject(object.endReleases);
            }
            return message;
        };

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.Frame
         * @static
         * @param {quick_fea_types.Frame} message Frame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Frame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.startNodeId = "";
                object.endNodeId = "";
                object.materialId = "";
                object.sectionId = "";
                object.rotation = 0;
                object.materialCategory = options.enums === String ? "ISOTROPIC" : 0;
                object.sectionCategory = options.enums === String ? "HOMOGENOUS" : 0;
                object.stiffnessModifiers = null;
                object.startReleases = null;
                object.endReleases = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.startNodeId != null && message.hasOwnProperty("startNodeId"))
                object.startNodeId = message.startNodeId;
            if (message.endNodeId != null && message.hasOwnProperty("endNodeId"))
                object.endNodeId = message.endNodeId;
            if (message.materialId != null && message.hasOwnProperty("materialId"))
                object.materialId = message.materialId;
            if (message.sectionId != null && message.hasOwnProperty("sectionId"))
                object.sectionId = message.sectionId;
            if (message.rotation != null && message.hasOwnProperty("rotation"))
                object.rotation = options.json && !isFinite(message.rotation) ? String(message.rotation) : message.rotation;
            if (message.materialCategory != null && message.hasOwnProperty("materialCategory"))
                object.materialCategory = options.enums === String ? $root.quick_fea_types.MaterialCategory[message.materialCategory] : message.materialCategory;
            if (message.sectionCategory != null && message.hasOwnProperty("sectionCategory"))
                object.sectionCategory = options.enums === String ? $root.quick_fea_types.SectionCategory[message.sectionCategory] : message.sectionCategory;
            if (message.stiffnessModifiers != null && message.hasOwnProperty("stiffnessModifiers"))
                object.stiffnessModifiers = $root.quick_fea_types.FrameStiffnessModifiers.toObject(message.stiffnessModifiers, options);
            if (message.startReleases != null && message.hasOwnProperty("startReleases"))
                object.startReleases = $root.quick_fea_types.FrameEndReleases.toObject(message.startReleases, options);
            if (message.endReleases != null && message.hasOwnProperty("endReleases"))
                object.endReleases = $root.quick_fea_types.FrameEndReleases.toObject(message.endReleases, options);
            return object;
        };

        /**
         * Converts this Frame to JSON.
         * @function toJSON
         * @memberof quick_fea_types.Frame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Frame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Frame;
    })();

    quick_fea_types.FrameStiffnessModifiers = (function() {

        /**
         * Properties of a FrameStiffnessModifiers.
         * @memberof quick_fea_types
         * @interface IFrameStiffnessModifiers
         * @property {number|null} [A] FrameStiffnessModifiers A
         * @property {number|null} [Avy] FrameStiffnessModifiers Avy
         * @property {number|null} [Avz] FrameStiffnessModifiers Avz
         * @property {number|null} [J] FrameStiffnessModifiers J
         * @property {number|null} [Iy] FrameStiffnessModifiers Iy
         * @property {number|null} [Iz] FrameStiffnessModifiers Iz
         */

        /**
         * Constructs a new FrameStiffnessModifiers.
         * @memberof quick_fea_types
         * @classdesc Represents a FrameStiffnessModifiers.
         * @implements IFrameStiffnessModifiers
         * @constructor
         * @param {quick_fea_types.IFrameStiffnessModifiers=} [properties] Properties to set
         */
        function FrameStiffnessModifiers(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrameStiffnessModifiers A.
         * @member {number} A
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.A = 0;

        /**
         * FrameStiffnessModifiers Avy.
         * @member {number} Avy
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.Avy = 0;

        /**
         * FrameStiffnessModifiers Avz.
         * @member {number} Avz
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.Avz = 0;

        /**
         * FrameStiffnessModifiers J.
         * @member {number} J
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.J = 0;

        /**
         * FrameStiffnessModifiers Iy.
         * @member {number} Iy
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.Iy = 0;

        /**
         * FrameStiffnessModifiers Iz.
         * @member {number} Iz
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         */
        FrameStiffnessModifiers.prototype.Iz = 0;

        /**
         * Creates a new FrameStiffnessModifiers instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {quick_fea_types.IFrameStiffnessModifiers=} [properties] Properties to set
         * @returns {quick_fea_types.FrameStiffnessModifiers} FrameStiffnessModifiers instance
         */
        FrameStiffnessModifiers.create = function create(properties) {
            return new FrameStiffnessModifiers(properties);
        };

        /**
         * Encodes the specified FrameStiffnessModifiers message. Does not implicitly {@link quick_fea_types.FrameStiffnessModifiers.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {quick_fea_types.IFrameStiffnessModifiers} message FrameStiffnessModifiers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameStiffnessModifiers.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.A);
            if (message.Avy != null && Object.hasOwnProperty.call(message, "Avy"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Avy);
            if (message.Avz != null && Object.hasOwnProperty.call(message, "Avz"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Avz);
            if (message.J != null && Object.hasOwnProperty.call(message, "J"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.J);
            if (message.Iy != null && Object.hasOwnProperty.call(message, "Iy"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.Iy);
            if (message.Iz != null && Object.hasOwnProperty.call(message, "Iz"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.Iz);
            return writer;
        };

        /**
         * Encodes the specified FrameStiffnessModifiers message, length delimited. Does not implicitly {@link quick_fea_types.FrameStiffnessModifiers.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {quick_fea_types.IFrameStiffnessModifiers} message FrameStiffnessModifiers message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameStiffnessModifiers.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrameStiffnessModifiers message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.FrameStiffnessModifiers} FrameStiffnessModifiers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameStiffnessModifiers.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.FrameStiffnessModifiers();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.A = reader.double();
                    break;
                case 2:
                    message.Avy = reader.double();
                    break;
                case 3:
                    message.Avz = reader.double();
                    break;
                case 4:
                    message.J = reader.double();
                    break;
                case 5:
                    message.Iy = reader.double();
                    break;
                case 6:
                    message.Iz = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FrameStiffnessModifiers message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.FrameStiffnessModifiers} FrameStiffnessModifiers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameStiffnessModifiers.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FrameStiffnessModifiers message.
         * @function verify
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FrameStiffnessModifiers.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.A != null && message.hasOwnProperty("A"))
                if (typeof message.A !== "number")
                    return "A: number expected";
            if (message.Avy != null && message.hasOwnProperty("Avy"))
                if (typeof message.Avy !== "number")
                    return "Avy: number expected";
            if (message.Avz != null && message.hasOwnProperty("Avz"))
                if (typeof message.Avz !== "number")
                    return "Avz: number expected";
            if (message.J != null && message.hasOwnProperty("J"))
                if (typeof message.J !== "number")
                    return "J: number expected";
            if (message.Iy != null && message.hasOwnProperty("Iy"))
                if (typeof message.Iy !== "number")
                    return "Iy: number expected";
            if (message.Iz != null && message.hasOwnProperty("Iz"))
                if (typeof message.Iz !== "number")
                    return "Iz: number expected";
            return null;
        };

        /**
         * Creates a FrameStiffnessModifiers message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.FrameStiffnessModifiers} FrameStiffnessModifiers
         */
        FrameStiffnessModifiers.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.FrameStiffnessModifiers)
                return object;
            var message = new $root.quick_fea_types.FrameStiffnessModifiers();
            if (object.A != null)
                message.A = Number(object.A);
            if (object.Avy != null)
                message.Avy = Number(object.Avy);
            if (object.Avz != null)
                message.Avz = Number(object.Avz);
            if (object.J != null)
                message.J = Number(object.J);
            if (object.Iy != null)
                message.Iy = Number(object.Iy);
            if (object.Iz != null)
                message.Iz = Number(object.Iz);
            return message;
        };

        /**
         * Creates a plain object from a FrameStiffnessModifiers message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @static
         * @param {quick_fea_types.FrameStiffnessModifiers} message FrameStiffnessModifiers
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FrameStiffnessModifiers.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.A = 0;
                object.Avy = 0;
                object.Avz = 0;
                object.J = 0;
                object.Iy = 0;
                object.Iz = 0;
            }
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            if (message.Avy != null && message.hasOwnProperty("Avy"))
                object.Avy = options.json && !isFinite(message.Avy) ? String(message.Avy) : message.Avy;
            if (message.Avz != null && message.hasOwnProperty("Avz"))
                object.Avz = options.json && !isFinite(message.Avz) ? String(message.Avz) : message.Avz;
            if (message.J != null && message.hasOwnProperty("J"))
                object.J = options.json && !isFinite(message.J) ? String(message.J) : message.J;
            if (message.Iy != null && message.hasOwnProperty("Iy"))
                object.Iy = options.json && !isFinite(message.Iy) ? String(message.Iy) : message.Iy;
            if (message.Iz != null && message.hasOwnProperty("Iz"))
                object.Iz = options.json && !isFinite(message.Iz) ? String(message.Iz) : message.Iz;
            return object;
        };

        /**
         * Converts this FrameStiffnessModifiers to JSON.
         * @function toJSON
         * @memberof quick_fea_types.FrameStiffnessModifiers
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrameStiffnessModifiers.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FrameStiffnessModifiers;
    })();

    quick_fea_types.FrameEndReleases = (function() {

        /**
         * Properties of a FrameEndReleases.
         * @memberof quick_fea_types
         * @interface IFrameEndReleases
         * @property {quick_fea_types.FrameEndReleases.Category|null} [A] FrameEndReleases A
         * @property {quick_fea_types.FrameEndReleases.Category|null} [Vy] FrameEndReleases Vy
         * @property {quick_fea_types.FrameEndReleases.Category|null} [Vz] FrameEndReleases Vz
         * @property {quick_fea_types.FrameEndReleases.Category|null} [T] FrameEndReleases T
         * @property {quick_fea_types.FrameEndReleases.Category|null} [My] FrameEndReleases My
         * @property {quick_fea_types.FrameEndReleases.Category|null} [Mz] FrameEndReleases Mz
         */

        /**
         * Constructs a new FrameEndReleases.
         * @memberof quick_fea_types
         * @classdesc Represents a FrameEndReleases.
         * @implements IFrameEndReleases
         * @constructor
         * @param {quick_fea_types.IFrameEndReleases=} [properties] Properties to set
         */
        function FrameEndReleases(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FrameEndReleases A.
         * @member {quick_fea_types.FrameEndReleases.Category} A
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.A = 0;

        /**
         * FrameEndReleases Vy.
         * @member {quick_fea_types.FrameEndReleases.Category} Vy
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.Vy = 0;

        /**
         * FrameEndReleases Vz.
         * @member {quick_fea_types.FrameEndReleases.Category} Vz
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.Vz = 0;

        /**
         * FrameEndReleases T.
         * @member {quick_fea_types.FrameEndReleases.Category} T
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.T = 0;

        /**
         * FrameEndReleases My.
         * @member {quick_fea_types.FrameEndReleases.Category} My
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.My = 0;

        /**
         * FrameEndReleases Mz.
         * @member {quick_fea_types.FrameEndReleases.Category} Mz
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         */
        FrameEndReleases.prototype.Mz = 0;

        /**
         * Creates a new FrameEndReleases instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {quick_fea_types.IFrameEndReleases=} [properties] Properties to set
         * @returns {quick_fea_types.FrameEndReleases} FrameEndReleases instance
         */
        FrameEndReleases.create = function create(properties) {
            return new FrameEndReleases(properties);
        };

        /**
         * Encodes the specified FrameEndReleases message. Does not implicitly {@link quick_fea_types.FrameEndReleases.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {quick_fea_types.IFrameEndReleases} message FrameEndReleases message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameEndReleases.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.A);
            if (message.Vy != null && Object.hasOwnProperty.call(message, "Vy"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Vy);
            if (message.Vz != null && Object.hasOwnProperty.call(message, "Vz"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Vz);
            if (message.T != null && Object.hasOwnProperty.call(message, "T"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.T);
            if (message.My != null && Object.hasOwnProperty.call(message, "My"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.My);
            if (message.Mz != null && Object.hasOwnProperty.call(message, "Mz"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Mz);
            return writer;
        };

        /**
         * Encodes the specified FrameEndReleases message, length delimited. Does not implicitly {@link quick_fea_types.FrameEndReleases.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {quick_fea_types.IFrameEndReleases} message FrameEndReleases message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FrameEndReleases.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FrameEndReleases message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.FrameEndReleases} FrameEndReleases
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameEndReleases.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.FrameEndReleases();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.A = reader.int32();
                    break;
                case 2:
                    message.Vy = reader.int32();
                    break;
                case 3:
                    message.Vz = reader.int32();
                    break;
                case 4:
                    message.T = reader.int32();
                    break;
                case 5:
                    message.My = reader.int32();
                    break;
                case 6:
                    message.Mz = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FrameEndReleases message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.FrameEndReleases} FrameEndReleases
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FrameEndReleases.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FrameEndReleases message.
         * @function verify
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FrameEndReleases.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.A != null && message.hasOwnProperty("A"))
                switch (message.A) {
                default:
                    return "A: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.Vy != null && message.hasOwnProperty("Vy"))
                switch (message.Vy) {
                default:
                    return "Vy: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.Vz != null && message.hasOwnProperty("Vz"))
                switch (message.Vz) {
                default:
                    return "Vz: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.T != null && message.hasOwnProperty("T"))
                switch (message.T) {
                default:
                    return "T: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.My != null && message.hasOwnProperty("My"))
                switch (message.My) {
                default:
                    return "My: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.Mz != null && message.hasOwnProperty("Mz"))
                switch (message.Mz) {
                default:
                    return "Mz: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a FrameEndReleases message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.FrameEndReleases} FrameEndReleases
         */
        FrameEndReleases.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.FrameEndReleases)
                return object;
            var message = new $root.quick_fea_types.FrameEndReleases();
            switch (object.A) {
            case "FIXED":
            case 0:
                message.A = 0;
                break;
            case "FREE":
            case 1:
                message.A = 1;
                break;
            }
            switch (object.Vy) {
            case "FIXED":
            case 0:
                message.Vy = 0;
                break;
            case "FREE":
            case 1:
                message.Vy = 1;
                break;
            }
            switch (object.Vz) {
            case "FIXED":
            case 0:
                message.Vz = 0;
                break;
            case "FREE":
            case 1:
                message.Vz = 1;
                break;
            }
            switch (object.T) {
            case "FIXED":
            case 0:
                message.T = 0;
                break;
            case "FREE":
            case 1:
                message.T = 1;
                break;
            }
            switch (object.My) {
            case "FIXED":
            case 0:
                message.My = 0;
                break;
            case "FREE":
            case 1:
                message.My = 1;
                break;
            }
            switch (object.Mz) {
            case "FIXED":
            case 0:
                message.Mz = 0;
                break;
            case "FREE":
            case 1:
                message.Mz = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a FrameEndReleases message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.FrameEndReleases
         * @static
         * @param {quick_fea_types.FrameEndReleases} message FrameEndReleases
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FrameEndReleases.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.A = options.enums === String ? "FIXED" : 0;
                object.Vy = options.enums === String ? "FIXED" : 0;
                object.Vz = options.enums === String ? "FIXED" : 0;
                object.T = options.enums === String ? "FIXED" : 0;
                object.My = options.enums === String ? "FIXED" : 0;
                object.Mz = options.enums === String ? "FIXED" : 0;
            }
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.A] : message.A;
            if (message.Vy != null && message.hasOwnProperty("Vy"))
                object.Vy = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.Vy] : message.Vy;
            if (message.Vz != null && message.hasOwnProperty("Vz"))
                object.Vz = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.Vz] : message.Vz;
            if (message.T != null && message.hasOwnProperty("T"))
                object.T = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.T] : message.T;
            if (message.My != null && message.hasOwnProperty("My"))
                object.My = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.My] : message.My;
            if (message.Mz != null && message.hasOwnProperty("Mz"))
                object.Mz = options.enums === String ? $root.quick_fea_types.FrameEndReleases.Category[message.Mz] : message.Mz;
            return object;
        };

        /**
         * Converts this FrameEndReleases to JSON.
         * @function toJSON
         * @memberof quick_fea_types.FrameEndReleases
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FrameEndReleases.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Category enum.
         * @name quick_fea_types.FrameEndReleases.Category
         * @enum {number}
         * @property {number} FIXED=0 FIXED value
         * @property {number} FREE=1 FREE value
         */
        FrameEndReleases.Category = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FIXED"] = 0;
            values[valuesById[1] = "FREE"] = 1;
            return values;
        })();

        return FrameEndReleases;
    })();

    /**
     * MaterialCategory enum.
     * @name quick_fea_types.MaterialCategory
     * @enum {number}
     * @property {number} ISOTROPIC=0 ISOTROPIC value
     */
    quick_fea_types.MaterialCategory = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ISOTROPIC"] = 0;
        return values;
    })();

    quick_fea_types.IsotropicMaterial = (function() {

        /**
         * Properties of an IsotropicMaterial.
         * @memberof quick_fea_types
         * @interface IIsotropicMaterial
         * @property {string|null} [id] IsotropicMaterial id
         * @property {string|null} [name] IsotropicMaterial name
         * @property {number|null} [E] IsotropicMaterial E
         * @property {number|null} [nu] IsotropicMaterial nu
         */

        /**
         * Constructs a new IsotropicMaterial.
         * @memberof quick_fea_types
         * @classdesc Represents an IsotropicMaterial.
         * @implements IIsotropicMaterial
         * @constructor
         * @param {quick_fea_types.IIsotropicMaterial=} [properties] Properties to set
         */
        function IsotropicMaterial(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IsotropicMaterial id.
         * @member {string} id
         * @memberof quick_fea_types.IsotropicMaterial
         * @instance
         */
        IsotropicMaterial.prototype.id = "";

        /**
         * IsotropicMaterial name.
         * @member {string} name
         * @memberof quick_fea_types.IsotropicMaterial
         * @instance
         */
        IsotropicMaterial.prototype.name = "";

        /**
         * IsotropicMaterial E.
         * @member {number} E
         * @memberof quick_fea_types.IsotropicMaterial
         * @instance
         */
        IsotropicMaterial.prototype.E = 0;

        /**
         * IsotropicMaterial nu.
         * @member {number} nu
         * @memberof quick_fea_types.IsotropicMaterial
         * @instance
         */
        IsotropicMaterial.prototype.nu = 0;

        /**
         * Creates a new IsotropicMaterial instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {quick_fea_types.IIsotropicMaterial=} [properties] Properties to set
         * @returns {quick_fea_types.IsotropicMaterial} IsotropicMaterial instance
         */
        IsotropicMaterial.create = function create(properties) {
            return new IsotropicMaterial(properties);
        };

        /**
         * Encodes the specified IsotropicMaterial message. Does not implicitly {@link quick_fea_types.IsotropicMaterial.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {quick_fea_types.IIsotropicMaterial} message IsotropicMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsotropicMaterial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.E != null && Object.hasOwnProperty.call(message, "E"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.E);
            if (message.nu != null && Object.hasOwnProperty.call(message, "nu"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.nu);
            return writer;
        };

        /**
         * Encodes the specified IsotropicMaterial message, length delimited. Does not implicitly {@link quick_fea_types.IsotropicMaterial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {quick_fea_types.IIsotropicMaterial} message IsotropicMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IsotropicMaterial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IsotropicMaterial message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.IsotropicMaterial} IsotropicMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsotropicMaterial.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.IsotropicMaterial();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.E = reader.double();
                    break;
                case 4:
                    message.nu = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IsotropicMaterial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.IsotropicMaterial} IsotropicMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IsotropicMaterial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IsotropicMaterial message.
         * @function verify
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IsotropicMaterial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.E != null && message.hasOwnProperty("E"))
                if (typeof message.E !== "number")
                    return "E: number expected";
            if (message.nu != null && message.hasOwnProperty("nu"))
                if (typeof message.nu !== "number")
                    return "nu: number expected";
            return null;
        };

        /**
         * Creates an IsotropicMaterial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.IsotropicMaterial} IsotropicMaterial
         */
        IsotropicMaterial.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.IsotropicMaterial)
                return object;
            var message = new $root.quick_fea_types.IsotropicMaterial();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.E != null)
                message.E = Number(object.E);
            if (object.nu != null)
                message.nu = Number(object.nu);
            return message;
        };

        /**
         * Creates a plain object from an IsotropicMaterial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.IsotropicMaterial
         * @static
         * @param {quick_fea_types.IsotropicMaterial} message IsotropicMaterial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IsotropicMaterial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.E = 0;
                object.nu = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.E != null && message.hasOwnProperty("E"))
                object.E = options.json && !isFinite(message.E) ? String(message.E) : message.E;
            if (message.nu != null && message.hasOwnProperty("nu"))
                object.nu = options.json && !isFinite(message.nu) ? String(message.nu) : message.nu;
            return object;
        };

        /**
         * Converts this IsotropicMaterial to JSON.
         * @function toJSON
         * @memberof quick_fea_types.IsotropicMaterial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IsotropicMaterial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IsotropicMaterial;
    })();

    /**
     * SectionCategory enum.
     * @name quick_fea_types.SectionCategory
     * @enum {number}
     * @property {number} HOMOGENOUS=0 HOMOGENOUS value
     */
    quick_fea_types.SectionCategory = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HOMOGENOUS"] = 0;
        return values;
    })();

    quick_fea_types.HomogenousSection = (function() {

        /**
         * Properties of a HomogenousSection.
         * @memberof quick_fea_types
         * @interface IHomogenousSection
         * @property {string|null} [id] HomogenousSection id
         * @property {string|null} [name] HomogenousSection name
         * @property {quick_fea_types.IHomogenousSectionProperties|null} [properties] HomogenousSection properties
         */

        /**
         * Constructs a new HomogenousSection.
         * @memberof quick_fea_types
         * @classdesc Represents a HomogenousSection.
         * @implements IHomogenousSection
         * @constructor
         * @param {quick_fea_types.IHomogenousSection=} [properties] Properties to set
         */
        function HomogenousSection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HomogenousSection id.
         * @member {string} id
         * @memberof quick_fea_types.HomogenousSection
         * @instance
         */
        HomogenousSection.prototype.id = "";

        /**
         * HomogenousSection name.
         * @member {string} name
         * @memberof quick_fea_types.HomogenousSection
         * @instance
         */
        HomogenousSection.prototype.name = "";

        /**
         * HomogenousSection properties.
         * @member {quick_fea_types.IHomogenousSectionProperties|null|undefined} properties
         * @memberof quick_fea_types.HomogenousSection
         * @instance
         */
        HomogenousSection.prototype.properties = null;

        /**
         * Creates a new HomogenousSection instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {quick_fea_types.IHomogenousSection=} [properties] Properties to set
         * @returns {quick_fea_types.HomogenousSection} HomogenousSection instance
         */
        HomogenousSection.create = function create(properties) {
            return new HomogenousSection(properties);
        };

        /**
         * Encodes the specified HomogenousSection message. Does not implicitly {@link quick_fea_types.HomogenousSection.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {quick_fea_types.IHomogenousSection} message HomogenousSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomogenousSection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.properties != null && Object.hasOwnProperty.call(message, "properties"))
                $root.quick_fea_types.HomogenousSectionProperties.encode(message.properties, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HomogenousSection message, length delimited. Does not implicitly {@link quick_fea_types.HomogenousSection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {quick_fea_types.IHomogenousSection} message HomogenousSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomogenousSection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HomogenousSection message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.HomogenousSection} HomogenousSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomogenousSection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.HomogenousSection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.properties = $root.quick_fea_types.HomogenousSectionProperties.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HomogenousSection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.HomogenousSection} HomogenousSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomogenousSection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HomogenousSection message.
         * @function verify
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HomogenousSection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.properties != null && message.hasOwnProperty("properties")) {
                var error = $root.quick_fea_types.HomogenousSectionProperties.verify(message.properties);
                if (error)
                    return "properties." + error;
            }
            return null;
        };

        /**
         * Creates a HomogenousSection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.HomogenousSection} HomogenousSection
         */
        HomogenousSection.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.HomogenousSection)
                return object;
            var message = new $root.quick_fea_types.HomogenousSection();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.properties != null) {
                if (typeof object.properties !== "object")
                    throw TypeError(".quick_fea_types.HomogenousSection.properties: object expected");
                message.properties = $root.quick_fea_types.HomogenousSectionProperties.fromObject(object.properties);
            }
            return message;
        };

        /**
         * Creates a plain object from a HomogenousSection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.HomogenousSection
         * @static
         * @param {quick_fea_types.HomogenousSection} message HomogenousSection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HomogenousSection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.properties = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.properties != null && message.hasOwnProperty("properties"))
                object.properties = $root.quick_fea_types.HomogenousSectionProperties.toObject(message.properties, options);
            return object;
        };

        /**
         * Converts this HomogenousSection to JSON.
         * @function toJSON
         * @memberof quick_fea_types.HomogenousSection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HomogenousSection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HomogenousSection;
    })();

    quick_fea_types.HomogenousSectionProperties = (function() {

        /**
         * Properties of a HomogenousSectionProperties.
         * @memberof quick_fea_types
         * @interface IHomogenousSectionProperties
         * @property {number|null} [A] HomogenousSectionProperties A
         * @property {number|null} [Avy] HomogenousSectionProperties Avy
         * @property {number|null} [Avz] HomogenousSectionProperties Avz
         * @property {number|null} [J] HomogenousSectionProperties J
         * @property {number|null} [Iy] HomogenousSectionProperties Iy
         * @property {number|null} [Iz] HomogenousSectionProperties Iz
         */

        /**
         * Constructs a new HomogenousSectionProperties.
         * @memberof quick_fea_types
         * @classdesc Represents a HomogenousSectionProperties.
         * @implements IHomogenousSectionProperties
         * @constructor
         * @param {quick_fea_types.IHomogenousSectionProperties=} [properties] Properties to set
         */
        function HomogenousSectionProperties(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HomogenousSectionProperties A.
         * @member {number} A
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.A = 0;

        /**
         * HomogenousSectionProperties Avy.
         * @member {number} Avy
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.Avy = 0;

        /**
         * HomogenousSectionProperties Avz.
         * @member {number} Avz
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.Avz = 0;

        /**
         * HomogenousSectionProperties J.
         * @member {number} J
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.J = 0;

        /**
         * HomogenousSectionProperties Iy.
         * @member {number} Iy
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.Iy = 0;

        /**
         * HomogenousSectionProperties Iz.
         * @member {number} Iz
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         */
        HomogenousSectionProperties.prototype.Iz = 0;

        /**
         * Creates a new HomogenousSectionProperties instance using the specified properties.
         * @function create
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {quick_fea_types.IHomogenousSectionProperties=} [properties] Properties to set
         * @returns {quick_fea_types.HomogenousSectionProperties} HomogenousSectionProperties instance
         */
        HomogenousSectionProperties.create = function create(properties) {
            return new HomogenousSectionProperties(properties);
        };

        /**
         * Encodes the specified HomogenousSectionProperties message. Does not implicitly {@link quick_fea_types.HomogenousSectionProperties.verify|verify} messages.
         * @function encode
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {quick_fea_types.IHomogenousSectionProperties} message HomogenousSectionProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomogenousSectionProperties.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.A != null && Object.hasOwnProperty.call(message, "A"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.A);
            if (message.Avy != null && Object.hasOwnProperty.call(message, "Avy"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Avy);
            if (message.Avz != null && Object.hasOwnProperty.call(message, "Avz"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.Avz);
            if (message.J != null && Object.hasOwnProperty.call(message, "J"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.J);
            if (message.Iy != null && Object.hasOwnProperty.call(message, "Iy"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.Iy);
            if (message.Iz != null && Object.hasOwnProperty.call(message, "Iz"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.Iz);
            return writer;
        };

        /**
         * Encodes the specified HomogenousSectionProperties message, length delimited. Does not implicitly {@link quick_fea_types.HomogenousSectionProperties.verify|verify} messages.
         * @function encodeDelimited
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {quick_fea_types.IHomogenousSectionProperties} message HomogenousSectionProperties message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HomogenousSectionProperties.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HomogenousSectionProperties message from the specified reader or buffer.
         * @function decode
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {quick_fea_types.HomogenousSectionProperties} HomogenousSectionProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomogenousSectionProperties.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.quick_fea_types.HomogenousSectionProperties();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.A = reader.double();
                    break;
                case 2:
                    message.Avy = reader.double();
                    break;
                case 3:
                    message.Avz = reader.double();
                    break;
                case 4:
                    message.J = reader.double();
                    break;
                case 5:
                    message.Iy = reader.double();
                    break;
                case 6:
                    message.Iz = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HomogenousSectionProperties message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {quick_fea_types.HomogenousSectionProperties} HomogenousSectionProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HomogenousSectionProperties.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HomogenousSectionProperties message.
         * @function verify
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HomogenousSectionProperties.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.A != null && message.hasOwnProperty("A"))
                if (typeof message.A !== "number")
                    return "A: number expected";
            if (message.Avy != null && message.hasOwnProperty("Avy"))
                if (typeof message.Avy !== "number")
                    return "Avy: number expected";
            if (message.Avz != null && message.hasOwnProperty("Avz"))
                if (typeof message.Avz !== "number")
                    return "Avz: number expected";
            if (message.J != null && message.hasOwnProperty("J"))
                if (typeof message.J !== "number")
                    return "J: number expected";
            if (message.Iy != null && message.hasOwnProperty("Iy"))
                if (typeof message.Iy !== "number")
                    return "Iy: number expected";
            if (message.Iz != null && message.hasOwnProperty("Iz"))
                if (typeof message.Iz !== "number")
                    return "Iz: number expected";
            return null;
        };

        /**
         * Creates a HomogenousSectionProperties message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {quick_fea_types.HomogenousSectionProperties} HomogenousSectionProperties
         */
        HomogenousSectionProperties.fromObject = function fromObject(object) {
            if (object instanceof $root.quick_fea_types.HomogenousSectionProperties)
                return object;
            var message = new $root.quick_fea_types.HomogenousSectionProperties();
            if (object.A != null)
                message.A = Number(object.A);
            if (object.Avy != null)
                message.Avy = Number(object.Avy);
            if (object.Avz != null)
                message.Avz = Number(object.Avz);
            if (object.J != null)
                message.J = Number(object.J);
            if (object.Iy != null)
                message.Iy = Number(object.Iy);
            if (object.Iz != null)
                message.Iz = Number(object.Iz);
            return message;
        };

        /**
         * Creates a plain object from a HomogenousSectionProperties message. Also converts values to other types if specified.
         * @function toObject
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @static
         * @param {quick_fea_types.HomogenousSectionProperties} message HomogenousSectionProperties
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HomogenousSectionProperties.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.A = 0;
                object.Avy = 0;
                object.Avz = 0;
                object.J = 0;
                object.Iy = 0;
                object.Iz = 0;
            }
            if (message.A != null && message.hasOwnProperty("A"))
                object.A = options.json && !isFinite(message.A) ? String(message.A) : message.A;
            if (message.Avy != null && message.hasOwnProperty("Avy"))
                object.Avy = options.json && !isFinite(message.Avy) ? String(message.Avy) : message.Avy;
            if (message.Avz != null && message.hasOwnProperty("Avz"))
                object.Avz = options.json && !isFinite(message.Avz) ? String(message.Avz) : message.Avz;
            if (message.J != null && message.hasOwnProperty("J"))
                object.J = options.json && !isFinite(message.J) ? String(message.J) : message.J;
            if (message.Iy != null && message.hasOwnProperty("Iy"))
                object.Iy = options.json && !isFinite(message.Iy) ? String(message.Iy) : message.Iy;
            if (message.Iz != null && message.hasOwnProperty("Iz"))
                object.Iz = options.json && !isFinite(message.Iz) ? String(message.Iz) : message.Iz;
            return object;
        };

        /**
         * Converts this HomogenousSectionProperties to JSON.
         * @function toJSON
         * @memberof quick_fea_types.HomogenousSectionProperties
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HomogenousSectionProperties.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HomogenousSectionProperties;
    })();

    return quick_fea_types;
})();

module.exports = $root;
