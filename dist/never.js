"use strict";
var keepLogging = function (message) {
    while (true) {
        console.log(message);
    }
};
// The above example is contrived, but there are some use cases for never when we want to flag areas of code that shouldn’t be reached explicitly.
console.log(keepLogging("Hello"));
//# sourceMappingURL=never.js.map