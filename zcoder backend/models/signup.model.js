import mongoose from "mongoose";

const signupSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter email"],
        },

        password: {
            type: String,
            required: [true, "Please enter password"],
        }
    },
    {
        timestamps: true
    }
);

const Signup = mongoose.model("Signup", signupSchema);

export default Signup;