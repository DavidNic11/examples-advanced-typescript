get("/user/:id/:orgId", ({ params }) => {
  params.id;
});

declare function get<Path extends string>(
  path: Path,
  handler: RequestHandler<Path>
): void;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
type RequestHandler<Path extends string> = (
  request: RequestObject<Path>
) => void;

type RequestObject<Path extends string> = {
  params: PathParams<Path>;
};

type PathParams<Path extends string> = {
  [Param in GetPathParams<Path>]: string;
};

type GetDevFriendlyParams<T> = T extends `:${infer P}` ? P : never;

type GetPathParams<Path extends string> = GetDevFriendlyParams<
  Split<Path, "/">
>;

type Split<
  ToSplit extends string,
  Separator extends string,
  SplitStrings extends string[] = []
> = ToSplit extends `${infer Head}${Separator}${infer Rest}`
  ? Split<Rest, Separator, [...SplitStrings, Head]>
  : [...SplitStrings, ToSplit][number];

export {};
