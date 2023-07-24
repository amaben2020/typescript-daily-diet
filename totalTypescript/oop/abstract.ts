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

// import { ValidationErrorItem } from "joi";

// import { NnoxxError } from "./nnoxx-error";

// interface IInvalidField {
//   field: ValidationErrorItem["path"][number];
//   message: ValidationErrorItem["message"];
// }

// export class ValidationError extends NnoxxError {
//   public invalidFields: IInvalidField[];

//   constructor(invalidFields: ValidationErrorItem[]) {
//     super("Validation Error", 422);
//     this.invalidFields = this.getErrors(invalidFields);
//   }

//   private getErrors = (invalidFields: ValidationErrorItem[]) =>
//     invalidFields.map((err) => ({
//       field: err.path.join("."),
//       message: err.message,
//     }));
// }

abstract class ValidationService {
  protected validate<T = Record<string, string>>(schema: any, command: T) {
    const { error } = schema.validate(command);

    if (error) {
      throw new ValidationError(error.details);
    }
  }
}

// class Supabase2 extends ValidationService {
//   async log() {
//     this.validate
//   }
// }

// const supabase2 = new Supabase2();

abstract class logUser {
  username: string;
  constructor(name: string) {
    this.username = name;
  }
  logger() {
    return this.username;
  }
}

class ShowLogger extends logUser {
  constructor(name: string) {
    super(name);
    this.logger = () => "";
  }
  display() {
    this.logger;
  }
}

type TError = {
  message: string;
};
const error = {
  message: "Hi",
};
interface ISupabase {
  displayMessage: () => void;
}
abstract class SupabaseValidation {
  protected validate(error: TError) {
    if (error.message) {
      return true;
    } else {
      return false;
    }
  }
}

class Supabase extends SupabaseValidation implements ISupabase {
  displayMessage() {
    return this.validate;
  }
}

const supa = new Supabase();
console.log(supa.displayMessage()(error));
