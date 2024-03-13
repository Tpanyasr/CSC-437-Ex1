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
router.get("/item/:itemId", (req, res) => {
    const { itemName } = req.params;
    item_1.default
        .get(itemName)
        .then((item) => {
        if (!item)
            throw "Not found";
        else
            res.json(item);
    })
        .catch((err) => res.status(404).end());
});
exports.default = router;
