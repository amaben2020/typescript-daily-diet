//@ts-nocheck

import { groupBy } from "lodash";

const userData = [
  {
    name: "jim",
    color: "blue",
    amount: 22,
    user: {
      name: "Benneth",
    },
  },
  {
    name: "Sam",
    color: "blue",
    amount: 33,
    user: {
      name: "Ada",
    },
  },
  {
    name: "eddie",
    color: "green",
    amount: 77,
    user: {
      name: "Ethan",
    },
  },
];

const grouped = groupBy(userData, "user.name");

//   .reduce((acc, cv) => {
//   acc.push({
//     category: cv.color,
//   });

//   return acc;
// }, []);

console.log(grouped);

let nums = [2, 20, 4, 3, 7, 8, 32, 42, 256];

const group = groupBy(nums, (n) => {
  return n > 10 ? "pass" : "fail";
});

console.log(group);

// _.groupBy(collection, [iteratee=_.identity])

const people = ["Adam", "Brian", "Carl", "Dan", "Edd"];
console.log(groupBy(people, "length"));

// function groupBy<T>(arr: T[], fn: (item: T) => any) {
//   return arr.reduce<Record<string, T[]>>((prev, curr) => {
//     const groupKey = fn(curr);

//     const group = prev[groupKey] || [];
//     group.push(curr);
//     return { ...prev, [groupKey]: group };
//   }, {});
// }

console.log(groupBy(people, (p) => p.length));

const humans = [
  { name: "Adam", age: 21, category: { gender: "male", maturity: "adult" } },
  { name: "Brian", age: 10, category: { gender: "male", maturity: "boy" } },
  {
    name: "Carla",
    age: 19,
    category: { gender: "female", maturity: "teenager" },
  },
  {
    name: "Daniel",
    age: 14,
    category: { gender: "male", maturity: "teenager" },
  },
  { name: "Ellie", age: 42, category: { gender: "female", maturity: "adult" } },
];

const result = groupBy(humans, (e) => {
  if (e.age < 13) return "child";
  if (e.age < 20) return "teenager";
  return "adult";
});
console.log(result);

const groupByMaturity = groupBy(humans, "category.maturity");

const groupedItems = Object.entries(groupByMaturity).map(([key, value]) => {
  if (key == value[0].category.maturity) {
    return {
      maturity: value[0].category.maturity,
      people: value.map((v) => ({
        name: v.name,
        age: v.age,
      })),
    };
  }
});
console.log("groupedItems", groupedItems);

// [{gender: category, maturity: '', people: []}]
