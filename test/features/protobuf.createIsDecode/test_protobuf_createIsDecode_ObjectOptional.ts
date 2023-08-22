import typia from "../../../src";
import { _test_protobuf_isDecode } from "../../internal/_test_protobuf_isDecode";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_protobuf_isDecode_ObjectOptional = _test_protobuf_isDecode(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    isDecode: typia.protobuf.createIsDecode<ObjectOptional>(),
    encode: typia.protobuf.createEncode<ObjectOptional>(),
});
