"use strict";
var amount = [100, "USD"];
function add(values) {
    return values.reduce(function (a, b) { return "".concat(a, "  ").concat(b); });
}
add(amount);
var loc = [48.85837, 2.294481];
console.log(loc[2]);
// Error: Tuple type 'LatLong' of length '2' has no element at index '2'.
//# sourceMappingURL=tuples.js.map