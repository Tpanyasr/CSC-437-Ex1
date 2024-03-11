import { Schema, model } from "mongoose";
import { Profile, Review } from "../profile"; // Import Profile and Review interfaces

// Define a sub-schema for the reviews
const reviewSchema = new Schema<Review>(
  {
    reviewText: { type: String, trim: true, required: true },
    datePosted: { type: Date, required: true },
    itemLink: { type: String, trim: true, required: true },
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
    reviews: [reviewSchema] // Define reviews as an array of reviewSchema
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
