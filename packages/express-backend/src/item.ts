import { Document } from "mongoose";
import { Item} from "ts-models";
import ItemModel from "./mongo/item";

function index(): Promise<Item[]> {
  return ItemModel.find();
}

function get(itemId: String): Promise<Item> {
  return ItemModel.find({ itemId})
    .then((list) => list[0])
    .catch((err) => {
      throw `${itemId} Not Found`;
    });
}

function create(profile: Item): Promise<Item> {
  const p = new ItemModel(profile);
  return p.save();
}


export default { index, get, create};