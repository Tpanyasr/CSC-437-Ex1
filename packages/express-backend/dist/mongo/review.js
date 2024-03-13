"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define a sub-schema for the reviews
const reviewSchema = new mongoose_1.Schema({
    reviewText: { type: String, required: true, trim: true },
    datePosted: { type: String, required: true },
    itemLink: { type: String, trim: true },
    userId: { type: String, required: true, trim: true },
    itemId: { type: String, required: true, trim: true },
    rating: { type: Number, required: true }
}, { _id: false });
exports.default = reviewSchema;
