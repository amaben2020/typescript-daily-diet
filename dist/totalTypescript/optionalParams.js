"use strict";
//Optional Param (?): This makes arguements optional
// The required arg must come first (first?: string, second: string) 
var getNam = function (first, last) {
    if (last || first) {
        return "".concat(first, " ").concat(last);
    }
    return first;
};
console.log(getNam("Ben"));
//# sourceMappingURL=optionalParams.js.map