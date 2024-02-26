// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.

class Rectangle {
  name;
  height;
  width;

  constructor(height: number, width: number) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  // use for things like tokens, apiKeys etc
  protected apiKey() {
    console.log("Hi, I am a ", this.name + ".");
    return this.name;
  }
  get area() {
    return this.height * this.width + this.apiKey();
  }
}

// derived class
class Square extends Rectangle {
  constructor(length: number, height: number, width: number) {
    // Here, super() is called to avoid duplicating the constructor parts that are common between Rectangle and Square:
    super(height, width); // takes in the parent's arguments
    this.height;

    this.name = "Square";
  }
}

const square = new Square(4, 4, 4);
const rectangle = new Rectangle(4, 4);
// console.log(square.sayName());
// console.log(rectangle.sayName());

class UserInformation {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayAge() {
    return `${this.name} ${this.age}`;
  }
}

class JuniorUserInfo extends UserInformation {
  constructor(name: string, age: number) {
    super(name, age);
  }
}

const juniorUserInfo = new JuniorUserInfo("ben", 30).sayAge();
console.log("junior UserInfo", juniorUserInfo);
