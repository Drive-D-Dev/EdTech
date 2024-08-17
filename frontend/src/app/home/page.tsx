"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock Data
const mockQuestions = [
  { id: 1, question: "Some question about law1.", completion: "50%" },
  { id: 2, question: "Some question about law2.", completion: "70%" },
  { id: 3, question: "Some question about law3.", completion: "85%" },
  { id: 4, question: "Some question about law4.", completion: "60%" },
  { id: 5, question: "Some question about law5.", completion: "90%" },
];

const HomePage = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of questions to display based on state
  const visibleQuestions = showAll ? mockQuestions : mockQuestions.slice(0, 2);

  // Toggle between showing all or only the first two questions
  const toggleShowAll = () => setShowAll(!showAll);

  //advertisement visibility
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-col space-y-4 w-[70%]">
        {isVisible && (
          <div className="relative flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg rounded-md">

            <Button
              onClick={handleClose}
              className="absolute top-2 right-2 text-black text-lg font-bold"
              variant={"ghost"}
            >
              ×
            </Button>

            <p className="text-black text-lg font-semibold text-center">
              Your goal within reach
            </p>
            <p className="text-black text-lg font-semibold text-center">
              Do mock exams, practice questions, get answers all in one app
            </p>
          </div>
        )}

        <div className="flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg space-y-4 rounded-md">
          <p className="text-black text-lg font-semibold">Top questions</p>

          {visibleQuestions.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white w-full h-fit p-4 border border-gray-300 rounded-md"
            >
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                />
                <span className="text-black">{item.question}</span>
              </div>
              <span className="text-gray-600">{item.completion}</span>
            </div>
          ))}

          <p
            className="text-black text-sm cursor-pointer"
            onClick={toggleShowAll}
          >
            {showAll ? "See less" : "See more"}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-fit p-10 bg-gray-100 shadow-lg space-y-4 rounded-md">
          <p className="text-black text-sm">Do mock exam</p>
          <Button variant={"default"}>Start</Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
