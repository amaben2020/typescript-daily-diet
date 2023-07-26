const fruitsAndColors = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

// condition ❌
function test(fruit: any) {
  if (fruit == "apple" || fruit == "strawberry") {
    console.log("red");
  }
}
// check if the name exists in the array, or exit
const displayFruits = (
  fruits: Array<{ name: string; color: string }>,
  name: string,
) => {
  if (fruits.some((fruit) => fruit.name.includes(name))) {
    `Yeah, the ${name} exists in the array `;
  }
  return "Nope";
};

console.log(displayFruits(fruitsAndColors, "grape"));
