// function return type annotations

const makeUser = (): { id: number, firstName: string, lastName: string, isAdmin: boolean } => {
  return {
    id: 1,
    firstName: "string",
    lastName: "string",
    isAdmin: false,
  };
};

console.log(makeUser())