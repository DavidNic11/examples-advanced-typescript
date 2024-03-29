get("/projects/", ({ params }) => {});

get("/users/:id", ({ params }) => {
  params.id;
});

get("/users", ({ params }) => {});

declare function get(path: string, handler: RequestHandler): void;

type RequestObject = { params: Record<string, string> };

type RequestHandler = (request: RequestObject) => void;

export {};
