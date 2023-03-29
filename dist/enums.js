"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CTA_TYPE = void 0;
// Enumerations (a.k.a. enums) allow you to create limited sets of named constants that have something in common. Such constants can be numbers or strings.
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
// This listing defines a new type, Weekdays, that has a limited number of values. We initialized each enum member with a numeric value, and days of the week can be referred to using dot notation:
var dayOff = Weekdays.Tuesday;
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday";
    Weekday[Weekday["Sunday"] = 7] = "Sunday";
})(Weekday || (Weekday = {}));
// auto increment
console.log(Weekday.Wednesday);
// you could introduce bugs cos you may mistakenly use the wrong string i.e "ftOC" instead of "FtoC"
function convertTemperature(temp, fromTo) {
    return "FtoC" === fromTo
        ? ((temp - 32) * 5.0) / 9.0
        : (temp * 9.0) / 5.0 + 32;
}
console.log("70F is ".concat(convertTemperature(70, "FtoC"), "C"));
console.log("21C is ".concat(convertTemperature(21, "CtoF"), "F"));
console.log("35C is ".concat(convertTemperature(35, "ABCD"), "F"));
var Direction;
(function (Direction) {
    Direction[Direction["FtoC"] = 0] = "FtoC";
    Direction[Direction["CtoF"] = 1] = "CtoF";
})(Direction || (Direction = {}));
function convertTemperatureWithEnum(temp, fromTo) {
    return Direction.FtoC === fromTo
        ? ((temp - 32) * 5.0) / 9.0
        : (temp * 9.0) / 5.0 + 32;
}
console.log("70F is ".concat(convertTemperatureWithEnum(70, Direction.FtoC), "C"));
console.log("21C is ".concat(convertTemperatureWithEnum(21, Direction.CtoF), "F"));
// Say you’re programming a computer game where the player can move in four
// directions.
var Directionn;
(function (Directionn) {
    Directionn["Up"] = "UP";
    Directionn["Down"] = "DOWN";
    Directionn["Left"] = "LEFT";
    Directionn["Right"] = "RIGHT";
})(Directionn || (Directionn = {}));
var Grade;
(function (Grade) {
    Grade[Grade["pass"] = 1] = "pass";
    Grade[Grade["fail"] = 2] = "fail";
})(Grade || (Grade = {}));
var getReward = function (grade) {
    switch (grade) {
        case Grade.pass:
            return "pass";
        case Grade.fail:
            return "fail";
        default:
            return "unknown";
    }
};
console.log(getReward(Grade.fail));
// Enumerations as objet keys
//https://stackoverflow.com/questions/52296113/using-enum-as-object-keys
var CTA_TYPE;
(function (CTA_TYPE) {
    CTA_TYPE["DEFAULT"] = "default";
    CTA_TYPE["IMAGE"] = "withImage";
    CTA_TYPE["HEADING"] = "withHeading";
})(CTA_TYPE = exports.CTA_TYPE || (exports.CTA_TYPE = {}));
// you have to first evaluate the value of the enum in the object to be used as a key i.e [Enum.Key]
// const getCtaComponent = props => {
//   const ctaComponent = {
//     [CTA_TYPE.DEFAULT]: <Default {...props} />,
//     [CTA_TYPE.IMAGE]: <WithButtonsCTA {...props} />,
//     [CTA_TYPE.HEADING]: <HeadingWithCTA {...props} />,
//   };
//   const CtaComponent = ctaComponent[props.type];
//   return CtaComponent;
// };
// This is much better than a switch statement and simpler to read
//# sourceMappingURL=enums.js.map