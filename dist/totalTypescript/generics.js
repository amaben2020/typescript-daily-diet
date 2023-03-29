"use strict";
function removeFirstEntryFromArray(arr) {
    return arr.splice(1);
}
var strArray = ["Santa", "Claus", "is", "coming", "to", "town"];
var newStrArray = removeFirstEntryFromArray(strArray);
var str = "";
newStrArray.forEach(function (elem) { return (str += elem.toUpperCase()); });
console.log(str);
//# sourceMappingURL=generics.js.map