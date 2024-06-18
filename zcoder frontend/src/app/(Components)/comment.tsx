"use client";

import { Avatar } from "@nextui-org/avatar";
import { BsSend } from "react-icons/bs";
import { commentData } from "./interface";
import { useState, useEffect } from "react";
import axios from "axios";

interface commentProps {
  questionId: string;
}

const comments: React.FC<commentProps> = ({ questionId }) => {

    const commentsData: commentData[] = [
      {
        questionId: "1",
        email: "commenter1@example.com",
        comment: "Interesting question! I never thought of this approach.",
      },
      {
        questionId: "1",
        email: "commenter2@example.com",
        comment: "This solution is clever, but can you explain why it works?",
      },
      {
        questionId: "1",
        email: "commenter1@example.com",
        comment: "Interesting question! I never thought of this approach.",
      },
      {
        questionId: "3",
        email: "commenter2@example.com",
        comment: "This solution is clever, but can you explain why it works?",
      },
      // Add more comments as needed
    ];


  const [commentData, setCommentData] = useState<commentData[]>([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, [questionId]);
    
    const fetchComments = async () => {
        try {
            
            const response = await axios.get(`http://localhost:8000/api/comment/question/${questionId}`);

            console.log("Fetched Comments: ", response.data);

            setCommentData(response.data);
        } catch (error) {
            console.error(
                "Error fetching comments for Question ID ${questionId}: ", error
            );
        }
    }

  const handleCommentSubmit = async () => {
    try {
      const commentToSend: commentData = {
        email: "current@gmail.com",
        comment: newComment,
        questionId,
      };

      const response = await axios.post(
        "http://localhost:8000/api/comment",
        commentToSend
      );

      console.log("Submitted Comment Data: ", response.data);

      setCommentData((prevCommentsData) => [
        ...prevCommentsData,
        response.data,
      ]);
      setNewComment("");
    } catch (error) {
      console.error("Error submitting comment: ",
        error,
      );
    }
  };

  // const handleCommentSubmit = () => {
  //     if (newComment.trim()) {
  //         const comment: commentData = {
  //             email: "current@gmail.com",
  //             comment: newComment,
  //             questionId: questionId,
  //         }
  //         onCommentSubmit(comment, questionId);
  //         console.log(comment);
  //         setNewComment("");

  //     }
  // }

  return (
    <div>
      <div>Comments</div>
      <div className="bg-red-50">
        {commentData.map((comment, index) => {
          return (
            <div key={index} className="">
              <div className="flex gap-3">
                <Avatar className="size-5" />
                <div>{comment.email}</div>
              </div>
              <div>{comment.comment}</div>
            </div>
          );
        })}
      </div>

      {/*Form for submitting new comment */}
      <div className="flex">
        <div>
          <Avatar className="size-5" />
        </div>
        <input
          type="text"
          placeholder="Add your comment here."
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></input>
        <button title="Send" onClick={handleCommentSubmit}>
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default comments;
