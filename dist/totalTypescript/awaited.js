"use strict";
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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = "https://jsonplaceholder.typicode.com/todos/1";
var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get(URL)];
            case 1:
                data_1 = (_a.sent()).data;
                return [2 /*return*/, data_1];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
// const info: Awaited<ReturnType<typeof fetchData>> = fetchData();
console.log(fetchData());
var myInfo = {
    name: "Ben",
};
var images = [
    {
        node: {
            originalSrc: "Men-Jacket-Front-Black__15466.1603283963.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
    {
        node: {
            originalSrc: "Men-Jacket-Side-Black__68202.1603283961.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
    {
        node: {
            originalSrc: "Men-Jacket-Back-Black__33864.1603283963.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
    {
        node: {
            originalSrc: "Men-Jacket-Front-White__95300.1603283963.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
    {
        node: {
            originalSrc: "Men-Jacket-Side-White__91924.1603283962.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
    {
        node: {
            originalSrc: "Men-Jacket-Back-White__02866.1603283963.png",
            altText: "",
            width: 2048,
            height: 2048,
        },
    },
];
var normalizer = function (array) {
    return __spreadArray([], array, true).map(function (elem) { return elem.node["originalSrc"]; });
};
console.log(normalizer(images));
var fetchProducts = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data_2, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, axios_1.default.get("http://localhost:3004/products")];
            case 1:
                data_2 = (_a.sent()).data;
                return [2 /*return*/, data_2];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    if (error_2.message.includes("404")) {
                        throw new Error("Please check the url");
                    }
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
console.log(fetchProducts());
//# sourceMappingURL=awaited.js.map