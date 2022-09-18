"use strict";
var printCar = function (car) {
    var str = "".concat(car.make, " ").concat(car.model, " (").concat(car.year, ")");
    //type guard: you combine a predicate(t/f) with if/else
    // if (car.chargeVoltage) return (str += `⚡️ ${car.chargeVoltage}v`);
    if (car.chargeVoltage) {
        return (str += "\u26A1\uFE0F ".concat(car.chargeVoltage, "v"));
    }
    else {
        return str;
    }
};
console.log(printCar({
    make: "Toyota",
    model: "Camry",
    year: 2019,
    chargeVoltage: 100,
}));
//# sourceMappingURL=objects.js.map