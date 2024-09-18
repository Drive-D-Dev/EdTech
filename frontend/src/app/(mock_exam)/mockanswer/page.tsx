"use client";
import { AnswerDialog } from "@/components/answer-dialog";
import CardSummary from "@/components/summary-card";
import AnswerCard from "@/components/answer-card";
import { Button } from "@/components/ui/button";

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
      <CardSummary />
      {/* <div className="flex flex-row space-x-2 my-5">
        <Button className="bg-[#DB7801]">ข้อถูก</Button>
        <Button variant="ghost">ข้อผิด</Button>
      </div> */}
      <AnswerCard />
    </div>

    //   <div className="container flex flex-col justify-center items-center space-y-4">
    //     <div className="flex flex-col justify-center items-center">
    //       <p className="text-black text-lg font-semibold">
    //         {correctAnswersCount}/{totalQuestions}
    //       </p>
    //     </div>
    //     <div className="w-full flex justify-start pl-4">
    //       <p className="text-black text-lg font-normal">Review</p>
    //     </div>
    //     {mockExam.map((exam) => {
    //       // Find the selected choice for this exam question
    //       const selectedChoice = MockSelectedChoice.find(
    //         (choice) => choice.id === exam.id
    //       );

    //       const isSelectedCorrect =
    //         selectedChoice && selectedChoice.choice === exam.correct;

    //       return (
    //         <div
    //           key={exam.id}
    //           className="box flex flex-col justify-center items-center w-full space-y-4"
    //         >
    //           <div className="w-full flex justify-start">
    //             <p
    //               className={`text-black text-md font-semibold ${
    //                 isSelectedCorrect ? "text-green-600" : "text-red-600"
    //               }`}
    //             >
    //               {isSelectedCorrect ? "Correct" : "Incorrect"}
    //             </p>
    //           </div>
    //           <div className="w-full flex justify-start">
    //             <p className="text-black text-md font-normal">
    //               {exam.id + ". "}
    //               {exam.question}
    //             </p>
    //           </div>
    //           <div className="flex flex-col w-full space-y-2 pl-4">
    //             {exam.choice.map((choice, index) => {
    //               // Determine if the current choice is correct
    //               const isCorrect = choice === exam.correct;
    //               // Determine if the current choice is the one selected by the user
    //               const isSelected =
    //                 selectedChoice && selectedChoice.choice === choice;

    //               return (
    //                 <div
    //                   key={index}
    //                   className={`box p-2 ${
    //                     isCorrect
    //                       ? "bg-green-100"
    //                       : isSelected
    //                       ? "bg-red-100"
    //                       : "bg-white"
    //                   }`}
    //                 >
    //                   <p className="text-black text-sm">
    //                     {index + 1}. {choice}
    //                   </p>
    //                 </div>
    //               );
    //             })}
    //           </div>
    //           <div className="flex justify-between space-y-2 w-full pl-4">
    //             <div className="flex flex-col space-y-2 w-full">
    //               <p
    //                 className={`text-sm ${
    //                   isSelectedCorrect ? "text-green-600" : "text-red-600"
    //                 }`}
    //               >
    //                 Your answer: {selectedChoice?.choice}
    //               </p>
    //               {!isSelectedCorrect && (
    //                 <p className="text-green-600 text-sm">
    //                   Correct answer: {exam.correct}
    //                 </p>
    //               )}
    //             </div>

    //             <div className="mt-2">
    //               <AnswerDialog />
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
  );
};

export default MockAnswerPage;
