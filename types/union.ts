//UNIONS
// A union type is a type that can be one of several types. For example, a variable can be a number, string, or boolean, but not a mix of those three.

let age: number | null | string;
age = null; // okay
age = 30; // okay
age = "30"; // error

// Unioning a type with null is a common use case because data can often be null or a specific type.

type Actions = { type: "loading" } | { type: "loaded"; data: { name: string } };

type P = {
  name: "Ben" | "Williams";
  age: number | null;
};

let person: P = {
  // name: "Kefas", //error

  name: "Ben",
  age: 22,
};

person.name = "Williams";
person.age = 33;

// union return type
function calcTax(
  state: string,
  income: number,
  dependents: number
): number | undefined {
  if (state === "NY") {
    return income * 0.06 - dependents * 500;
  } else if (state === "NJ") {
    return income * 0.05 - dependents * 300;
  }
}

function padLeft(value: string, padding: string | number): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  } else {
    return padding;
  }
}
