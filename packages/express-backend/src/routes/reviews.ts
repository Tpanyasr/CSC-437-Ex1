import express, { Request, Response } from "express";
import {Review } from "ts-models";
import reviews from "../review";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newReview = req.body;
  console.log("Creating Review", newReview)
  reviews
    .create(newReview)
    .then((review: Review) => res.status(201).send(review))
    .catch((err) => res.status(500).send(err));
});

router.get("/:itemId", (req: Request, res: Response) => {
  const { itemId } = req.params;
  console.log("Getting Review", itemId)
  reviews
    .get(itemId)
    .then((review: Review | undefined) => {
      if (!review) throw "Not found";
      else res.json(review);
    })
    .catch((err) => res.status(404).end());
});

router.get("/", (req: Request, res: Response) => {
  reviews
    .index()
    .then((reviews: Review[]) => res.json(reviews))
    .catch((err) => res.status(500).send(err));
});

router.put("/:itemId", (req: Request, res: Response) => {
  const { itemId } = req.params;
  const updatedFields = req.body;

  reviews
    .get(itemId)
    .then((review: Review | undefined) => {
      if (!review) throw "Not found";
      
      Object.assign(review, updatedFields);
      
      return reviews.update(itemId, review);
    })
    .then((updatedProfile: Review) => res.json(updatedProfile))
    .catch((err) => res.status(404).end());
});

export default router;