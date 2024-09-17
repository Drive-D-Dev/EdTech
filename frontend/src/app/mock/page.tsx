"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ChoiceBox from "@/components/choicebox";
import CountdownTimer from "@/components/timer-countdown";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { mockExam } from "@/data/mockData";

const MockPage = () => {
  const [selectedChoices, setSelectedChoices] = useState<{
    [key: string]: string | null;
  }>({});
  const [open, setOpen] = React.useState(false);
  const [showWarning, setShowWarning] = React.useState(false);
  const router = useRouter();

  const handleSelect = (questionId: string, choice: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [questionId]: choice,
    }));
  };

  const handleFinishExam = () => {
    const unansweredQuestions = mockExam.some(
      (exam) => !selectedChoices[exam.id]
    );

    if (unansweredQuestions) {
      setShowWarning(true);
      setOpen(false);
    } else {
      setOpen(true);
      setShowWarning(false);
    }
  };

  const navigateToResults = () => {
    const queryParams = new URLSearchParams({
      answers: JSON.stringify(selectedChoices),
    }).toString();

    router.push(`/mockanswer?${queryParams}`);
    setOpen(false);
  };

  return (
    <div className="container flex flex-col justify-center items-center space-y-4 bg-white mt-10">
      <div className="box flex flex-col justify-center items-center w-fit">
        <p className="text-black text-lg font-semibold">Math</p>
      </div>

      <div className="w-full flex justify-start pl-4">
        <CountdownTimer duration={300} />
      </div>

      {mockExam.map((exam) => (
        <div
          key={exam.id}
          className="box flex flex-col justify-center items-center w-full space-y-4"
        >
          <div className="w-full flex justify-start">
            <p className="text-black text-md font-normal">
              {exam.id + ". "}
              {exam.question}
            </p>
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

      <div className="w-full flex justify-end pr-4">
        <Dialog open={open}>
          <DialogTrigger asChild>
            <span>
              <Button
                variant="secondary"
                className="flex justify-end w-full p-2"
                onClick={handleFinishExam}
              >
                <p>Finish</p>
              </Button>
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Finish</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Are you sure you want to finish the exam?
            </DialogDescription>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={navigateToResults}>Yes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Dialog open={showWarning} onOpenChange={setShowWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Warning</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            You have unanswered questions. Are you sure you want to finish the
            exam?
          </DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowWarning(false)}>
              Cancel
            </Button>
            <Button onClick={navigateToResults}>Yes, finish</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MockPage;
