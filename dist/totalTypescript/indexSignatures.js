"use strict";
// Index signatures are handy for cases when the actual names of the type’s properties are not known, but the type of data they will reference is known
var currentUser = {
    name: "Foo Bar",
    preferences: {
        lang: "en",
    },
};
var currentLang = currentUser.preferences.lang;
var developer = {
    name: "Tobias",
    salary: 100,
};
var nameType = getProperty(developer, "name");
//# sourceMappingURL=indexSignatures.js.map