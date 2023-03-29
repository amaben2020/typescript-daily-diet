"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// This ensures that your variables matches a certain contract
var defaultUser = {
    id: 1,
    firstName: "string",
    lastName: "string",
    isAdmin: false,
};
var getUserId = function (user) {
    return user.id;
};
console.log(getUserId(defaultUser));
// it("Should get the user id", () => {
//   expect(getUserId(defaultUser)).toEqual(1);
// });
//# sourceMappingURL=typesToVariables.js.map