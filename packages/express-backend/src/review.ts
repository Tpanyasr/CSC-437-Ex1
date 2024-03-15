import { Document } from "mongoose";
import { Review } from "ts-models";
import ReviewModel from "./mongo/review";

function index(): Promise<Review[]> {
  return ReviewModel.find();
}

function get(itemId: String): Promise<Review> {
  return ReviewModel.find({ itemId })
    .then((list) => list[0])
    .catch((err) => {
      throw `${itemId} Not Found`;
    });
}

function create(Review: Review): Promise<Review> {
  const p = new ReviewModel(Review);
  return p.save();
}

function update(
  itemId: String,
  Review: Review
): Promise<Review> {
  return new Promise((resolve, reject) => {
    ReviewModel.findOneAndUpdate({ itemId }, Review, {
      new: true
    }).then((Review) => {
      if (Review) resolve(Review);
      else reject("Failed to update Review");
    });
  });
}

export default { index, get, create, update };