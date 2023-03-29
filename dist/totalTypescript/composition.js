"use strict";
// Use function overloads and generics to type a compose function
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
// This is a key tenet of functional programming.
// usage: compose
var elems = [
    { key: "home", label: "Home", qty: 1 },
    { key: "product", label: "Product", qty: 1 },
    { key: "about", label: "About", qty: 1 },
    { key: "secure", label: "Secure", disabled: true, qty: 1 },
];
var composer = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return fns.reduce(function (f, g) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return f(g.apply(void 0, args));
        };
    });
};
// console.log(composer(add))
var nodes = [
    {
        id: "4dcdce8a-dd29-5018-b4c4-d4868043e602",
        slug: "home",
        node_locale: "en-US",
        title: "home",
    },
    {
        id: "e3bba8d6-ccd7-54cc-986a-c51f9acdbba8",
        slug: "page-two",
        node_locale: "en-US",
        title: "page-two",
    },
];
var shoppingCart = [
    {
        product: "phone",
        qty: 1,
        price: 500,
    },
    {
        product: "Screen Protector",
        qty: 1,
        price: 10,
    },
    {
        product: "Memory Card",
        qty: 2,
        price: 20,
    },
];
var shopper = shoppingCart.reduce(function (a, b) {
    var _a;
    var newProducts = (_a = {},
        _a[b.product] = b.product,
        _a);
    return __assign(__assign({}, a), newProducts);
}, {});
console.log("shopper", shopper);
var instruction = function (accumulator, currentValue) {
    var _a;
    var slug = (_a = {},
        _a[currentValue.slug] = {
            slug: "".concat(currentValue.node_locale) + "/" + "".concat(currentValue.slug),
        },
        _a);
    return __assign(__assign({}, accumulator), slug);
};
var getMyPath2 = function (array) { return array.reduce(instruction, {}); };
console.log("final path", getMyPath2(nodes));
var posts = [
    { id: 1, category: "frontend", title: "All About That Sass" },
    { id: 2, category: "backend", title: "Beam me up, Scotty: Apache Beam tips" },
    {
        id: 3,
        category: "frontend",
        title: "Sanitizing HTML: Going antibactirial on XSS attacks",
    },
];
// const categoryPosts = posts.reduce((acc, post) => {
//   let { id, category } = post;
//   return { ...acc, [category]: [...(acc[category] || []), id] };
// }, {});
//# sourceMappingURL=composition.js.map