"use strict";
//@ts-nocheck
var multiplyBy2 = function (num) { return num * 2; };
var add3 = function (num) { return num + 3; };
var divideBy4 = function (num) { return num / 4; };
var runFunctionOutput = function (input, fn) {
    return fn(input);
};
var reduce = function (array, howToCombine, buildingUp) {
    for (var i = 0; i < array.length; i++) {
        buildingUp = howToCombine(buildingUp, array[i]);
    }
    return buildingUp;
};
var output = reduce([multiplyBy2, add3, divideBy4], runFunctionOutput, 1);
console.log(output);
//# sourceMappingURL=reducer.js.map