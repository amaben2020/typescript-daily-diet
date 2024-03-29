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
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("../data");
var fetchLukeSkywalker = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://swapi.dev/api/people/1").then(function (res) {
                    return res.json();
                })];
            case 1:
                data = _a.sent();
                return [2 /*return*/, data];
        }
    });
}); };
var renderInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data_2, _i, _a, films, result_1, _b, _c, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 7, , 8]);
                return [4 /*yield*/, fetchLukeSkywalker()];
            case 1:
                data_2 = _d.sent();
                console.log("Data", data_2);
                _i = 0, _a = data_2.films;
                _d.label = 2;
            case 2:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                films = _a[_i];
                _c = (_b = Promise).all;
                return [4 /*yield*/, fetch(films.toString())];
            case 3: return [4 /*yield*/, _c.apply(_b, [[
                        (_d.sent()).json()
                    ]])];
            case 4:
                result_1 = _d.sent();
                console.log("result", result_1);
                _d.label = 5;
            case 5:
                _i++;
                return [3 /*break*/, 2];
            case 6: return [3 /*break*/, 8];
            case 7:
                error_1 = _d.sent();
                console.log(error_1);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
console.log(renderInfo());
var products = new Promise(function (res, rej) {
    if (data_1.data.length) {
        res(data_1.data);
    }
    rej("Data not found");
});
var logProduct = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data_3, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, products];
            case 1:
                data_3 = _a.sent();
                console.log("data", data_3);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
console.log("product", logProduct());
//# sourceMappingURL=promise.js.map