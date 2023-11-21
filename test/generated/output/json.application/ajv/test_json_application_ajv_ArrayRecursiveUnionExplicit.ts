import typia from "../../../../../src";
import { _test_json_application } from "../../../../internal/_test_json_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_application_ajv_ArrayRecursiveUnionExplicit =
  _test_json_application("ajv")("ArrayRecursiveUnionExplicit")({
    schemas: [
      {
        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit",
      },
    ],
    components: {
      schemas: {
        ArrayRecursiveUnionExplicit: {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit",
          type: "array",
          items: {
            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
          },
        },
        "ArrayRecursiveUnionExplicit.IBucket": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
          oneOf: [
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
            },
            {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
            },
          ],
        },
        "ArrayRecursiveUnionExplicit.IDirectory": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            children: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "array",
              items: {
                $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
              },
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["directory"],
            },
          },
          required: ["id", "name", "path", "children", "type"],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicit.IImageFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            width: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            height: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            url: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["file"],
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["jpg"],
            },
          },
          required: [
            "id",
            "name",
            "path",
            "width",
            "height",
            "url",
            "size",
            "type",
            "extension",
          ],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicit.ITextFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            content: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["file"],
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["txt"],
            },
          },
          required: [
            "id",
            "name",
            "path",
            "size",
            "content",
            "type",
            "extension",
          ],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicit.IZipFile": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            size: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            count: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["file"],
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["zip"],
            },
          },
          required: [
            "id",
            "name",
            "path",
            "size",
            "count",
            "type",
            "extension",
          ],
          "x-typia-jsDocTags": [],
        },
        "ArrayRecursiveUnionExplicit.IShortcut": {
          $id: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
          type: "object",
          properties: {
            id: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "number",
            },
            name: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            path: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
            },
            target: {
              $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IBucket",
            },
            type: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["file"],
            },
            extension: {
              "x-typia-required": true,
              "x-typia-optional": false,
              type: "string",
              enum: ["lnk"],
            },
          },
          required: ["id", "name", "path", "target", "type", "extension"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "ajv",
  });
