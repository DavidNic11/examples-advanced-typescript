/**
 * Given "user" |  "project" | ":id" return "id"
 * Given ":org" | "project" | ":id" return "org" | "id"
 */

type GetDevFriendlyParams<Path> = Path extends `:${infer P}` ? P : never;

type Id = GetDevFriendlyParams<"user" | "project" | ":id">;
type IdOrOrg = GetDevFriendlyParams<":org" | "project" | ":id">;

export {};
