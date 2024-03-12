import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
export const test_functional_isReturnAsync_ConstantAtomicUnion =
  _test_functional_isReturnAsync("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      async (
        input: ConstantAtomicUnion,
      ): Promise<ConstantAtomicUnion | null> => {
        const result = await p(input);
        return ((input: any): input is ConstantAtomicUnion => {
          const $io0 = (input: any): boolean => "key" === input.key;
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                null !== elem &&
                undefined !== elem &&
                (false === elem ||
                  1 === elem ||
                  2 === elem ||
                  "four" === elem ||
                  "three" === elem ||
                  ("object" === typeof elem && null !== elem && $io0(elem))),
            )
          );
        })(result)
          ? result
          : null;
      },
  );
