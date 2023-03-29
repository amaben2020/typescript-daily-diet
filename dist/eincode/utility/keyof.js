"use strict";
//Keytype extends a key of the data type array
function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var animals = [
    { name: 'Mimi', age: 28 },
    { name: 'LG', age: 8 },
];
console.log(pluck(animals, "age"));
console.log(pluck(animals, "name"));
var movieChar = {
    firstName: "", name: "", lastName: ""
};
console.log(first);
//# sourceMappingURL=keyof.js.map