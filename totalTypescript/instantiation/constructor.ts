//A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
//@ts-nocheck
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto
