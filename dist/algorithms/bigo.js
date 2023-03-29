"use strict";
// https://theprimeagen.github.io/fem-algos/lessons/algorithms-and-time-space-complexity/time-and-space-complexity
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// O(N) : number of operations based on the input i.e 'Amsm' means 4 iterations
function sum_char_codes(n) {
    var sum = 0;
    for (var i = 0; i < n.length; ++i) {
        var charCode = n.charCodeAt(i);
        // Capital E
        if (charCode === 69) {
            return sum;
        }
        sum += charCode;
    }
    return sum;
}
//O(N^2)
function sum_char_codess(n) {
    var sum = 0;
    for (var i = 0; i < n.length; ++i) {
        for (var j = 0; j < n.length; ++j) {
            var charCode = n.charCodeAt(i);
            sum += charCode;
        }
    }
    return sum;
}
// nested forloop O(N^2)
var arr = [
    [1, 2], [3, 4], [5, 6]
];
// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr[i].length; ++j) {
//     console.log(arr[i][j])
//   }
// }
// first iteration: [1,2] [3,4] [5,6]
// second iteration: 0: 12 , 1: 3,4 , 2: 5,6
// O(N)
var functionalWay = function (array) {
    return array.reduce(function (a, b) {
        return __spreadArray(__spreadArray([], a, true), b, true);
    }, []);
};
console.log(functionalWay(arr));
// when mapping, its an object you're working on
//# sourceMappingURL=bigo.js.map