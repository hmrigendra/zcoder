import express from "express";
const router = express.Router();
import { signupData, loginData } from "../controllers/signup.controller.js";

router.post("/", signupData);
router.post("/login", loginData);

export default router;
