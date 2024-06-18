import express from "express";
const router = express.Router();
import { signupData, loginData } from "../controllers/signup.controller.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

router.post("/", signupData);
router.post("/login", loginData);

export default router;
