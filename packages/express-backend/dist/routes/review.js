"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviews_1 = __importDefault(require("../services/reviews"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    console.log(req.body);
    const newItem = req.body;
    console.log(newItem);
    reviews_1.default
        .create(newItem)
        .then((Item) => res.status(201).send(Item))
        .catch((err) => res.status(500).send(err));
});
router.get("/:Item_name", (req, res) => {
    const { Item_name } = req.params;
    reviews_1.default
        .get(Item_name)
        .then((Item) => {
        if (!Item)
            throw "Not found";
        else
            res.json(Item);
    })
        .catch((err) => res.status(404).end());
});
exports.default = router;
