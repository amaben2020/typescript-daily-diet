// set builder notation

// y | y is a number

//Top types: can hold a value of any type


let myUnknown: unknown = '2';

if (typeof myUnknown === "number") {
  console.log("myUnknown is a number");
} else {
  console.log("myUnknown is not a number");
}


// Bottom types: Never type


function logSecretMessage(message: unknown) {
  if (typeof message === 'string') {
    // in this if-block we know `message` is of type string
    // so we can call the `toLowerCase()` method on it
    console.log(message.toLowerCase())
  } else {
    console.log(message)
  }
}

const unknownVariable: unknown = 'hello';

// OK 👇
(unknownVariable as string).toUpperCase();

// OK in TypeScript but it *fails* in runtime 👇
(unknownVariable as number).toFixed(2)