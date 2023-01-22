import { expect, it } from "vitest";
// assigning-types-to-variables
interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */

// This ensures that your variables matches a certain contract
const defaultUser: User = {
  id: 1,
  firstName: "string",
  lastName: "string",
  isAdmin: false,
};

const getUserId = (user: User) => {
  return user.id;
};

console.log(getUserId(defaultUser))

// it("Should get the user id", () => {
//   expect(getUserId(defaultUser)).toEqual(1);
// });