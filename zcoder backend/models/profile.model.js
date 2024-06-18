import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required."]
        },

        cfProfile: {
            type: String,
            required: false
        },

        techStacks: {
            type: [String],
            required: false
        },
        
        savedProblems: {
            type: [String],
            required: false
        }
    }
)

const profile = mongoose.model("Profile", profileSchema);

export default profile;