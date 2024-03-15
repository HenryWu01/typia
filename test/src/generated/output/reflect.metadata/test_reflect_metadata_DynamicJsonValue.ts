import typia from "typia";
import { DynamicJsonValue } from "../../../structures/DynamicJsonValue";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
export const test_reflect_metadata_DynamicJsonValue = _test_reflect_metadata(
  "DynamicJsonValue",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: true,
      functional: false,
      atomics: [
        {
          type: "string",
          tags: [],
        },
        {
          type: "number",
          tags: [],
        },
        {
          type: "boolean",
          tags: [],
        },
      ],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [
        {
          name: "Array<DynamicJsonValue.JsonValue>",
          tags: [],
        },
      ],
      tuples: [],
      objects: ["DynamicJsonValue.JsonObject"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "DynamicJsonValue.JsonObject",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
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
            value: {
              any: false,
              required: false,
              optional: false,
              nullable: true,
              functional: false,
              atomics: [
                {
                  type: "string",
                  tags: [],
                },
                {
                  type: "number",
                  tags: [],
                },
                {
                  type: "boolean",
                  tags: [],
                },
              ],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [
                {
                  name: "Array<DynamicJsonValue.JsonValue>",
                  tags: [],
                },
              ],
              tuples: [],
              objects: ["DynamicJsonValue.JsonObject"],
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
        recursive: true,
        nullables: [true],
      },
    ],
    aliases: [],
    arrays: [
      {
        name: "Array<DynamicJsonValue.JsonValue>",
        value: {
          any: false,
          required: true,
          optional: false,
          nullable: true,
          functional: false,
          atomics: [
            {
              type: "string",
              tags: [],
            },
            {
              type: "number",
              tags: [],
            },
            {
              type: "boolean",
              tags: [],
            },
          ],
          constants: [],
          templates: [],
          escaped: null,
          rest: null,
          arrays: [
            {
              name: "Array<DynamicJsonValue.JsonValue>",
              tags: [],
            },
          ],
          tuples: [],
          objects: ["DynamicJsonValue.JsonObject"],
          aliases: [],
          natives: [],
          sets: [],
          maps: [],
        },
        nullables: [true],
        recursive: true,
        index: 0,
      },
    ],
    tuples: [],
  },
});
