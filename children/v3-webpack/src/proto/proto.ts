/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  SCATTER: {
    nested: {
      ObjectMeta: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          ownerId: {
            type: "int64",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          objectType: {
            type: "int32",
            id: 4
          }
        }
      },
      Point3DValue: {
        fields: {
          xCoord: {
            type: "double",
            id: 1
          },
          yCoord: {
            type: "double",
            id: 2
          },
          zCoord: {
            type: "double",
            id: 3
          },
          attrValue: {
            type: "double",
            id: 4
          }
        }
      },
      ScatterObjectData: {
        fields: {
          points: {
            rule: "repeated",
            type: "Point3DValue",
            id: 1
          }
        }
      },
      ScatterObject: {
        fields: {
          meta: {
            type: "ObjectMeta",
            id: 1
          },
          data: {
            type: "ScatterObjectData",
            id: 2
          }
        }
      }
    }
  }
});

export { $root as default };
