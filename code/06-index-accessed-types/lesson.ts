type BaseEntity = {
  id: string;
};

interface User extends BaseEntity {
  name: string;
  projects: string[];
}

/**
 * Let's derive UserId from the types above!
 */
type UserId = never;
const userId: UserId = "1230-283492-3";

/**
 * You can pass more than one string literal into an Index Accessed Type.
 * lets try to get all the unions
 */
type UserKeys = never;
type UserKeyButBetter = never;

/**
 * Let's look at some other things we can do with Index
 * Accessed types. Ever hear that Arrays are just objects
 * key-ed by numbers? Let's put that to the test
 */

type NumberArray = Array<number>;

type NumberFromArray = NumberArray[number];

// We can combine this with constrained generics to get something
// a bit more useful
type ElementsOf<List extends any[]> = never;
type DerivedNumber = ElementsOf<NumberArray>;

const number: DerivedNumber = 4;

/**
 * Lets update this EntityMethods type to type methods for
 * getting, updating, and deleting a single entity
 */
type EntityMethods<Entity extends BaseEntity> = never;

const userMethods: EntityMethods<User> = {
  update: (id, updates) => {
    /** implementation detail */
  },
  get: (id) => {
    /** implementation detail */
  },
  delete: (id) => {
    /** implementation detail */
  },
};

// @ts-expect-error
userMethods.get(1234);

userMethods.get("1234");
userMethods.update("1234", { name: "Andrew" });

export {};
