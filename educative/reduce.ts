//What is reduce?#
// Array.reduce is an extremely versatile function that lets you calculate results from all elements of an array. When calling reduce you specify a function that describes how to calculate the result for the next array element, given you already know the result for the previous array elements. It’s like a functional version of a foreach loop with an additional variable that you change in the loop and return at the end.

const sum = [1, 2, 3, 4, 5].reduce((sum, el) => sum + el, 0);
console.log(sum);

interface Huma {
  name: string;
  age: number;
}

const persons: Huma[] = [
  { name: "John", age: 30 },
  { name: "Alice", age: 45 },
  { name: "Bob", age: 25 },
];

const newObjectWithNames = (
  acc: Record<string, number | string>,
  elem: Huma,
): Partial<Huma> => {
  if (!acc[elem.name]) {
    acc[elem.name] = elem.age;
  }

  return acc;
};

const humanBeingsWithName = persons.reduce(newObjectWithNames, {});
console.log(humanBeingsWithName);

// function reduce<TElement, TResult>(
//     array: TElement[],
//     reducer: (result: TResult, el: TElement) => TResult,
//     initialResult: TResult
// ): TResult {
//     let result = initialResult;
//     for (const element of array) {
//         result = reducer(result, element);
//     }
//     return result;
// }

// const totalValue = reduce<number, number>([1, 2, 3, 4, 5], (accumulator, el) => accumulator + el, 0);

// const ageByName = reduce<Huma, Record<string, number>>(
//     persons,
//     (result, person) => ({
//         ...result,
//         [person.name]: person.age
//     }),
//     {}
// );

// console.log(ageByName);

//typing reducer
// const reduce = (item, buildingUp) => {

//   for (let item in hash) {
//     buildingUp = hash
//   }
// }

// const reducer = (array, func) => {
//   for (let item in array) {
//     return func(item)
//   }
// }

const multiplyVia2 = (x: number) => x * 2;
const divideVia2 = (x: number) => x / 2;
const addVia2 = (x: number) => x + 2;

const reduceInstruction = (value: number, func: (x: number) => void) => {
  return func(value);
};

const functions = [multiplyVia2, divideVia2, addVia2];
const reducerValue = (array: any, instruction: any, initialValue: any) => {
  let result: number;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined || null) {
      result = instruction(initialValue, array[i]);
      return result;
    }
  }
};

console.log("FINAL RESULT", reducerValue(functions, reduceInstruction, 5));

const numbs = [
  21, 33, 21, 23, 56, 42, 3, 45, 56, 2, 3, 5545, 563, 34, 3,
].reduce((acc: Record<string, number>, cv: number) => {
  if (!acc[cv]) {
    acc[cv] = 1;
  } else {
    acc[cv] += 1;
  }

  return acc;
}, {});

console.log("Numbers", numbs);
