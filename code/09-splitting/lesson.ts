/**
 * Previously we had
 * type Id = GetDevFriendlyParams<"user" | "project" | ":id">;
 * type IdOrOrg = GetDevFriendlyParams<":org" | "project" | ":id">;
 *
 * now lets include SplitPath
 */

type GetDevFriendlyParams<Path> = Path extends `:${infer Params}`
  ? Params
  : never;

type SplitPath<Path extends string, PathSegments extends any[] = []> = never;

type Id = GetDevFriendlyParams<SplitPath<"user/project/:id">>;
type IdOrOrg = GetDevFriendlyParams<SplitPath<":org/project/:id">>;
