"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultUser = void 0;
var list_1 = require("./data/list");
var dataset = require("./data/complex-dataset.json");
// quickly check here before proceeding in the app
exports.defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
        {
            id: 1,
            title: "How I eat so much cheese",
        },
        {
            id: 2,
            title: "Why I don't eat more vegetables",
        },
    ],
};
var userInfo = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
        {
            id: 1,
            title: "How I eat so much cheese",
        },
        {
            id: 2,
            title: "Why I don't eat more vegetables",
        },
    ],
};
console.log(userInfo);
var item = list_1.list;
console.dir(item, { depth: null });
var info = new Promise(function (resolve, reject) {
    try {
        setTimeout(function () {
            return resolve(dataset);
        }, 100);
    }
    catch (error) {
        reject(error);
        console.log(error);
    }
});
var menus = [
    { key: "home", label: "Home" },
    { key: "product", label: "Product" },
    { key: "about", label: "About" },
    { key: "secure", label: "Secure", disabled: true },
];
var toggleDisable = function (menu) {
    return menu
        .map(function (elem) {
        if (elem.key === "home") {
            return __assign(__assign({}, elem), { disabled: true });
        }
        else {
            return __assign(__assign({}, elem), { disabled: false });
        }
    })
        .map(function (elem) {
        if (elem.disabled) {
            return __assign(__assign({}, elem), { CLICKED: true });
        }
        else {
            return __assign({}, elem);
        }
    });
};
console.log("Toggle", toggleDisable(menus));
var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
    "#",
    "!",
]);
// result should == "apples, pears\ngrapes\nbananas"
//# sourceMappingURL=array.js.map