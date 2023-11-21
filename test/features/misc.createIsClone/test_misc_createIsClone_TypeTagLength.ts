import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createIsClone_TypeTagLength = _test_misc_isClone(
  "TypeTagLength",
)<TypeTagLength>(TypeTagLength)(typia.misc.createIsClone<TypeTagLength>());
