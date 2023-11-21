import { MiscCloneProgrammer } from "../../../programmers/misc/MiscCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCloneTransformer {
  export const transform = GenericTransformer.scalar("misc.clone")(
    (project) => (modulo) => MiscCloneProgrammer.write(project)(modulo),
  );
}
