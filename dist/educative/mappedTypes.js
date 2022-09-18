"use strict";
var userData = [
    {
        id: 16641,
        name: "Kevin",
        lastname: "Parra",
        status: "active",
        files: [
            {
                filename: "Resume-Kevin-Parra.pdf",
                file_uploaded: "2022-05-05 01:00:37"
            }
        ],
    }
];
var myObjj = {
    b: 'c'
};
var userMeta = {
    id: 16641,
    name: "Kevin",
    lastname: "Parra",
    status: "active",
};
var userInformate = {
    email: "Benneth@gmail.com",
    password: "1234####1224rvnkcsasnkakslas",
};
var testMail = function (text) {
    var emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    var validEmail = emailRegex.test(text);
    return validEmail;
};
var handleInput = function (_a, cb) {
    var email = _a.email, password = _a.password;
    var emailValue = email.toLowerCase().trim();
    if (!emailValue && !password)
        return;
    var validEmail = cb(emailValue);
    if (validEmail && password.length)
        switch (validEmail && password.length > 15) {
            case true:
                console.log(emailValue);
                console.log(password);
                break;
            case false:
                setTimeout(function () {
                    throw new SyntaxError("Invalid email: ".concat(emailValue));
                }, 300);
            default:
                throw new SyntaxError("Invalid email: ".concat(email));
        }
};
console.log(handleInput(userInformate, testMail));
//# sourceMappingURL=mappedTypes.js.map