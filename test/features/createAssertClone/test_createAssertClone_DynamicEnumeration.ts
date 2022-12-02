import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_DynamicEnumeration = _test_assertClone(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    TSON.createAssertClone<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
