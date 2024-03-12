import { Schema, Model, Document, model } from "mongoose";
import { Profile, Review } from "ts-models"; // Import Profile and Review interfaces

// Define a sub-schema for the reviews
const reviewSchema = new Schema<Review>(
  {
    reviewText: { type: String, required: true, trim: true },
    datePosted: { type: String, required: true },
    itemLink: { type: String, trim: true },
    userId: { type: String, required: true, trim: true }, // Add userId to match the new schema
    itemId: { type: String, required: true, trim: true }, // Add itemId to match the new schema
    rating: { type: Number, required: true } // Add rating to match the new schema
  },
  { _id: false } // Disable automatic _id generation for reviews
);

// Mongoose schema for the profile
const profileSchema = new Schema<Profile>(
  {
    userid: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    contactInfo: { type: String, required: true, trim: true },
    sizes: {
      shirt: { type: String, trim: true },
      pants: { type: String, trim: true }
    },
    reviews: [reviewSchema] // Use the review sub-schema for the reviews array
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
