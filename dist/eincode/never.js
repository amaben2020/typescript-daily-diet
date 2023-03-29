"use strict";
var car = {
    maxSpeed: 100,
    team: 'ferrari'
};
var logCarInfo = function (car) {
    switch (car.maxSpeed) {
        case 200:
            console.log(car.team);
            break;
        case 100:
            console.log(car.maxSpeed);
        default:
            var _never = car;
            return _never;
    }
};
//generic object types
// function printInfo(someObject: { [key: string]: string | number }) {
//   console.log(someObject);
// }
// console.log(printInfo(car))
//# sourceMappingURL=never.js.map