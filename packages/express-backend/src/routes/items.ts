import { Document } from "mongoose";
import { Item } from "ts-models";
import ItemModel from "../mongo/item";

function index(): Promise<Item[]> {
  return ItemModel.find();
}

function get(userid: String): Promise<Item> {
  return ItemModel.find({ userid })
    .then((list) => list[0])
    .catch((err) => {
      throw `${userid} Not Found`;
    });
}

function create(Item: Item): Promise<Item> {
  const p = new ItemModel(Item);
  return p.save();
}

function update(
  userid: String,
  Item: Item
): Promise<Item> {
  return new Promise((resolve, reject) => {
    ItemModel.findOneAndUpdate({ userid }, Item, {
      new: true
    }).then((Item) => {
      if (Item) resolve(Item);
      else reject("Failed to update Item");
    });
  });
}

export default { index, get, create, update };