"use strict";
// Foo | Bar is a type that has either all required properties of Foo OR all required properties of Bar. Inside the sayHello function, it’s only possible to access obj.xyz because it’s the only property that is included in both types.
var sayHi = function (obj) {
    /* ... */
};
sayHi({ foo: "foo", xyz: "xyz" });
sayHi({ bar: "bar", xyz: "xyz" });
var sayHello2 = function (obj, input) {
    return obj[input];
};
console.log(sayHello2({ foo: "foo", xyz: "xyz" }, "foo"));
var UserAccount1 = {
    name: "Ben",
    state: "Anambra",
    balance: 35800,
    status: "active",
    kind: 1,
};
var UserAccount2 = {
    name: "Blessing",
    state: "Benue",
    balance: 5100,
    status: "inactive",
    kind: "yeah",
};
var Kind;
(function (Kind) {
    Kind[Kind["first"] = 0] = "first";
    Kind[Kind["second"] = 1] = "second";
})(Kind || (Kind = {}));
var getCandidateInfo = function (user, key) {
    return user[key];
};
console.log(getCandidateInfo(UserAccount1, "status"));
function printCustomerinformation(_a) {
    var information = _a.information;
    if (information.kind === "email") {
        // Type of `information` is `Emailinformation`!
        console.log(information.email);
    }
    else {
        // Type of `information` is `Phoneinformation`!
        console.log(information.phone);
    }
}
console.log(printCustomerinformation({
    name: "John",
    information: {
        kind: "phone",
        phone: 2020202020,
    },
}));
//gather info in react
var customer = {
    name: "Algomachine",
    information: {
        kind: "email",
        email: "algomachijne.com",
    },
};
var generateInfoForCustomer = function (cus) {
    return cus.information.kind === "phone"
        ? {
            name: cus.name,
            phone: cus.information.phone,
            kind: "phone",
        }
        : {
            name: cus.name,
            email: cus.information.email,
            sex: "male",
        };
};
console.log(generateInfoForCustomer(customer));
// declare const foo: Fooo;
var foo = { kind: "A", type: "X", abc: "string" };
if (foo.kind === "A" && foo.type === "X") {
    if (!foo.kind)
        console.log("nah");
    console.log(foo.abc);
}
//# sourceMappingURL=union.js.map