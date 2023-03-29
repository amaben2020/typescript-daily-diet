"use strict";
//https://javascript.plainenglish.io/level-up-your-typescript-game-with-these-6-advanced-features-e5e9b232d990
function sayHello(contact) {
    if ("firstName" in contact) {
        console.log("Hello " + contact.firstName);
    }
}
var permission = {
    changeemail: false,
    changemainColor: false,
    changedarkMode: false,
};
console.log(permission.changemainColor);
//# sourceMappingURL=mappedTypes.js.map