"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const review_1 = __importDefault(require("./review")); // Import the review sub-schema
// Mongoose schema for the item
const itemSchema = new mongoose_1.Schema({
    itemId: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    categories: { type: [String], required: true },
    quantity: { type: Number, required: true },
    reviews: [review_1.default] // Use the review sub-schema for the reviews array
}, { collection: "items" });
const ItemModel = (0, mongoose_1.model)("Item", itemSchema);
exports.default = ItemModel;
