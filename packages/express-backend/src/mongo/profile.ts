import { Schema, Model, Document, model } from "mongoose";
import { Profile, Review } from "ts-models"; // Import Profile and Review interfaces
import reviewSchema from "./review"; // Import the review sub-schema


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
    cart: {type: [String], required: false} //string of itemids
  },
  { collection: "user_profiles" }
);

const ProfileModel = model<Profile>("Profile", profileSchema);

export default ProfileModel;
