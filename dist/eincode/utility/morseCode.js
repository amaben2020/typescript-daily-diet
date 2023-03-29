"use strict";
var ref = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
var morseCode = function (morse) {
    var codes = morse.split("   ");
    var result = codes.map(function (item) {
        return item.split(" ").map(function (elem) { return ref[elem]; }).join(" ");
    });
    return result.join("  ");
};
console.log(morseCode('.-- --- .-. -..   .-- --- .-. -..   .-- --- .-. -..   .-. -..'));
var loggers = function (props) { return console.log(props); };
var withUser = (fx, 'id');
{
    // do crazy stuff
    return function () {
    };
}
//# sourceMappingURL=morseCode.js.map