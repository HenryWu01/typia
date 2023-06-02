import typia from "../../../src";

import { AtomicUnion } from "../../structures/AtomicUnion";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_AtomicUnion = _test_isPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    typia.createIsPrune<AtomicUnion>(),
    AtomicUnion.SPOILERS,
);
