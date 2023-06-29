// https://www.logicbig.com/tutorials/misc/typescript/class-implementing-interfaces.html

// In TypeScript, a class can implement interfaces to enforce particular contracts

interface Task {
  name: String; //property
  run(arg: any): void; //method
}

class MyTask implements Task {
  name: String;
  constructor(name: String) {
    this.name = name;
  }

  run(arg: any): void {
    console.log(`running: ${this.name}, arg: ${arg}`);
  }
}

let myTask: Task = new MyTask("someTask");
myTask.run("test");

// multiple interfaces
interface Shape {
  draw(): void;
}

interface Editable {
  canEdit: boolean;
  commitChanges(): void;
}

class Square2 implements Shape, Editable {
  canEdit: boolean;
  constructor(canEdit: boolean) {
    this.canEdit = canEdit;
  }

  commitChanges(): void {
    if (this.canEdit) {
      console.log("changes committed");
    }
  }

  draw(): void {
    console.log("drawing");
  }
}

let square2: Square2 = new Square2(true);
square2.draw();
square2.commitChanges();
