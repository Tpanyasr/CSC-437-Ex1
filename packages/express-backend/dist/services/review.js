"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = __importDefault(require("../mongo/item"));
function index() {
    return item_1.default.find();
}
function get(Item_name) {
    return item_1.default.find({ Item_name })
        .then((list) => list[0])
        .catch((err) => {
        throw `${Item_name} Not Found`;
    });
}
function create(Item) {
    const p = new item_1.default(Item);
    console.log("HIHUHUHUHU");
    return p.save();
}
exports.default = { index, get, create };
