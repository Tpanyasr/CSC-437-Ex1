import express, { Request, Response } from "express";
import { Item } from "ts-models";
import items from "../item";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newItem = req.body;

  items
    .create(newItem)
    .then((item: Item) => res.status(201).send(item))
    .catch((err) => res.status(500).send(err));
});

router.get("/", (req: Request, res: Response) => {
  items
    .index()
    .then((items: Item[]) => res.json(items))
    .catch((err) => res.status(500).send(err));
});

router.get("/:itemId", (req: Request, res: Response) => {
  const { itemId } = req.params;
  console.log("Getting item", itemId);
  items
    .get(itemId)
    .then((item: Item | undefined) => {
      if (!item) throw "Not found";
      else res.json(item);
    })
    .catch((err) => res.status(404).end());
});


export default router;