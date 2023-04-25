// https://www.codecademy.com/resources/docs/typescript/classes
class Box1 {
  count = 0;
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

// Member Visibility
// JavaScript has a # syntax to mark a member as private, meaning it can only be accessed inside its class

class Secret {
  #value: string;

  constructor(value: string) {
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }
}

const mySecret = new Secret("shhh");

mySecret.getValue(); // Ok

mySecret.#value;
/* 
Error: Property '#value' is not accessible outside
class 'Secret' because it has a private identifier.
*/
