"use strict";
// Template literal types allow us to build more flexible types. As its name suggests, they have the same syntax as template literal strings in JavaScript but are used in type positions.
// onMessageCreated,  onFolderUpdated etc
var logEvent = function (entityType, operations) {
    return "on".concat(entityType).concat(operations);
};
console.log(logEvent("Message", "Deleted"));
//# sourceMappingURL=templateLiteral.js.map