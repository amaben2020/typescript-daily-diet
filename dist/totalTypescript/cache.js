"use strict";
// Techniques for Typing Dynamic Object Keys
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Record type: allows us add any number of key and property to an object at runtime
//Index of an object is the key
//Interface/Type
var createCache = function () {
    var cache = {};
    var add = function (id, value) {
        cache[id] = value;
    };
    var remove = function (id) {
        delete cache[id];
    };
    return {
        cache: cache,
        add: add,
        remove: remove,
    };
};
console.log(createCache().add("a", "b"));
console.log(createCache().cache);
//("Matt")
var adder = function (a, b) {
    var object = {};
    return (object[a] = b);
};
console.log(adder("123", 33));
// I'm using Record because i don't know what age would be
// const mySelf: Record<string, number | string> = {
//   name: "self",
// };
// mySelf["age"] = 30;
// console.log(mySelf);
var cacher = function () {
    var cache = {};
    var read = function (key) {
        if (cache[key] !== undefined) {
            return (cache["undefined"] = "undefined");
        }
        return cache[key];
    };
    var add = function (key, value) {
        return (cache[key] = value);
    };
    var remove = function (key, value) {
        return delete cache[key];
    };
    return {
        add: add,
        remove: remove,
        read: read,
        cache: cache,
    };
};
console.log(cacher().cache);
var objectToAlgolia = {
    sidebars: [
        { title: "first link", slug: "first-link", icon: [{ id: "" }] },
        { title: "Third title", slug: "third-title", icon: [{ id: "" }] },
    ],
};
// how can we convert this to an array that algolia wants?
var mapDataToAlgolia = function (object) {
    return __spreadArray([], object.sidebars, true).map(function (elem) { return (__assign({ objectID: String(elem.slug).split("-")[0] }, elem)); });
};
console.log("Maped", mapDataToAlgolia(objectToAlgolia));
var paths = [
    { data: { url: "/" } },
    { data: { url: "/page-ben" } },
    { data: { url: "/page-jan" } },
    { data: { url: "/demo" } },
    { data: { url: "/qa" } },
];
var handlePaths = function (paths) {
    return paths.map(function (path) { return path.data.url; });
};
console.log(handlePaths(paths));
//# sourceMappingURL=cache.js.map