import express from "express";
const router = express.Router();

import { createContest, getContest } from "../controllers/contest.controller.js";

router.post("/", createContest);
router.get("/", getContest);

export default router;