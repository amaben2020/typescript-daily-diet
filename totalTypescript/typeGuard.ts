type Animal = {
  name: string;
  species: string;
};

type TPerson = {
  name: string;
  age: number;
};

type AnimalOrPerson = Animal | TPerson;

const info: AnimalOrPerson = loadFromSomewhereElse();

console.log(info.name); // No problem, both Animal and Person have the name property.
console.log(info.age); // Compilation error; info might not have the age property if it is an Animal.

if ("species" in info) {
  console.log(info.species);
}

if ("age" in info) {
  console.log(info.age); // No problem, TS knows that value has the age property, and therefore it must be a Person if we're inside this if block.
}
