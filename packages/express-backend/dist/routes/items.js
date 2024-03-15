"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_1 = __importDefault(require("../item"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newItem = req.body;
    item_1.default
        .create(newItem)
        .then((item) => res.status(201).send(item))
        .catch((err) => res.status(500).send(err));
});
router.get("/", (req, res) => {
    item_1.default
        .index()
        .then((items) => res.json(items))
        .catch((err) => res.status(500).send(err));
});
router.get("/:itemId", (req, res) => {
    const { itemId } = req.params;
    console.log("Getting item", itemId);
    item_1.default
        .get(itemId)
        .then((item) => {
        if (!item)
            throw "Not found";
        else
            res.json(item);
    })
        .catch((err) => res.status(404).end());
});
exports.default = router;
