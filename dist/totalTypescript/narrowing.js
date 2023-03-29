"use strict";
// Narrowing Down Union Types: What this is saying is that what we pass into coerceAmount can be either a number or an object that contains an amount.
var coerceAmount = function (amount) {
    if (typeof amount === "number") {
        return amount.toFixed(2);
    }
    return amount.amount;
};
console.log(coerceAmount(3));
console.log(coerceAmount({ amount: 88 }));
//# sourceMappingURL=narrowing.js.map