"use client"; // Ensure this is a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useSession } from "next-auth/react";

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

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/mock");
  };

  return (
    <main className="container flex flex-col justify-center">
      <div className="flex flex-col space-y-4">
        {isVisible && (
          // <Dialog open={isVisible} onOpenChange={setIsVisible}>
          //   <DialogContent>
          //     <button
          //       onClick={handleClose}
          //       className="absolute top-2 right-2 text-black text-lg font-bold"
          //     >
          //       ×
          //     </button>
          //     <p className="text-black text-lg font-semibold text-center">
          //       Your goal within reach.
          //     </p>

          //     <p className="text-black text-lg font-semibold text-center">
          //       Do mock exams, practice questions, get answers all in one app.
          //     </p>
          //   </DialogContent>
          // </Dialog>

          <div className="box relative flex flex-col items-center space-y-6 pt-6">
            <Button
              onClick={handleClose}
              className="absolute top-0 right-0 m-2"
              variant={"ghost"}
            >
              ×
            </Button>
            <p className="text-black text-lg font-semibold text-center">
              Your goal within reach.
            </p>
            <p className="text-black text-lg font-semibold text-center">
              Do mock exams, practice questions, get answers all in one app.
            </p>
          </div>
        )}

        <div className="box flex flex-col items-center space-y-6">
          <p className="text-black text-lg font-semibold text-center">
            Top questions
          </p>

          {visibleQuestions.map((item) => (
            <div key={item.id} className="box flex justify-between w-full">
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
            className="text-black text-sm cursor-pointer text-center"
            onClick={toggleShowAll}
          >
            {showAll ? "See less" : "See more"}
          </p>
        </div>

        <div className="box flex flex-col items-center space-y-4">
          <p className="text-black text-sm">Do mock exam</p>
          <Button variant={"default"} onClick={handleNavigate}>
            Start
          </Button>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
