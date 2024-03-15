import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
export const test_functional_isParametersAsync_ObjectPartialAndRequired =
  _test_functional_isParametersAsync("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) =>
      async (
        input: ObjectPartialAndRequired,
      ): Promise<ObjectPartialAndRequired | null> => {
        if (
          false ===
          ((input: any): input is ObjectPartialAndRequired => {
            const $io0 = (input: any): boolean =>
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (null === input.object ||
                ("object" === typeof input.object &&
                  null !== input.object &&
                  $io0(input.object))) &&
              Array.isArray(input.array) &&
              input.array.every(
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
