"use strict";
// index signatures: used to represent the type of object/dictionary when the values of the object are of consistent types.
//https://dmitripavlutin.com/typescript-index-signatures/
// Syntax: { [key: KeyType] : ValueType }
var colorsTheme = {
    palette: {
        success: {
            main: "green",
        },
        error: {
            main: "red",
        },
        warning: {
            main: "orange",
        },
    },
};
var ColorsTheme;
ColorsTheme = {
    palette: {
        success: {
            main: "green",
        },
        error: {
            main: "red",
        },
        warning: {
            main: "1231313",
        },
    },
};
var salary1 = {
    baseSalary: 100000,
    yearlyBonus: 20000,
};
var salary2 = {
    contractSalary: 110000,
};
// You want to implement a function that returns the total remuneration based on the salary object:
// The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.
function totalSalary(salaryObject) {
    var total = 0;
    for (var name_1 in salaryObject) {
        console.log(name_1);
        total += salaryObject[name_1];
    }
    return total;
}
totalSalary(salary1); // => 120_000
totalSalary(salary2); // => 110_000
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
var heroesInBooks = {
    Gunslinger: "The Dark Tower",
    "Jack Torrance": "The Shining",
};
var options = {
    timeout: 1000,
    timeoutMessage: "The request timed out!",
    isFileUpload: false,
};
var salary4 = {
    yearlySalary: 120000,
    yearlyBonus: 10000,
};
var programmer = {
    name: "Programmer",
    age: 30,
    sex: "male",
    advanced: true,
};
var nation = {
    name: "Nigeria",
    population: 1000000,
};
//# sourceMappingURL=indexSignatures.js.map