"use strict";
//What is reduce?#
// Array.reduce is an extremely versatile function that lets you calculate results from all elements of an array. When calling reduce you specify a function that describes how to calculate the result for the next array element, given you already know the result for the previous array elements. It’s like a functional version of a foreach loop with an additional variable that you change in the loop and return at the end.
var sum = [1, 2, 3, 4, 5].reduce(function (sum, el) { return sum + el; }, 0);
console.log(sum);
var persons = [
    { name: "John", age: 30 },
    { name: "Alice", age: 45 },
    { name: "Bob", age: 25 },
];
var newObjectWithNames = function (acc, elem) {
    if (!acc[elem.name]) {
        acc[elem.name] = elem.age;
    }
    return acc;
};
var humanBeingsWithName = persons.reduce(newObjectWithNames, {});
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
var multiplyVia2 = function (x) { return x * 2; };
var divideVia2 = function (x) { return x / 2; };
var addVia2 = function (x) { return x + 2; };
var reduceInstruction = function (value, func) {
    return func(value);
};
var functions = [multiplyVia2, divideVia2, addVia2];
var reducerValue = function (array, instruction, initialValue) {
    var result;
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined || null) {
            result = instruction(initialValue, array[i]);
            return result;
        }
    }
};
console.log("FINAL RESULT", reducerValue(functions, reduceInstruction, 5));
var numbs = [
    21, 33, 21, 23, 56, 42, 3, 45, 56, 2, 3, 5545, 563, 34, 3,
].reduce(function (acc, cv) {
    if (!acc[cv]) {
        acc[cv] = 1;
    }
    else {
        acc[cv] += 1;
    }
    return acc;
}, {});
console.log("Numbers", numbs);
//# sourceMappingURL=reduce.js.map