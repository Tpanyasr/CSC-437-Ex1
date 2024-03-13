import { Document } from "mongoose";
import { Review } from "ts-models";
import ReviewModel from "../mongo/review";

function index(): Promise<Review[]> {
  return ReviewModel.find();
}

function get(userid: String): Promise<Review> {
  return ReviewModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(Review: Review): Promise<Review> {
  const p = new ReviewModel(Review);
  return p.save();
}

function update(
  userid: String,
  Review: Review
): Promise<Review> {
  return new Promise((resolve, reject) => {
    ReviewModel.findOneAndUpdate({ userid }, Review, {
      new: true
    }).then((Review) => {
      if (Review) resolve(Review);
      else reject("Failed to update Review");
    });
  });
}

export default { index, get, create, update };