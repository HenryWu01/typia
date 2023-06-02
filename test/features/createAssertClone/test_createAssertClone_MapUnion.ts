import typia from "../../../src";

import { MapUnion } from "../../structures/MapUnion";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_createAssertClone_MapUnion = _test_assertClone(
    "MapUnion",
    MapUnion.generate,
    typia.createAssertClone<MapUnion>(),
    MapUnion.SPOILERS,
);
