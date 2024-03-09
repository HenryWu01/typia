import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { AssertProgrammer } from "../AssertProgrammer";
import { NotationGeneralProgrammer } from "./NotationGeneralProgrammer";

export namespace NotationAssertGeneralProgrammer {
  export const write =
    (rename: (str: string) => string) =>
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string, init?: ts.Expression) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          AssertProgrammer.Guardian.parameter(init),
        ],
        ts.factory.createTypeReferenceNode(
          NotationGeneralProgrammer.returnType(rename)(
            name ?? TypeFactory.getFullName(project.checker)(type),
          ),
        ),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "assert",
            AssertProgrammer.write(project)(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "general",
            NotationGeneralProgrammer.write(rename)({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          ts.factory.createExpressionStatement(
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("assert"),
              undefined,
              [
                ts.factory.createIdentifier("input"),
                AssertProgrammer.Guardian.identifier(),
              ],
            ),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("general"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ),
          ts.factory.createReturnStatement(
            ts.factory.createIdentifier("output"),
          ),
        ]),
      );
}
