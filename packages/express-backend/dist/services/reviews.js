"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = __importDefault(require("../mongo/review"));
function index() {
    return review_1.default.find();
}
function get(Review_name) {
    return review_1.default.find({ Review_name })
        .then((list) => list[0])
        .catch((err) => {
        throw `${Review_name} Not Found`;
    });
}
function create(Review) {
    const p = new review_1.default(Review);
    console.log("HIHUHUHUHU");
    return p.save();
}
exports.default = { index, get, create };
