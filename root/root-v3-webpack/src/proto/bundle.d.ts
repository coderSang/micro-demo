import * as $protobuf from "protobufjs";
/** Namespace SCATTER. */
export namespace SCATTER {

    /** Properties of an ObjectMeta. */
    interface IObjectMeta {

        /** ObjectMeta id */
        id?: (number|Long|null);

        /** ObjectMeta ownerId */
        ownerId?: (number|Long|null);

        /** ObjectMeta name */
        name?: (string|null);

        /** ObjectMeta objectType */
        objectType?: (number|null);
    }

    /** Represents an ObjectMeta. */
    class ObjectMeta implements IObjectMeta {

        /**
         * Constructs a new ObjectMeta.
         * @param [properties] Properties to set
         */
        constructor(properties?: SCATTER.IObjectMeta);

        /** ObjectMeta id. */
        public id: (number|Long);

        /** ObjectMeta ownerId. */
        public ownerId: (number|Long);

        /** ObjectMeta name. */
        public name: string;

        /** ObjectMeta objectType. */
        public objectType: number;

        /**
         * Creates a new ObjectMeta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ObjectMeta instance
         */
        public static create(properties?: SCATTER.IObjectMeta): SCATTER.ObjectMeta;

        /**
         * Encodes the specified ObjectMeta message. Does not implicitly {@link SCATTER.ObjectMeta.verify|verify} messages.
         * @param message ObjectMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SCATTER.IObjectMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ObjectMeta message, length delimited. Does not implicitly {@link SCATTER.ObjectMeta.verify|verify} messages.
         * @param message ObjectMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SCATTER.IObjectMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ObjectMeta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ObjectMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SCATTER.ObjectMeta;

        /**
         * Decodes an ObjectMeta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ObjectMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SCATTER.ObjectMeta;

        /**
         * Verifies an ObjectMeta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ObjectMeta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ObjectMeta
         */
        public static fromObject(object: { [k: string]: any }): SCATTER.ObjectMeta;

        /**
         * Creates a plain object from an ObjectMeta message. Also converts values to other types if specified.
         * @param message ObjectMeta
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SCATTER.ObjectMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ObjectMeta to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point3DValue. */
    interface IPoint3DValue {

        /** Point3DValue xCoord */
        xCoord?: (number|null);

        /** Point3DValue yCoord */
        yCoord?: (number|null);

        /** Point3DValue zCoord */
        zCoord?: (number|null);

        /** Point3DValue attrValue */
        attrValue?: (number|null);
    }

    /** Represents a Point3DValue. */
    class Point3DValue implements IPoint3DValue {

        /**
         * Constructs a new Point3DValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: SCATTER.IPoint3DValue);

        /** Point3DValue xCoord. */
        public xCoord: number;

        /** Point3DValue yCoord. */
        public yCoord: number;

        /** Point3DValue zCoord. */
        public zCoord: number;

        /** Point3DValue attrValue. */
        public attrValue: number;

        /**
         * Creates a new Point3DValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point3DValue instance
         */
        public static create(properties?: SCATTER.IPoint3DValue): SCATTER.Point3DValue;

        /**
         * Encodes the specified Point3DValue message. Does not implicitly {@link SCATTER.Point3DValue.verify|verify} messages.
         * @param message Point3DValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SCATTER.IPoint3DValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point3DValue message, length delimited. Does not implicitly {@link SCATTER.Point3DValue.verify|verify} messages.
         * @param message Point3DValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SCATTER.IPoint3DValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point3DValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point3DValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SCATTER.Point3DValue;

        /**
         * Decodes a Point3DValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point3DValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SCATTER.Point3DValue;

        /**
         * Verifies a Point3DValue message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point3DValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point3DValue
         */
        public static fromObject(object: { [k: string]: any }): SCATTER.Point3DValue;

        /**
         * Creates a plain object from a Point3DValue message. Also converts values to other types if specified.
         * @param message Point3DValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SCATTER.Point3DValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point3DValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScatterObjectData. */
    interface IScatterObjectData {

        /** ScatterObjectData points */
        points?: (SCATTER.IPoint3DValue[]|null);
    }

    /** Represents a ScatterObjectData. */
    class ScatterObjectData implements IScatterObjectData {

        /**
         * Constructs a new ScatterObjectData.
         * @param [properties] Properties to set
         */
        constructor(properties?: SCATTER.IScatterObjectData);

        /** ScatterObjectData points. */
        public points: SCATTER.IPoint3DValue[];

        /**
         * Creates a new ScatterObjectData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScatterObjectData instance
         */
        public static create(properties?: SCATTER.IScatterObjectData): SCATTER.ScatterObjectData;

        /**
         * Encodes the specified ScatterObjectData message. Does not implicitly {@link SCATTER.ScatterObjectData.verify|verify} messages.
         * @param message ScatterObjectData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SCATTER.IScatterObjectData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScatterObjectData message, length delimited. Does not implicitly {@link SCATTER.ScatterObjectData.verify|verify} messages.
         * @param message ScatterObjectData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SCATTER.IScatterObjectData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScatterObjectData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScatterObjectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SCATTER.ScatterObjectData;

        /**
         * Decodes a ScatterObjectData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScatterObjectData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SCATTER.ScatterObjectData;

        /**
         * Verifies a ScatterObjectData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScatterObjectData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScatterObjectData
         */
        public static fromObject(object: { [k: string]: any }): SCATTER.ScatterObjectData;

        /**
         * Creates a plain object from a ScatterObjectData message. Also converts values to other types if specified.
         * @param message ScatterObjectData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SCATTER.ScatterObjectData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScatterObjectData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ScatterObject. */
    interface IScatterObject {

        /** ScatterObject meta */
        meta?: (SCATTER.IObjectMeta|null);

        /** ScatterObject data */
        data?: (SCATTER.IScatterObjectData|null);
    }

    /** Represents a ScatterObject. */
    class ScatterObject implements IScatterObject {

        /**
         * Constructs a new ScatterObject.
         * @param [properties] Properties to set
         */
        constructor(properties?: SCATTER.IScatterObject);

        /** ScatterObject meta. */
        public meta?: (SCATTER.IObjectMeta|null);

        /** ScatterObject data. */
        public data?: (SCATTER.IScatterObjectData|null);

        /**
         * Creates a new ScatterObject instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ScatterObject instance
         */
        public static create(properties?: SCATTER.IScatterObject): SCATTER.ScatterObject;

        /**
         * Encodes the specified ScatterObject message. Does not implicitly {@link SCATTER.ScatterObject.verify|verify} messages.
         * @param message ScatterObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: SCATTER.IScatterObject, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ScatterObject message, length delimited. Does not implicitly {@link SCATTER.ScatterObject.verify|verify} messages.
         * @param message ScatterObject message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: SCATTER.IScatterObject, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScatterObject message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ScatterObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SCATTER.ScatterObject;

        /**
         * Decodes a ScatterObject message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ScatterObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SCATTER.ScatterObject;

        /**
         * Verifies a ScatterObject message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ScatterObject message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ScatterObject
         */
        public static fromObject(object: { [k: string]: any }): SCATTER.ScatterObject;

        /**
         * Creates a plain object from a ScatterObject message. Also converts values to other types if specified.
         * @param message ScatterObject
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: SCATTER.ScatterObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ScatterObject to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
