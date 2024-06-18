
import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import signupRoute from "./route/signup.route.js";
import problemRoute from "./route/problem.route.js";
import commentRoute from "./route/comment.route.js";
import profileRoute from "./route/profile.route.js";
import CookieParser from "cookie-parser";


const PORT = 8000;

//middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(CookieParser());

// Test route to ensure server is running
app.get('/test', (req, res) => {
    res.send('Test route working');
});

//routes
app.use('/api/signup', signupRoute);
app.use('/api/problem', problemRoute);
app.use('/api/comment', commentRoute);
app.use('/api/profile', profileRoute);

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
