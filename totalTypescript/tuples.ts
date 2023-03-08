type Currency = [number, string];

const amount: Currency = [100, "USD"];

function add(values: Currency) {
  return values.reduce((a, b) => `${a}  ${b}`);
}

add(amount);
// Error: Argument of type 'Currency' is not assignable to parameter of type 'number[]'.
// Type 'string' is not assignable to type 'number'.

type LatLong = [number, number]; // Note that we're not using number[] here.

const loc: LatLong = [48.85837, 2.294481];

console.log(loc[2]);
// Error: Tuple type 'LatLong' of length '2' has no element at index '2'.
