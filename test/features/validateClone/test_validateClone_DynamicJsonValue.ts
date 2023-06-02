import typia from "../../../src";

import { DynamicJsonValue } from "../../structures/DynamicJsonValue";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_DynamicJsonValue = _test_validateClone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    (input) => typia.validateClone(input),
    DynamicJsonValue.SPOILERS,
);
