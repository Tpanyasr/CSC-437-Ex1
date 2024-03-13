"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../auth");
const profile_1 = __importDefault(require("./profile"));
const items_1 = __importDefault(require("./items"));
const router = express_1.default.Router();
// all routes under this router require authentication
router.use(auth_1.authenticateUser);
router.use("/profiles", profile_1.default);
router.use("/item", items_1.default);
// router.use("/reviews", itemRouter);
exports.default = router;
