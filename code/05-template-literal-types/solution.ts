type TemplateLiteralTypes = "Template Literal Types";
type ExampleOf = `Example of ${TemplateLiteralTypes}`;

type PokemonNames = "bulbasaur" | "charmander" | "squirtle";

type PokemonEgg = `${PokemonNames}-egg`;

type ItemTypes = "regular" | "max";
type Items = "potion" | "revive";

type BagItems = `${ItemTypes} ${Items}`;

/**
 * Let's look at an example with a function
 */

declare function stripLeadingSlash<Path extends string>(
  string: `/${Path}` | Path
): Path;

let abc = stripLeadingSlash("/abc");
abc = "abc";

let id = stripLeadingSlash("/:id");
id = ":id";

let abd = stripLeadingSlash("abd");
abd = "abd";

export {};
