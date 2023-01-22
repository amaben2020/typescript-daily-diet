// Narrowing Down Union Types: What this is saying is that what we pass into coerceAmount can be either a number or an object that contains an amount.

const coerceAmount = (amount: number | { amount: number }) => {

  if (typeof amount === 'number') {
    return amount;
  }

  return amount

};

console.log(coerceAmount(3))
console.log(coerceAmount({ amount: 88 }))