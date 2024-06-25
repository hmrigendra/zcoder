import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
  },

  username: {
    type: String,
    required: [true, "Username is required."],
  },

  codeforcesHandle: {
    type: String,
    required: false,
  },

  techStacksArray: {
    type: [String],
    required: false,
  },

  savedProblems: {
    type: [String],
    required: false,
  },
});

const profile = mongoose.model("Profile", profileSchema);

export default profile;