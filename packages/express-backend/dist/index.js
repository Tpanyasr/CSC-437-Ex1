"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoConnect_1 = require("./mongoConnect");
// and add this after all the app.use() statements
(0, mongoConnect_1.connect)("bobateadog"); // use your own db name here
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.send("Hello, World");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
