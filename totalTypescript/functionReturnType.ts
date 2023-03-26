// function return type annotations

const makeUser = (): {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
} => {
  return {
    id: 1,
    firstName: "string",
    lastName: "string",
    isAdmin: false,
  };
};

const makeUser2 = (): Record<string, number | string | boolean> => {
  return {
    id: 1,
    firstName: "string",
    lastName: "string",
    isAdmin: false,
  };
};

const makeUser3 = (): { [key: string]: string | number | boolean } => {
  return {
    id: 1,
    firstName: "string",
    lastName: "string",
    isAdmin: false,
  };
};

console.log(makeUser());
