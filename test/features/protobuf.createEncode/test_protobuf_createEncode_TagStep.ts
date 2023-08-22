import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_encode_TagStep = _test_protobuf_encode(
    "TagStep",
)<TagStep>(TagStep)({
    encode: typia.protobuf.createEncode<TagStep>(),
    message: typia.protobuf.message<TagStep>(),
    decode: typia.protobuf.createDecode<TagStep>(),
});
