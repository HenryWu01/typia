import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_encode_ObjectIntersection = _test_protobuf_encode(
    "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)({
    encode: (input: ObjectIntersection): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "email";
                writer.uint32(10);
                writer.string(input.email);
                // property "name";
                writer.uint32(18);
                writer.string(input.name);
                // property "vulnerable";
                writer.uint32(24);
                writer.bool(input.vulnerable);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage ObjectIntersection {\n    required string email = 1;\n    required string name = 2;\n    required bool vulnerable = 3;\n}',
    decode: (input: Uint8Array): ObjectIntersection => {
        const $Reader = (typia.protobuf.createDecode as any).Reader;
        const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                email: "" as any,
                name: "" as any,
                vulnerable: undefined as any,
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        output.email = reader.string();
                        break;
                    case 2:
                        output.name = reader.string();
                        break;
                    case 3:
                        output.vulnerable = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const reader = new $Reader(input);
        return $pdo0(reader);
    },
});
