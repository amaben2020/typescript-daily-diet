"use strict";
// Keyof Type#
// The Keyof type is used to specify the type of a property of an object.
// its 2 parameters are put in angle brackets
function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var dogs = [
    { name: "Max", age: 10 },
    { name: "Charlie", age: 7 },
    { name: "Buddy", age: 6 },
];
console.log(pluck(dogs, "name"));
console.log(pluck(dogs, "age"));
function sendEvent(name, data) {
    console.log([name, data]);
}
console.log("addToCart", {
    productId: 3,
    product: "bar",
    time: 123,
});
//# sourceMappingURL=generics-with-keyof.js.map