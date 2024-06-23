import jwt from "jsonwebtoken";
import Signup from "../models/signup.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}

const app = express();
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.options("*", cors(corsOptions));

const signupData = async (req, res) => {
  try {

    //Checking for existing user
    const { email } = req.body;
    const existingUser = await Signup.findOne({ email });

    if (existingUser) {
      res.send({ message: "Email already exists. Try another email" })
    }
    else {

      //Hashing password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      req.body.password = hashedPassword;

      const signupData = await Signup.create(req.body);
      res.status(200).json(signupData);

      // return res.redirect("/login");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginData = async (req, res) => {
  try {
    
    //Checking for existing user
    const { email, password } = req.body;
    const existingUser = await Signup.findOne({ email });

    if (existingUser) {
            
      //Comparing password with hashed password
      const isPasswordMatch = await bcrypt.compare(password, existingUser.password);

      if (isPasswordMatch) {

        const user= {
            email: existingUser.email,
          };

        const token = jwt.sign(
          user,
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }      
        );

        // res.json({ token: token });

        res.cookie("token", token, {
          // httpOnly: true,
          // secure: process.env.NODE_ENV === "production",
          // secure: true,
          // maxAge: 1000 * 60 * 60,
          // signed: true,
        });

        // res.cookie("userEmail", email, {
        //   httpOnly: true
        // });

        

        // console.log(token);

        return res.status(200).json({
          token,
          email: existingUser.email,
        });
      }
      else {
        res.send({ message: "Password Incorrect." })
      }
    }
    else {
      res.send({ message: "User doesn't exist." })
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const authenticateToken = async (req, res, next) => {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null)
//     return res.status(401).json({ message: "unauthorized" })

//   jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
//     if (err) return res.sendStatus(403);

//     res.user = user
//     next()
//   })
// }

export { signupData, loginData };
