"use strict";
// A type guard is a TypeScript technique used to get information about the type of a variable, usually within a conditional block. Type guards are regular functions that return a boolean, taking a type and telling TypeScript if it can be narrowed down to something more specific.
var getPadding = function (padding, letter) {
    //type guard
    if (typeof padding === "number") {
        return letter.repeat(padding);
    }
    else {
        return padding + letter;
    }
};
console.log(getPadding(5, "amaben"));
// refactored with an if statement that checks for the string type and converts an argument to a number, so that the toFixed() method can be safely executed on it
var formatPrice = function (price) {
    // "price" is of a "number | string" type
    if (typeof price === "string") {
        // "price" is of a "string" type
        return parseInt(price, 10).toFixed(2);
    }
    // "price" is of a "number" type
    return price.toFixed(2);
};
// TYPEOF: When the typeof operator is used inside the conditional, it is considered a special form of code by a TypeScript - Type Guard:
//Narrowing: When it encounters Type Guards or assignments, it tries to refine the types to more specific ones and this process is called narrowing.
var appendStrings = function (param) {
    if (typeof param === "string") {
        return param.replace("".concat(param), "This string has been replaced");
    }
    return param.toFixed(2);
};
console.log(appendStrings(422));
var formatDate = function (value) {
    // "value" is of a "string | Date" type
    if (value instanceof Date) {
        // "value" is of a "Date" type
        return value.toUTCString();
    }
    // "value" is of a "string" type
    return new Date(value).toUTCString();
};
console.log(formatDate(new Date("2021-09-01"))); // "Wed, 01 Sep 2021 00:00:00 GMT"
console.log(formatDate("2021-09-01")); // "Wed, 01 Sep 2021 00:00:00 GMT"
//In: The in operator does not check the type, but does check if the object contains a property and can be used as Type Guard:
var user = {
    name: "John",
};
console.log("name" in user); // "true"
console.log("surname" in user); // "false" branch
var saySomething = function (being) {
    // "being" is of a "Human | Animal" type
    if ("speak" in being) {
        // "being" is of a "Human" type
        return being.speak();
    }
    // "being" is of a "Animal" type
    return being.voice();
};
var chooseCarBasic = function (car) {
    if (car === "audi") {
        return "Vorsprung durch Technik";
    }
    else if (car === "bmw") {
        return "Sheer Driving Pleasure";
    }
    else {
        return "The best or nothing";
    }
};
console.log(chooseCarBasic("mercedes"));
var AudiCar = {
    type: "sedan",
    drive: function () {
        return "Hey, i am driving a  ".concat(AudiCar.type);
    },
};
//Breaks DRY principle: you keep creating custom type guards for every object
var isAudi = function (car) {
    return car.drive() !== undefined;
};
var isBmw = function (car) {
    return car.race() !== undefined;
};
console.log("testing predicate", AudiCar.drive());
var selectCar = function (car) {
    // "car" is of a "Audi | Bmw" type
    if (isAudi(car)) {
        // "car" is of a "Audi" type
        return car.drive();
    }
    // "car" is of a "Bmw" type
    return car.race();
};
var isOfType = function (value, property) {
    return value[property] !== undefined;
};
var chooseACar = function (car) {
    // "car" is of a "Audi | Bmw" type
    if (isOfType(car, "drive")) {
        // "car" is of a "Audi" type
        return car.drive();
    }
    // "car" is of a "Bmw" type
    return car.race();
};
// "", 0 are falsy
var value;
// // instanceof
// if (value instanceof Date) {
//   value
// let value: Date
// }
// // typeof
// else if (typeof value === "string") {
//   value
// let value: "pineapple"
// }
// // Specific value check
// else if (value === null) {
//   value
// let value: null
// }
// // Truthy/falsy check
// else if (!value) {
//   value
// let value: undefined
// }
// // Some built-in functions
// else if (Array.isArray(value)) {
//   value
// let value: [number]
// }
// // Property presence check
// else if ("dateRange" in value) {
//   value
// let value: {
//     dateRange: [Date, Date];
// }
// } else {
//   value
// let value: never
// }
//Array.isArray() is a type guard that runs only when something is an array
// user-defined type guard
// compile-time validation
// runtime validation
var isDate = function (value) {
    return value instanceof Date;
};
//# sourceMappingURL=typeGuard.js.map