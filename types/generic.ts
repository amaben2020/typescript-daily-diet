// Understanding the generic type syntax#
// Generic type allows us to create a specific type by allowing us to pass types into it as parameters. The parameters are passed inside angle brackets. If there are multiple parameters, they are separated by a comma. Generic types allow us to create types that are reusable in many different situations. This is because we can create a specific type for our use case from a generic type by passing our types into it as parameters.

// allowing developers to pass types as parameters to another type, function, or other structure

// like writing a function with parameters
// const myVar = GenericType<SpecificType1, SpecificType2, ...>

let scores: Array<number | string>;
let scores2: Array<string>;
scores = [70, 65, 75, "kddk"];
scores2 = ["sss"];

type Coordinate = [number, number, number];

type C = Array<Coordinate>;

// Promise<ReturnType>#
// We can use the Promise generic type to specify the return type of asynchronous code. We specify the type of the item that is eventually returned in the generic parameter.

// const response: Promise<Response> = fetch("https://swapi.dev/api/");
// response.then((res) => console.log(res.ok));

// Readonly<Type>#
// The Readonly type simply adds the readonly keyword to each of the object properties that is passed into it.
type Actionn = {
  type: "fetchedName";
  data: string;
};
type ImmutableAction = Readonly<Actionn>;

// Partial<Type>#
// The Partial type makes all the members of the type passed into it optional.

// So, if we have the following type:
type Contactt = {
  name: "Bob";
  email: "bob@someemail.com";
};
// Partial<Contactt> :
type Contacttt = {
  name?: "Bob";
  email?: "bob@someemail.com";
};

const contact: Contacttt = {
  name: "Bob",
};

// Non generic function
// This function is strongly-typed, which is excellent; but what if we need to do the same thing for an array of numbers? We can’t use the above function because it is restricted for arrays of strings. Wouldn’t it be nice if we could pass the array item type into this function? Well, this is what generic functions allow us to.

function firstOrNull(array: string[]): string | null {
  return array.length === 0 ? null : array[0];
}

// Generic function syntax#
// We define the type parameters for a generic function in angle-brackets before the function’s parentheses:

// In this case, T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared when an instance of the structure is created.

// The generic types specified inside angle brackets are therefore also known as generic type parameters or just type parameters. Multiple generic types can also appear in a single definition, like <T, K, A>.

// function someFunc<T1, T2, ...>(...) {
//   ...
// }

function firstOrNull2<ItemType>(array: ItemType[]): ItemType | null {
  return array.length === 0 ? null : array[0];
}

const first = firstOrNull2([1, 2, 3]);

interface IPesn {
  name: string;
  age: number;
}

const mmadu = {
  name: "Amaben",
  age: 30,
};

// generic function that returns an object
function secondGeneric<T>(person: T): T | null {
  if (person === null || person === undefined) {
    return null;
  }
  // hey, i'm copying all the properties from the person object to the new object here and returning it.
  return { ...person, name: "Bob Marley" };
}
// using  the function, tou must pass its type in angle brackets
// overwriting T
console.log(secondGeneric<IPesn>(mmadu));

// Generic Arrow function
// const someVar = <T1, T2, ...>(...) => {
//   ...
// }

// reusable generic function cos its parameter can be either string or number
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((r) => r.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Pikachu", hp: 500 },
  { name: "Bulbasaur", hp: 300 },
  { name: "Charmander", hp: 400 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);

console.log(ranks);

// T stands for Type, and is commonly used as the first type variable name when defining generics. But in reality T can be replaced with any valid name. Not only this, we are not limited to only one type variable — we can bring in any amount we wish to define. Let’s introduce U next to T and expand our function:

interface People {
  name: string;
  age: number;
}

interface K<T> {
  key: { [P in keyof T]: string };
}

const people: People[] = [
  { name: "Ben", age: 20 },
  { name: "Sam", age: 30 },
  { name: "Pete", age: 40 },
];
function identities<T extends Length, U>(arg1: T, arg2: U): T {
  return arg1;
}

// using the function
const res = identities<People[], any>(people, "age");

console.log(res);

interface Length {
  length: number;
}

// When to use generic arrays
// We started this section by showing two different ways of declaring an array of numbers. Let’s take another example:
const values1: string[] = ["Mary", "Joe"];
const values2: Array<string> = ["Mary", "Joe"];

interface IV {
  name: string;
  age: number;
}
const values4: Array<string | number> = ["Joe", 123, 567]; // no errors
const values5: Array<IV> = [{ name: "kkk", age: 0 }];

// Digital Ocean
// Generics appear in TypeScript code inside angle brackets, in the format <T>, where T represents a passed-in type. <T> can be read as a generic of type T. In this case, T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared when an instance of the structure is created. The generic types specified inside angle brackets are therefore also known as generic type parameters or just type parameters. Multiple generic types can also appear in a single definition, like <T, K, A>.

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[]) {
  let result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

const language = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

// const ageAndExtensions = pickObjectKeys(language, ["age", "extensions"]);
// console.log("selected", ageAndExtensions);

interface Obj {
  name: string;
  age: number;
}
const obj = {
  name: "Bob",
  age: 30,
};

const matchObject = <T, K extends keyof T>(person: T, arrayOfKeys: K[]) => {
  const newObject = {} as Pick<T, K>;
  for (let key of arrayOfKeys) {
    if (key in person) {
      newObject[key] = person[key];
    }
  }
  return newObject;
};

const derivedObj = matchObject(obj, ["name", "age"]);
console.log("derived", derivedObj);

//1. reusable generic function that can accept any parameter
function getKeys<T>(object: T) {
  for (let k in object) {
    console.log(object[k]);
  }
  return {
    sex: "222",
    ...object,
  };
}

//2. using the function by passing the type as arguement
const ress = getKeys<Obj>(obj);
console.log(ress);

const langObject = {
  name: "TypeScript",
  age: 8,
  extensions: ["ts", "tsx"],
};

// hey, the keys which are an array data structure must be of same vals as the object, only loopn through the object's key in the array
// const pickObjectKeyss = <T, T extends keyof K>(object: T, array: K[]) => {
//   let container = {} as Pick<T, K>;

//   for (let key of array) {
//     for (let objectKeyMatches in object) {
//       const v = (container[key] = object[objectKeyMatches]);
//     }
//   }
//   return v;
// };

// const variable = pickObjectKeyss(langObject, ["age", "extensions"]);
// console.log(variable);

const UserData = {
  name: "Benneth Uzor",
  age: 30,
  location: "Lagos, Nigeria",
  interests: ["writing", "reading", "coding", "cycling"],
};

//a . create a new object with the keys of the object based on the array
const getKeysFromObject = <T, K extends keyof T>(object: T, array: K[]) => {
  const hash = {} as Pick<T, K>;

  for (let keys of array) {
    if (keys in object) {
      hash[keys] = object[keys];
    }
  }

  return hash;
};

console.log(
  "new Object created",
  getKeysFromObject(UserData, ["interests", "location"])
);

type ProgrammingLanguage = {
  name: string;
};

function getId<T>(value: T): T {
  return value;
}

const idResult = getId<ProgrammingLanguage>({ name: "TypeScript" });

//Promise Generics
// ResultType is the object returned from the Api call
async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}

function stringifyObjectKeyValues<T extends Record<string, any>>(obj: T) {
  return Object.keys(obj).reduce(
    (acc, value) => ({
      ...acc,
      [value]: JSON.stringify(obj[value]),
    }),
    {} as { [K in keyof T]: string }
  );
}

const stringifiedValues = stringifyObjectKeyValues({
  a: "1",
  b: 2,
  c: true,
  d: [1, 2, 3],
});

console.log("stringified", stringifiedValues);
