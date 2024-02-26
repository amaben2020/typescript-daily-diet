type Currency = [number, "USD"];

const amount: Currency = [100, "USD"];

function add(values: Currency) {
  return values.reduce((a, b) => `${a}  ${b}`, "");
}

const addReducer = () => {
  return amount.reduce((acc, cv) => {
    return acc + " " + cv;
  }, "");
};
addReducer();
add(amount);
// Error: Argument of type 'Currency' is not assignable to parameter of type 'number[]'.
// Type 'string' is not assignable to type 'number'.

type LatLong = [number, number]; // Note that we're not using number[] here.

const loc: LatLong = [48.85837, 2.294481];

console.log(loc[1]);
// Error: Tuple type 'LatLong' of length '2' has no element at index '2'.

const drivingLicence = {
  country: "UK",
  number: 123456789870,
};
const creditCard = {
  type: "Amex",
  number: 378282246310005,
};
const debitCard = {
  type: "Visa",
  number: 4242424242424242,
};
const wallet = [drivingLicence, creditCard, debitCard];
