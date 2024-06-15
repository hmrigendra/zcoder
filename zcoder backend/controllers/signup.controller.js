import Signup from "../models/signup.model.js";
import bcrypt from "bcrypt";


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

      if(isPasswordMatch){
        res.status(200).json(existingUser);
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

export { signupData, loginData };
