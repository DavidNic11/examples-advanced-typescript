get("/projects/", ({ params }) => {});

get("/users/:id", ({ params }) => {});

get("/users", ({ params }) => {});

declare function get<Path extends string>(
  path: Path,
  handler: RequestHandler<Path>
): void;

type RequestObject<Path> = { params: Path };

type RequestHandler<Path> = (request: RequestObject<Path>) => void;

export {};
