"use strict";
//DIP works based on the principle that a class depends on another classes's method
var ViewMe = /** @class */ (function () {
    function ViewMe(otherClass) {
        this.viewOtherClass = otherClass;
    }
    ViewMe.prototype.getV = function (a, b) {
        return this.viewOtherClass(a, b);
    };
    return ViewMe;
}());
var SpecialClass = /** @class */ (function () {
    function SpecialClass() {
    }
    SpecialClass.prototype.viewClass = function (a, b) {
        return a + b;
    };
    return SpecialClass;
}());
// the method needed by another class
var viewCombinedClasses = new ViewMe(new SpecialClass().viewClass);
console.log("Sixty Three", viewCombinedClasses.getV(30, 33));
//# sourceMappingURL=example-1.js.map