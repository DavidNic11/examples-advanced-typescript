get("/users", ({ params }) => {});

get("/users/:id", ({ params }) => {});

declare function get<Path extends string>(
  path: Path,
  handler: RequestHandler<Path>
): void;

type RequestObject<Path extends string> = { params: Path };

type RequestHandler<Path extends string> = (
  request: RequestObject<Path>
) => void;

export {};
