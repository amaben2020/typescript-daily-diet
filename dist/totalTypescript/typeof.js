"use strict";
// Typeof is used to refer to the type of a value
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
var ColorsEnum;
(function (ColorsEnum) {
    ColorsEnum["white"] = "#ffffff";
    ColorsEnum["black"] = "#000000";
})(ColorsEnum || (ColorsEnum = {}));
var colorLiteral;
colorLiteral = "white"; // OK
colorLiteral = "black"; // OK
// colorLiteral = "red"; // Error...
var accordionObject = {
    id: "76e59c1138d14317845c8799d3374b19",
    title: "FAQ Category 1",
    slug: "faq-category-1",
    questions: [
        {
            id: "d3857ebd29ac4c6081fb5e481fe2147e",
            question: "FAQ Question 2",
            answer: "<h1>Title</h1> ",
        },
        {
            id: "10f96636f4864fc0aa20570cd0b6b115",
            question: "FAQ Question 1",
            answer: "<h1>Title</h1>",
        },
    ],
};
var regex = new RegExp(/^(0[1-9]|1[0-2])\/?.([0-9]{4}|[0-9]{2})$/);
var Regex = /** @class */ (function () {
    function Regex(param) {
        this.param = param;
    }
    Regex.prototype.getValue = function (input) {
        if (this.param && regex.test(input))
            return true;
        return "Error occured";
    };
    return Regex;
}());
var res = new Regex(/^(0[1-9]|1[0-2])\/?.([0-9]{4}|[0-9]{2})$/).getValue("03/33");
console.log(res);
var cardMonthAndYearValue = "10/22".split("/");
var expiryDate = new Date(Number("20".concat(cardMonthAndYearValue[1])), Number(cardMonthAndYearValue[0]), 0);
// here, we are using the typeof a variable to infer another value
var values = ["a", "b"];
//# sourceMappingURL=typeof.js.map