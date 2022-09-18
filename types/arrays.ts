// Arrays can hold mixed value types: boolean, number, string, object, etc.
const items = [];
const items2 = ["amaben", "ben", "amaben"];
items.push(1);
items.push("two");

items.push(false);
const items3 = [...items, ...items2];
console.log(items3);

// Array Generics
const numbers: Array<number> = [];
numbers.push(1);
//@ts-ignore; you can't push a string or boolean into an array of numbers
numbers.push("two"), numbers.push(false);

console.log(numbers);

const strings: string[] = ["one", "two"];
const numbersArray: Array<number> = [333, 33, 333];

// Strongly-typing rest parameters
function logScores(firstName: string, ...scores: number[]) {
  console.log(firstName, scores);
}

logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
