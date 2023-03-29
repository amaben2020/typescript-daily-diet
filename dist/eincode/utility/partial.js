"use strict";
//Constructs a type with all properties of Type set to optional. 
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
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
//add a new item tpo product
var product = {
    name: "Mug",
    id: 0,
    category: "Home",
    sold: true
};
var updateProduct = function (product, item) { return (__assign(__assign({}, product), item)); };
console.log(updateProduct(product, { sold: false }));
//# sourceMappingURL=partial.js.map