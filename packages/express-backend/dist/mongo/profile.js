"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const review_1 = __importDefault(require("./review")); // Import the review sub-schema
// Mongoose schema for the profile
const profileSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    contactInfo: { type: String, required: true, trim: true },
    sizes: {
        shirt: { type: String, trim: true },
        pants: { type: String, trim: true }
    },
    reviews: [review_1.default], // Use the review sub-schema for the reviews array,
    cart: { type: [String], required: false }
}, { collection: "user_profiles" });
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
