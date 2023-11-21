import typia from "../../../src";
import { _test_protobuf_assertEncode } from "../../internal/_test_protobuf_assertEncode";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_protobuf_createAssertEncode_ObjectPrimitive =
  _test_protobuf_assertEncode("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )({
    encode: typia.protobuf.createAssertEncode<ObjectPrimitive>(),
    decode: typia.protobuf.createDecode<ObjectPrimitive>(),
    message: typia.protobuf.message<ObjectPrimitive>(),
  });
