"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profile_1 = __importDefault(require("./profile"));
const items_1 = __importDefault(require("./items"));
const reviews_1 = __importDefault(require("./reviews"));
const router = express_1.default.Router();
// all routes under this router require authentication
// router.use(authenticateUser);
router.use("/profiles", profile_1.default);
router.use("/items", items_1.default);
router.use("/reviews", reviews_1.default);
exports.default = router;
