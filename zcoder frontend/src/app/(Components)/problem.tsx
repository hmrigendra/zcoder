"use client";

import { Avatar } from "@nextui-org/avatar";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { problemData, commentData } from "./interface";
import Comments from "./comment";
import SaveProblem from "./saveProblem";
import { useState, useEffect } from "react";
import axios from "axios";
import savedProblems from "../savedProblems/page";

// const problemsData: problemData[] = [
//   {
//     questionId: "1",
//     email: "randomized_1@email.com",
//     questionHeader: "Brain Teaser!",
//     question:
//       "Find the sum of 35 and 13 using only multiplication (*) and division (/).",
//     answer:
//       "// This answer may vary depending on the chosen approach.\nThere might be multiple solutions. Here's one way:\n\n`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << (35 * 13) / 13;\n  return 0;\n}\n`",
//     isPublic: true,
//   },
//   {
//     questionId: "2",
//     email: "randomized_1@email.com",
//     questionHeader: "Brain Teaser!",
//     question:
//       "Find the sum of 35 and 13 using only multiplication (*) and division (/).",
//     answer:
//       "// This answer may vary depending on the chosen approach.\nThere might be multiple solutions. Here's one way:\n\n`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << (35 * 13) / 13;\n  return 0;\n}\n`",
//     isPublic: true,
//   },
//   {
//     questionId: "3",
//     email: "randomized_1@email.com",
//     questionHeader: "Brain Teaser!",
//     question:
//       "Find the sum of 35 and 13 using only multiplication (*) and division (/).",
//     answer:
//       "// This answer may vary depending on the chosen approach.\nThere might be multiple solutions. Here's one way:\n\n`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << (35 * 13) / 13;\n  return 0;\n}\n`",
//     isPublic: true,
//   },
//   // Add more problems as needed
// ];

interface ProblemProps {
  problemType: "public" | "saved" | "user";
  email: string;
}

const problems: React.FC<ProblemProps> = ({ problemType, email }) => {
  
  // const [questionHeader, setQuestionHeader] = useState("");
  // const [question, setQuestion] = useState("");
  // const [answer, setAnswer] = useState("");
  // const [isPublic, setIsPublic] = useState<boolean>(false);
  const [problemData, setProblemData] = useState<problemData[]>([]);

  // const [newCommentData, setNewCommentData] = useState<commentData[]>([]);

  // const handleCommentSubmit = (comment: commentData) => {
  //   const newComments = [...commentsData, comment];
  //   setNewCommentData(newComments);
  // };

  // const handleSubmitProblem = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const problemDataToSend: Omit<problemData, '_id'> = {
  //     email: "user@example.com",
  //     questionHeader,
  //     question,
  //     answer,
  //     isPublic,
  //   };

  //   try {
  //     const response = await axios.post("http://localhost:8000/api/problem", problemDataToSend);

  //     console.log("Submitted Problem Data: ", response.data);

  //     if(isPublic)
  //       setProblemData(prevProblemData => [...prevProblemData, response.data])

  //   } catch (error) {
  //     console.error("Error: ", error);
  //   }

  //   setQuestionHeader("");
  //   setQuestion("");
  //   setAnswer("");
  //   setIsPublic(false);
  // }

  const fetchProblems = async () => {
    try {

      let url = "";

      if (problemType === "public") {
        url =
          `http://localhost:8000/api/problem/public`
        
      }

      else if (problemType === "user" && email) {
        url =
          `http://localhost:8000/api/problem/user/${email}`
              
      }
      
      else if (problemType === "saved" && email) {
        url =
          `http://localhost:8000/api/profile/savedProblems/${email}`
              
      }

      const response = await axios.get(url);

      console.log(url);
      

      console.log("Fetched Problem Data: ", response.data);

      setProblemData(response.data)
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, [problemType, email]);

  return (
    <div>
      {/* <div className="">
        <form action="" className="flex flex-col items-center gap-3 text-black" onSubmit={handleSubmitProblem}>
          <input
            placeholder="Question Header"
            value={questionHeader}
            onChange={(event) => setQuestionHeader(event.target.value)}
          ></input>

          <input
            placeholder="Question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
          ></input>

          <input
            placeholder="Answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          ></input>

          <label htmlFor="public_select">Public or Private</label>
          <select
            id="public_select"
            value={isPublic.toString()}
            onChange={(event) => setIsPublic(event.target.value === "true")}
          >
            <option value="true">Public</option>
            <option value="false">Private</option>
          </select>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div> */}
      <div className="text-black bg-green-100 m-10 px-10 py-5">
        {Array.isArray(problemData) && problemData.length === 0 ? (
          <p>No Problems found</p>
        ) : (
          problemData.map((problem, index) => {
            const initials = problem.email[0].toUpperCase();

            // const problemComments = commentsData.filter(
            //   (comment) => comment.questionId === problem.questionId
            // );

            return (
              <div key={index} className="my-5 bg-slate-200">
                <div className="flex gap-5">
                  <Avatar className="h-6 w-6" />
                  <div>{problem.email}</div>
                </div>
                <div className="">
                  <div>{problem.questionHeader}</div>
                  <div>{problem.question}</div>
                  <div>Solution</div>
                  <div>{problem.answer}</div>
                  <div>{problem._id}</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <BiUpvote className="size-5" />
                    <BiDownvote className="size-5" />
                    <MdOutlineModeComment className="size-5" />
                  </div>
                  <SaveProblem questionId={problem._id} email={email} />
                </div>
                <div>{<Comments questionId={problem._id} email={email} />}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default problems;
