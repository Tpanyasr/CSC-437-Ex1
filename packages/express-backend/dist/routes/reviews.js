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
    const newReview = req.body;
    console.log(newReview);
    reviews_1.default
        .create(newReview)
        .then((Review) => res.status(201).send(Review))
        .catch((err) => res.status(500).send(err));
});
router.get("/:Review_name", (req, res) => {
    const { Review_name } = req.params;
    reviews_1.default
        .get(Review_name)
        .then((Review) => {
        if (!Review)
            throw "Not found";
        else
            res.json(Review);
    })
        .catch((err) => res.status(404).end());
});
exports.default = router;
