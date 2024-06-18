"use client"
import axios from "axios";
import { useState } from "react";
import { problemData, commentData } from "./interface";

export default function addProblems() {

      const [questionHeader, setQuestionHeader] = useState("");
      const [question, setQuestion] = useState("");
      const [answer, setAnswer] = useState("");
      const [isPublic, setIsPublic] = useState<boolean>(false);
      const [problemData, setProblemData] = useState<problemData[]>([]);

      const [newCommentData, setNewCommentData] = useState<commentData[]>([]);

      const handleSubmitProblem = async (
        event: React.FormEvent<HTMLFormElement>
      ) => {
        event.preventDefault();

        const problemDataToSend: Omit<problemData, "_id"> = {
          email: "user@example.com",
          questionHeader,
          question,
          answer,
          isPublic,
        };

        try {
          const response = await axios.post(
            "http://localhost:8000/api/problem",
            problemDataToSend
          );

          console.log("Submitted Problem Data: ", response.data);

          if (isPublic)
            setProblemData((prevProblemData) => [
              ...prevProblemData,
              response.data,
            ]);
        } catch (error) {
          console.error("Error: ", error);
        }

        setQuestionHeader("");
        setQuestion("");
        setAnswer("");
        setIsPublic(false);
      };

    return (
    <div className="">
      <form
        action=""
        className="flex flex-col items-center gap-3 text-black"
        onSubmit={handleSubmitProblem}
      >
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
    </div>
  );
}