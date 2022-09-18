"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./../data");
//This would be my way of coding henceforth
var info = data_1.data;
function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var selectOnlyNames = function (people, key) {
    var p = __spreadArray([], people, true);
    return p.map(function (elem) { return (elem[key]); });
};
console.log(selectOnlyNames(info, "name"));
console.log(pluck(info, "name"));
var colors = ["red", "blue", "green"];
var selectColors = function (arrayOfColors, id) {
    var immutable = __spreadArray([], arrayOfColors, true);
    if (typeof id === "string") {
        return immutable[Number(id)];
    }
    return immutable[id];
};
console.log(selectColors(colors, '2'));
var convertToDate = function (value) {
    var dateObj = new Date(value);
    return dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
console.log('DATE', convertToDate("December 17, 1995 03:24:00"));
console.log('date');
//# sourceMappingURL=aliases.js.map