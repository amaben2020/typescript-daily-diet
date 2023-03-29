"use strict";
// Inheriting Interface Properties
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepValue = void 0;
var cartItem = {
    name: "",
    person: "",
    city: "",
};
// Use 'extends' keyword to narrow the value of a generic
var obj = {
    foo: {
        a: true,
        b: 2,
    },
    bar: {
        c: "cool",
        d: 2,
    },
};
var getDeepValue = function (obj, firstKey, secondKey) {
    return {};
};
exports.getDeepValue = getDeepValue;
var result = (0, exports.getDeepValue)(obj, "bar", "d");
var nestedObj = function (obj, a, b) {
    return obj[a][b];
};
console.log("value", nestedObj(obj, "bar", "d"));
var user = {
    name: "Benneth",
    phone: 123456789,
    location: {
        city: "Abuja",
        country: "Nigeria",
    },
    interests: {
        hobbies: ["Cycling", "Reading"],
        politics: ["Ancient Civilization", "Roman empire"],
    },
};
// const getCountry = (user: IUser, key: "location", otherKey: "country"): IUser["location"]["country"] => {
//   return user[key][otherKey]
// }
// const getCountry = <UserType, LocationType extends keyof UserType, CountryType extends keyof UserType[LocationType]>(user: UserType, a: LocationType, b: CountryType): UserType[LocationType][CountryType] => {
//   return user[a][b]
// }
var getCountry = function (user, a, b) { return user[a][b]; };
console.log(getCountry(user, "location", "country"));
var userInfo = {
    name: "Benny",
    phone: 123456789,
    location: {
        city: "Abuja",
        country: "Nigeria",
    },
    interests: {
        hobbies: ["Cycling", "Reading"],
        politics: ["Ancient Civilization", "Roman empire"],
    },
};
var recreateGetCountry = function (object, key, value) {
    return object[key][value];
};
console.log(recreateGetCountry(userInfo, "location", "country"));
console.log(userInfo["location"]["country"]);
//# sourceMappingURL=extends.js.map