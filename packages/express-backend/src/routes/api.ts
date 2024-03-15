import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profile";
import itemRouter from "./items";
import reviewRouter from "./reviews";
const router = express.Router();

// all routes under this router require authentication
// router.use(authenticateUser);

router.use("/profiles", profileRouter);
router.use("/items", itemRouter);
router.use("/reviews", reviewRouter);

export default router;