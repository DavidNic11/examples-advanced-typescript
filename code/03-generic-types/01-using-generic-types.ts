type APIResponse<ResponseData, ErrorType> = {
  code: number;
  data?: ResponseData;
  error?: ErrorType;
};

type User = {
  id: string;
  name: string;
  settings: Record<string, boolean>;
};

type UserResponse = APIResponse<User, Error>;

const userResponse: UserResponse = {
  code: 200,
  data: {
    id: "",
    name: "",
    settings: {
      useV2: true,
    },
  },
};

function objectify<Input>(input: Input): { value: Input } {
  return { value: input };
}

const withAValue = objectify<number>(4);
const withInference = objectify("4");

// But Wait that doesn't do anything with the type!

const greet = <ThingToGreet>(thing: ThingToGreet): void => {
  console.log("Hello there", thing.name);
};

greet({ person: "Arthur" });

export {};
