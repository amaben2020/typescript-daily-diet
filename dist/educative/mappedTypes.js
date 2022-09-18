"use strict";
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
var userData = [
    {
        id: 16641,
        name: "Kevin",
        lastname: "Parra",
        status: "active",
        files: [
            {
                filename: "Resume-Kevin-Parra.pdf",
                file_uploaded: "2022-05-05 01:00:37"
            }
        ],
    }
];
var myObjj = {
    b: 'c'
};
var userMeta = {
    id: 16641,
    name: "Kevin",
    lastname: "Parra",
    status: "active",
};
var userInformate = {
    email: "Benneth@gmail.com",
    password: "1234####1224rvnkcsasnkak8slas",
};
var testMail = function (text) {
    var emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var validEmail = emailRegex.test(text);
    return validEmail;
};
var handleInput = function (_a, cb) {
    var email = _a.email, password = _a.password;
    var emailValue = email.toLowerCase().trim();
    if (!emailValue && !password)
        return;
    var validEmail = cb(emailValue);
    if (validEmail && password.length)
        switch (validEmail && password.length > 15) {
            case true:
                console.log(emailValue);
                console.log(password);
                break;
            case false:
                setTimeout(function () {
                    throw new SyntaxError("Invalid email: ".concat(emailValue));
                }, 300);
            default:
                throw new SyntaxError("Invalid email: ".concat(email));
        }
};
var advancedHandleInput = function (_a) {
    var email = _a.email, password = _a.password;
    var isEmailValid = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    if (isEmailValid && password.length > 0 && password.includes('8')) {
        console.log(email);
        console.log(password);
    }
    else {
        return 'Try Again';
    }
};
console.log(advancedHandleInput(userInformate));
var myArray = [
    {
        name: 'Kevin'
    },
    { name: 'Joy' }
];
var userDataInfo = {
    name: 'Kevin',
    age: 16
};
var updateUserData = function (obj) {
    var immutableData = __assign({}, obj);
    immutableData.age = immutableData.age + 1;
    return immutableData;
};
console.log(updateUserData(userDataInfo));
var zip = [
    {
        name: 'Kevin',
        age: 16,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001'
        }
    },
    {
        name: 'Joy',
        age: 17,
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipCode: '10001'
        }
    }
];
var createSlug = function (item) {
    return "/blogs/".concat(item);
};
var doSomething = function (array, cb) {
    var hash = [];
    array.forEach(function (elem) {
        hash.push(createSlug(elem.name));
    });
    return hash;
};
console.log('do something', doSomething(zip, createSlug));
// create an object with just the name and zipcode
var customReduce = function (array, key) {
    return array.reduce(function (accumulator, currentValue) {
        var _a;
        console.log('ACC', accumulator);
        return __assign(__assign({}, accumulator), (_a = {}, _a[currentValue[key]] = {
            //@ts-ignore
            ZipCode: currentValue.address.zipCode
        }, _a));
    }, {});
};
console.log(customReduce(zip, 'name'));
var useForm = function (field) {
    if (field.value === '') {
        field.value = 'My Name'.trim();
    }
    return field;
};
console.log(useForm({
    value: '',
    defaultValue: 'My Name',
    isValid: false
}));
// Very specialized. Only works with `FormField<string>`.
function getStringFieldValue(field) {
    return !field.isValid || field.value === undefined ? field.defaultValue.toLowerCase() : field.value;
}
// Generic. Can be called with any `FormField`.
function getFieldValue(field) {
    if (!field.isValid || field.value === undefined) {
        // On the other hand, we don't know anything about the type of `field.defaultValue`.
        return field.defaultValue;
    }
    return field.value;
}
var wordInfo = 'amaben is gonna be a fucking great engineer';
var capitalizeString = function (string) {
    var strings = string.toLowerCase().split(' ');
    var result = strings.map(function (string) {
        var firstWord = string[0].toUpperCase();
        var otherWords = string.substring(1);
        return firstWord + otherWords;
    });
    return result;
};
console.log(capitalizeString(wordInfo));
var formData = {
    address: {
        street: 'ssa'
    }
};
var handleForm = function (data) {
    if (!data)
        return;
    return data.address.street = 'Ojumiri';
};
//# sourceMappingURL=mappedTypes.js.map