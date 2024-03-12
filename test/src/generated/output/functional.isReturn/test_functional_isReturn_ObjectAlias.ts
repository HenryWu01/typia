import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectAlias } from "../../../structures/ObjectAlias";
export const test_functional_isReturn_ObjectAlias = _test_functional_isReturn(
  "ObjectAlias",
)(ObjectAlias)(
  (p: (input: ObjectAlias) => ObjectAlias) =>
    (input: ObjectAlias): ObjectAlias | null => {
      const result = p(input);
      return ((input: any): input is ObjectAlias => {
        const $io0 = (input: any): boolean =>
          (null === input.id || "string" === typeof input.id) &&
          "string" === typeof input.email &&
          "string" === typeof input.name &&
          (null === input.sex ||
            1 === input.sex ||
            2 === input.sex ||
            "female" === input.sex ||
            "male" === input.sex) &&
          (null === input.age ||
            ("number" === typeof input.age && Number.isFinite(input.age))) &&
          (null === input.dead || "boolean" === typeof input.dead);
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io0(elem),
          )
        );
      })(result)
        ? result
        : null;
    },
);
