//pending: the dishwasher is still running, not complete or completed.
//error: no soap //completed: dish washed
//https://www.codecademy.com/courses/learn-intermediate-javascript/lessons/promises/exercises/constructing-promises
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//https://javascript.info/promise-basics#:~:text=The%20constructor%20syntax%20for%20a,created%2C%20the%20executor%20runs%20automatically.
var executorFunction = function (resolve, reject) { };
var myFirstPromise = new Promise(executorFunction);
var inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
// Write your code below:
function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    }
    else {
        reject('That item is sold out.');
    }
}
function orderSunglasses() {
    return new Promise(myExecutor);
}
var orderPromise = orderSunglasses();
var executorFunction2 = function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
};
var promise1 = new Promise(executorFunction2);
promise1.then(function (value) {
    console.log(value);
    // expected output: "foo"
});
console.log(promise1);
// expected output: [object Promise]
var delay = function (time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
};
console.log('delay function', delay(300));
var prom = new Promise(function (resolve, reject) {
    if (2 < 1) {
        resolve("Yeah");
    }
    return reject("Sorry");
}).then(function (RES) { return (console.log(RES)); })["catch"](function (err) { return console.error(err); });
var promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done"
    setTimeout(function () { return resolve("done"); }, 1000);
});
//finally: The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
var data = [{ name: "Ben" }];
//This mimicks the API request that takes time 
var promiser = new Promise(function (resolve, reject) {
    resolve("Answer"); // The second call to resolve is ignored
    if (data) {
        resolve(data.map(function (e) { return console.log(e); }));
    }
    reject("Error");
});
var loadData = function () { return __awaiter(_this, void 0, void 0, function () {
    var info, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, promiser];
            case 1:
                info = _a.sent();
                console.log(info);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
console.log(loadData());
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
function delay3(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
delay(3000).then(function () { return alert('runs after 3 seconds'); });
var runTimeout = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { return resolve("done"); }, 1000);
    });
};
var val = runTimeout().then(function (v) { return console.log(v); });
//Power of promises
function loadScript(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () { return resolve(script); };
        script.onerror = function () { return reject(new Error("Script load error for ".concat(src))); };
        document.head.append(script);
    });
}
var loadedScript = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
loadedScript.then(
//@ts-ignore
function (script) { return alert("".concat(script.src, " is loaded!")); }, function (error) { return alert("Error: ".concat(error.message)); });
promise.then(function (script) { return alert('Another handler...'); });
// callback function
function loadScript2(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () { return callback(null, script); };
    script.onerror = function () { return callback(new Error("Script load error for ".concat(src))); };
    document.head.append(script);
}
var inventory2 = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
};
//@ts-ignore
var inventoryInfo = new Promise(function (resolve, reject) {
    if (inventory2.sunglasses) {
        resolve(inventory2.sunglasses = 2000);
    }
    reject("Impossible to load inventory");
});
var dataInfo = inventoryInfo.then(function (inventory) {
    console.log(inventory);
})["catch"](function (error) {
    console.log(error);
});
console.log(dataInfo);
