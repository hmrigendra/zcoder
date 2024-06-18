import express from "express";
const router = express.Router();
import { createProfile, updateProfile, getProfile, updateSavedProblem, getSavedProblem } from "../controllers//profile.controller.js";

router.post("/", createProfile);
router.patch("/", updateProfile);
router.patch("/saveProblem", updateSavedProblem);
router.get("/savedProblems/:email", getSavedProblem);
router.get("/:email", getProfile); 

export default router;