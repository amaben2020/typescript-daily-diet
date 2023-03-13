// enum is used as a way of preventing variable error in TS

enum Colors {
  red = "red",
  black = "black",
}

const color = Colors.red;
console.log("color", color);

const directionEnum = Object.freeze({
  UP: "UP",
  DOWN: "DOWN",
});

console.log(directionEnum); //{ UP: 'UP', DOWN: 'DOWN' }
