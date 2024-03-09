import ts from "typescript";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { ITypiaProject } from "../transformers/ITypiaProject";

import { CheckerProgrammer } from "./CheckerProgrammer";
import { IsProgrammer } from "./IsProgrammer";
import { OptionPredicator } from "./helpers/OptionPredicator";
import { check_object } from "./internal/check_object";
import { ImportProgrammer } from "./ImportProgrammer";

export namespace AssertProgrammer {
  export const write =
    (project: ITypiaProject) =>
    (importer: ImportProgrammer) =>
    (props: boolean | { equals: boolean; guard: boolean }) =>
    (type: ts.Type, name?: string, init?: ts.Expression) => {
      // TO SUPPORT LEGACY FEATURE
      if (typeof props === "boolean") props = { equals: props, guard: false };

      const is: ts.ArrowFunction = IsProgrammer.write(project)(importer)(
        props.equals,
      )(type, name ?? TypeFactory.getFullName(project.checker)(type));
      const assert: ts.ArrowFunction = CheckerProgrammer.write(project)({
        prefix: "$a",
        path: true,
        trace: true,
        numeric: OptionPredicator.numeric(project.options),
        equals: props.equals,
        atomist: (explore) => (entry) => (input) =>
          [
            ...(entry.expression ? [entry.expression] : []),
            ...(entry.conditions.length === 0
              ? []
              : entry.conditions.length === 1
              ? entry.conditions[0]!.map((cond) =>
                  ts.factory.createLogicalOr(
                    cond.expression,
                    create_guard_call(importer)(
                      explore.from === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("_exceptionable"),
                    )(
                      ts.factory.createIdentifier(
                        explore.postfix
                          ? `_path + ${explore.postfix}`
                          : "_path",
                      ),
                      cond.expected,
                      input,
                    ),
                  ),
                )
              : [
                  ts.factory.createLogicalOr(
                    entry.conditions
                      .map((set) =>
                        set
                          .map((s) => s.expression)
                          .reduce((a, b) => ts.factory.createLogicalAnd(a, b)),
                      )
                      .reduce((a, b) => ts.factory.createLogicalOr(a, b)),
                    create_guard_call(importer)(
                      explore.from === "top"
                        ? ts.factory.createTrue()
                        : ts.factory.createIdentifier("_exceptionable"),
                    )(
                      ts.factory.createIdentifier(
                        explore.postfix
                          ? `_path + ${explore.postfix}`
                          : "_path",
                      ),
                      entry.expected,
                      input,
                    ),
                  ),
                ]),
          ].reduce((x, y) => ts.factory.createLogicalAnd(x, y)),
        combiner: combiner(props.equals)(project)(importer),
        joiner: joiner(props.equals)(project)(importer),
        success: ts.factory.createTrue(),
        addition: () => importer.declare(modulo),
      })(importer)(type, name);

      return ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
          IdentifierFactory.parameter("input", TypeFactory.keyword("any")),
          Guardian.parameter(init),
        ],
        props.guard
          ? ts.factory.createTypePredicateNode(
              ts.factory.createToken(ts.SyntaxKind.AssertsKeyword),
              ts.factory.createIdentifier("input"),
              ts.factory.createTypeReferenceNode(
                name ?? TypeFactory.getFullName(project.checker)(type),
              ),
            )
          : ts.factory.createTypeReferenceNode(
              name ?? TypeFactory.getFullName(project.checker)(type),
            ),
        undefined,
        ts.factory.createBlock(
          [
            StatementFactory.constant("__is", is),
            ts.factory.createIfStatement(
              ts.factory.createStrictEquality(
                ts.factory.createFalse(),
                ts.factory.createCallExpression(
                  ts.factory.createIdentifier("__is"),
                  undefined,
                  [ts.factory.createIdentifier("input")],
                ),
              ),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(assert, undefined, [
                  ts.factory.createIdentifier("input"),
                  ts.factory.createStringLiteral("$input"),
                  ts.factory.createTrue(),
                ]),
              ),
              undefined,
            ),
            ...(props.guard === false
              ? [
                  ts.factory.createReturnStatement(
                    ts.factory.createIdentifier(`input`),
                  ),
                ]
              : []),
          ],
          true,
        ),
      );
    };

  const combiner =
    (equals: boolean) =>
    (project: ITypiaProject) =>
    (importer: ImportProgrammer): CheckerProgrammer.IConfig.Combiner =>
    (explore: CheckerProgrammer.IExplore) => {
      if (explore.tracable === false)
        return IsProgrammer.configure({
          object: assert_object(equals)(project)(importer),
          numeric: true,
        })(project)(importer).combiner(explore);

      const path: string = explore.postfix
        ? `_path + ${explore.postfix}`
        : "_path";
      return (logic) => (input, binaries, expected) =>
        logic === "and"
          ? binaries
              .map((binary) =>
                binary.combined
                  ? binary.expression
                  : ts.factory.createLogicalOr(
                      binary.expression,
                      create_guard_call(importer)(
                        explore.source === "top"
                          ? ts.factory.createTrue()
                          : ts.factory.createIdentifier("_exceptionable"),
                      )(ts.factory.createIdentifier(path), expected, input),
                    ),
              )
              .reduce(ts.factory.createLogicalAnd)
          : ts.factory.createLogicalOr(
              binaries
                .map((binary) => binary.expression)
                .reduce(ts.factory.createLogicalOr),
              create_guard_call(importer)(
                explore.source === "top"
                  ? ts.factory.createTrue()
                  : ts.factory.createIdentifier("_exceptionable"),
              )(ts.factory.createIdentifier(path), expected, input),
            );
      // : (() => {
      //       const addicted = binaries.slice();
      //       if (
      //           addicted[addicted.length - 1]!.combined === false
      //       ) {
      //           addicted.push({
      //               combined: true,
      //               expression: create_guard_call(importer)(
      //                   explore.source === "top"
      //                       ? ts.factory.createTrue()
      //                       : ts.factory.createIdentifier(
      //                             "_exceptionable",
      //                         ),
      //               )(
      //                   ts.factory.createIdentifier(path),
      //                   expected,
      //                   input,
      //               ),
      //           });
      //       }
      //       return addicted
      //           .map((b) => b.expression)
      //           .reduce(ts.factory.createLogicalOr);
      //   })();
    };

  const assert_object =
    (equals: boolean) =>
    (project: ITypiaProject) =>
    (importer: ImportProgrammer) =>
      check_object({
        equals,
        assert: true,
        undefined: true,
        reduce: ts.factory.createLogicalAnd,
        positive: ts.factory.createTrue(),
        superfluous: (value) =>
          create_guard_call(importer)()(
            ts.factory.createAdd(
              ts.factory.createIdentifier("_path"),
              ts.factory.createCallExpression(
                importer.instance({
                  library: "typia/lib/internal/$access_expression",
                  name: "$access_expression",
                }),
                undefined,
                [ts.factory.createIdentifier("key")],
              ),
            ),
            "undefined",
            value,
          ),
        halt: (expr) =>
          ts.factory.createLogicalOr(
            ts.factory.createStrictEquality(
              ts.factory.createFalse(),
              ts.factory.createIdentifier("_exceptionable"),
            ),
            expr,
          ),
      })(project)(importer);

  const joiner =
    (equals: boolean) =>
    (project: ITypiaProject) =>
    (importer: ImportProgrammer): CheckerProgrammer.IConfig.IJoiner => ({
      object: assert_object(equals)(project)(importer),
      array: (input, arrow) =>
        ts.factory.createCallExpression(
          IdentifierFactory.access(input)("every"),
          undefined,
          [arrow],
        ),
      failure: (value, expected, explore) =>
        create_guard_call(importer)(
          explore?.from === "top"
            ? ts.factory.createTrue()
            : ts.factory.createIdentifier("_exceptionable"),
        )(
          ts.factory.createIdentifier(
            explore?.postfix ? `_path + ${explore.postfix}` : "_path",
          ),
          expected,
          value,
        ),
      full: equals
        ? undefined
        : (condition) => (input, expected, explore) =>
            ts.factory.createLogicalOr(
              condition,
              create_guard_call(importer)(
                explore.from === "top"
                  ? ts.factory.createTrue()
                  : ts.factory.createIdentifier("_exceptionable"),
              )(ts.factory.createIdentifier("_path"), expected, input),
            ),
    });

  const create_guard_call =
    (importer: ImportProgrammer) =>
    (exceptionable?: ts.Expression) =>
    (
      path: ts.Expression,
      expected: string,
      value: ts.Expression,
    ): ts.Expression =>
      ts.factory.createCallExpression(
        importer.instance({
          library: "typia/lib/internal/$guard",
          name: "$guard,",
        }),
        undefined,
        [
          exceptionable ?? ts.factory.createIdentifier("_exceptionable"),
          ts.factory.createObjectLiteralExpression(
            [
              ts.factory.createPropertyAssignment("path", path),
              ts.factory.createPropertyAssignment(
                "expected",
                ts.factory.createStringLiteral(expected),
              ),
              ts.factory.createPropertyAssignment("value", value),
            ],
            true,
          ),
          Guardian.identifier(),
        ],
      );

  export namespace Guardian {
    export const identifier = () => ts.factory.createIdentifier("errorFactory");
    export const parameter = (init: ts.Expression | undefined) =>
      IdentifierFactory.parameter(
        "errorFactory",
        type(),
        init ?? ts.factory.createToken(ts.SyntaxKind.QuestionToken),
      );
    export const type = () =>
      ts.factory.createFunctionTypeNode(
        undefined,
        [
          ts.factory.createParameterDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier("p"),
            undefined,
            ts.factory.createImportTypeNode(
              ts.factory.createLiteralTypeNode(
                ts.factory.createStringLiteral("typia"),
              ),
              undefined,
              ts.factory.createQualifiedName(
                ts.factory.createIdentifier("TypeGuardError"),
                ts.factory.createIdentifier("IProps"),
              ),
              undefined,
              false,
            ),
            undefined,
          ),
        ],
        ts.factory.createTypeReferenceNode(
          ts.factory.createIdentifier("Error"),
          undefined,
        ),
      );
  }
}
