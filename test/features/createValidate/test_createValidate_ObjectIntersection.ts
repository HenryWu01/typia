import TSON from "../../../src";
import { ObjectIntersection } from "../../structures/ObjectIntersection";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectIntersection = _test_validate(
    "ObjectIntersection",
    ObjectIntersection.generate,
    TSON.createValidate<ObjectIntersection>(),
    ObjectIntersection.SPOILERS,
);
