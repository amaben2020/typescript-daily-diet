"use strict";
//UNIONS
// A union type is a type that can be one of several types. For example, a variable can be a number, string, or boolean, but not a mix of those three.
var age;
age = null; // okay
age = 30; // okay
age = "30"; // error
var person = {
    // name: "Kefas", //error
    name: "Ben",
    age: 22,
};
person.name = "Williams";
person.age = 33;
// union return type
function calcTax(state, income, dependents) {
    if (state === "NY") {
        return income * 0.06 - dependents * 500;
    }
    else if (state === "NJ") {
        return income * 0.05 - dependents * 300;
    }
}
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    else {
        return padding;
    }
}
//# sourceMappingURL=union.js.map