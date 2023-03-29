"use strict";
//TODO: filter an advanced array based on criteria
// i. findIndex : get me the user in the array that has "@april" in their email
// ii. indexOf : test the best option
// iii. includes
// iv. map, filter, some, every
//v. pass in a callback to the hoc
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
//TODO: start contracts early for any data in your app for intellisense
// always start your contract early to prevent complicated errors
var DATA = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
    },
];
var addUser = function (user) {
    return __spreadArray(__spreadArray([], DATA, true), [user], false);
};
var result = addUser({
    id: 6,
    name: "Chelsea Martin",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
});
var updateUser = function (id, otherProps) {
    var userId = result.findIndex(function (u) { return u.id === id; });
    var updated = result[userId];
    return __assign(__assign({}, updated), otherProps);
};
var updated = updateUser(6, {
    username: "Amaben",
    email: "amaben2020@gmail.com",
});
// console.log("UPDATED RESULT ARRAY", updated);
var checkPhoneProperty = function (array) {
    if (array.every(function (elem) { return typeof elem.email === "string"; })) {
        console.log("yeah");
    }
    else {
        return "Not at all";
    }
};
console.log(checkPhoneProperty(DATA));
console.log(new Date().getMonth() + 1);
var Users = /** @class */ (function () {
    function Users() {
        this.users = DATA;
    }
    Users.prototype.getUsers = function () {
        return this.users;
    };
    Users.prototype.editUser = function (user) {
        return this.users.map(function (elem) {
            if (elem.id === user.id) {
                // just swap with new object
                elem = user;
            }
            return elem;
        });
    };
    return Users;
}());
var updator = new Users().editUser({
    id: 1,
    name: "Leanne Benneth Uzochukwu",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
});
console.log("Updated", updator);
var user1 = {
    name: "Whatever",
};
var user2 = {
    name: "Knows his name",
};
var newUser1 = (user1 = user2);
console.log("new user", newUser1);
var imperative = function () {
    for (var i = 0; i < DATA.length; i++) {
        if (DATA[i].id === 2) {
            DATA[i].email = "Test";
        }
    }
    return DATA;
};
console.log("Imperative", imperative());
var FROM = [
    {
        id: "78a99eb43abc4df59adab951fc23980f",
        data: {
            author: "Michael Jordan",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F5bebc9590f3147af9bd3c48c0e77ecd9",
            position: "Basketball player",
            testimonial: [Object],
        },
    },
    {
        id: "b37277d0432244bfa3fedffe181118ec",
        data: {
            author: "Barney Stinson",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
            position: "CEO",
            testimonial: [Object],
        },
    },
    {
        id: "a29c021332e44bdb887324ced974b3cd",
        data: {
            author: "John Doe",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2Fa44ce058ee52464ab635424b060e1424",
            position: "Developer",
            testimonial: [Object],
        },
    },
];
var normalizeTestimonials = function (array) {
    var result = [];
    if (Array.isArray(array)) {
        result = array.map(function (elem) {
            return {
                id: elem.id,
                avatar: elem.data.avatar,
                position: elem.data.position,
                author: elem.data.author,
                testimonial: [],
            };
        });
    }
    return {
        count: 4,
        testimonials: result,
    };
};
console.log("isTransformed", normalizeTestimonials(FROM));
var TO = {
    count: 4,
    testimonials: [
        {
            id: "78a99eb43abc4df59adab951fc23980f",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F5bebc9590f3147af9bd3c48c0e77ecd9",
            position: "Basketball player",
            author: "Michael Jordan",
            testimonial: [Object],
        },
        {
            id: "b37277d0432244bfa3fedffe181118ec",
            position: "CEO",
            author: "Barney Stinson",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2F3a7ba7a1d5ce48cbb1259272ace9ae84",
            testimonial: [Object],
        },
        {
            id: "a29c021332e44bdb887324ced974b3cd",
            avatar: "https://cdn.builder.io/api/v1/image/assets%2Fc0e24be8e3a3478fa0eb69a6f61964eb%2Fa44ce058ee52464ab635424b060e1424",
            testimonial: [Object],
            author: "John Doe",
            position: "Developer",
        },
    ],
};
var addToFavorite = function (data, id) {
    return data.map(function (user) {
        if (user.id === id) {
            return __assign(__assign({}, user), { favorite: true });
        }
        else {
            return __assign(__assign({}, user), { favorite: false });
        }
    });
};
var updateFavoriteWebsite = function (data, id) {
    var elementToUpdate = data.findIndex(function (elem) { return elem.id === Number(id); });
    var result = (data[elementToUpdate] = __assign(__assign({}, data[elementToUpdate]), { website: "www.algomachinedev.com" }));
    return result;
};
console.log(addToFavorite(DATA, 1));
console.log(updateFavoriteWebsite(DATA, 4));
var days = ["Monday", "Tuesday", "Wednesday"];
console.log(days.some(function (elem) { return elem.includes("Wednesdays"); }));
//# sourceMappingURL=crud.js.map