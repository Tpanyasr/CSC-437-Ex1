"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define a sub-schema for the reviews
const reviewSchema = new mongoose_1.Schema({
    reviewText: { type: String, required: true, trim: true },
    datePosted: { type: String, required: true },
    itemLink: { type: String, trim: true },
    userId: { type: String, required: true, trim: true }, // Add userId to match the new schema
    itemId: { type: String, required: true, trim: true }, // Add itemId to match the new schema
    rating: { type: Number, required: true } // Add rating to match the new schema
}, { _id: false } // Disable automatic _id generation for reviews
);
// Mongoose schema for the profile
const profileSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    contactInfo: { type: String, required: true, trim: true },
    sizes: {
        shirt: { type: String, trim: true },
        pants: { type: String, trim: true }
    },
    reviews: [reviewSchema] // Use the review sub-schema for the reviews array
}, { collection: "user_profiles" });
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
