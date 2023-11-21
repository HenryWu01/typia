import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_reflect_metadata_TypeTagArray = _test_reflect_metadata(
  "TypeTagArray",
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
        objects: ["TypeTagArray"],
        aliases: [],
        natives: [],
        sets: [],
        maps: [],
      },
    ],
    components: {
      objects: [
        {
          name: "TypeTagArray",
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
                    name: "Array<TypeTagArray.Type>",
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
          name: "TypeTagArray.Type",
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
                    values: ["items"],
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
                    name: 'Array<string & Format<"uuid">>',
                    tags: [
                      [
                        {
                          target: "array",
                          name: "MinItems<3>",
                          kind: "minItems",
                          value: 3,
                          validate: "3 <= $input.length",
                          exclusive: true,
                        },
                        {
                          target: "array",
                          name: "MaxItems<3>",
                          kind: "maxItems",
                          value: 3,
                          validate: "$input.length <= 3",
                          exclusive: true,
                        },
                      ],
                    ],
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
                    values: ["minItems"],
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
                    name: "Array<number & Minimum<3>>",
                    tags: [
                      [
                        {
                          target: "array",
                          name: "MinItems<3>",
                          kind: "minItems",
                          value: 3,
                          validate: "3 <= $input.length",
                          exclusive: true,
                        },
                      ],
                    ],
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
                    values: ["both"],
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
                    name: 'Array<string & Format<"uuid">>',
                    tags: [
                      [
                        {
                          target: "array",
                          name: "MinItems<3>",
                          kind: "minItems",
                          value: 3,
                          validate: "3 <= $input.length",
                          exclusive: true,
                        },
                        {
                          target: "array",
                          name: "MaxItems<7>",
                          kind: "maxItems",
                          value: 7,
                          validate: "$input.length <= 7",
                          exclusive: true,
                        },
                      ],
                    ],
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
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [
                  {
                    name: "Array<number & Minimum<10> & Maximum<10>>",
                    tags: [
                      [
                        {
                          target: "array",
                          name: "MinItems<10>",
                          kind: "minItems",
                          value: 10,
                          validate: "10 <= $input.length",
                          exclusive: true,
                        },
                        {
                          target: "array",
                          name: "MaxItems<10>",
                          kind: "maxItems",
                          value: 10,
                          validate: "$input.length <= 10",
                          exclusive: true,
                        },
                      ],
                    ],
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
          index: 1,
          validated: false,
          recursive: false,
          nullables: [false],
        },
      ],
      aliases: [],
      arrays: [
        {
          name: "Array<TypeTagArray.Type>",
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
            objects: ["TypeTagArray.Type"],
            aliases: [],
            natives: [],
            sets: [],
            maps: [],
          },
          nullables: [false],
          recursive: false,
          index: null,
        },
        {
          name: 'Array<string & Format<"uuid">>',
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "string",
                tags: [
                  [
                    {
                      target: "string",
                      name: 'Format<"uuid">',
                      kind: "format",
                      value: "uuid",
                      validate:
                        "/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test($input)",
                      exclusive: ["format", "pattern"],
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
          nullables: [false],
          recursive: false,
          index: null,
        },
        {
          name: "Array<number & Minimum<3>>",
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "number",
                tags: [
                  [
                    {
                      target: "number",
                      name: "Minimum<3>",
                      kind: "minimum",
                      value: 3,
                      validate: "3 <= $input",
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
          nullables: [false],
          recursive: false,
          index: null,
        },
        {
          name: "Array<number & Minimum<10> & Maximum<10>>",
          value: {
            any: false,
            required: true,
            optional: false,
            nullable: false,
            functional: false,
            atomics: [
              {
                type: "number",
                tags: [
                  [
                    {
                      target: "number",
                      name: "Minimum<10>",
                      kind: "minimum",
                      value: 10,
                      validate: "10 <= $input",
                      exclusive: ["minimum", "exclusiveMinimum"],
                    },
                    {
                      target: "number",
                      name: "Maximum<10>",
                      kind: "maximum",
                      value: 10,
                      validate: "$input <= 10",
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
          nullables: [false],
          recursive: false,
          index: null,
        },
      ],
      tuples: [],
    },
  }),
);
