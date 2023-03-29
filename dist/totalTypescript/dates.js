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
var date_fns_1 = require("date-fns");
var moment_1 = require("moment");
var today = new Date();
var CurrentDate = (0, date_fns_1.format)((0, date_fns_1.lastDayOfMonth)(today), "yyyy-MM-dd");
// console.log("Current date", CurrentDate);
var CurrentDat = (0, moment_1.default)(new Date(today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()));
// console.log("Current Moment", CurrentDat);
var cardMonthAndYearValue = "03/23".split("/");
var expiryDate = new Date(Number("20".concat(cardMonthAndYearValue[1])), Number(cardMonthAndYearValue[0]), 0);
// console.log("Expiry", format(expiryDate, "yyyy-MM-dd"));
// look at advanced callbacks
var update = function (info) {
    console.log("Info", info);
    return __spreadArray([], info, true);
};
console.log(update("o"));
console.log(update("a"));
//# sourceMappingURL=dates.js.map