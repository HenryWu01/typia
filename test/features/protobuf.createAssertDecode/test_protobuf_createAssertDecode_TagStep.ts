import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagStep } from "../../structures/TagStep";

export const test_protobuf_assertDecode_TagStep = _test_protobuf_assertDecode(
    "TagStep",
)<TagStep>(TagStep)({
    assertDecode: typia.protobuf.createAssertDecode<TagStep>(),
    encode: typia.protobuf.createEncode<TagStep>(),
});
