"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Arrays can hold mixed value types: boolean, number, string, object, etc.
var items = [];
var items2 = ["amaben", "ben", "amaben"];
items.push(1);
items.push("two");
items.push(false);
var items3 = __spreadArray(__spreadArray([], items, true), items2, true);
console.log(items3);
// Array Generics
var numbers = [];
numbers.push(1);
//@ts-ignore; you can't push a string or boolean into an array of numbers
numbers.push("two"), numbers.push(false);
console.log(numbers);
var strings = ["one", "two"];
var numbersArray = [333, 33, 333];
// Strongly-typing rest parameters
function logScores(firstName) {
    var scores = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        scores[_i - 1] = arguments[_i];
    }
    console.log(firstName, scores);
}
logScores("Ben", 50, 75, 85); // outputs Ben and [50, 75, 85]
//# sourceMappingURL=arrays.js.map