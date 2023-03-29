"use strict";
// Task: Build a class that performs CRUD asynchronously, make sure its typed
// endpoint: https://jsonplaceholder.typicode.com/todos/1
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var axios_1 = require("axios");
var JSONServer = /** @class */ (function () {
    function JSONServer() {
        this.Endpoint = "https://jsonplaceholder.typicode.com/todos";
        this.result = {};
    }
    JSONServer.prototype.getTodos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get(this.Endpoint)];
                    case 1:
                        data_1 = _a.sent();
                        if (data_1 && data_1.statusText === "OK") {
                            return [2 /*return*/, data_1.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error)
                            console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JSONServer.prototype.getTodo = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var data_2, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get(this.Endpoint + "/".concat(param))];
                    case 1:
                        data_2 = _a.sent();
                        if (data_2 && data_2.statusText === "OK") {
                            return [2 /*return*/, data_2.data];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2 instanceof Error)
                            console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    JSONServer.prototype.deleteTodo = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var todo_1, viewArrayWithoutDeleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(param && typeof param === "number")) return [3 /*break*/, 4];
                        return [4 /*yield*/, axios_1.default.delete(this.Endpoint + "/".concat(param))];
                    case 1:
                        todo_1 = _a.sent();
                        console.log("deleted todo", todo_1);
                        if (!(todo_1.statusText === "OK")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getTodo(param)];
                    case 2:
                        viewArrayWithoutDeleted = _a.sent();
                        console.log("New Todo", "".concat(viewArrayWithoutDeleted.id, " has been deleted"));
                        return [3 /*break*/, 4];
                    case 3: throw new Error("Invalid");
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    JSONServer.prototype.createTodo = function (body) {
        return __awaiter(this, void 0, void 0, function () {
            var data_3, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!body) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios_1.default.post(this.Endpoint, body)];
                    case 1:
                        data_3 = _a.sent();
                        if (data_3.status >= 200 && data_3.status <= 299) {
                            console.log("full data", data_3);
                            console.log("status", data_3.status);
                            console.log("Todo created");
                        }
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        if (error_3 instanceof Error)
                            throw new Error(error_3.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    JSONServer.prototype.updateTodo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data_4, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.put(this.Endpoint + "/".concat(id), {
                                title: "My name is Benneth",
                            })];
                    case 1:
                        data_4 = _a.sent();
                        console.log("Success", data_4);
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return JSONServer;
}());
var jsonService = new JSONServer();
var body = {
    userId: 1,
    id: 210,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
};
// jsonService.createTodo(body);
jsonService.updateTodo(2);
var obj = {
    name: "Me",
    age: 30,
};
var updateMe = function (object) {
    var _a;
    return __assign(__assign({}, object), (_a = {}, _a["age"] = 31, _a));
};
console.log("onClick", updateMe(obj));
var props = __assign({ country: "CA" }, obj);
var flags = {
    CA: "🔥",
};
if (props.country) {
    var countryFlag = String(props.country);
    console.log(flags["CA"]);
}
//# sourceMappingURL=json-service.js.map