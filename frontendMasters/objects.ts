const printCar = (car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) => {
  let str = `${car.make} ${car.model} (${car.year})`;

  //type guard: you combine a predicate(t/f) with if/else
  // if (car.chargeVoltage) return (str += `⚡️ ${car.chargeVoltage}v`);
  if (car.chargeVoltage) {
    return (str += `⚡️ ${car.chargeVoltage}v`);
  } else {
    return str;
  }
};

console.log(
  printCar({
    make: "Toyota",
    model: "Camry",
    year: 2019,
    chargeVoltage: 100,
  })
);
