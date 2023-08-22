import typia from "../../../src";
import { _test_protobuf_isEncode } from "../../internal/_test_protobuf_isEncode";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";

export const test_protobuf_isEncode_TagAtomicUnion = _test_protobuf_isEncode(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)({
    isEncode: typia.protobuf.createIsEncode<TagAtomicUnion>(),
    message: typia.protobuf.message<TagAtomicUnion>(),
    decode: typia.protobuf.createDecode<TagAtomicUnion>(),
});
