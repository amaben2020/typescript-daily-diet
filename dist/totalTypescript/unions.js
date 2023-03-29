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
exports.defaultUser = {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    // @ts-expect-error
    role: "I_SHOULD_NOT_BE_ALLOWED",
};
var update = function (user, key) {
    var _a;
    var newObject;
    newObject = __assign(__assign({}, user), (_a = {}, _a[key] = "New stuff", _a));
    return newObject;
};
//# sourceMappingURL=unions.js.map