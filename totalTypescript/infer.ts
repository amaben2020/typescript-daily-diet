// Note that the infer keyword is always used within the extends clause of conditional types. So, make sure to understand the Conditional Types of the previous sections before diving into the infer keyword.

//Type inference refers to the automatic detection of the type of an expression in a formal language.

// 3rd party lib
function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${
    person.age
  } years old and love ${person.hobbies.join(" and  ")}.`;
}

const strValues = ["me", "you", "them"];
console.log(strValues.join(" and "));
