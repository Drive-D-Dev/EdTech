"use client";
import { AnswerDialog } from "@/components/answer-dialog";
import CardSummary from "@/components/summary-card";
import AnswerCard from "@/components/answer-card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

// Mock Data
const mockExam = [
  {
    id: "1",
    question: "Some question about law1.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice1",
  },
  {
    id: "2",
    question: "Some question about law2.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice4",
  },
  {
    id: "3",
    question: "Some question about law3.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice4",
  },
  {
    id: "4",
    question: "Some question about law4.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice2",
  },
  {
    id: "5",
    question: "Some question about law5.",
    choice: ["choice1", "choice2", "choice3", "choice4"],
    correct: "choice3",
  },
];

const MockSelectedChoice = [
  { id: "1", choice: "choice2" },
  { id: "2", choice: "choice4" },
  { id: "3", choice: "choice1" },
  { id: "4", choice: "choice2" },
  { id: "5", choice: "choice3" },
];

const MockAnswerPage = () => {
  // Calculate total questions
  const totalQuestions = mockExam.length;

  const params = useParams<{ setId: string }>();
  const setId = params?.setId;

  // Calculate the number of correct answers
  const correctAnswersCount = mockExam.reduce((count, exam) => {
    const selectedChoice = MockSelectedChoice.find(
      (choice) => choice.id === exam.id
    );
    if (selectedChoice && selectedChoice.choice === exam.correct) {
      return count + 1;
    }
    return count;
  }, 0);

  return (
    <div>
      <CardSummary setId={setId as string} />
      <AnswerCard setId={setId as string} />
    </div>
  );
};

export default MockAnswerPage;
