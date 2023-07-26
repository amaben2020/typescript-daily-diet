const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

if (redFruits.includes("apple")) {
  console.log("yeah");
}

const earlyReturn = () => {
  if (redFruits.includes("apples")) return;

  console.log("Lifes good");
};

console.log(earlyReturn());

if (fruits.some((f) => f.color.indexOf("redd") > -1)) {
  console.log(fruits);
} else {
  console.log("null");
}

const searchResult = (
  array: Array<Record<string, string>>,
  searchTerm: string,
) => array.filter((elem) => elem.name.includes(searchTerm));
console.log("searchResult", searchResult(fruits, "grape"));
