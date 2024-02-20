get("/projects/", ({ params }) => {});
get("/users/:org/:id", ({ params }) => {
  params;
});

get("/users", ({ params }) => {});

declare function get<Path extends string>(
  path: Path,
  handler: RequestHandler<Path>
): void;

type RequestHandler<Path extends string> = (
  request: RequestObject<Path>
) => void;

/****************************************/
// Update RequestObject and GetParams to
// finish the API. Our previous split work has
// been encapsulated in the PathParameters
// helper type for convenience. Path parameters
// can only be string or undefined
/****************************************/

type RequestObject<Path extends string> = { params: Path };

type GetParams<Path extends string> = never;

type PathParameters<Path extends string> = GetDevFriendlyParams<
  SplitPath<Path>
>;

/****************************************/

type GetDevFriendlyParams<Path> = Path extends `:${infer Params}`
  ? Params
  : never;

type SplitPath<
  Path extends string,
  PathSegments extends any[] = []
> = Path extends `${infer Head}/${infer RestOfPath}`
  ? SplitPath<RestOfPath, [...PathSegments, Head]>
  : [...PathSegments, Path][number];

export {};
