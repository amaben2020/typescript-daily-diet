// They allow us to guarantee types during runtime
// type predicate and in operator
type Animal = {
  name: string;
  species: string;
};

type TPerson = {
  name: string;
  age: number;
};

type AnimalOrPerson = Animal | TPerson;

const loadFromSomewhereElse = () => ({ name: "", species: "2" });

const info: AnimalOrPerson = loadFromSomewhereElse();

// ❌ We are having type errors because we can only access members of the union type that are in both types.

console.log(info.name); // No problem, both Animal and Person have the name property.
// console.log(info.age); // Compilation error; info might not have the age property if it is an Animal.

if ("species" in info) {
  console.log(info.species);
}

if ("age" in info) {
  console.log(info.age); // No problem, TS knows that value has the age property, and therefore it must be a Person if we're inside this if block.
}

console.log(info.species);

type Human = {
  name: string;
  legs: number;
};

type Dog = {
  bark: "woof";
  name: string;
};

type HumanOrDog = Human | Dog;

const creature: HumanOrDog = {
  bark: "woof",
  name: "Bobby",
};

function isDog(creature: Human | Dog): creature is Dog {
  return "bark" in creature;
}

console.log(isDog(creature));
