"use strict";
var words = ["oops", "gasp", "shout", "sun"];
var filterHOF = function (words) {
    var filtered = [];
    for (var i = 0; i < words.length; i++) {
        var singleWord = words[i];
        //@ts-ignore
        if (singleWord.startsWith("g")) {
            filtered.push(singleWord);
        }
    }
    return filtered;
};
console.log(filterHOF(words));
var pages = [
    {
        id: 1,
        title: "Page 1",
        content: "This is page 1",
    },
    {
        id: 2,
        title: "Page 2",
        content: "This is page 2",
    },
    {
        id: 3,
        title: "Page 3",
        content: "This is page 3",
    },
    {
        id: 4,
        title: "Page 4",
        content: "This is page 4",
    },
    {
        id: 5,
        title: "Page 5",
        content: "This is page 5",
    },
];
var page = {
    current: 1,
    total: 2,
};
var paginate = function (array, currentPage) {
    var inView = [];
    var getArrayLength = array.length;
    var numberVisible = Math.ceil(getArrayLength / currentPage.total);
    for (var i = 0; i < array.length; i++) {
        var elem = array[i];
        if (elem) {
        }
        inView.push(elem);
    }
    return inView;
};
console.log(paginate(pages, page));
var outerFunc = function (someValue) { return function (multiplier) {
    return someValue * multiplier;
}; };
var innerFunc = outerFunc(10);
var r = innerFunc(5);
console.log(r);
//# sourceMappingURL=hof.js.map