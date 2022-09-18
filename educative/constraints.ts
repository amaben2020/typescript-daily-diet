//A good example of using a type argument constraint is when typing a function that takes an object and a string representing the name of some property of this object. It’s possible to type the function in such a way that if the provided string argument doesn’t match any of the properties, the compiler will throw an error.

// The extends keyword is used to create a child class of another class (parent). The child class inherits all the methods from another class. Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// interface PersonDetails {
//   name: string;
//   age: number;
// }

// type PersonKey = keyof Person; // ‘name’ | ‘age’

// function get<T, K extends keyof T>(object: T, key: K): T[K] {
//   return object[key];
// }

// declare const personObj: Person;
// get(person, 'name'); // ✅ No errors
// // get(person, 'foo'); // 🔴 Error!



const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// keyof: The keyof type is a subtype of string whose value is a string literal union.

const getSingleDay = <T, U extends keyof T>(array: T, index: U): T[U] => {
  return array[index];
}

console.log(getSingleDay(days, 2));