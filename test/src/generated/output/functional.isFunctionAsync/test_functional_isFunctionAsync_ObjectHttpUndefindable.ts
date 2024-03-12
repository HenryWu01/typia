import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
export const test_functional_isFunctionAsync_ObjectHttpUndefindable =
  _test_functional_isFunctionAsync("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )(
    (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      async (
        input: ObjectHttpUndefindable,
      ): Promise<ObjectHttpUndefindable | null> => {
        if (
          false ===
          ((input: any): input is ObjectHttpUndefindable => {
            const $io0 = (input: any): boolean =>
              (undefined === input.boolean ||
                "boolean" === typeof input.boolean) &&
              (undefined === input.bigint ||
                "bigint" === typeof input.bigint) &&
              (undefined === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number))) &&
              (undefined === input.string ||
                "string" === typeof input.string) &&
              (undefined === input.constantBoolean ||
                true === input.constantBoolean) &&
              (undefined === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint) &&
              (undefined === input.constantNumber ||
                1 === input.constantNumber ||
                2 === input.constantNumber ||
                3 === input.constantNumber) &&
              (undefined === input.constantString ||
                "one" === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString);
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectHttpUndefindable => {
          const $io0 = (input: any): boolean =>
            (undefined === input.boolean ||
              "boolean" === typeof input.boolean) &&
            (undefined === input.bigint || "bigint" === typeof input.bigint) &&
            (undefined === input.number ||
              ("number" === typeof input.number &&
                Number.isFinite(input.number))) &&
            (undefined === input.string || "string" === typeof input.string) &&
            (undefined === input.constantBoolean ||
              true === input.constantBoolean) &&
            (undefined === input.constantBigint ||
              BigInt(1) === input.constantBigint ||
              BigInt(2) === input.constantBigint ||
              BigInt(3) === input.constantBigint) &&
            (undefined === input.constantNumber ||
              1 === input.constantNumber ||
              2 === input.constantNumber ||
              3 === input.constantNumber) &&
            (undefined === input.constantString ||
              "one" === input.constantString ||
              "three" === input.constantString ||
              "two" === input.constantString);
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        })(result)
          ? result
          : null;
      },
  );
