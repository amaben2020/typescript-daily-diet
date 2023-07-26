const fruitColor = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};
type FruitColorIndex = "red" | "yellow" | "purple";
const switcher = (color: string) => {
  switch (color) {
    case "red":
      return ["apple", "strawberry"];
    case "yellow":
      return ["banana", "pineapple"];
    case "purple":
      return ["grape", "plum"];
    default:
      break;
  }
};
console.log(switcher("red"));
// using object literal
const displayArrayBasedOnColor = (color: FruitColorIndex) => {
  return fruitColor[color];
};
console.log(displayArrayBasedOnColor("purple"));

// use Map to find fruits in color
const fruitColors = new Map()
  .set("red", ["apple", "strawberry"])
  .set("yellow", ["banana", "pineapple"])
  .set("purple", ["grape", "plum"]);

function findWithMap(color: string) {
  return fruitColors.get(color) || [];
}

console.log(fruitColors);
