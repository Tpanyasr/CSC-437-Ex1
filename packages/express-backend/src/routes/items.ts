import express, { Request, Response } from "express";
import { Item } from "ts-models";
import item from "../item";

const router = express.Router();

router.post("/", (req: Request, res: Response) => {
  const newItem = req.body;

  item
    .create(newItem)
    .then((item: Item) => res.status(201).send(item))
    .catch((err) => res.status(500).send(err));
});

router.get("/item/:itemId", (req: Request, res: Response) => {
  const { itemName } = req.params;

  item
    .get(itemName)
    .then((item: Item | undefined) => {
      if (!item) throw "Not found";
      else res.json(item);
    })
    .catch((err) => res.status(404).end());
});


export default router;