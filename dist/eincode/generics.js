"use strict";
// signature: put <> before you pass down parameters to accept type params
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (items, callback) {
        items.forEach(function (item) {
            callback(item);
        });
    };
    return Logger;
}());
var log = new Logger().log([{ name: 'a', age: 22 }], function (item) { return console.log(item); });
var Student = /** @class */ (function () {
    function Student() {
        this.name = "string";
    }
    return Student;
}());
//# sourceMappingURL=generics.js.map