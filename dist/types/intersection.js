"use strict";
// Understanding an intersection type#
var fred = {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435",
    emailAddress: "amaneb",
};
console.log(fred);
var myAge = {
    name: "Age",
    kind: "number",
    kind2: "text",
};
// does this raise a type error?
var ab_v1 = {
    doIt: function (a) { },
    it: function (a) { },
};
var action = { type: "loading" };
var loadedAction = {
    type: "loaded",
    data: ["Fred", "Bob"],
};
loadedAction.data.push("Jane");
//# sourceMappingURL=intersection.js.map