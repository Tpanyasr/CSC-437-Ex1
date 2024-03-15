"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_1 = __importDefault(require("../review"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newReview = req.body;
    console.log("Creating Review", newReview);
    review_1.default
        .create(newReview)
        .then((review) => res.status(201).send(review))
        .catch((err) => res.status(500).send(err));
});
router.get("/:itemId", (req, res) => {
    const { itemId } = req.params;
    console.log("Getting Review", itemId);
    review_1.default
        .get(itemId)
        .then((review) => {
        if (!review)
            throw "Not found";
        else
            res.json(review);
    })
        .catch((err) => res.status(404).end());
});
router.get("/", (req, res) => {
    review_1.default
        .index()
        .then((reviews) => res.json(reviews))
        .catch((err) => res.status(500).send(err));
});
router.put("/:itemId", (req, res) => {
    const { itemId } = req.params;
    const updatedFields = req.body;
    review_1.default
        .get(itemId)
        .then((review) => {
        if (!review)
            throw "Not found";
        Object.assign(review, updatedFields);
        return review_1.default.update(itemId, review);
    })
        .then((updatedProfile) => res.json(updatedProfile))
        .catch((err) => res.status(404).end());
});
exports.default = router;
