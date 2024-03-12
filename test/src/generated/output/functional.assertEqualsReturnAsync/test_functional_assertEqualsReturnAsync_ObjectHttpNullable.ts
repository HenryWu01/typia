import typia from "typia";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturnAsync_ObjectHttpNullable =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)(
    "ObjectHttpNullable",
  )(ObjectHttpNullable)(
    (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
      async (input: ObjectHttpNullable): Promise<ObjectHttpNullable> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectHttpNullable => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpNullable => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.boolean || "boolean" === typeof input.boolean) &&
              (null === input.bigint || "bigint" === typeof input.bigint) &&
              (null === input.number ||
                ("number" === typeof input.number &&
                  Number.isFinite(input.number) &&
                  1 <= input.number)) &&
              (null === input.string || "string" === typeof input.string) &&
              (null === input.constantBoolean ||
                true === input.constantBoolean) &&
              (null === input.constantBigint ||
                BigInt(1) === input.constantBigint ||
                BigInt(2) === input.constantBigint ||
                BigInt(3) === input.constantBigint) &&
              (null === input.constantNumber ||
                1 === input.constantNumber ||
                2 === input.constantNumber ||
                3 === input.constantNumber) &&
              (null === input.constantString ||
                "one" === input.constantString ||
                "three" === input.constantString ||
                "two" === input.constantString) &&
              (null === input.nullableArray ||
                (Array.isArray(input.nullableArray) &&
                  input.nullableArray.every(
                    (elem: any, _index1: number) =>
                      "number" === typeof elem && Number.isFinite(elem),
                  ))) &&
              (9 === Object.keys(input).length ||
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
                      "nullableArray",
                    ].some((prop: any) => key === prop)
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpNullable => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (null === input.boolean ||
                  "boolean" === typeof input.boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "(boolean | null)",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                (null === input.bigint ||
                  "bigint" === typeof input.bigint ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigint",
                      expected: "(bigint | null)",
                      value: input.bigint,
                    },
                    errorFactory,
                  )) &&
                (null === input.number ||
                  ("number" === typeof input.number &&
                    (Number.isFinite(input.number) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".number",
                          expected: "number",
                          value: input.number,
                        },
                        errorFactory,
                      )) &&
                    (1 <= input.number ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".number",
                          expected: "number & Minimum<1>",
                          value: input.number,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number",
                      expected: "((number & Minimum<1>) | null)",
                      value: input.number,
                    },
                    errorFactory,
                  )) &&
                (null === input.string ||
                  "string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "(null | string)",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (null === input.constantBoolean ||
                  true === input.constantBoolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantBoolean",
                      expected: "(null | true)",
                      value: input.constantBoolean,
                    },
                    errorFactory,
                  )) &&
                (null === input.constantBigint ||
                  BigInt(1) === input.constantBigint ||
                  BigInt(2) === input.constantBigint ||
                  BigInt(3) === input.constantBigint ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantBigint",
                      expected: "(1 | 2 | 3 | null)",
                      value: input.constantBigint,
                    },
                    errorFactory,
                  )) &&
                (null === input.constantNumber ||
                  1 === input.constantNumber ||
                  2 === input.constantNumber ||
                  3 === input.constantNumber ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantNumber",
                      expected: "(1 | 2 | 3 | null)",
                      value: input.constantNumber,
                    },
                    errorFactory,
                  )) &&
                (null === input.constantString ||
                  "one" === input.constantString ||
                  "three" === input.constantString ||
                  "two" === input.constantString ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".constantString",
                      expected: '("one" | "three" | "two" | null)',
                      value: input.constantString,
                    },
                    errorFactory,
                  )) &&
                (null === input.nullableArray ||
                  ((Array.isArray(input.nullableArray) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".nullableArray",
                        expected: "(Array<number> | null)",
                        value: input.nullableArray,
                      },
                      errorFactory,
                    )) &&
                    input.nullableArray.every(
                      (elem: any, _index1: number) =>
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".nullableArray[" + _index1 + "]",
                            expected: "number",
                            value: elem,
                          },
                          errorFactory,
                        ),
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".nullableArray",
                      expected: "(Array<number> | null)",
                      value: input.nullableArray,
                    },
                    errorFactory,
                  )) &&
                (9 === Object.keys(input).length ||
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
                        "nullableArray",
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
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectHttpNullable",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpNullable",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
