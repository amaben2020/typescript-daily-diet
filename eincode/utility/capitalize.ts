// intrinsic string
type Monk = {
  name: string;
  age: number;
  monkName: string;
};

type Copy<Type> = {
  [Property in keyof Type as `canUpdate${Capitalize<
    string & Property
  >}`]: Type[Property];
};

type MonkCopy = Copy<Monk>;

type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>; //Hello, world

// We Get this 👇
// type MonkCopy = {
//   canUpdateName: string;
//   canUpdateAge: number;
//   canUpdateUserName: string;
// };

console.log("global", global);

// Example 2
// we have 4 properties and one would be dynamic
// lets say we need to update the user profile with similar props except they would have canUpdate prefix

type TUserProfile = {
  name: string;
  age: number;
  isEmployed: boolean;
  isMarried: boolean;
};

const userProfile: TUserProfile = {
  name: "Benneth",
  age: 30,
  isEmployed: true,
  isMarried: true,
};

type TUserSettings = {
  [Property in keyof TUserProfile as `canUpdate${Capitalize<Property>}`]: TUserProfile[Property];
};

const userProfileSettings: TUserSettings = {
  canUpdateName: "Benneth",
  canUpdateAge: 30,
  canUpdateIsEmployed: true,
  canUpdateIsMarried: true,
};
