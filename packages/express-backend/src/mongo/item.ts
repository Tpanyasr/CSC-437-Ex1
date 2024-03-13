import { Schema, Model, Document, model } from "mongoose";
import { Item } from "ts-models"; // Import Item interface

// Define the Mongoose schema for the item
const itemSchema = new Schema<Item>(
    {
        itemId: { type: Number, required: true },
        name: { type: String, required: true, trim: true },
        price: { type: Number, required: true },
        description: { type: String, required: true, trim: true },
        categories: { type: [String], required: true },
        store: { type: String, required: true },
        size: { type: String, required: true }, // Define size property with specific values
        // size: { type: String, enum: ["S", "M", "L", "XL", "XXL"], required: true }, // Define size property with specific values
        image: { type: String, required: true }
    },
    { collection: "items" }
);

// Create and export the Mongoose model for Item
const ItemModel = model<Item>("Item", itemSchema);
export default ItemModel;
