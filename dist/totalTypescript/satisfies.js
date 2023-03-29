"use strict";
// Satisfies keyword understands nested dynamic data than simple inference :IProducts
var products = {
    name: "Book 1",
    categories: ["book", "stuff"],
    shipping: {
        city: "London",
        zip: "32322",
    },
};
console.log(products.shipping);
//# sourceMappingURL=satisfies.js.map