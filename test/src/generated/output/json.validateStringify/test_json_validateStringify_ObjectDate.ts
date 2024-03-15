import typia from "typia";
import { _test_json_validateStringify } from "../../../internal/_test_json_validateStringify";
import { ObjectDate } from "../../../structures/ObjectDate";
export const test_json_validateStringify_ObjectDate =
  _test_json_validateStringify("ObjectDate")<ObjectDate>(ObjectDate)((input) =>
    ((input: ObjectDate): typia.IValidation<string> => {
      const validate = (input: any): typia.IValidation<ObjectDate> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectDate => {
          const $io0 = (input: any): boolean =>
            (null === input.classDate ||
              undefined === input.classDate ||
              input.classDate instanceof Date) &&
            (null === input.date ||
              ("string" === typeof input.date &&
                /^(\d{4})-(\d{2})-(\d{2})$/.test(input.date))) &&
            (null === input.datetime ||
              ("string" === typeof input.datetime &&
                !isNaN(new Date(input.datetime).getTime()))) &&
            (null === input.time ||
              ("string" === typeof input.time &&
                /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                  input.time,
                ))) &&
            (null === input.duration ||
              ("string" === typeof input.duration &&
                /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                  input.duration,
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input)) {
          const $report = (typia.json.validateStringify as any).report(errors);
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectDate => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                null === input.classDate ||
                  undefined === input.classDate ||
                  input.classDate instanceof Date ||
                  $report(_exceptionable, {
                    path: _path + ".classDate",
                    expected: "(Date | null | undefined)",
                    value: input.classDate,
                  }),
                null === input.date ||
                  ("string" === typeof input.date &&
                    (/^(\d{4})-(\d{2})-(\d{2})$/.test(input.date) ||
                      $report(_exceptionable, {
                        path: _path + ".date",
                        expected: 'string & Format<"date">',
                        value: input.date,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".date",
                    expected: '((string & Format<"date">) | null)',
                    value: input.date,
                  }),
                null === input.datetime ||
                  ("string" === typeof input.datetime &&
                    (!isNaN(new Date(input.datetime).getTime()) ||
                      $report(_exceptionable, {
                        path: _path + ".datetime",
                        expected: 'string & Format<"date-time">',
                        value: input.datetime,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".datetime",
                    expected: '((string & Format<"date-time">) | null)',
                    value: input.datetime,
                  }),
                null === input.time ||
                  ("string" === typeof input.time &&
                    (/^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i.test(
                      input.time,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".time",
                        expected: 'string & Format<"time">',
                        value: input.time,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".time",
                    expected: '((string & Format<"time">) | null)',
                    value: input.time,
                  }),
                null === input.duration ||
                  ("string" === typeof input.duration &&
                    (/^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/.test(
                      input.duration,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".duration",
                        expected: 'string & Format<"duration">',
                        value: input.duration,
                      }))) ||
                  $report(_exceptionable, {
                    path: _path + ".duration",
                    expected: '((string & Format<"duration">) | null)',
                    value: input.duration,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDate",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectDate",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const stringify = (input: ObjectDate): string => {
        const $string = (typia.json.validateStringify as any).string;
        const $so0 = (input: any): any =>
          `{${undefined === input.classDate ? "" : `"classDate":${undefined !== input.classDate ? (null !== input.classDate ? $string(input.classDate.toJSON()) : "null") : undefined},`}"date":${null !== input.date ? $string(input.date) : "null"},"datetime":${null !== input.datetime ? $string(input.datetime) : "null"},"time":${null !== input.time ? $string(input.time) : "null"},"duration":${null !== input.duration ? $string(input.duration) : "null"}}`;
        return $so0(input);
      };
      const output = validate(input) as any;
      if (output.success) output.data = stringify(input);
      return output;
    })(input),
  );
