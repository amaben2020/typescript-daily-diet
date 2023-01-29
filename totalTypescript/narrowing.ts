// Narrowing Down Union Types: What this is saying is that what we pass into coerceAmount can be either a number or an object that contains an amount.

import { i } from "vitest/dist/index-2dd51af4";

const coerceAmount = (amount: number | { amount: number }) => {

  if (typeof amount === 'number') {
    return amount.toFixed(2);
  }

  return amount.amount

};

// const coerceAmount = (amount: number | { amount: number }) => {
//   if (amount.amount) {
//     return amount.amount;
//   }
//   return amount;
// };

console.log(coerceAmount(3))
console.log(coerceAmount({ amount: 88 }))

// un-named object still has property and should be referenced

// i.e ( {name: "Ben"}), you could name it in your code as user.name or whatever