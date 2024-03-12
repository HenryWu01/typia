import typia from "typia";
import { _test_functional_assertFunctionAsync } from "../../../internal/_test_functional_assertFunctionAsync";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertFunctionAsyncCustom_TemplateConstant =
  _test_functional_assertFunctionAsync(CustomGuardError)("TemplateConstant")(
    TemplateConstant,
  )(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      async (input: TemplateConstant): Promise<TemplateConstant> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
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
        ): TemplateConstant => {
          const __is = (input: any): input is TemplateConstant => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("prefix_A" === input.prefix ||
                "prefix_B" === input.prefix ||
                "prefix_C" === input.prefix) &&
              ("1_postfix" === input.postfix ||
                "2_postfix" === input.postfix ||
                "3_postfix" === input.postfix) &&
              ("the_1_value_with_label_A" === input.combined ||
                "the_1_value_with_label_B" === input.combined ||
                "the_1_value_with_label_C" === input.combined ||
                "the_2_value_with_label_A" === input.combined ||
                "the_2_value_with_label_B" === input.combined ||
                "the_2_value_with_label_C" === input.combined ||
                "the_3_value_with_label_A" === input.combined ||
                "the_3_value_with_label_B" === input.combined ||
                "the_3_value_with_label_C" === input.combined);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TemplateConstant => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TemplateConstant.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TemplateConstant.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TemplateConstant.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TemplateConstant.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("prefix_A" === input.prefix ||
                  "prefix_B" === input.prefix ||
                  "prefix_C" === input.prefix ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".prefix",
                      expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                      value: input.prefix,
                    },
                    errorFactory,
                  )) &&
                ("1_postfix" === input.postfix ||
                  "2_postfix" === input.postfix ||
                  "3_postfix" === input.postfix ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".postfix",
                      expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                      value: input.postfix,
                    },
                    errorFactory,
                  )) &&
                ("the_1_value_with_label_A" === input.combined ||
                  "the_1_value_with_label_B" === input.combined ||
                  "the_1_value_with_label_C" === input.combined ||
                  "the_2_value_with_label_A" === input.combined ||
                  "the_2_value_with_label_B" === input.combined ||
                  "the_2_value_with_label_C" === input.combined ||
                  "the_3_value_with_label_A" === input.combined ||
                  "the_3_value_with_label_B" === input.combined ||
                  "the_3_value_with_label_C" === input.combined ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".combined",
                      expected:
                        '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                      value: input.combined,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TemplateConstant",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TemplateConstant",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
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
        ): TemplateConstant => {
          const __is = (input: any): input is TemplateConstant => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              ("prefix_A" === input.prefix ||
                "prefix_B" === input.prefix ||
                "prefix_C" === input.prefix) &&
              ("1_postfix" === input.postfix ||
                "2_postfix" === input.postfix ||
                "3_postfix" === input.postfix) &&
              ("the_1_value_with_label_A" === input.combined ||
                "the_1_value_with_label_B" === input.combined ||
                "the_1_value_with_label_C" === input.combined ||
                "the_2_value_with_label_A" === input.combined ||
                "the_2_value_with_label_B" === input.combined ||
                "the_2_value_with_label_C" === input.combined ||
                "the_3_value_with_label_A" === input.combined ||
                "the_3_value_with_label_B" === input.combined ||
                "the_3_value_with_label_C" === input.combined);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is TemplateConstant => {
              const $guard = (typia.functional.assertFunction as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".value",
                      expected: "Array<TemplateConstant.Type>",
                      value: input.value,
                    },
                    errorFactory,
                  )) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".value[" + _index1 + "]",
                            expected: "TemplateConstant.Type",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "TemplateConstant.Type",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<TemplateConstant.Type>",
                    value: input.value,
                  },
                  errorFactory,
                );
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("prefix_A" === input.prefix ||
                  "prefix_B" === input.prefix ||
                  "prefix_C" === input.prefix ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".prefix",
                      expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                      value: input.prefix,
                    },
                    errorFactory,
                  )) &&
                ("1_postfix" === input.postfix ||
                  "2_postfix" === input.postfix ||
                  "3_postfix" === input.postfix ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".postfix",
                      expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                      value: input.postfix,
                    },
                    errorFactory,
                  )) &&
                ("the_1_value_with_label_A" === input.combined ||
                  "the_1_value_with_label_B" === input.combined ||
                  "the_1_value_with_label_C" === input.combined ||
                  "the_2_value_with_label_A" === input.combined ||
                  "the_2_value_with_label_B" === input.combined ||
                  "the_2_value_with_label_C" === input.combined ||
                  "the_3_value_with_label_A" === input.combined ||
                  "the_3_value_with_label_B" === input.combined ||
                  "the_3_value_with_label_C" === input.combined ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".combined",
                      expected:
                        '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                      value: input.combined,
                    },
                    errorFactory,
                  ));
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "TemplateConstant",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TemplateConstant",
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
