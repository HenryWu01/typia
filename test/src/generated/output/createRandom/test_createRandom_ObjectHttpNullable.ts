import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpNullable } from "../../../structures/ObjectHttpNullable";
export const test_createRandom_ObjectHttpNullable = _test_random(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (ObjectHttpNullable as any)
      .RANDOM,
  ): import("typia").Resolved<ObjectHttpNullable> => {
    const $generator = (typia.createRandom as any).generator;
    const $pick = (typia.createRandom as any).pick;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      boolean: $pick([
        () => null,
        () => (generator?.boolean ?? $generator.boolean)(),
      ])(),
      bigint: $pick([
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.bigint?.([]) ??
          (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(100)),
      ])(),
      number: $pick([
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.number?.([
            {
              name: "Minimum<1>",
              kind: "minimum",
              value: 1,
            },
          ]) ?? (generator?.number ?? $generator.number)(1, 11),
      ])(),
      string: $pick([
        () => null,
        () =>
          (generator?.customs ?? $generator.customs)?.string?.([]) ??
          (generator?.string ?? $generator.string)(),
      ])(),
      constantBoolean: $pick([() => null, () => true])(),
      constantBigint: $pick([
        () => null,
        () => BigInt(1),
        () => BigInt(2),
        () => BigInt(3),
      ])(),
      constantNumber: $pick([() => null, () => 1, () => 2, () => 3])(),
      constantString: $pick([
        () => null,
        () => "one",
        () => "three",
        () => "two",
      ])(),
      nullableArray: $pick([
        () => null,
        () =>
          (generator?.array ?? $generator.array)(
            () =>
              (generator?.customs ?? $generator.customs)?.number?.([]) ??
              (generator?.number ?? $generator.number)(0, 100),
          ),
      ])(),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): ObjectHttpNullable => {
    const __is = (input: any): input is ObjectHttpNullable => {
      const $io0 = (input: any): boolean =>
        (null === input.boolean || "boolean" === typeof input.boolean) &&
        (null === input.bigint || "bigint" === typeof input.bigint) &&
        (null === input.number ||
          ("number" === typeof input.number &&
            Number.isFinite(input.number) &&
            1 <= input.number)) &&
        (null === input.string || "string" === typeof input.string) &&
        (null === input.constantBoolean || true === input.constantBoolean) &&
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
              (elem: any) => "number" === typeof elem && Number.isFinite(elem),
            )));
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectHttpNullable => {
        const $guard = (typia.createAssert as any).guard;
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
            ));
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
  },
});
