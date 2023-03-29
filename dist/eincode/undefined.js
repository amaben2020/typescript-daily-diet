"use strict";
// Folks, this one simple trick will improve your refactoring whenever you need to use an undefined value in TypeScript.
var createUser = function (userObject) { return ({}); };
console.log(createUser({ name: "Ben", role: "admin" }));
console.log(createUser({ name: "Ben" }));
//# sourceMappingURL=undefined.js.map