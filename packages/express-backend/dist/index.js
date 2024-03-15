"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const profiles_1 = __importDefault(require("./profiles"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path = __importStar(require("path"));
const auth_1 = require("./auth");
const api_1 = __importDefault(require("./routes/api"));
// in src/index.ts
// add this import near the top
const mongoConnect_1 = require("./mongoConnect");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// and add this after all the app.use() statements
(0, mongoConnect_1.connect)("Bobateadog"); // use your own db name here
const frontend = "lit-frontend";
let cwd = process.cwd();
let dist;
let indexHtml;
try {
    console.log("hello");
    indexHtml = require.resolve(frontend);
    dist = path.dirname(indexHtml.toString());
}
catch (error) {
    console.log(`Could not resolve ${frontend}:`, error.code);
    dist = path.resolve(cwd, "..", frontend, "dist");
    indexHtml = path.resolve(dist, "index.html");
}
app.get("/hello", (req, res) => {
    res.send("Hello, World");
});
app.post("/login", auth_1.loginUser);
app.post("/signup", auth_1.registerUser);
app.use("/api", api_1.default);
// in src/index.ts, after our previous routes
app.put("/api/profiles/:userid", (req, res) => {
    const { userid } = req.params;
    const newProfile = req.body;
    profiles_1.default
        .update(userid, newProfile)
        .then((profile) => res.json(profile))
        .catch((err) => res.status(404).end());
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
