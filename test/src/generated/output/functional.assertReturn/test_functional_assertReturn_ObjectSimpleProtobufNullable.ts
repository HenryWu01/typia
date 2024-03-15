import typia from "typia";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufNullable } from "../../../structures/ObjectSimpleProtobufNullable";
import { TypeGuardError } from "typia";
export const test_functional_assertReturn_ObjectSimpleProtobufNullable =
  _test_functional_assertReturn(TypeGuardError)("ObjectSimpleProtobufNullable")(
    ObjectSimpleProtobufNullable,
  )(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) =>
      (input: ObjectSimpleProtobufNullable): ObjectSimpleProtobufNullable => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertReturn as any).errorFactory;
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
        ): ObjectSimpleProtobufNullable => {
          const __is = (input: any): input is ObjectSimpleProtobufNullable => {
            const $io0 = (input: any): boolean =>
              (null === input.bool || "boolean" === typeof input.bool) &&
              (null === input.int32 ||
                ("number" === typeof input.int32 &&
                  Math.floor(input.int32) === input.int32 &&
                  -2147483648 <= input.int32 &&
                  input.int32 <= 2147483647)) &&
              (null === input.uint32 ||
                ("number" === typeof input.uint32 &&
                  Math.floor(input.uint32) === input.uint32 &&
                  0 <= input.uint32 &&
                  input.uint32 <= 4294967295)) &&
              (null === input.int64 || "bigint" === typeof input.int64) &&
              (null === input.uint64 ||
                ("bigint" === typeof input.uint64 &&
                  BigInt(0) <= input.uint64)) &&
              (null === input.float ||
                ("number" === typeof input.float &&
                  -1.175494351e38 <= input.float &&
                  input.float <= 3.4028235e38)) &&
              (null === input.double ||
                ("number" === typeof input.double &&
                  Number.isFinite(input.double) &&
                  true)) &&
              (null === input.string || "string" === typeof input.string) &&
              (null === input.bytes || input.bytes instanceof Uint8Array);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectSimpleProtobufNullable => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (null === input.bool ||
                  "boolean" === typeof input.bool ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bool",
                      expected: "(boolean | null)",
                      value: input.bool,
                    },
                    errorFactory,
                  )) &&
                (null === input.int32 ||
                  ("number" === typeof input.int32 &&
                    ((Math.floor(input.int32) === input.int32 &&
                      -2147483648 <= input.int32 &&
                      input.int32 <= 2147483647) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".int32",
                          expected: 'number & Type<"int32">',
                          value: input.int32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int32",
                      expected: '((number & Type<"int32">) | null)',
                      value: input.int32,
                    },
                    errorFactory,
                  )) &&
                (null === input.uint32 ||
                  ("number" === typeof input.uint32 &&
                    ((Math.floor(input.uint32) === input.uint32 &&
                      0 <= input.uint32 &&
                      input.uint32 <= 4294967295) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint32",
                          expected: 'number & Type<"uint32">',
                          value: input.uint32,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint32",
                      expected: '((number & Type<"uint32">) | null)',
                      value: input.uint32,
                    },
                    errorFactory,
                  )) &&
                (null === input.int64 ||
                  "bigint" === typeof input.int64 ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".int64",
                      expected: "(bigint | null)",
                      value: input.int64,
                    },
                    errorFactory,
                  )) &&
                (null === input.uint64 ||
                  ("bigint" === typeof input.uint64 &&
                    (BigInt(0) <= input.uint64 ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".uint64",
                          expected: 'bigint & Type<"uint64">',
                          value: input.uint64,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".uint64",
                      expected: '((bigint & Type<"uint64">) | null)',
                      value: input.uint64,
                    },
                    errorFactory,
                  )) &&
                (null === input.float ||
                  ("number" === typeof input.float &&
                    ((-1.175494351e38 <= input.float &&
                      input.float <= 3.4028235e38) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".float",
                          expected: 'number & Type<"float">',
                          value: input.float,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".float",
                      expected: '((number & Type<"float">) | null)',
                      value: input.float,
                    },
                    errorFactory,
                  )) &&
                (null === input.double ||
                  ("number" === typeof input.double &&
                    (Number.isFinite(input.double) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: "number",
                          value: input.double,
                        },
                        errorFactory,
                      )) &&
                    (true ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".double",
                          expected: 'number & Type<"double">',
                          value: input.double,
                        },
                        errorFactory,
                      ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".double",
                      expected: '((number & Type<"double">) | null)',
                      value: input.double,
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
                (null === input.bytes ||
                  input.bytes instanceof Uint8Array ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bytes",
                      expected: "(Uint8Array | null)",
                      value: input.bytes,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectSimpleProtobufNullable",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectSimpleProtobufNullable",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
