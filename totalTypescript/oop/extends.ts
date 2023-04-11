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
    super(name); // Super must be called before setting child options
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
