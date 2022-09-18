"use strict";
// Understanding an interface#
// An interface allows a new type to be created with a name and structure. The structure includes all the properties and methods that the type has without any implementation.
var addToCart = function (product) {
    if (!product)
        return;
    console.log(product);
};
// Optional interface members#
// Interface members can be optional. Can you guess how you define an optional member?
// interface TypeName {
//   optionalProperty?: PropertyType;
//   optionalMethod?: (paramName: ParamType) => MethodReturnType;
// }
// ReadOnly
var BuyButton = {
    text: "Buy",
    onClick: function (a) { return console.log(a); },
};
var billScores = {
    name: "Bill",
    scores: [90, 65, 80],
};
billScores.scores.push(70);
var tomScores = {
    name: "Tom",
    scores: [50, 95, 80],
};
var GreenBuyButton = {
    color: "Green",
    text: "Buy",
    onClick: function (a) { return console.log(a); },
};
var result = GreenBuyButton.onClick(3);
console.log(result);
//# sourceMappingURL=extends.js.map