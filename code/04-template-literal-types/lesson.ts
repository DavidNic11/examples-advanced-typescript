/**
 * You can also use them to enforce some string shape matching
 */

type Hyphenated = never;

const str: Hyphenated = "no hyphen";
const str2: Hyphenated = "with-hyphen";
const str3: Hyphenated = "with-more-than-one";

/**
 * Let's look at an example with a function
 */

declare function stripLeadingSlash<Path extends string>(string: Path): Path;

let user = stripLeadingSlash("/user");
user = "user";

let id = stripLeadingSlash("/:id");
id = ":id";

let user2 = stripLeadingSlash("user");
user2 = "user";

export { str, str2, str3 };
