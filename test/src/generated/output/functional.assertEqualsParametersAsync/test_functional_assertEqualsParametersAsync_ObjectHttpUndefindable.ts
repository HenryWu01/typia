import typia from "typia";
import { _test_functional_assertEqualsParametersAsync } from "../../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectHttpUndefindable } from "../../../structures/ObjectHttpUndefindable";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsParametersAsync_ObjectHttpUndefindable =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ObjectHttpUndefindable",
  )(ObjectHttpUndefindable)(
    (p: (input: ObjectHttpUndefindable) => Promise<ObjectHttpUndefindable>) =>
      async (
        input: ObjectHttpUndefindable,
      ): Promise<ObjectHttpUndefindable> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsParameters as any)
          .errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ObjectHttpUndefindable => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpUndefindable => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
                "two" === input.constantString) &&
              (0 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "boolean",
                      "bigint",
                      "number",
                      "string",
                      "constantBoolean",
                      "constantBigint",
                      "constantNumber",
                      "constantString",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpUndefindable => {
              const $guard = (typia.functional.assertEqualsParameters as any)
                .guard;
              const $join = (typia.functional.assertEqualsParameters as any)
                .join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(boolean | undefined)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.bigint ||
                  "bigint" === typeof input.bigint ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigint",
                      expected: "(bigint | undefined)",
                      value: input.bigint,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.number ||
                  ("number" === typeof input.number &&
                    Number.isFinite(input.number)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number",
                      expected: "(number | undefined)",
                      value: input.number,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.string ||
                  "string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(string | undefined)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.constantBoolean ||
                  true === input.constantBoolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantBoolean",
                      expected: "(true | undefined)",
                      value: input.constantBoolean,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.constantBigint ||
                  BigInt(1) === input.constantBigint ||
                  BigInt(2) === input.constantBigint ||
                  BigInt(3) === input.constantBigint ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantBigint",
                      expected: "(1 | 2 | 3 | undefined)",
                      value: input.constantBigint,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.constantNumber ||
                  1 === input.constantNumber ||
                  2 === input.constantNumber ||
                  3 === input.constantNumber ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantNumber",
                      expected: "(1 | 2 | 3 | undefined)",
                      value: input.constantNumber,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.constantString ||
                  "one" === input.constantString ||
                  "three" === input.constantString ||
                  "two" === input.constantString ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantString",
                      expected: '("one" | "three" | "two" | undefined)',
                      value: input.constantString,
                    },
                    errorFactory,
                  )) &&
                (0 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "boolean",
                        "bigint",
                        "number",
                        "string",
                        "constantBoolean",
                        "constantBigint",
                        "constantNumber",
                        "constantString",
                      ].some((prop: any) => key === prop)
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectHttpUndefindable",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpUndefindable",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
