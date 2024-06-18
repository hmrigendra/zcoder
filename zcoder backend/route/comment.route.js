import express from "express";
const router = express.Router();

import { createComment, getComment, getComments, getUserComments, getQuestionComments } from "../controllers/comment.controller.js";

router.post("/", createComment);
router.get("/:id", getComment);
router.get("/", getComments);
router.get("/question/:questionId", getQuestionComments);
router.get("/user/:email", getUserComments);

export default router;