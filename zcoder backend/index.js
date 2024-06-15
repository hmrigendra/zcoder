
import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import signupRoute from "./route/signup.route.js";
import problemRoute from "./route/problem.route.js";


const PORT = 8000;

//middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Test route to ensure server is running
app.get('/test', (req, res) => {
    res.send('Test route working');
});

//routes
app.use('/api/signup', signupRoute);
app.use('/api/problem', problemRoute);

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
