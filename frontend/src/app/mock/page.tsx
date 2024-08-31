"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChoiceBox from "@/components/choicebox";

// Mock Data
const mockExam = [
  {
    id: "1",
    question: "Some question about law1.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "1",
  },
  {
    id: "2",
    question: "Some question about law2.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "4",
  },
  {
    id: "3",
    question: "Some question about law3.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "4",
  },
  {
    id: "4",
    question: "Some question about law4.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "2",
  },
  {
    id: "5",
    question: "Some question about law5.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "3",
  },
];

const MockPage = () => {
  const [selectedChoices, setSelectedChoices] = useState<{
    [key: string]: string | null;
  }>({});

  const handleSelect = (questionId: string, choice: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  return (
    <div className="container flex flex-col justify-center items-center space-y-4">
      <div className="box flex flex-col justify-center items-center w-fit">
        <p className="text-black text-lg font-semibold">Mock exam 123</p>
      </div>

      <div className="w-full flex justify-start pl-4">
        <p className="text-black text-lg font-normal">Time left...</p>
      </div>

      {mockExam.map((exam) => (
        <div
          key={exam.id}
          className="box flex flex-col justify-center items-center w-full space-y-4"
        >
          <div className="w-full flex justify-start">
            <p className="text-black text-md font-normal">{exam.id+". "}{exam.question}</p>
          </div>

          {exam.choice.map((choice, index) => (
            <ChoiceBox
              key={index}
              id={choice}
              label={choice}
              checked={selectedChoices[exam.id] === choice}
              onChange={() => handleSelect(exam.id, choice)}
            />
          ))}
        </div>
      ))}

      <div className="w-full flex justify-end">
        <Button variant={"secondary"} className="">
          Finish
        </Button>
      </div>
    </div>
  );
};

export default MockPage;
