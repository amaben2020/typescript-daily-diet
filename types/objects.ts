import { data } from "../data";

// Using explicit object type annotations#

const tomScore: { name: string; score: number } = {
  name: "Tom",
  score: 70,
};

// type alias
type Score = { name: string; score: number };

const tomScore2: Score = { name: "Tom", score: 70 };

type Person3 = {
  firstName: string;
  level: "high" | "Medium" | "low";
};
let person3: Person3 = {
  firstName: "Tom",
  level: "high",
};
person3.level = "low";

// Record<KeyType,ValueType># : The Record type allows a key-value object type to be created. The key type is the type of the keys in the object, and the value type is the type of the values in the object. In the example above, rodj, janes, and fred are the keys and the values are of type { firstName: string; surname: string; score: number; }.

type ResultRecord = Record<string, Res>;
type Res = {
  firstName: string;
  surname: string;
  score: number;
};
const record: ResultRecord = {
  rodj: {
    firstName: "Rod",
    surname: "James",
    score: 70,
  },
  janes: {
    firstName: "Jane",
    surname: "Smith",
    score: 95,
  },
  fredp: {
    firstName: "Fred",
    surname: "Peters",
    score: 60,
  },
};

// How can we narrow the type of the record keys so that only rodj, janes, or fredp are accepted?
// type ResRecord = Record<"rodj" | "janes" | "fredp", Result>;

//clear explanation

// the value of each key
interface PageInfo {
  title: string;
}

// keys are strings
type Page = "home" | "about" | "contact";

const nav: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};

nav.about;

type Key = string;

type Props = {
  first: string;
  last: string;
};
const user: Record<Key, Props> = {
  name: {
    first: "Tom",
    last: "Hanks",
  },
  age: {
    first: "50",
    last: "years",
  },
};

type FormControl = {
  name: string;
  value: string;
};

type ValidatorFn = (c: FormControl) => { [key: string]: any } | null;

//cool logic
const user4 = {
  ["name"]: "Bob",
};

// console.log(user3);

// const matchObject2 = <T, K extends keyof T>(person: T, arrayOfKeys: K[]) => {
//   const newObject = {} as Pick<T, K>;
//   for (let key of arrayOfKeys) {
//     if (key in person) {
//       newObject[key] = person[key];
//     }
//   }
//   return newObject;
// };

// const derivedObj2 = matchObject(obj, ["name", "age"]);
// console.log("derived", derivedObj);

// //1. reusable generic function that can accept any parameter
// function getKeys2<T>(object: T) {
//   for (let k in object) {
//     console.log(object[k]);
//   }
//   return {
//     sex: "222",
//     ...object,
//   };
// }

// //2. using the function by passing the type as arguement
// const ress2 = getKeys<Obj>(obj);
// console.log(ress2);

type IData = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const myPerson = {
  id: 7,
  name: "Amaben",
  username: "amaben2020",
  email: "amaben2020@yahoo.com",
  phone: "0703738738383",
  website: "www.ben.dev",
};

// const createNewObject = <T>(object, keys) => {};
