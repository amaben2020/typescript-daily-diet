// Understanding an intersection type#

// Intersection types, like union types, combine existing types to form a new type. An intersection type will have all the members from the types it is based on. Note that intersection types don’t contain only common members from the types it is based on, as you may first expect.

// An intersection type is constructed from existing types using the ampersand (&) character:

// type A_and_B_and_C = A & B & C;

type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};

type Email = {
  emailAddress: string;
};

// bringin all the types together
type Contact = Name & PhoneNumber & Email;

const fred: Contact = {
  firstName: "Fred",
  lastName: "Smith",
  landline: "0116 4238978",
  mobile: "079543 4355435",
  emailAddress: "amaneb",
};

console.log(fred);

// Intersection of common members#
// The code below creates an age variable that is based on the intersection of the BaseElement and TextInput types.

type BaseElement = {
  name: string;
  kind: "text" | "number" | "email";
};
type TextInput = {
  kind2: "text";
};
type Field = BaseElement & TextInput;

const myAge: Field = {
  name: "Age",
  kind: "number",
  kind2: "text",
};

type A = {
  doIt: (a: string) => void;
};
type B = {
  it: (a: string, b: string) => void;
};
type A_and_B = B & A;

// does this raise a type error?
const ab_v1: A_and_B = {
  doIt: (a: string) => {},
  it: (a: string) => {},
};

// does this raise a type error? yeah
// const ab_v2: A_and_B = {
// doIt: (a: string, b: string) => {},
// };

// The intersection type is a way of creating useful types from existing types. It is a common misconception that interfaces are more powerful than type aliases because they can be extended. However, type aliases can extend existing types using the intersection operator.

type Animal = {
  name: string;
};
type Dog = Animal & { size: "small" | "large" };

interface Fruit {
  name: string;
}
interface Apple extends Fruit {
  size: "small" | "large";
}
// Intersecting (&) two types is structurally the same as an interface extending a type in this use case.

//Dog and Apple are structurally same

//readonly means unchangeable
type Action = {
  readonly type: string;
};

const action: Action = { type: "loading" };
// action.type = "loaded"; error
// The type property within the Action type has been declared as readonly, which it can’t be changed after initially assigned.

type Loaded = {
  readonly type: "loaded";
  readonly data: string[];
};
const loadedAction: Loaded = {
  type: "loaded",
  data: ["Fred", "Bob"],
};
loadedAction.data.push("Jane");
// Although the data property has been declared as readonly, this only means that we can’t change its reference (i.e. we can’t set it to a different array).

//Date object
type Person4 = {
  name: string;
  dob?: Date;
};
