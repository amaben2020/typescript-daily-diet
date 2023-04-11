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
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  // set area(value) {
  //   this._area = value;
  // }
}

// derived class
class Square extends Rectangle {
  constructor(length: number, height: number, width: number) {
    super(height, width); // takes in the parent's arguments
    this.height;

    super(length, length);

    this.name = "Square";
  }
}

const square = new Square(4, 4, 4).area;
