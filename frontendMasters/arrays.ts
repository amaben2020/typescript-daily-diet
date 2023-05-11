// array

// tuples: array with fixed length
let myCar: [number, string, string] = [2002, "Totota", "Corolla"];

myCar = [2002, "Totota", "Corolla"];

const carMakeYota = (array: any) => {
  return array.includes("Corolla") ? "yeah" : "nope";
};
console.log(carMakeYota(myCar));
