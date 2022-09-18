"use strict";
// set builder notation
// y | y is a number
//Top types: can hold a value of any type
var myUnknown = '2';
if (typeof myUnknown === "number") {
    console.log("myUnknown is a number");
}
else {
    console.log("myUnknown is not a number");
}
// Bottom types: Never type
function logSecretMessage(message) {
    if (typeof message === 'string') {
        // in this if-block we know `message` is of type string
        // so we can call the `toLowerCase()` method on it
        console.log(message.toLowerCase());
    }
    else {
        console.log(message);
    }
}
var unknownVariable = 'hello';
// OK 👇
unknownVariable.toUpperCase();
// OK in TypeScript but it *fails* in runtime 👇
unknownVariable.toFixed(2);
//# sourceMappingURL=unknown.js.map