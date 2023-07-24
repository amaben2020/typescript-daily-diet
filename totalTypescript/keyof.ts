// The keyof type operator returns a union of the keys of the type passed to it.

import { TBooks } from "./array-typing";

const getBookProp = <T, K extends keyof T>(
  obj: T | T[],
  key: K,
): T[K] | string[] => {
  if (Array.isArray(obj)) {
    return [""] as string[];
  }
  return obj[key];
};

console.log(
  getBookProp(
    {
      title: "",
    },
    "title",
  ),
);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};
// use the OptionsFlags
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;
// result
/*
type FeatureOptions = {
  darkMode: boolean; 
  newUserProfile: boolean; 
} 
*/

const patient = {
  name: "Tinubu",
  occupation: "drug addict",
};

// Use 'extends' keyword to narrow the value of a generic
const fetchUser = <T, U extends keyof T>(user: T, key: U): T[U] => {
  return user[key];
};

console.log(fetchUser(patient, "occupation"));

type UserInfo = {
  name: string;
  preferences: {
    [key: string]: string;
  };
};

// returns the preferences key
type UserPreferenceKey = keyof UserInfo["preferences"];

type AppConfig = {
  username: string;
  layout: string;
};

type AppConfigKey = keyof AppConfig;

const userInfo = {
  username: "Benneth",
  layout: "Vertical",
};

const logUsername = (key: AppConfigKey) => {
  console.log(userInfo[key]);
};

console.log(logUsername("username"));

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string

type PersonProps = keyof Person;

type AppSmith = {
  name: string;
  age: {
    year: Date;
  };
};

const AppSmiths = {
  name: "string",
  age: {
    year: "10/20/2020",
  },
};
// nested keyof
type AppsmithKey = keyof AppSmith["age"];

const showYear = (key: AppsmithKey) => {
  return AppSmiths["age"][key];
};

console.log(showYear("year"));

type TNestedData = {
  foo: {
    a: boolean;
    b: number;
  };
  bar: {
    c: string;
    d: number;
  };
};

type TNestedDataKeys = keyof TNestedData["bar"];

const nestedData = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};
// keyof usage for property accessors
const getDerivedValues = (object: TNestedData, key: TNestedDataKeys) => {
  return object["bar"][key];
};
console.log("getDerivedValues", getDerivedValues(nestedData, "d"));

const renderNestedDataValue = <T, U extends keyof T, V extends keyof T[U]>(
  data: T,
  key: U,
  key2: V,
): T[U][V] => {
  return data[key][key2];
};

type TFilters = keyof TBooks;

const Filters: TFilters = "_uid";

//Note:
// a. extends keyof is used to constrain the type of a generic parameter <>.
// b. in keyof is used to constrain the type of a generic parameter (index signatures).

// A extends B means "some A that is a subtype of B" for both. If B is a keyof type, then A is one string from the set --- and the type checker can say more about code that uses this one string thanks to indexed access types.

type GenericUserType<T> = {
  [P in keyof T]: T[P];
};

type UserKeys = "first" | "second";

type TUser = {
  [key in UserKeys]: {
    name: string;
  };
};

const nestedUsers: GenericUserType<TUser> = {
  first: {
    name: "Benneth",
  },
  second: {
    name: "Blessing",
  },
};

nestedUsers.first.name;

type TUsers = {
  name: string;
  age: number;
};
const users = {
  name: "Ben",
  age: 31,
};
const getUser = <T extends TUsers, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};
console.log(getUser(users, "age"));
