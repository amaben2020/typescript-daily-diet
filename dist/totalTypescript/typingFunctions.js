"use strict";
// Typing Functions
var addListener = function (onFocusChange) {
    window.addEventListener("focus", function () {
        onFocusChange(true);
    });
    window.addEventListener("blur", function () {
        onFocusChange(false);
    });
};
//# sourceMappingURL=typingFunctions.js.map