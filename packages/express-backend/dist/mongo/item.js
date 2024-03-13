"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the Mongoose schema for the item
const itemSchema = new mongoose_1.Schema({
    itemId: { type: Number, required: true },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    description: { type: String, required: true, trim: true },
    categories: { type: [String], required: true },
    store: { type: String, required: true },
    size: { type: String, required: true }, // Define size property with specific values
    // size: { type: String, enum: ["S", "M", "L", "XL", "XXL"], required: true }, // Define size property with specific values
    image: { type: String, required: true }
}, { collection: "items" });
// Create and export the Mongoose model for Item
const ItemModel = (0, mongoose_1.model)("Item", itemSchema);
exports.default = ItemModel;
