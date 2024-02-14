type SplitPath<
  Path extends string,
  PathSegments extends any[] = []
> = Path extends `${infer Head}/${infer RestOfPath}`
  ? SplitPath<RestOfPath, [...PathSegments, Head]>
  : [...PathSegments, Path][number];

type Id = GetDevFriendlyParams<SplitPath<"user/project/:id">>;
type IdOrOrg = GetDevFriendlyParams<SplitPath<":org/project/:id">>;

export {};
