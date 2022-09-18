"use strict";
// always type your return, explicit return types
//Type driven development
var addNos = function (a, b) {
    return a + b;
};
console.log(addNos(addNos(3, 4), 10));
// you dont need to state the info again i.e callbacks
var adder = function (a, b) { return a + b; };
// functions sometimes dont' return anything : VOID
var sayHello = function () {
    console.log("Hello");
};
// the return type should be ignored and left unused
//Function overloads
//# sourceMappingURL=functions.js.map