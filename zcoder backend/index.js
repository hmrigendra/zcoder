
import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import signupRoute from "./route/signup.route.js";
import problemRoute from "./route/problem.route.js";
import commentRoute from "./route/comment.route.js";
import profileRoute from "./route/profile.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { requireAuth } from "./middleware/authMiddleware.js";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const PORT = 8000;

//middleware
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.options("*", cors(corsOptions));

// Test route to ensure server is running
app.get('/test', (req, res) => {
    res.send('Test route working');
});

//routes
app.use('/api/signup', signupRoute);
app.use('/api/problem', problemRoute);
app.use('/api/comment', commentRoute);
app.use('/api/profile', profileRoute);

app.get("/api/authentication", requireAuth, (req, res) => {
  // res.json("okokok")
  res.json({ email: req.user.email }); // Send the email back to the client
});

mongoose
  .connect(
    "mongodb+srv://mrigendrahansdah:JBaoErYVHUZ1KtLc@backenddb.sbrdvxn.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});