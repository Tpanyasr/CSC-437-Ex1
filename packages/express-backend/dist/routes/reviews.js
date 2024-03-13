"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = __importDefault(require("../mongo/review"));
function index() {
    return review_1.default.find();
}
function get(userid) {
    return review_1.default.find({ userid })
        .then((list) => list[0])
        .catch((err) => {
        throw `${userid} Not Found`;
    });
}
function create(Review) {
    const p = new review_1.default(Review);
    return p.save();
}
function update(userid, Review) {
    return new Promise((resolve, reject) => {
        review_1.default.findOneAndUpdate({ userid }, Review, {
            new: true
        }).then((Review) => {
            if (Review)
                resolve(Review);
            else
                reject("Failed to update Review");
        });
    });
}
exports.default = { index, get, create, update };
