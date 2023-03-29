"use strict";
// The keyof type operator returns a union of the keys of the type passed to it
function getProperty(obj, key) {
    return obj[key];
}
// result
/*
type FeatureOptions = {
  darkMode: boolean;
  newUserProfile: boolean;
}
*/
var patient = {
    name: "Tinubu",
    occupation: "drug addict",
};
// Use 'extends' keyword to narrow the value of a generic
var fetchUser = function (user, key) {
    return user[key];
};
console.log(fetchUser(patient, "occupation"));
var userInfo = {
    username: "Benneth",
    layout: "Vertical",
};
var logUsername = function (key) {
    console.log(userInfo[key]);
};
console.log(logUsername("username"));
var AppSmiths = {
    name: "string",
    age: {
        year: "10/20/2020",
    },
};
var showYear = function (key) {
    return AppSmiths["age"][key];
};
console.log(showYear("year"));
var nestedData = {
    foo: {
        a: true,
        b: 2,
    },
    bar: {
        c: "cool",
        d: 2,
    },
};
var renderNestedDataValue = function (data, key, key2) {
    return data[key][key2];
};
//# sourceMappingURL=keyof.js.map