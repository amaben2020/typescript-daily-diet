// The 'as' keyword asserts that a variable has a type. The as keyword converts an object's type into a different one, this is called CASTING.

const num = "333" as string;

const txt: unknown = "text";
console.log((txt as string).length);

let x: unknown = "hello";
console.log((<string>x).length);

// https://timmousk.com/blog/typescript-as/

class UserData {
  name: string;
  skills: Array<string | number>;

  constructor(name: string, skills: Array<string | number>) {
    this.name = name;
    this.skills = skills;
  }

  logSkills(skills: string[]) {
    return skills.includes("Typescript");
  }
}

const userData = new UserData("Ben", ["Typescript", 1234, "JS", 33323]);

console.log("User data", userData.logSkills(userData.skills as string[]));
