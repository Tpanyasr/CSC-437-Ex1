"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("./mongo/item"));
function index() {
    return item_1.default.find();
}
function get(itemId) {
    return item_1.default.find({ itemId })
        .then((list) => list[0])
        .catch((err) => {
        throw `${itemId} Not Found`;
    });
}
function create(item) {
    const p = new item_1.default(item);
    return p.save();
}
exports.default = { index, get, create };
