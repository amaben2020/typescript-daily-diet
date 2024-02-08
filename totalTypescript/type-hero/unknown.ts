//  It forces you to perform type checks before accessing its properties.

let userInput4: unknown;

if (typeof userInput4 === "string") {
  console.log(userInput4.toUpperCase());
} else {
  console.log("User input is not a string");
}

// By using the unknown type, we ensure type safety by checking the type of userInput before attempting to perform operations on it.
