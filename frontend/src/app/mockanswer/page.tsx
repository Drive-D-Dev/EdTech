"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnswerDialog } from "@/components/answer-dialog";

import { mockExam } from "@/data/mockData";

const MockAnswerPage = () => {
  const searchParams = useSearchParams();
  const [selectedChoices, setSelectedChoices] = useState<{
    [key: string]: string | null;
  }>({});

  useEffect(() => {
    const answers = searchParams.get("answers");
    if (answers) {
      setSelectedChoices(JSON.parse(answers));
    }
  }, [searchParams]);

  const totalQuestions = mockExam.length;

  const correctAnswersCount = mockExam.reduce((count, exam) => {
    const selectedChoice = selectedChoices[exam.id];
    if (selectedChoice === exam.correct) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div className="container flex flex-col justify-center items-center space-y-4 bg-white mt-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-black text-lg font-semibold">
          {correctAnswersCount}/{totalQuestions}
        </p>
      </div>
      <div className="w-full flex justify-start pl-4">
        <p className="text-black text-lg font-normal">Review</p>
      </div>
      {mockExam.map((exam) => {
        const selectedChoice = selectedChoices[exam.id];
        const isSelectedCorrect = selectedChoice === exam.correct;

        return (
          <div
            key={exam.id}
            className="box flex flex-col justify-center items-center w-full space-y-4"
          >
            <div className="w-full flex justify-start">
              <p
                className={`text-black text-md font-semibold ${
                  isSelectedCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isSelectedCorrect ? "Correct" : "Incorrect"}
              </p>
            </div>
            <div className="w-full flex justify-start">
              <p className="text-black text-md font-normal">
                {exam.id + ". "}
                {exam.question}
              </p>
            </div>
            <div className="flex flex-col w-full space-y-2 pl-4">
              {exam.choice.map((choice, index) => {
                const isCorrect = choice === exam.correct;
                const isSelected = selectedChoice === choice;

                return (
                  <div
                    key={index}
                    className={`box p-2 ${
                      isCorrect
                        ? "bg-green-100"
                        : isSelected
                        ? "bg-red-100"
                        : "bg-white"
                    }`}
                  >
                    <p className="text-black text-sm">
                      {index + 1}. {choice}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between space-y-2 w-full pl-4">
              <div className="flex flex-col space-y-2 w-full">
                <p
                  className={`text-sm ${
                    isSelectedCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Your answer: {selectedChoice}
                </p>
                {!isSelectedCorrect && (
                  <p className="text-green-600 text-sm">
                    Correct answer: {exam.correct}
                  </p>
                )}
              </div>

              <div className="mt-2">
                <AnswerDialog />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MockAnswerPage;
