import typia from "../../../src";
import { _test_protobuf_validateDecode } from "../../internal/_test_protobuf_validateDecode";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_protobuf_validateDecode_ObjectSimpleProtobufNullable =
    _test_protobuf_validateDecode(
        "ObjectSimpleProtobufNullable",
    )<ObjectSimpleProtobufNullable>(ObjectSimpleProtobufNullable)({
        validateDecode: (input) =>
            typia.protobuf.validateDecode<ObjectSimpleProtobufNullable>(input),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufNullable>(),
    });
