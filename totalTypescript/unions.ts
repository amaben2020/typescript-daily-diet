interface User {
  id: number;
  firstName: "Benneth" | "Matt";
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: "admin" | "super-admin" | "user";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};

const updateUser = (user: User, key: string): User => {
  return {
    ...user,
    [key]: "Benneth",
  };
};

const updatedUser = updateUser(defaultUser, "firstName");
console.log("Updated", updatedUser);
