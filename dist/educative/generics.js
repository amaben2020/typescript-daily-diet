"use strict";
//Callbacks : They are a great example of when a function type is necessary. A callback is essentially a function that you pass as an argument to another function. It is invoked when something specific happens, like a backend call returns or when some event occurs. It might be invoked with some arguments with data from the backend or an event object.
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
// Generics : Generics are a fundamental feature of statically-typed languages, allowing developers to pass types as parameters to another type, function, or other structure.
function fetchTitles(count, onSuccess) { }
//Higher order functions: They are functions that take other functions as arguments or return other functions.
// closure
var convertToLang = function (language) {
    var converted = language === 'pl' ? 'cześć' : 'hello';
    // not yet invoked
    return function (name) { return "".concat(converted, " ").concat(name); };
};
var renderName = convertToLang('pl');
console.log(renderName('Benneth'));
var hoff = function (num) {
    var random = Math.random() * num;
    console.log(random);
    return function (name) { return random > 0.3 ? "Yeah ".concat(name) : "Nope ".concat(name); };
};
var getNameH = hoff(1);
console.log(getNameH('Benneth'));
function getNames(persons) {
    var results = [];
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var person_1 = persons_1[_i];
        results.push(person_1.name);
    }
    return results;
}
var personsWithCash = [
    { name: 'John', age: '30', netWorth: 3444443 },
    { name: 'Alice', age: '25', netWorth: 443 },
    { name: 'Xoli Mfenks', age: '44', netWorth: 2003444443 },
    { name: 'Anenih Tony', age: '90', netWorth: 40000000000000 },
];
var mappingFunction = function (elem) {
    return elem.netWorth > 1000000;
};
var values = [1, 2, 3, 4, null, 5, 6, 7, undefined];
console.log(values.length);
// Output: 9
console.log(values.filter(Boolean).length);
// Output: 7
// array.filter((item) => {
//   return !!item; // evaluate whether item is truthy
// });
// note that this does not mutate the value original array
console.log(values.length);
// Output: 9
var filterNamesOfCandidatesWithMillions = function (array, instruction) {
    return array.filter(instruction);
};
console.log('result', filterNamesOfCandidatesWithMillions(personsWithCash, mappingFunction));
var newArr = [{ netWorth: 1000000 }, { netWorth: 2000000 }, { netWorth: 3000000 }];
console.log('result2', filterNamesOfCandidatesWithMillions(newArr, mappingFunction));
//create a generic function
// const getNamesOfExtremelyWealthyGuys = <TPeople, TPerson>(people: TPeople[], mapper: (string: TPeople) => TPerson): TPerson[] => {
//   return people.map(mapper);
// }
// console.log(getNamesOfExtremelyWealthyGuys<IArray, string>(personsWithCash, mappingFunction))
var mapperr = function (array) {
    return array.map(function (elem) { return elem; });
};
// console.log(mapperr<IArray>(personsWithCash))
// generic function : This is useless because you cannot add a number to a string except via narrowing
function getMeAge(age) {
    return age;
}
console.log(getMeAge('30'));
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
//   return obj[key];
// }
var getProperty = function (obj, key) {
    return obj[key];
};
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "b"));
var hunter = {
    name: 'Benneth',
    games: ['COD']
};
var hash = {};
// 1. write a reducer function that returns a new object
// 2 . This reducer func would accept an empty object
var reduceValue = function (array) {
    var immutable = __spreadArray([], array, true);
    return immutable.reduce(function (acc, curr) {
        var _a;
        //@ts-ignore
        return __assign(__assign({}, acc), (_a = {}, _a[curr.age] = curr.name, _a));
    }, {});
};
console.log('reddd', (reduceValue(personsWithCash)));
// Very specialized. Only works with `FormField<string>`.
function getStringFieldValue(field) {
    if (!field.isValid || field.value === undefined) {
        // Thanks to the specialization, the compiler knows the exact type of `field.defaultValue`.
        return field.defaultValue.toLowerCase();
    }
    return field.value;
}
// Generic. Can be called with any `FormField`.
function getFieldValue(field) {
    if (!field.isValid || field.value === undefined) {
        // On the other hand, we don't know anything about the type of `field.defaultValue`.
        return field.defaultValue;
    }
    return field.value;
}
console.log(getFieldValue({
    value: 3,
    defaultValue: 2,
    isValid: true
}));
function get(object, key) {
    return object[key];
}
// declare const human: Human;
// get(human, 'name'); // ✅ No errors
// get(human, 'foo'); // 🔴 Error!
function pick(array, key) {
    var results = [];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var element = array_1[_i];
        results.push(element[key]);
    }
    return results;
}
console.log('NAME', pick(personsWithCash, 'age'));
var getName = function (person) {
    return person.name;
};
console.log(getName({
    name: 'benneth'
}));
function square(x) { return x * x; }
var screamer = function (demon) {
    return demon.scream(demon.age);
};
console.log(screamer({
    name: 'benneth',
    age: 30,
    scream: function (value) {
        if (typeof value === 'number') {
            return Math.ceil(value);
        }
        return value.toUpperCase();
    }
}));
// advanced generics
var myUser = {
    name: 'benneth',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        friends: ['benneth', 'joe']
    }
};
var layoutWrapper = {
    component: 'AuthComponent',
    props: {
        user: myUser,
        callback: function () {
            console.log('callback');
        }
    }
};
var merged = __assign(__assign({}, myUser), layoutWrapper);
var logger = function (firstObject, secondObject) {
    console.log(__assign(__assign({}, firstObject), secondObject));
};
console.log(logger(myUser, layoutWrapper));
var myPoliticians = [
    {
        name: 'Benneth',
        age: 30,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            friends: ['benneth', 'joe']
        }
    },
    {
        name: 'Druggie',
        age: 90,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            friends: ['benneth', 'joe']
        }
    },
];
var extractFriends = function (elem) {
    return elem.age > 80;
};
var getFriend = function (array, instruction) {
    return array.find(instruction);
};
console.log(getFriend(myPoliticians, extractFriends));
//# sourceMappingURL=generics.js.map