import { Schema, Model, Document, model } from "mongoose";
import { Review } from "ts-models"; // Import Review interface

// Define a sub-schema for the reviews
const reviewSchema = new Schema<Review>(
    {
        reviewText: { type: String, required: true, trim: true },
        datePosted: { type: String, required: true },
        itemLink: { type: String, trim: true },
        userId: { type: String, required: true, trim: true },
        itemId: { type: String, required: true, trim: true },
        rating: { type: Number, required: true }
    },
    { _id: false }
);

const ReviewModel = model<Review>("Review", reviewSchema);
export default ReviewModel;
