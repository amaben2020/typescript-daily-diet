// A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific.

// https://vhudyma-blog.eu/type-guards-in-typescript/

type Padding = string | number;

const getPadding = (padding: Padding, letter: string) => {
  //type guard
  if (typeof padding === "number") {
    return letter.repeat(padding);
  } else {
    return padding + letter;
  }
};

console.log(getPadding(5, "amaben"));

// refactored with an if statement that checks for the string type and converts an argument to a number, so that the toFixed() method can be safely executed on it


const formatPrice = (price: number | string) => {
  // "price" is of a "number | string" type
  if (typeof price === "string") {
    // "price" is of a "string" type
    return parseInt(price, 10).toFixed(2);
  }
  // "price" is of a "number" type
  return price.toFixed(2);
};

// TYPEOF: When the typeof operator is used inside the conditional, it is considered a special form of code by a TypeScript - Type Guard:

//Narrowing: When it encounters Type Guards or assignments, it tries to refine the types to more specific ones and this process is called narrowing.

const appendStrings = (param: string | number): string | number => {
  if (typeof param === "string") {
    return param.replace(`${param}`, "This string has been replaced");
  }
  return param.toFixed(2);
};

console.log(appendStrings(422));

const formatDate = (value: Date | string) => {
  // "value" is of a "string | Date" type
  if (value instanceof Date) {
    // "value" is of a "Date" type
    return value.toUTCString();
  }
  // "value" is of a "string" type
  return new Date(value).toUTCString();
};

console.log(formatDate(new Date("2021-09-01"))); // "Wed, 01 Sep 2021 00:00:00 GMT"
console.log(formatDate("2021-09-01")); // "Wed, 01 Sep 2021 00:00:00 GMT"

//In: The in operator does not check the type, but does check if the object contains a property and can be used as Type Guard:

const user = {
  name: "John",
};

console.log("name" in user); // "true"
console.log("surname" in user); // "false" branch

interface Human {
  speak: () => void;
}

interface Animall {
  voice: () => void;
}

const saySomething = (being: Human | Animall) => {
  // "being" is of a "Human | Animal" type
  if ("speak" in being) {
    // "being" is of a "Human" type
    return being.speak();
  }
  // "being" is of a "Animal" type
  return being.voice();
};

// Literal types: must be either of the following type. No generalization.
type Car = "audi" | "bmw" | "mercedes";

const chooseCarBasic = (car: Car) => {
  if (car === "audi") {
    return "Vorsprung durch Technik";
  } else if (car === "bmw") {
    return "Sheer Driving Pleasure";
  } else {
    return "The best or nothing";
  }
};

console.log(chooseCarBasic("mercedes"));

interface Audi {
  type: "sedan";
  drive: () => void;
}

interface Bmw {
  type: "hatchback";
  race: () => void;
}

const AudiCar: Audi = {
  type: "sedan",
  drive: () => {
    return `Hey, i am driving a  ${AudiCar.type}`;
  },
};
// const chooseCar = (car: Audi | Bmw) => {
//   // "car" is of a "Audi | Bmw" type
//   if (car.type === "sedan") {
//     //Basic Type guard that checks if the obj type is a literal
//     // "car" is of a "Audi" type
//     return car.drive();
//   }
//   // "car" is of a "Bmw" type
//   return car.race();
// };

// console.log(chooseCar(AudiCar));

//Custom type Guards: To create a custom Type Guard, you must define a function whose return type is a Type Predicates.
// A Type Predicate has the following form: parameterName is Type, where parameterName must be the name of a parameter from the current function signature.

interface Audi {
  drive: () => void;
}

interface Bmw {
  race: () => void;
}

//Breaks DRY principle: you keep creating custom type guards for every object

const isAudi = (car: Audi | Bmw): car is Audi => {
  return (car as Audi).drive() !== undefined;
};

const isBmw = (car: Audi | Bmw): car is Bmw => {
  return (car as Bmw).race() !== undefined;
};

console.log("testing predicate", AudiCar.drive());

const selectCar = (car: Audi | Bmw) => {
  // "car" is of a "Audi | Bmw" type
  if (isAudi(car)) {
    // "car" is of a "Audi" type
    return car.drive();
  }
  // "car" is of a "Bmw" type
  return car.race();
};

//Generic Typeguard

interface Audi {
  drive: () => void;
}

interface Bmw {
  race: () => void;
}

const isOfType = <T>(value: any, property: keyof T): value is T =>
  (value as T)[property] !== undefined;

const chooseACar = (car: Audi | Bmw) => {
  // "car" is of a "Audi | Bmw" type
  if (isOfType<Audi>(car, "drive")) {
    // "car" is of a "Audi" type
    return car.drive();
  }
  // "car" is of a "Bmw" type
  return car.race();
};


// "", 0 are falsy


let value:
  | Date
  | null
  | undefined
  | "pineapple"
  | [number]
  | { dateRange: [Date, Date] }
 
// // instanceof
// if (value instanceof Date) {
//   value
   
// let value: Date
// }
// // typeof
// else if (typeof value === "string") {
//   value
   
// let value: "pineapple"
// }
// // Specific value check
// else if (value === null) {
//   value
   
// let value: null
// }
// // Truthy/falsy check
// else if (!value) {
//   value
   
// let value: undefined
// }
// // Some built-in functions
// else if (Array.isArray(value)) {
//   value
   
// let value: [number]
// }
// // Property presence check
// else if ("dateRange" in value) {
//   value
   
// let value: {
//     dateRange: [Date, Date];
// }
// } else {
//   value
   
// let value: never
// }

//Array.isArray() is a type guard that runs only when something is an array


// user-defined type guard
// compile-time validation
// runtime validation
const isDate = (value: any): value is Date => {
  return value instanceof Date;
}
