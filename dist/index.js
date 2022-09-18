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
var data_1 = require("./data");
var world = "world";
function hello(q) {
    return "Hello ".concat(q, "! ");
}
// annotation
var orange = "orange";
var filterBret = function (value) {
    if (Array.isArray(value)) {
        var name_1 = value.map(function (resource) { return resource.name === "Bret"; });
        if (name_1 !== undefined)
            return true;
    }
    return false;
};
console.log(filterBret(data_1.data));
// optional parameter: always use the logical operator "||"
function add(a, b) {
    return a + (b || 0);
}
var optionalParam = function (value, afa) {
    if (Array.isArray(value)) {
        return value.map(function (resource) {
            return __assign(__assign({}, resource), { username: resource.username === "Bret" ? afa || "" : resource.username });
        });
    }
};
console.log(optionalParam(data_1.data, "Ben"));
// has no return value
function logMessage(message) {
    console.log(message);
}
//# sourceMappingURL=index.js.map