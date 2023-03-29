"use strict";
// Note that the infer keyword is always used within the extends clause of conditional types. So, make sure to understand the Conditional Types of the previous sections before diving into the infer keyword.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Type inference refers to the automatic detection of the type of an expression in a formal language.
// 3rd party lib
function describePerson(person) {
    return "".concat(person.name, " is ").concat(person.age, " years old and love ").concat(person.hobbies.join(" and  "), ".");
}
var strValues = ["me", "you", "them"];
console.log(strValues.join(" and "));
console.log(strValues.findIndex(function (elem) { return elem === "you"; }) > -1);
var allMethods = ["POST", "PUT", "DELETE"];
var reqMethod = "POST";
console.log(allMethods.includes(reqMethod));
var prefillFunction = function (func, prefilledValue) {
    var deciderFunc = function () {
        return func(prefilledValue, prefilledValue);
    };
    return deciderFunc;
};
var multiplier = prefillFunction(function (a, b) { return a * b; }, 3);
var decider = multiplier();
console.log(decider);
var STRING = "https://pagespeed.web.dev/report?url=https%3A%2F%2Fdeploy-preview-107--alpro-foundation-website.netlify.app%2F";
var replaceStringWithAlproProduction = function () {
    var _a, _b;
    var url = new URL(STRING);
    var origin = url.origin;
    var alpro = (_b = (_a = url.searchParams
        .get("url")) === null || _a === void 0 ? void 0 : _a.split("--")[1].replace("/", "")) === null || _b === void 0 ? void 0 : _b.replace("-", "").split("-")[0];
    return "".concat(origin, "/analysis/").concat(alpro);
};
console.log(replaceStringWithAlproProduction());
var bitcoinData = [
    {
        date: "2013-05-01",
        "txVolume(USD)": 108659660.293,
        txCount: 52443,
        "marketcap(USD)": 1542820000,
        "price(USD)": 139,
        "exchangeVolume(USD)": 0,
        generatedCoins: 3575,
        fees: 36.80599998,
        activeAddresses: null,
    },
    {
        date: "2013-05-02",
        "txVolume(USD)": 96958519.0041,
        txCount: 55169,
        "marketcap(USD)": 1292190000,
        "price(USD)": 116.38,
        "exchangeVolume(USD)": 0,
        generatedCoins: 3425,
        fees: 54.40791613,
        activeAddresses: null,
    },
];
var userCreds = {
    name: "ddd",
    email: "ss",
};
var user = {
    user: {},
};
user.user = __assign({}, userCreds);
console.log(user);
//# sourceMappingURL=infer.js.map