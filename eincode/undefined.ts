// Folks, this one simple trick will improve your refactoring whenever you need to use an undefined value in TypeScript.

// Here, I've got a createUser function where I'm creating a bunch of different users. But, I've now got a new requirement here, which is I also need to add a role to some users and some not.

interface IUserObject {
  name: string;
  role?: "admin" | "regular" | undefined;
}

const createUser = (userObject: IUserObject) => ({})

console.log(createUser({ name: "Ben", role: "admin" }))
console.log(createUser({ name: "Ben" }))