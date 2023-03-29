"use strict";
//In operator: [Key in Type] Use 'in' operator to transform a union to another union
//Usage
var userResult = {
    type: "user",
    userId: "123",
};
var postResult = {
    type: "post",
    postId: "123",
};
var employee = {
    title: {
        name: "",
    },
    name: {
        name: "",
    },
    email: {
        name: "",
    },
    age: {
        name: "",
    },
};
// hasOwnProperty(): When interacting with objects, situations might arise that require you to check if a particular key exists. It is important to note that if you know a key exists that automatically means that a value exists. This value could be anything – even empty, null, or undefined.
for (var key in employee) {
    console.log("key", key);
    if (key === "name") {
        //@ts-ignore
        employee[key] = "Amaben";
    }
}
if ("name" in user) {
    console.log("the key exists on the object");
}
// Or
if (user.hasOwnProperty("name")) {
    console.log("the key exists on the object");
}
console.log(employee);
//# sourceMappingURL=in.js.map