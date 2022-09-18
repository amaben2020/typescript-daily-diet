"use strict";
// Generic interface syntax#
// We can pass types into an interface that are used within its definition like we can to a function. The syntax for a generic interface is below:
var _a;
var contactForm = {
    values: {
        name: "Bob",
        email: "bob@someemail.com",
    },
};
console.log(contactForm);
// const contactForm: Form<Contact> = {
//   errors: {},
//   //  values: { ... }
// };
// const contactForm2: Form<Contact2> = {
//   errors: {
//     email: "This must be a valid email address",
//   },
//    values: { ... }
// };
var user3 = (_a = {},
    _a["name"] = "Bob",
    _a);
console.log(user3);
//# sourceMappingURL=generic.js.map