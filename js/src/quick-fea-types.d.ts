import * as $protobuf from "protobufjs";
/** Namespace quick_fea_types. */
export namespace quick_fea_types {

    /** Properties of a Node. */
    interface INode {

        /** Node id */
        id?: (string|null);

        /** Node name */
        name?: (string|null);

        /** Node x */
        x?: (number|null);

        /** Node y */
        y?: (number|null);

        /** Node z */
        z?: (number|null);
    }

    /** Represents a Node. */
    class Node implements INode {

        /**
         * Constructs a new Node.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.INode);

        /** Node id. */
        public id: string;

        /** Node name. */
        public name: string;

        /** Node x. */
        public x: number;

        /** Node y. */
        public y: number;

        /** Node z. */
        public z: number;

        /**
         * Creates a new Node instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Node instance
         */
        public static create(properties?: quick_fea_types.INode): quick_fea_types.Node;

        /**
         * Encodes the specified Node message. Does not implicitly {@link quick_fea_types.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Node message, length delimited. Does not implicitly {@link quick_fea_types.Node.verify|verify} messages.
         * @param message Node message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.INode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Node message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.Node;

        /**
         * Decodes a Node message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Node
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.Node;

        /**
         * Verifies a Node message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Node message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Node
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.Node;

        /**
         * Creates a plain object from a Node message. Also converts values to other types if specified.
         * @param message Node
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.Node, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Node to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Frame. */
    interface IFrame {

        /** Frame id */
        id?: (string|null);

        /** Frame name */
        name?: (string|null);

        /** Frame startNodeId */
        startNodeId?: (string|null);

        /** Frame endNodeId */
        endNodeId?: (string|null);

        /** Frame materialId */
        materialId?: (string|null);

        /** Frame sectionId */
        sectionId?: (string|null);

        /** Frame rotation */
        rotation?: (number|null);

        /** Frame materialCategory */
        materialCategory?: (quick_fea_types.MaterialCategory|null);

        /** Frame sectionCategory */
        sectionCategory?: (quick_fea_types.SectionCategory|null);

        /** Frame stiffnessModifiers */
        stiffnessModifiers?: (quick_fea_types.IFrameStiffnessModifiers|null);

        /** Frame startReleases */
        startReleases?: (quick_fea_types.IFrameEndReleases|null);

        /** Frame endReleases */
        endReleases?: (quick_fea_types.IFrameEndReleases|null);
    }

    /** Represents a Frame. */
    class Frame implements IFrame {

        /**
         * Constructs a new Frame.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IFrame);

        /** Frame id. */
        public id: string;

        /** Frame name. */
        public name: string;

        /** Frame startNodeId. */
        public startNodeId: string;

        /** Frame endNodeId. */
        public endNodeId: string;

        /** Frame materialId. */
        public materialId: string;

        /** Frame sectionId. */
        public sectionId: string;

        /** Frame rotation. */
        public rotation: number;

        /** Frame materialCategory. */
        public materialCategory: quick_fea_types.MaterialCategory;

        /** Frame sectionCategory. */
        public sectionCategory: quick_fea_types.SectionCategory;

        /** Frame stiffnessModifiers. */
        public stiffnessModifiers?: (quick_fea_types.IFrameStiffnessModifiers|null);

        /** Frame startReleases. */
        public startReleases?: (quick_fea_types.IFrameEndReleases|null);

        /** Frame endReleases. */
        public endReleases?: (quick_fea_types.IFrameEndReleases|null);

        /**
         * Creates a new Frame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Frame instance
         */
        public static create(properties?: quick_fea_types.IFrame): quick_fea_types.Frame;

        /**
         * Encodes the specified Frame message. Does not implicitly {@link quick_fea_types.Frame.verify|verify} messages.
         * @param message Frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Frame message, length delimited. Does not implicitly {@link quick_fea_types.Frame.verify|verify} messages.
         * @param message Frame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IFrame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Frame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.Frame;

        /**
         * Decodes a Frame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Frame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.Frame;

        /**
         * Verifies a Frame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Frame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Frame
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.Frame;

        /**
         * Creates a plain object from a Frame message. Also converts values to other types if specified.
         * @param message Frame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.Frame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Frame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FrameStiffnessModifiers. */
    interface IFrameStiffnessModifiers {

        /** FrameStiffnessModifiers A */
        A?: (number|null);

        /** FrameStiffnessModifiers Avy */
        Avy?: (number|null);

        /** FrameStiffnessModifiers Avz */
        Avz?: (number|null);

        /** FrameStiffnessModifiers J */
        J?: (number|null);

        /** FrameStiffnessModifiers Iy */
        Iy?: (number|null);

        /** FrameStiffnessModifiers Iz */
        Iz?: (number|null);
    }

    /** Represents a FrameStiffnessModifiers. */
    class FrameStiffnessModifiers implements IFrameStiffnessModifiers {

        /**
         * Constructs a new FrameStiffnessModifiers.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IFrameStiffnessModifiers);

        /** FrameStiffnessModifiers A. */
        public A: number;

        /** FrameStiffnessModifiers Avy. */
        public Avy: number;

        /** FrameStiffnessModifiers Avz. */
        public Avz: number;

        /** FrameStiffnessModifiers J. */
        public J: number;

        /** FrameStiffnessModifiers Iy. */
        public Iy: number;

        /** FrameStiffnessModifiers Iz. */
        public Iz: number;

        /**
         * Creates a new FrameStiffnessModifiers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameStiffnessModifiers instance
         */
        public static create(properties?: quick_fea_types.IFrameStiffnessModifiers): quick_fea_types.FrameStiffnessModifiers;

        /**
         * Encodes the specified FrameStiffnessModifiers message. Does not implicitly {@link quick_fea_types.FrameStiffnessModifiers.verify|verify} messages.
         * @param message FrameStiffnessModifiers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IFrameStiffnessModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrameStiffnessModifiers message, length delimited. Does not implicitly {@link quick_fea_types.FrameStiffnessModifiers.verify|verify} messages.
         * @param message FrameStiffnessModifiers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IFrameStiffnessModifiers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameStiffnessModifiers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameStiffnessModifiers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.FrameStiffnessModifiers;

        /**
         * Decodes a FrameStiffnessModifiers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrameStiffnessModifiers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.FrameStiffnessModifiers;

        /**
         * Verifies a FrameStiffnessModifiers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrameStiffnessModifiers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrameStiffnessModifiers
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.FrameStiffnessModifiers;

        /**
         * Creates a plain object from a FrameStiffnessModifiers message. Also converts values to other types if specified.
         * @param message FrameStiffnessModifiers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.FrameStiffnessModifiers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrameStiffnessModifiers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FrameEndReleases. */
    interface IFrameEndReleases {

        /** FrameEndReleases A */
        A?: (quick_fea_types.FrameEndReleases.Category|null);

        /** FrameEndReleases Vy */
        Vy?: (quick_fea_types.FrameEndReleases.Category|null);

        /** FrameEndReleases Vz */
        Vz?: (quick_fea_types.FrameEndReleases.Category|null);

        /** FrameEndReleases T */
        T?: (quick_fea_types.FrameEndReleases.Category|null);

        /** FrameEndReleases My */
        My?: (quick_fea_types.FrameEndReleases.Category|null);

        /** FrameEndReleases Mz */
        Mz?: (quick_fea_types.FrameEndReleases.Category|null);
    }

    /** Represents a FrameEndReleases. */
    class FrameEndReleases implements IFrameEndReleases {

        /**
         * Constructs a new FrameEndReleases.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IFrameEndReleases);

        /** FrameEndReleases A. */
        public A: quick_fea_types.FrameEndReleases.Category;

        /** FrameEndReleases Vy. */
        public Vy: quick_fea_types.FrameEndReleases.Category;

        /** FrameEndReleases Vz. */
        public Vz: quick_fea_types.FrameEndReleases.Category;

        /** FrameEndReleases T. */
        public T: quick_fea_types.FrameEndReleases.Category;

        /** FrameEndReleases My. */
        public My: quick_fea_types.FrameEndReleases.Category;

        /** FrameEndReleases Mz. */
        public Mz: quick_fea_types.FrameEndReleases.Category;

        /**
         * Creates a new FrameEndReleases instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrameEndReleases instance
         */
        public static create(properties?: quick_fea_types.IFrameEndReleases): quick_fea_types.FrameEndReleases;

        /**
         * Encodes the specified FrameEndReleases message. Does not implicitly {@link quick_fea_types.FrameEndReleases.verify|verify} messages.
         * @param message FrameEndReleases message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IFrameEndReleases, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrameEndReleases message, length delimited. Does not implicitly {@link quick_fea_types.FrameEndReleases.verify|verify} messages.
         * @param message FrameEndReleases message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IFrameEndReleases, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrameEndReleases message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrameEndReleases
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.FrameEndReleases;

        /**
         * Decodes a FrameEndReleases message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrameEndReleases
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.FrameEndReleases;

        /**
         * Verifies a FrameEndReleases message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrameEndReleases message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrameEndReleases
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.FrameEndReleases;

        /**
         * Creates a plain object from a FrameEndReleases message. Also converts values to other types if specified.
         * @param message FrameEndReleases
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.FrameEndReleases, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrameEndReleases to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace FrameEndReleases {

        /** Category enum. */
        enum Category {
            FIXED = 0,
            FREE = 1
        }
    }

    /** MaterialCategory enum. */
    enum MaterialCategory {
        ISOTROPIC = 0
    }

    /** Properties of an IsotropicMaterial. */
    interface IIsotropicMaterial {

        /** IsotropicMaterial id */
        id?: (string|null);

        /** IsotropicMaterial name */
        name?: (string|null);

        /** IsotropicMaterial E */
        E?: (number|null);

        /** IsotropicMaterial nu */
        nu?: (number|null);
    }

    /** Represents an IsotropicMaterial. */
    class IsotropicMaterial implements IIsotropicMaterial {

        /**
         * Constructs a new IsotropicMaterial.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IIsotropicMaterial);

        /** IsotropicMaterial id. */
        public id: string;

        /** IsotropicMaterial name. */
        public name: string;

        /** IsotropicMaterial E. */
        public E: number;

        /** IsotropicMaterial nu. */
        public nu: number;

        /**
         * Creates a new IsotropicMaterial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IsotropicMaterial instance
         */
        public static create(properties?: quick_fea_types.IIsotropicMaterial): quick_fea_types.IsotropicMaterial;

        /**
         * Encodes the specified IsotropicMaterial message. Does not implicitly {@link quick_fea_types.IsotropicMaterial.verify|verify} messages.
         * @param message IsotropicMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IIsotropicMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IsotropicMaterial message, length delimited. Does not implicitly {@link quick_fea_types.IsotropicMaterial.verify|verify} messages.
         * @param message IsotropicMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IIsotropicMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IsotropicMaterial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IsotropicMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.IsotropicMaterial;

        /**
         * Decodes an IsotropicMaterial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IsotropicMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.IsotropicMaterial;

        /**
         * Verifies an IsotropicMaterial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IsotropicMaterial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IsotropicMaterial
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.IsotropicMaterial;

        /**
         * Creates a plain object from an IsotropicMaterial message. Also converts values to other types if specified.
         * @param message IsotropicMaterial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.IsotropicMaterial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IsotropicMaterial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SectionCategory enum. */
    enum SectionCategory {
        HOMOGENOUS = 0
    }

    /** Properties of a HomogenousSection. */
    interface IHomogenousSection {

        /** HomogenousSection id */
        id?: (string|null);

        /** HomogenousSection name */
        name?: (string|null);

        /** HomogenousSection properties */
        properties?: (quick_fea_types.IHomogenousSectionProperties|null);
    }

    /** Represents a HomogenousSection. */
    class HomogenousSection implements IHomogenousSection {

        /**
         * Constructs a new HomogenousSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IHomogenousSection);

        /** HomogenousSection id. */
        public id: string;

        /** HomogenousSection name. */
        public name: string;

        /** HomogenousSection properties. */
        public properties?: (quick_fea_types.IHomogenousSectionProperties|null);

        /**
         * Creates a new HomogenousSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HomogenousSection instance
         */
        public static create(properties?: quick_fea_types.IHomogenousSection): quick_fea_types.HomogenousSection;

        /**
         * Encodes the specified HomogenousSection message. Does not implicitly {@link quick_fea_types.HomogenousSection.verify|verify} messages.
         * @param message HomogenousSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IHomogenousSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HomogenousSection message, length delimited. Does not implicitly {@link quick_fea_types.HomogenousSection.verify|verify} messages.
         * @param message HomogenousSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IHomogenousSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HomogenousSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HomogenousSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.HomogenousSection;

        /**
         * Decodes a HomogenousSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HomogenousSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.HomogenousSection;

        /**
         * Verifies a HomogenousSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HomogenousSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HomogenousSection
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.HomogenousSection;

        /**
         * Creates a plain object from a HomogenousSection message. Also converts values to other types if specified.
         * @param message HomogenousSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.HomogenousSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HomogenousSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HomogenousSectionProperties. */
    interface IHomogenousSectionProperties {

        /** HomogenousSectionProperties A */
        A?: (number|null);

        /** HomogenousSectionProperties Avy */
        Avy?: (number|null);

        /** HomogenousSectionProperties Avz */
        Avz?: (number|null);

        /** HomogenousSectionProperties J */
        J?: (number|null);

        /** HomogenousSectionProperties Iy */
        Iy?: (number|null);

        /** HomogenousSectionProperties Iz */
        Iz?: (number|null);
    }

    /** Represents a HomogenousSectionProperties. */
    class HomogenousSectionProperties implements IHomogenousSectionProperties {

        /**
         * Constructs a new HomogenousSectionProperties.
         * @param [properties] Properties to set
         */
        constructor(properties?: quick_fea_types.IHomogenousSectionProperties);

        /** HomogenousSectionProperties A. */
        public A: number;

        /** HomogenousSectionProperties Avy. */
        public Avy: number;

        /** HomogenousSectionProperties Avz. */
        public Avz: number;

        /** HomogenousSectionProperties J. */
        public J: number;

        /** HomogenousSectionProperties Iy. */
        public Iy: number;

        /** HomogenousSectionProperties Iz. */
        public Iz: number;

        /**
         * Creates a new HomogenousSectionProperties instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HomogenousSectionProperties instance
         */
        public static create(properties?: quick_fea_types.IHomogenousSectionProperties): quick_fea_types.HomogenousSectionProperties;

        /**
         * Encodes the specified HomogenousSectionProperties message. Does not implicitly {@link quick_fea_types.HomogenousSectionProperties.verify|verify} messages.
         * @param message HomogenousSectionProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: quick_fea_types.IHomogenousSectionProperties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HomogenousSectionProperties message, length delimited. Does not implicitly {@link quick_fea_types.HomogenousSectionProperties.verify|verify} messages.
         * @param message HomogenousSectionProperties message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: quick_fea_types.IHomogenousSectionProperties, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HomogenousSectionProperties message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HomogenousSectionProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): quick_fea_types.HomogenousSectionProperties;

        /**
         * Decodes a HomogenousSectionProperties message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HomogenousSectionProperties
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): quick_fea_types.HomogenousSectionProperties;

        /**
         * Verifies a HomogenousSectionProperties message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HomogenousSectionProperties message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HomogenousSectionProperties
         */
        public static fromObject(object: { [k: string]: any }): quick_fea_types.HomogenousSectionProperties;

        /**
         * Creates a plain object from a HomogenousSectionProperties message. Also converts values to other types if specified.
         * @param message HomogenousSectionProperties
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: quick_fea_types.HomogenousSectionProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HomogenousSectionProperties to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
