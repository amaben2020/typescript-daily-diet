"use strict";
var loadFromSomewhereElse = function () { return ({ name: "", species: "2" }); };
var info = loadFromSomewhereElse();
// ❌ We are having type errors because we can only access members of the union type that are in both types.
console.log(info.name); // No problem, both Animal and Person have the name property.
// console.log(info.age); // Compilation error; info might not have the age property if it is an Animal.
if ("species" in info) {
    console.log(info.species);
}
if ("age" in info) {
    console.log(info.age); // No problem, TS knows that value has the age property, and therefore it must be a Person if we're inside this if block.
}
console.log(info.species);
var creature = {
    bark: "woof",
    name: "Bobby",
};
function isDog(creature) {
    return "bark" in creature;
}
console.log(isDog(creature));
//# sourceMappingURL=typeGuard.js.map