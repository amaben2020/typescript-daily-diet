"use strict";
// Understanding the generic type syntax#
// Generic type allows us to create a specific type by allowing us to pass types into it as parameters. The parameters are passed inside angle brackets. If there are multiple parameters, they are separated by a comma. Generic types allow us to create types that are reusable in many different situations. This is because we can create a specific type for our use case from a generic type by passing our types into it as parameters.
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// allowing developers to pass types as parameters to another type, function, or other structure
// like writing a function with parameters
// const myVar = GenericType<SpecificType1, SpecificType2, ...>
var scores;
var scores2;
scores = [70, 65, 75, "kddk"];
scores2 = ["sss"];
var contact = {
    name: "Bob",
};
// Non generic function
// This function is strongly-typed, which is excellent; but what if we need to do the same thing for an array of numbers? We can’t use the above function because it is restricted for arrays of strings. Wouldn’t it be nice if we could pass the array item type into this function? Well, this is what generic functions allow us to.
function firstOrNull(array) {
    return array.length === 0 ? null : array[0];
}
// Generic function syntax#
// We define the type parameters for a generic function in angle-brackets before the function’s parentheses:
// In this case, T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared when an instance of the structure is created.
// The generic types specified inside angle brackets are therefore also known as generic type parameters or just type parameters. Multiple generic types can also appear in a single definition, like <T, K, A>.
// function someFunc<T1, T2, ...>(...) {
//   ...
// }
function firstOrNull2(array) {
    return array.length === 0 ? null : array[0];
}
var first = firstOrNull2([1, 2, 3]);
var mmadu = {
    name: "Amaben",
    age: 30,
};
// generic function that returns an object
function secondGeneric(person) {
    if (person === null || person === undefined) {
        return null;
    }
    // hey, i'm copying all the properties from the person object to the new object here and returning it.
    return __assign(__assign({}, person), { name: "Bob Marley" });
}
// using  the function, tou must pass its type in angle brackets
// overwriting T
console.log(secondGeneric(mmadu));
// Generic Arrow function
// const someVar = <T1, T2, ...>(...) => {
//   ...
// }
// reusable generic function cos its parameter can be either string or number
function identity(arg) {
    return arg;
}
var output1 = identity("myString");
var output2 = identity(100);
console.log(output1);
console.log(output2);
function ranker(items, rank) {
    var ranks = items.map(function (item) { return ({
        item: item,
        rank: rank(item),
    }); });
    ranks.sort(function (a, b) { return a.rank - b.rank; });
    return ranks.map(function (r) { return r.item; });
}
var pokemon = [
    { name: "Pikachu", hp: 500 },
    { name: "Bulbasaur", hp: 300 },
    { name: "Charmander", hp: 400 },
];
var ranks = ranker(pokemon, function (_a) {
    var hp = _a.hp;
    return hp;
});
console.log(ranks);
var people = [
    { name: "Ben", age: 20 },
    { name: "Sam", age: 30 },
    { name: "Pete", age: 40 },
];
function identities(arg1, arg2) {
    return arg1;
}
// using the function
var res = identities(people, "age");
console.log(res);
// When to use generic arrays
// We started this section by showing two different ways of declaring an array of numbers. Let’s take another example:
var values1 = ["Mary", "Joe"];
var values2 = ["Mary", "Joe"];
var values4 = ["Joe", 123, 567]; // no errors
var values5 = [{ name: "kkk", age: 0 }];
// Digital Ocean
// Generics appear in TypeScript code inside angle brackets, in the format <T>, where T represents a passed-in type. <T> can be read as a generic of type T. In this case, T will operate in the same way that parameters work in functions, as placeholders for a type that will be declared when an instance of the structure is created. The generic types specified inside angle brackets are therefore also known as generic type parameters or just type parameters. Multiple generic types can also appear in a single definition, like <T, K, A>.
function pickObjectKeys(obj, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}
var language = {
    name: "TypeScript",
    age: 8,
    extensions: ["ts", "tsx"],
};
var obj = {
    name: "Bob",
    age: 30,
};
var matchObject = function (person, arrayOfKeys) {
    var newObject = {};
    for (var _i = 0, arrayOfKeys_1 = arrayOfKeys; _i < arrayOfKeys_1.length; _i++) {
        var key = arrayOfKeys_1[_i];
        if (key in person) {
            newObject[key] = person[key];
        }
    }
    return newObject;
};
var derivedObj = matchObject(obj, ["name", "age"]);
console.log("derived", derivedObj);
//1. reusable generic function that can accept any parameter
function getKeys(object) {
    for (var k in object) {
        console.log(object[k]);
    }
    return __assign({ sex: "222" }, object);
}
//2. using the function by passing the type as arguement
var ress = getKeys(obj);
console.log(ress);
var langObject = {
    name: "TypeScript",
    age: 8,
    extensions: ["ts", "tsx"],
};
// hey, the keys which are an array data structure must be of same vals as the object, only loopn through the object's key in the array
// const pickObjectKeyss = <T, T extends keyof K>(object: T, array: K[]) => {
//   let container = {} as Pick<T, K>;
//   for (let key of array) {
//     for (let objectKeyMatches in object) {
//       const v = (container[key] = object[objectKeyMatches]);
//     }
//   }
//   return v;
// };
// const variable = pickObjectKeyss(langObject, ["age", "extensions"]);
// console.log(variable);
var UserData = {
    name: "Benneth Uzor",
    age: 30,
    location: "Lagos, Nigeria",
    interests: ["writing", "reading", "coding", "cycling"],
};
//a . create a new object with the keys of the object based on the array
var getKeysFromObject = function (object, array) {
    var hash = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var keys = array_1[_i];
        if (keys in object) {
            hash[keys] = object[keys];
        }
    }
    return hash;
};
console.log("new Object created", getKeysFromObject(UserData, ["interests", "location"]));
function getId(value) {
    return value;
}
var idResult = getId({ name: "TypeScript" });
//Promise Generics
// ResultType is the object returned from the Api call
function fetchApi(path) {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://example.com/api".concat(path))];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
}
function stringifyObjectKeyValues(obj) {
    return Object.keys(obj).reduce(function (acc, value) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[value] = JSON.stringify(obj[value]), _a)));
    }, {});
}
var stringifiedValues = stringifyObjectKeyValues({
    a: "1",
    b: 2,
    c: true,
    d: [1, 2, 3],
});
console.log("stringified", stringifiedValues);
//# sourceMappingURL=generic.js.map