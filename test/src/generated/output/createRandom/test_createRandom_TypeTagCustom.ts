import typia from "typia";
import { _test_random } from "../../../internal/_test_random";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";
export const test_createRandom_TypeTagCustom = _test_random(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagCustom as any).RANDOM,
  ): import("typia").Resolved<TypeTagCustom> => {
    const $generator = (typia.createRandom as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      id:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Format<"uuid">',
            kind: "format",
            value: "uuid",
          },
        ]) ?? (generator?.uuid ?? $generator.uuid)(),
      dollar:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: "Dollar",
            kind: "monetary",
            value: "dollar",
          },
        ]) ?? (generator?.string ?? $generator.string)(),
      postfix:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: 'Postfix<"abcd">',
            kind: "postfix",
            value: "abcd",
          },
        ]) ?? (generator?.string ?? $generator.string)(),
      powerOf:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: "PowerOf<2>",
            kind: "powerOf",
            value: 2,
          },
        ]) ?? (generator?.number ?? $generator.number)(0, 100),
    });
    return $ro0();
  },
  assert: (
    input: any,
    errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
  ): TypeTagCustom => {
    const __is = (input: any): input is TypeTagCustom => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
          (input as any).id,
        ) &&
        "string" === typeof (input as any).dollar &&
        (input as any).dollar[0] === "$" &&
        !isNaN(
          Number((input as any).dollar.substring(1).split(",").join("")),
        ) &&
        "string" === typeof (input as any).postfix &&
        (input as any).postfix.endsWith("abcd") &&
        "number" === typeof (input as any).powerOf &&
        Number.isFinite((input as any).powerOf) &&
        (() => {
          const denominator: number = Math.log(2);
          const value: number = Math.log((input as any).powerOf) / denominator;
          return Math.abs(value - Math.round(value)) < 1e-8;
        })()
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagCustom => {
        const $guard = (typia.createAssert as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (("string" === typeof input.id &&
            (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
              input.id,
            ) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              },
              errorFactory,
            )) &&
          (("string" === typeof input.dollar &&
            ((input.dollar[0] === "$" &&
              !isNaN(Number(input.dollar.substring(1).split(",").join("")))) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".dollar",
                  expected: "string & Dollar",
                  value: input.dollar,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".dollar",
                expected: "(string & Dollar)",
                value: input.dollar,
              },
              errorFactory,
            )) &&
          (("string" === typeof input.postfix &&
            (input.postfix.endsWith("abcd") ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".postfix",
                  expected: 'string & Postfix<"abcd">',
                  value: input.postfix,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".postfix",
                expected: '(string & Postfix<"abcd">)',
                value: input.postfix,
              },
              errorFactory,
            )) &&
          (("number" === typeof input.powerOf &&
            (Number.isFinite(input.powerOf) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".powerOf",
                  expected: "number",
                  value: input.powerOf,
                },
                errorFactory,
              )) &&
            ((() => {
              const denominator: number = Math.log(2);
              const value: number = Math.log(input.powerOf) / denominator;
              return Math.abs(value - Math.round(value)) < 1e-8;
            })() ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".powerOf",
                  expected: "number & PowerOf<2>",
                  value: input.powerOf,
                },
                errorFactory,
              ))) ||
            $guard(
              _exceptionable,
              {
                path: _path + ".powerOf",
                expected: "(number & PowerOf<2>)",
                value: input.powerOf,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "TypeTagCustom",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "TypeTagCustom",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
    return input;
  },
});
