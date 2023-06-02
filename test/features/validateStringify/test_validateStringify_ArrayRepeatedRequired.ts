import typia from "../../../src";

import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";
import { _test_validateStringify } from "../../internal/_test_validateStringify";

export const test_validateStringify_ArrayRepeatedRequired = _test_validateStringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input) => typia.validateStringify(input),
    ArrayRepeatedRequired.SPOILERS,
);
