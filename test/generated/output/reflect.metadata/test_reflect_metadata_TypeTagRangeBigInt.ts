import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagRangeBigInt } from "../../../structures/TypeTagRangeBigInt";

export const test_reflect_metadata_TypeTagRangeBigInt = _test_reflect_metadata(
  "TypeTagRangeBigInt",
)(
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
        objects: ["TypeTagRangeBigInt"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "TypeTagRangeBigInt",
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
                    values: ["value"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<TypeTagRangeBigInt.Type>",
                    tags: [],
                  },
                ],
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
          ],
          jsDocTags: [],
          index: 0,
          validated: false,
          recursive: false,
          nullables: [false],
        },
        {
          name: "TypeTagRangeBigInt.Type",
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
                    values: ["greater"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "ExclusiveMinimum<3n>",
                          kind: "exclusiveMinimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) < $input",
                          exclusive: ["exclusiveMinimum", "minimum"],
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
                    values: ["greater_equal"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "Minimum<3n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
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
                    values: ["less"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "ExclusiveMaximum<7n>",
                          kind: "exclusiveMaximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input < BigInt(7)",
                          exclusive: ["exclusiveMaximum", "maximum"],
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
                    values: ["less_equal"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "Maximum<7n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input <= BigInt(7)",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
                    values: ["greater_less"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "ExclusiveMinimum<3n>",
                          kind: "exclusiveMinimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) < $input",
                          exclusive: ["exclusiveMinimum", "minimum"],
                        },
                        {
                          target: "bigint",
                          name: "ExclusiveMaximum<7n>",
                          kind: "exclusiveMaximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input < BigInt(7)",
                          exclusive: ["exclusiveMaximum", "maximum"],
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
                    values: ["greater_equal_less"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "Minimum<3n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
                        },
                        {
                          target: "bigint",
                          name: "ExclusiveMaximum<7n>",
                          kind: "exclusiveMaximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input < BigInt(7)",
                          exclusive: ["exclusiveMaximum", "maximum"],
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
                    values: ["greater_less_equal"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "ExclusiveMinimum<3n>",
                          kind: "exclusiveMinimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) < $input",
                          exclusive: ["exclusiveMinimum", "minimum"],
                        },
                        {
                          target: "bigint",
                          name: "Maximum<7n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input <= BigInt(7)",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
                    values: ["greater_equal_less_equal"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "Minimum<3n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "3",
                          },
                          validate: "BigInt(3) <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
                        },
                        {
                          target: "bigint",
                          name: "Maximum<7n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "7",
                          },
                          validate: "$input <= BigInt(7)",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
                    values: ["equal"],
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
                optional: false,
                nullable: false,
                functional: false,
                atomics: [
                  {
                    type: "bigint",
                    tags: [
                      [
                        {
                          target: "bigint",
                          name: "Minimum<10n>",
                          kind: "minimum",
                          value: {
                            type: "bigint",
                            value: "10",
                          },
                          validate: "BigInt(10) <= $input",
                          exclusive: ["minimum", "exclusiveMinimum"],
                        },
                        {
                          target: "bigint",
                          name: "Maximum<10n>",
                          kind: "maximum",
                          value: {
                            type: "bigint",
                            value: "10",
                          },
                          validate: "$input <= BigInt(10)",
                          exclusive: ["maximum", "exclusiveMaximum"],
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
          ],
          jsDocTags: [],
          index: 1,
          validated: false,
          recursive: false,
          nullables: [false],
        },
      ],
      aliases: [],
      arrays: [
        {
          name: "Array<TypeTagRangeBigInt.Type>",
          value: {
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
            objects: ["TypeTagRangeBigInt.Type"],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          nullables: [false],
          recursive: false,
          index: null,
        },
      ],
      tuples: [],
    },
  }),
);
