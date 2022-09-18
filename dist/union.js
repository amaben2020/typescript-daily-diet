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
//# sourceMappingURL=union.js.map