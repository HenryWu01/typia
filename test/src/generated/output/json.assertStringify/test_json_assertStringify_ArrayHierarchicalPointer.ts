import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { TypeGuardError } from "typia";
export const test_json_assertStringify_ArrayHierarchicalPointer =
  _test_json_assertStringify(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayHierarchicalPointer => {
        const __is = (input: any): input is ArrayHierarchicalPointer => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "number" === typeof input.serial &&
            Number.isFinite(input.serial) &&
            "string" === typeof input.name &&
            "object" === typeof input.established_at &&
            null !== input.established_at &&
            "number" === typeof (input.established_at as any).time &&
            Number.isFinite((input.established_at as any).time) &&
            "number" === typeof (input.established_at as any).zone &&
            Number.isFinite((input.established_at as any).zone) &&
            Array.isArray(input.departments) &&
            input.departments.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io3(elem),
            );
          const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "number" === typeof input.sales &&
            Number.isFinite(input.sales) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone) &&
            Array.isArray(input.employees) &&
            input.employees.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io4(elem),
            );
          const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age) &&
            "number" === typeof input.grade &&
            Number.isFinite(input.grade) &&
            "object" === typeof input.employeed_at &&
            null !== input.employeed_at &&
            "number" === typeof (input.employeed_at as any).time &&
            Number.isFinite((input.employeed_at as any).time) &&
            "number" === typeof (input.employeed_at as any).zone &&
            Number.isFinite((input.employeed_at as any).zone);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayHierarchicalPointer => {
            const $guard = (typia.json.assertStringify as any).guard;
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
                    expected: "Array<ArrayHierarchicalPointer.ICompany>",
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
                          expected: "ArrayHierarchicalPointer.ICompany",
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
                        expected: "ArrayHierarchicalPointer.ICompany",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<ArrayHierarchicalPointer.ICompany>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.serial &&
                Number.isFinite(input.serial)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".serial",
                    expected: "number",
                    value: input.serial,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.established_at &&
                null !== input.established_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".established_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.established_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.established_at,
                  _path + ".established_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".established_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.established_at,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.departments) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".departments",
                    expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                    value: input.departments,
                  },
                  errorFactory,
                )) &&
                input.departments.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".departments[" + _index2 + "]",
                          expected: "ArrayHierarchicalPointer.IDepartment",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao3(
                        elem,
                        _path + ".departments[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".departments[" + _index2 + "]",
                        expected: "ArrayHierarchicalPointer.IDepartment",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".departments",
                    expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                    value: input.departments,
                  },
                  errorFactory,
                ));
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.time &&
                Number.isFinite(input.time)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.zone &&
                Number.isFinite(input.zone)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".zone",
                    expected: "number",
                    value: input.zone,
                  },
                  errorFactory,
                ));
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.code ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.sales &&
                Number.isFinite(input.sales)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sales",
                    expected: "number",
                    value: input.sales,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.created_at &&
                null !== input.created_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.created_at,
                  _path + ".created_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.employees) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employees",
                    expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                    value: input.employees,
                  },
                  errorFactory,
                )) &&
                input.employees.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".employees[" + _index3 + "]",
                          expected: "ArrayHierarchicalPointer.IEmployee",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao4(
                        elem,
                        _path + ".employees[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".employees[" + _index3 + "]",
                        expected: "ArrayHierarchicalPointer.IEmployee",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employees",
                    expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                    value: input.employees,
                  },
                  errorFactory,
                ));
            const $ao4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.grade &&
                Number.isFinite(input.grade)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".grade",
                    expected: "number",
                    value: input.grade,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.employeed_at &&
                null !== input.employeed_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employeed_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.employeed_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.employeed_at,
                  _path + ".employeed_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employeed_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.employeed_at,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayHierarchicalPointer",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayHierarchicalPointer",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ArrayHierarchicalPointer): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.id &&
          "number" === typeof input.serial &&
          "string" === typeof input.name &&
          "object" === typeof input.established_at &&
          null !== input.established_at &&
          $io2(input.established_at) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io3(elem),
          );
        const $io2 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $io3 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io2(input.created_at) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io4(elem),
          );
        const $io4 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "number" === typeof input.age &&
          "number" === typeof input.grade &&
          "object" === typeof input.employeed_at &&
          null !== input.employeed_at &&
          $io2(input.employeed_at);
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value.map((elem: any) => $so1(elem)).join(",")}]`}}`;
        const $so1 = (input: any): any =>
          `{"id":${$number(input.id)},"serial":${$number(input.serial)},"name":${$string(input.name)},"established_at":${`{"time":${$number((input.established_at as any).time)},"zone":${$number((input.established_at as any).zone)}}`},"departments":${`[${input.departments.map((elem: any) => $so3(elem)).join(",")}]`}}`;
        const $so3 = (input: any): any =>
          `{"id":${$number(input.id)},"code":${$string(input.code)},"sales":${$number(input.sales)},"created_at":${`{"time":${$number((input.created_at as any).time)},"zone":${$number((input.created_at as any).zone)}}`},"employees":${`[${input.employees.map((elem: any) => $so4(elem)).join(",")}]`}}`;
        const $so4 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(input.name)},"age":${$number(input.age)},"grade":${$number(input.grade)},"employeed_at":${`{"time":${$number((input.employeed_at as any).time)},"zone":${$number((input.employeed_at as any).zone)}}`}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
