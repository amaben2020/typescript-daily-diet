interface IABC {
  a: string;
  b: string;
  c: string[];
}

const items: IABC[] = [
  { a: "happy", b: "robin", c: ["blue", "green"] },
  { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
  { a: "sad", b: "goldfish", c: ["green", "red"] },
];

const extractUniqueItems = (array: IABC[]) => {
  const result: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const data = array[i].c;

    data.forEach((elem) => {
      // every stuff that's inside won't meet this condition
      if (result.indexOf(elem) < 0) {
        result.push(elem);
      }
    });
  }
  return result;
};

console.log(extractUniqueItems(items));

const colors = [
  "blue",
  "green",
  "green",
  "black",
  "orange",
  "blue",
  "green",
  "red",
];
// method 2
const uniqueColors = new Set(colors).values();
console.log(uniqueColors);

const filters = [""];
const filterUnique = colors.filter((elem, idx) => {});

console.log(filterUnique);
