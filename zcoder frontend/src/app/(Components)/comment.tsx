"use client"

import { Avatar } from "@nextui-org/avatar";
import { BsSend } from "react-icons/bs";
import { commentData } from "./interface";
import { useState } from "react";

interface commentProps {
    comments: commentData[];
    onCommentSubmit: (comment: commentData, questionId: string) => void;
    questionId: string;
}

const comments: React.FC<commentProps> = ({ comments, onCommentSubmit, questionId }) => {

    const [newComment, setNewComment] = useState("");

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const comment: commentData = {
                email: "current@gmail.com",
                comment: newComment,
                questionId: questionId,
            }
            onCommentSubmit(comment, questionId);
            console.log(comment);
            setNewComment("");
            
        }
    }
        
    return (
      <div>
        <div>Comments</div>
        <div className="bg-red-50">
          {comments.map((comment, idx) => {
            return (
              <div key={idx} className="">
                <div className="flex gap-3">
                  <Avatar className="size-5" />
                  <div>{comment.email}</div>
                </div>
                <div>{comment.comment}</div>
              </div>
            );
          })}
        </div>
        <div className="flex">
          <div>
            <Avatar className="size-5" />
          </div>
          <input placeholder="Add your comment here."
           value={newComment} onChange={(event) =>
        setNewComment(event.target.value)}></input>
          <button title="Send" onClick={handleCommentSubmit}>
            <BsSend />
          </button>
        </div>
      </div>
    );
};

export default comments;
