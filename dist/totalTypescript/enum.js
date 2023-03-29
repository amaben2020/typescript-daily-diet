"use strict";
// enum is used as a way of preventing variable error in TS
var Colors;
(function (Colors) {
    Colors["red"] = "red";
    Colors["black"] = "black";
})(Colors || (Colors = {}));
var color = Colors.red;
console.log("color", color);
var directionEnum = Object.freeze({
    UP: "UP",
    DOWN: "DOWN",
});
console.log(directionEnum); //{ UP: 'UP', DOWN: 'DOWN' }
//# sourceMappingURL=enum.js.map