import { Avatar } from "@nextui-org/avatar";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { MdOutlineModeComment } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";


export default function Problem() {
  const users: userData[] = [
    {
      email: "randomized_1@email.com",
      questionHeader: "Brain Teaser!",
      question:
        "Find the sum of 35 and 13 using only multiplication (*) and division (/).",
      answer:
        "// This answer may vary depending on the chosen approach.\nThere might be multiple solutions. Here's one way:\n\n`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << (35 * 13) / 13;\n  return 0;\n}\n`",
      comments: [
        {
          email: "commenter1@example.com",
          comment: "Interesting question! I never thought of this approach.",
        },
        {
          email: "commenter2@example.com",
          comment: "This solution is clever, but can you explain why it works?",
        },
      ],
    },
    {
      email: "randomized_2@email.com",
      questionHeader: "Level Up!",
      question:
        "Express the number 72 using addition (+) and subtraction (-) of the numbers 18 and 9.",
      answer:
        "// This answer may vary depending on the chosen approach.\nThere might be multiple solutions. Here's one way:\n\n`cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << (18 - 9) * 2 + 9;\n  return 0;\n}\n`",
      comments: [
        {
          email: "commenter3@example.com",
          comment: "This was a bit tricky, but the solution is elegant!",
        },
      ],
    },
    {
      email: "randomized_3@email.com",
      questionHeader: "Think Outside the Box!",
      question:
        "Is it possible to create the number 2023 using addition (+) only with the numbers 2, 3, and 5?",
      answer:
        "// This answer may vary depending on the chosen approach.\nNo, it's not possible to create 2023 using only addition with the numbers 2, 3, and 5. The sum of these numbers will always be even, and 2023 is odd.\n",
      comments: [
        {
          email: "commenter4@example.com",
          comment: "I see why it's not possible. Great explanation!",
        },
        {
          email: "commenter5@example.com",
          comment: "Could there be any other approach to this problem?",
        },
      ],
    },
  ];

  return (
    <div className="text-black bg-green-100 m-10 px-10 py-5">
      {users.map((user, index) => {
        return (
          <div key={index} className="my-5 bg-slate-200">
            <div className="flex gap-5">
              <Avatar className="h-6 w-6" />
              <div>{user.email}</div>
            </div>
            <div className="">
              <div>{user.questionHeader}</div>
              <div>{user.question}</div>
              <div>Solution</div>
              <div>{user.answer}</div>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <BiUpvote className="size-5" />
                <BiDownvote className="size-5" />
                <MdOutlineModeComment className="size-5" />
              </div>
              <IoArchiveOutline className="size-5" />
            </div>
            <div className="bg-red-50">
              {user.comments.map((comment, idx) => {
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
          </div>
        );
      })}
    </div>
  );
}
