import express from "express";
const router = express.Router();
import { createProblem, getProblem, getPublicProblems, getMyProblems, getProblems } from "../controllers/problem.controller.js";

router.post("/", createProblem);
// router.get("/:id", getProblem);
// router.get("/", getProblems);
router.get("/public", getPublicProblems);
router.get("/user/:email", getMyProblems);

export default router;