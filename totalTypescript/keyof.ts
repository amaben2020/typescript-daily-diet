// The keyof type operator returns a union of the keys of the type passed to it

import { TBooks } from "./array-typing";

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

const renderNestedDataValue = <T, U extends keyof T, V extends keyof T[U]>(
  data: T,
  key: U,
  key2: V,
): T[U][V] => {
  return data[key][key2];
};

type TFilters = keyof TBooks;

const Filters: TFilters = "_uid";
