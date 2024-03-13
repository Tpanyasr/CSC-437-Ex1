import express from "express";
import { authenticateUser } from "../auth";
import profileRouter from "./profiles";
import itemRouter from "./reviews";
const router = express.Router();

// all routes under this router require authentication
// router.use(authenticateUser);

router.use("/profiles", profileRouter);
router.use("/item", itemRouter);
router.use("/reviews", itemRouter);

export default router;