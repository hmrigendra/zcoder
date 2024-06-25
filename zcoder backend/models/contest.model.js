import mongoose from "mongoose"

const contestSchema = mongoose.Schema({
  contestId: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  startTime: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },
},
{
        timestamps: true
    }
);

const Contest = mongoose.model("Contest", contestSchema);

export default Contest;