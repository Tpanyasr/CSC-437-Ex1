"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// import reviewSchema from "./review"; // Import the review sub-schema
// Mongoose schema for the profile
const profileSchema = new mongoose_1.Schema({
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    contactInfo: { type: String, required: true, trim: true },
    sizes: {
        shirt: { type: String, trim: true },
        pants: { type: String, trim: true }
    },
    cart: { type: [String], required: false } //string of itemids
}, { collection: "user_profiles" });
const ProfileModel = (0, mongoose_1.model)("Profile", profileSchema);
exports.default = ProfileModel;
