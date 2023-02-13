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
  sex?: "m" | "f";
}

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  // @ts-expect-error
  role: "I_SHOULD_NOT_BE_ALLOWED",
};

const update = (user: User, key: "firstName") => {
  let newObject: Record<string, string | number>;

  newObject = {
    ...user,
    [key]: "New stuff",
  };

  return newObject;
};
