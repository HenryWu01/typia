import ts from "typescript";

import { ExpressionFactory } from "../../factories/ExpressionFactory";

import { MetadataAtomic } from "../../schemas/metadata/MetadataAtomic";

import { ITypiaProject } from "../../transformers/ITypiaProject";

import { ICheckEntry } from "../helpers/ICheckEntry";

/**
 * @internal
 */
export const check_string =
  (project: ITypiaProject) =>
  (atomic: MetadataAtomic) =>
  (input: ts.Expression): ICheckEntry => {
    const conditions: ICheckEntry.ICondition[][] =
      check_string_type_tags(project)(atomic)(input);
    return {
      expected: atomic.getName(),
      expression: ts.factory.createStrictEquality(
        ts.factory.createStringLiteral("string"),
        ts.factory.createTypeOfExpression(input),
      ),
      conditions,
    };
  };

/**
 * @internal
 */
const check_string_type_tags =
  (project: ITypiaProject) =>
  (atomic: MetadataAtomic) =>
  (input: ts.Expression): ICheckEntry.ICondition[][] =>
    atomic.tags
      .map((row) => row.filter((tag) => !!tag.validate))
      .filter((row) => !!row.length)
      .map((row) =>
        row.map((tag) => ({
          expected: `string & ${tag.name}`,
          expression: (
            tag.predicate ??
            ExpressionFactory.transpile(project.context)(tag.validate!)
          )(input),
        })),
      );
