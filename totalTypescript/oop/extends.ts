//INHERITANCE
// Use the "extends" keyword to inherit all methods from another class
// Use the "super" method to call the parent's constructor function

class Parent {
  name;
  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Child extends Parent {
  school;
  constructor(name: string, school: string) {
    super(name); // Super must be called before setting child options and takes in Parent's argument
    this.school = school;
  }

  getNameAndSchool() {
    return this.name + " " + this.school;
  }
}

const dad = new Parent("Benneth");
const school = new Child("Benneth", "Brainstorm");

console.log(dad.getName());
console.log(school.getNameAndSchool());

class Me {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  logName() {
    return this.name + " " + "Me";
  }
}

interface TYou {
  computeNameAndAge: () => void;
  logName: () => void;
  age: number;
  name: string;
}

class You extends Me implements TYou {
  age: number;
  constructor(age: number, name: string) {
    super(name);

    this.name = name;
    this.age = age;
  }

  computeNameAndAge() {
    return `${this.logName()} is ${this.age}`;
  }
}

const you = new You(12, "Williams").computeNameAndAge();
console.log(you);
