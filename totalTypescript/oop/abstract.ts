// Define an abstract class in Typescript using the abstract keyword. Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
// https://www.tutorialsteacher.com/typescript/abstract-class

abstract class AbstractBuilderComponent {
  name;
  constructor(name: string) {
    this.name = name;
  }

  protected displayName?: string;
  public abstract register(): void;

  public getName() {
    return this.name;
  }

  public getDisplayName() {
    return this.displayName;
  }
}

abstract class PersonInfo {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name);
  }

  abstract find(string: string): PersonInfo;
}

class Employee extends PersonInfo {
  empCode: number;

  constructor(name: string, code: number) {
    super(name); // must call super()
    this.empCode = code;
  }

  find(name: string): PersonInfo {
    // execute AJAX request to find an employee from a db
    return new Employee(name, 1);
  }
}

let emp: PersonInfo = new Employee("James", 100);
emp.display(); //James

let emp2: PersonInfo = emp.find("Steve");

// class BuilderTest extends AbstractBuilderComponent {}
