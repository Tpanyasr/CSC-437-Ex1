"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profiles_1 = __importDefault(require("../profiles"));
const router = express_1.default.Router();
router.post("/", (req, res) => {
    const newProfile = req.body;
    profiles_1.default
        .create(newProfile)
        .then((profile) => res.status(201).send(profile))
        .catch((err) => res.status(500).send(err));
});
router.get("/:userid", (req, res) => {
    const { userid } = req.params;
    profiles_1.default
        .get(userid)
        .then((profile) => {
        if (!profile)
            throw "Not found";
        else
            res.json(profile);
    })
        .catch((err) => res.status(404).end());
});
router.put("/:userid", (req, res) => {
    const { userid } = req.params;
    const updatedFields = req.body;
    profiles_1.default
        .get(userid)
        .then((profile) => {
        if (!profile)
            throw "Not found";
        Object.assign(profile, updatedFields);
        return profiles_1.default.update(userid, profile);
    })
        .then((updatedProfile) => res.json(updatedProfile))
        .catch((err) => res.status(404).end());
});
exports.default = router;
