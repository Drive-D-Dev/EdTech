import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mockExam = [
  {
    id: "1",
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice1",
    solution:
      "This is solution 1 lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet. lorem",
  },
  {
    id: "2",
    question: "Some question about law2.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice4",
    solution: "This is solution 2",
  },
  {
    id: "3",
    question: "Some question about law3.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice4",
    solution: "This is solution 3",
  },
  {
    id: "4",
    question: "Some question about law4.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice2",
    solution: "This is solution 4",
  },
  {
    id: "5",
    question: "Some question about law5.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice3",
    solution: "This is solution 5",
  },
];

const MockSelectedChoice = [
  { id: "1", choice: "choice2" },
  { id: "2", choice: "choice4" },
  { id: "3", choice: "choice4" },
  { id: "4", choice: "choice2" },
  { id: "5", choice: "choice3" },
];

const AnswerCard = () => {
  const [visibleSolution, setVisibleSolution] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handleClick = (id: string) => {
    setVisibleSolution((prevId) => (prevId === id ? null : id));
  };

  const handleClickFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  // Filter questions based on the selected filter
  const filteredExams = mockExam.filter((exam) => {
    const userSelectedChoice = MockSelectedChoice.find(
      (selected) => selected.id === exam.id
    )?.choice;

    const isCorrect = exam.correct === userSelectedChoice;

    if (selectedFilter === "all") {
      return true;
    } else if (selectedFilter === "corrected") {
      return isCorrect;
    } else if (selectedFilter === "incorrected") {
      return userSelectedChoice !== exam.correct;
    }
    return true; // Default case if filter is unknown
  });

  return (
    <div>
      <div className="flex flex-row space-x-2 my-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 px-3 py-1">
              <span>
                {selectedFilter === "all"
                  ? "ทั้งหมด"
                  : selectedFilter === "corrected"
                  ? "ข้อถูก"
                  : "ข้อผิด"}
              </span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleClickFilter("all")}>
              ทั้งหมด
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClickFilter("corrected")}>
              ข้อถูก
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClickFilter("incorrected")}>
              ข้อผิด
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {filteredExams.map((exam) => {
        return (
          <div
            key={exam.id}
            className="box flex flex-row space-x-2 justify-between mb-4"
          >
            <div className="">
              <div className="w-9 h-9  bg-[#DB7801] flex items-center justify-center text-white text-md rounded-lg">
                {exam.id}
              </div>
            </div>

            <div className="flex flex-col w-[94%] justify-between space-y-3">
              <div className="flex flex-row">
                <div className="w-[95%]">{exam.question}</div>
                <div className=" ">
                  <Button
                    size="icon"
                    className="from-[#0009E7] to-[#6686DA] bg-gradient-to-br"
                    onClick={() => handleClick(exam.id)}
                  >
                    <Sparkles color="white" />
                  </Button>
                </div>
              </div>

              {exam.choice.map((choice, index) => {
                const userSelectedChoice = MockSelectedChoice.find(
                  (selected) => selected.id === exam.id
                )?.choice; // Get the user's selected choice for this question

                const isCorrect = exam.correct === userSelectedChoice; // Check if the user's choice matches the correct answer

                if (isCorrect && choice === exam.correct) {
                  // If the choice is both the correct answer and the user's selected choice
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #4ADE80",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice}</div>

                      <p className="flex mt-2">
                        <span className="bg-blue-400 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          correct answer
                        </span>

                        <span className="bg-green-400 px-2 py-1 rounded-tr-lg order-1  relative z-20">
                          your answer
                        </span>
                      </p>
                    </div>
                  );
                } else if (choice === exam.correct) {
                  // If the choice is the correct answer but not the user's choice
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #60A5FA",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice}</div>

                      <p className="flex mt-2">
                        <span className="bg-blue-400 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          correct answer
                        </span>
                      </p>
                    </div>
                  );
                } else if (choice === userSelectedChoice) {
                  // If the choice is the user's selected choice but not correct
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #EF4444",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice}</div>

                      <p className="flex mt-2">
                        <span className="bg-red-500 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          your answer
                        </span>
                      </p>
                    </div>
                  );
                } else {
                  // If the choice is neither correct nor selected by the user
                  return (
                    <div key={index} className="box">
                      {choice}
                    </div>
                  );
                }
              })}
              {visibleSolution === exam.id && (
                <div
                  className="box mt-4 p-4 border rounded-lg"
                  style={{ backgroundColor: "rgba(0, 9, 231, 0.1)" }}
                >
                  <div className="flex flex-row space-x-4">
                    <div>
                      <Button
                        size="icon"
                        className="from-[#0009E7] to-[#6686DA] bg-gradient-to-br"
                        onClick={() => handleClick(exam.id)}
                      >
                        <Sparkles color="white" />
                      </Button>
                    </div>
                    <div>{exam.solution}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerCard;
