"use strict";
var guitarists = new Set();
guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");
var guitaristsAsArray = Array.from(guitarists);
var guitaristsAsObject = guitarists;
console.log(guitaristsAsArray);
console.log(guitaristsAsObject.forEach(function (elem) {
    console.log(elem);
}));
var SSet = /** @class */ (function () {
    function SSet(value) {
        this.value = value;
    }
    SSet.prototype.getter = function () {
        return this.value;
    };
    SSet.prototype.setter = function (text) {
        return this.value + "" + 'Welcome' + " " + text;
    };
    return SSet;
}());
var instance = new SSet("Jimi Hendrix").setter("Paris");
console.log(instance);
//# sourceMappingURL=typeArguements.js.map