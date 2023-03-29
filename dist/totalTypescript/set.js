"use strict";
// understanding Set in JS Array<Manipulation>
// The JavaScript Set() constructor represents a set that is the collection of unique values. https://linuxhint.com/get-unique-values-from-array-in-javascript/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var REQUIRED_ENVS = [
    "NEXT_PUBLIC_BUILDER_API_KEY",
    "BUILDER_ADMIN_API_ENDPOINT",
    "BUILDER_PRIVATE_KEY_DEV",
    "BUILDER_PRIVATE_KEY_STAGE",
    "BUILDER_PRIVATE_KEY_PROD",
    "KLAVIYO_API",
    "KLAVIYO_PRIVATE_KEY",
    "NEXT_PUBLIC_APP_URL",
    "AZURE_AD_B2C_TENANT_NAME",
    "AZURE_AD_B2C_CLIENT_ID",
    "AZURE_AD_B2C_CLIENT_SECRET",
    "AZURE_AD_B2C_PRIMARY_USER_FLOW",
    "NEXT_PUBLIC_SWELL_STORE_ID",
    "NEXT_PUBLIC_SWELL_PUBLIC_KEY",
    "SWELL_SECRET_KEY",
    "SENDGRID_API_KEY",
    "SENDGRID_SENDER_EMAIL",
    "SUPPORT_EMAIL",
    "NEXT_PUBLIC_ALGOLIA_APPLICATION_ID",
    "NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY",
    "ALGOLIA_SEARCH_ADMIN_KEY",
    "NEXT_PUBLIC_NNOXX_STARTER_ID",
    "ENVIRONMENT",
];
var processEnv = {
    TERM: "xterm-256color",
    SHELL: "/usr/local/bin/bash",
    USER: "maciej",
    PATH: "~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin",
    PWD: "/Users/maciej",
    EDITOR: "vim",
    SHLVL: "1",
    HOME: "/Users/maciej",
    LOGNAME: "maciej",
    env: "STAGING",
};
var generateUniqueArray = function (arr) { return __spreadArray([], new Set(arr), true); };
var missingEnv = [];
var showMissingEnv = function (environments, envs) {
    var missingEnv = [];
    for (var _i = 0, environments_1 = environments; _i < environments_1.length; _i++) {
        var env = environments_1[_i];
        if (!environments.includes(envs[env])) {
            missingEnv.push(processEnv.env);
        }
        else {
            return "Okay";
        }
    }
    var finalResult = "";
    generateUniqueArray(missingEnv).forEach(function (res) {
        finalResult = res;
    });
    envs["isOkay"] = "true";
    return finalResult + " " + envs.isOkay;
};
console.log("Missing Environment", showMissingEnv(REQUIRED_ENVS, processEnv));
var evenArray = [2, 6, 8, 12, 18, 4, 2, 18, 4];
var uniqueArray = evenArray.filter(function (item, index, array) { return array.indexOf(item) === index; });
console.log("unique", uniqueArray);
console.log(evenArray.indexOf(12));
var ID_TO_DELETE = "NEXT_PUBLIC_NNOXX_STARTER_ID";
var newArr = [];
var otherArr = [];
// splice and deletion without filtering
for (var _i = 0, REQUIRED_ENVS_1 = REQUIRED_ENVS; _i < REQUIRED_ENVS_1.length; _i++) {
    var id = REQUIRED_ENVS_1[_i];
    if (id === ID_TO_DELETE) {
        newArr.push(REQUIRED_ENVS.splice(REQUIRED_ENVS.indexOf(id), 1));
    }
    else {
        otherArr.push(REQUIRED_ENVS);
    }
}
console.log("Deleted", newArr);
console.log("Remaining", otherArr);
//# sourceMappingURL=set.js.map