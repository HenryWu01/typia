import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ObjectSimpleProtobufOptional } from "../../../structures/ObjectSimpleProtobufOptional";

export const test_reflect_metadata_ObjectSimpleProtobufOptional =
  _test_reflect_metadata("ObjectSimpleProtobufOptional")(
    (typia.reflect.metadata as any).from({
      metadatas: [
        {
          any: false,
          required: true,
          optional: false,
          nullable: false,
          functional: false,
          atomics: [],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [],
          tuples: [],
          objects: ["ObjectSimpleProtobufOptional"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
      ],
      components: {
        objects: [
          {
            name: "ObjectSimpleProtobufOptional",
            properties: [
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["bool"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "boolean",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["int32"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: 'Type<"int32">',
                            kind: "type",
                            value: "int32",
                            validate:
                              "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                            exclusive: true,
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["uint32"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: 'Type<"uint32">',
                            kind: "type",
                            value: "uint32",
                            validate:
                              "Math.floor($input) === $input && 0 <= $input && $input <= 4294967295",
                            exclusive: true,
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["int64"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "bigint",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["uint64"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "bigint",
                      tags: [
                        [
                          {
                            target: "bigint",
                            name: 'Type<"uint64">',
                            kind: "type",
                            value: "uint64",
                            validate: "BigInt(0) <= $input",
                            exclusive: true,
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["float"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: 'Type<"float">',
                            kind: "type",
                            value: "float",
                            validate:
                              "-1.175494351e38 <= $input && $input <= 3.4028235e38",
                            exclusive: true,
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["double"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "number",
                      tags: [
                        [
                          {
                            target: "number",
                            name: 'Type<"double">',
                            kind: "type",
                            value: "double",
                            validate: "true",
                            exclusive: true,
                          },
                        ],
                      ],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["string"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [
                    {
                      type: "string",
                      tags: [],
                    },
                  ],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
              {
                key: {
                  any: false,
                  required: true,
                  optional: false,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [
                    {
                      type: "string",
                      values: ["bytes"],
                    },
                  ],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: [],
                  sets: [],
                  maps: [],
                },
                value: {
                  any: false,
                  required: true,
                  optional: true,
                  nullable: false,
                  functional: false,
                  atomics: [],
                  constants: [],
                  templates: [],
                  escaped: null,
                  rest: null,
                  arrays: [],
                  tuples: [],
                  objects: [],
                  aliases: [],
                  natives: ["Uint8Array"],
                  sets: [],
                  maps: [],
                },
                description: null,
                jsDocTags: [],
              },
            ],
            jsDocTags: [],
            index: 0,
            validated: false,
            recursive: false,
            nullables: [false],
          },
        ],
        aliases: [],
        arrays: [],
        tuples: [],
      },
    }),
  );
