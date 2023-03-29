"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
exports.default = (0, vite_1.defineConfig)({
    test: {
        include: ["src/**/*.ts"],
        setupFiles: ["scripts/setup.ts"],
        passWithNoTests: true,
        teardownTimeout: 5000,
    },
});
//# sourceMappingURL=vite.config.js.map