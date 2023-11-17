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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const posts_1 = __importDefault(require("../routes/posts"));
// Create an instance of an express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(posts_1.default);
const request = (0, supertest_1.default)(app);
(0, vitest_1.test)("GET /posts", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request.get("/posts");
    (0, vitest_1.expect)(response.status).toBe(200);
    (0, vitest_1.expect)(response.body).toEqual({ message: "This is a GET request" });
}));
(0, vitest_1.test)("PUT /posts/:id", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request.put("/posts/123");
    (0, vitest_1.expect)(response.status).toBe(200);
    (0, vitest_1.expect)(response.body).toEqual({ message: "This is a UPDATE request" });
}));
(0, vitest_1.test)("DELETE /posts/:id", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request.delete("/posts/123");
    (0, vitest_1.expect)(response.status).toBe(200);
    (0, vitest_1.expect)(response.body).toEqual({ message: "This is a DELETE request" });
}));
(0, vitest_1.test)("POST /posts", () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield request.post("/posts");
    (0, vitest_1.expect)(response.status).toBe(200);
    (0, vitest_1.expect)(response.body).toEqual({ message: "This is a POST request" });
}));
