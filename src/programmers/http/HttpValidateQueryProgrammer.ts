import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProject } from "../../transformers/IProject";

import { ValidateProgrammer } from "../ValidateProgrammer";
import { HttpQueryProgrammer } from "./HttpQueryProgrammer";

export namespace HttpValidateQueryProgrammer {
  export const write =
    (project: IProject) =>
    (modulo: ts.LeftHandSideExpression, allowOptional: boolean = false) =>
    (type: ts.Type, name?: string): ts.ArrowFunction =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter(
            "input",
            ts.factory.createTypeReferenceNode(HttpQueryProgrammer.INPUT_TYPE),
          ),
        ],
        ts.factory.createTypeReferenceNode(
          `typia.IValidation<typia.Resolved<${
            name ?? TypeFactory.getFullName(project.checker)(type)
          }>>`,
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "validate",
            ValidateProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: true,
              },
            })(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "decode",
            HttpQueryProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo, allowOptional)(type, name),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createAsExpression(
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("validate"),
                undefined,
                [ts.factory.createIdentifier("output")],
              ),
              ts.factory.createTypeReferenceNode("any"),
            ),
          ),
        ]),
      );
}
