import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
    {
        questionId:
        {
            type: String,
            required: [true]
        },

        email:
        {
            type: String,
            required: [true]
        },

        comment:
        {
            type: String,
            required: [true]
        }
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model("Comments", commentSchema);

export default Comment;