import express from "express";
const router = express.Router();
import { createProblem, getProblem, getPublicProblems, getUserProblems, getProblems } from "../controllers/problem.controller.js";

router.post("/", createProblem);
router.get("/public", getPublicProblems);
router.get("/user/:email", getUserProblems);
router.get("/:id", getProblem);
router.get("/", getProblems);

export default router;