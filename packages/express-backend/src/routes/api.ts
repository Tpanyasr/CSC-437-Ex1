import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";
import itemRouter from "./items";
const router = express.Router();

// all routes under this router require authentication
router.use(authenticateUser);

router.use("/profiles", profileRouter);
router.use("/item", itemRouter);
// router.use("/reviews", itemRouter);

export default router;