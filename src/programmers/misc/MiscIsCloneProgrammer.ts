import ts from "typescript";

import { IdentifierFactory } from "../../factories/IdentifierFactory";
import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { IsProgrammer } from "../IsProgrammer";
import { MiscCloneProgrammer } from "./MiscCloneProgrammer";

export namespace MiscIsCloneProgrammer {
  export const write =
    (project: ITypiaProject) =>
    (modulo: ts.LeftHandSideExpression) =>
    (type: ts.Type, name?: string) =>
      ts.factory.createArrowFunction(
        undefined,
        undefined,
        [IdentifierFactory.parameter("input", TypeFactory.keyword("any"))],
        ts.factory.createUnionTypeNode([
          ts.factory.createImportTypeNode(
            ts.factory.createLiteralTypeNode(
              ts.factory.createStringLiteral("typia"),
            ),
            undefined,
            ts.factory.createIdentifier("Resolved"),
            [
              ts.factory.createTypeReferenceNode(
                name ?? TypeFactory.getFullName(project.checker)(type),
              ),
            ],
            false,
          ),
          ts.factory.createLiteralTypeNode(ts.factory.createNull()),
        ]),
        undefined,
        ts.factory.createBlock([
          StatementFactory.constant(
            "is",
            IsProgrammer.write(project)(modulo)(false)(type, name),
          ),
          StatementFactory.constant(
            "clone",
            MiscCloneProgrammer.write({
              ...project,
              options: {
                ...project.options,
                functional: false,
                numeric: false,
              },
            })(modulo)(type, name),
          ),
          ts.factory.createIfStatement(
            ts.factory.createPrefixUnaryExpression(
              ts.SyntaxKind.ExclamationToken,
              ts.factory.createCallExpression(
                ts.factory.createIdentifier("is"),
                undefined,
                [ts.factory.createIdentifier("input")],
              ),
            ),
            ts.factory.createReturnStatement(ts.factory.createNull()),
          ),
          StatementFactory.constant(
            "output",
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("clone"),
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
