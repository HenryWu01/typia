import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_assert } from "../../internal/_test_assert";

export const test_assert_TupleOptional = _test_assert(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.assert(input),
    TupleOptional.SPOILERS,
);
