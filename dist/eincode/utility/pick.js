"use strict";
// The TypeScript Pick type is a utility type which is used to create a new custom Type, based off an already existing one. It is the opposite of the Omit Type. Let's look at how it works.
// https://hackernoon.com/how-the-typescript-pick-type-works
Object.defineProperty(exports, "__esModule", { value: true });
var customerInfo = {
    firstName: "John",
    lastName: "Doe"
};
var customerAge = {
    age: 1534
};
// keep track of largest occuring elem in an array
var users = [
    { name: "John", id: 0, kills: 33 },
    { name: "Ben", id: 1, kills: 83 },
    { name: "Kate", id: 0, kills: 133 },
    { name: "Nate", id: 0, kills: 3 },
];
var getHighestKill = function (users) {
    var hightstKills = 0;
    var highestKiller = '';
    for (var i = 0; i < users.length; i++) {
        var userInfo_1 = users[i];
        if (userInfo_1.kills > hightstKills) {
            hightstKills = userInfo_1.kills;
            highestKiller = userInfo_1.name;
        }
    }
    return highestKiller;
};
console.log(getHighestKill(users));
//# sourceMappingURL=pick.js.map