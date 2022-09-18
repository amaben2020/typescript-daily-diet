"use strict";
//What is reduce?#
// Array.reduce is an extremely versatile function that lets you calculate results from all elements of an array. When calling reduce you specify a function that describes how to calculate the result for the next array element, given you already know the result for the previous array elements. It’s like a functional version of a foreach loop with an additional variable that you change in the loop and return at the end.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var sum = [1, 2, 3, 4, 5].reduce(function (sum, el) { return sum + el; }, 0);
console.log(sum);
var persons = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 45 },
    { name: 'Bob', age: 25 },
];
var newObjectWithNames = function (acc, elem) {
    var _a;
    return (__assign(__assign({}, acc), (_a = {}, _a[elem.name] = elem.age, _a)));
};
//@ts-ignore
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
console.log('FINAL RESULT', reducerValue(functions, reduceInstruction, 5));
//# sourceMappingURL=reduce.js.map