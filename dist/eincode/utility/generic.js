"use strict";
function pickObjectKeys2(obj, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
var languageInfo = {
    name: "TypeScript",
    age: 8,
    extensions: ["ts", "tsx"],
};
var ageAndExtensions = pickObjectKeys2(languageInfo, ["age", "extensions"]);
var doubler = {
    factor: 2,
    double: function (x) {
        return x * this.factor;
    },
};
var score = [5, 6, 7];
var newScores = Array.from(score, doubler.double, doubler);
console.log(newScores);
// console.log(Array.from({ length: 20 }, (_, i) => console.log(i + 1)))
// Basic example
var generalizedFunction = function (array) {
    return array[array.length - 1];
};
console.log("str", generalizedFunction(["a", "b"]));
console.log("num", generalizedFunction([1, 2]));
function add3DCoordinate(c1, c2) {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinate([0, 100, 0], [10, 20, 30]));
// A function that has angle brackets in front that could receive any type
function simpleStringState(initial) {
    var str = initial;
    return [
        function () { return str; },
        function (v) {
            str = v;
        },
    ];
}
var _a = simpleStringState("hello"), str1getter = _a[0], str1setter = _a[1];
var _b = simpleStringState("jack"), str2getter = _b[0], str2setter = _b[1];
console.log(str2getter());
console.log(str1getter());
str1setter("goodbye");
console.log(str1getter());
console.log(str2getter());
//# sourceMappingURL=generic.js.map