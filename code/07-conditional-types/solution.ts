type User = {
  id: string;
  name: string;
  projects: string[];
};

type Order = {
  trackingNumber: string;
};

type HasId<Entity> = Entity extends { id: string } ? true : false;

type UserHasId = HasId<User>;
type OrderHasId = HasId<Order>;

// With conditionals and template literals we can also check if
// strings match certain shapes

type IsHyphenated<Value> = Value extends `${string}-${string}` ? true : false;

type Str = IsHyphenated<"ab-c">;
type Str1 = IsHyphenated<"a">;

// Like we saw in the slides we can see that with infer we can get better type handling
// with pattern matching
type UnWrapPromise<Data> = Data extends Promise<infer PromisedValue>
  ? PromisedValue
  : never;

type DePromisifiedNumber = UnWrapPromise<Promise<number>>;

type Statement = "I will keep you here all night";
type Amended = "I will keep you here til 4";

type HowLong<Str> = Str extends `I will keep you here ${infer Rest}`
  ? Rest
  : never;

type AllNight = HowLong<Statement>;
type TilFour = HowLong<Amended>;

// Combining infer with template literals gives us even better handling of literal types
type MembersOfAHyphenatedString<Value> =
  Value extends `${infer First}-${infer Last}` ? First | Last : never;

type MooCow = MembersOfAHyphenatedString<"moo-cow">;
type NotMooCow = MembersOfAHyphenatedString<"moo cow">;

export {};
