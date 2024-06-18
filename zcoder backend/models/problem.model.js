import mongoose from "mongoose";

const problemSchema = mongoose.Schema(
    {
        email:
        {
            type: String,
            required: [true]
        },

        questionHeader:
        {
            type: String,
            required: [true]
            },

        question: {
            type: String,
            required: [true]
        },

        answer: {
            type: String,
            required: [true]
        },

        isPublic: {
            type: Boolean,
            required: [true]
        }
    },
    {
        timestamps: true
    }
);

const Problem = mongoose.model("Problems", problemSchema);

export default Problem;

