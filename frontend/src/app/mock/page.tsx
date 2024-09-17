"use client";
import React, { useState } from "react";
import ChoiceButton from "@/components/choicebutton";
import CountdownTimer from "@/components/timer-countdown";
import TwoColumnLayout from "@/components/twolayout";
import { mockExam } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ExamplePage() {
  const [selectedChoices, setSelectedChoices] = useState<{
    [questionId: string]: string | null;
  }>({});
  const [open, setOpen] = React.useState(false);
  const [showWarning, setShowWarning] = React.useState(false);
  const router = useRouter();

  const handleSelect = (questionId: string, choiceId: string) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [questionId]: choiceId,
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

  const selectedCount = Object.keys(selectedChoices).filter(
    (key) => selectedChoices[key]
  ).length;

  const totalQuestions = mockExam.length;

  const navigateToResults = () => {
    const queryParams = new URLSearchParams({
      answers: JSON.stringify(selectedChoices),
    }).toString();

    router.push(`/mockanswer?${queryParams}`);
    setOpen(false);
  };

  return (
    <div>
      <div className="w-[97dvw] flex justify-center pl-4">
        <CountdownTimer duration={300} />
      </div>
      <TwoColumnLayout
        leftContent={
          <div>
            <div className="mb-4 text-xl text-center">
              <p className="text-white">
                {selectedCount} / {totalQuestions} ข้อ
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {mockExam.map((question) => (
                <div
                  key={question.id}
                  className={`flex items-center justify-center w-10 h-10 text-center rounded cursor-pointer ${
                    selectedChoices[question.id]
                      ? "bg-orange-300"
                      : "bg-gray-300"
                  }`}
                >
                  <p className="text-black">{question.id}</p>
                </div>
              ))}
            </div>
          </div>
        }
        rightContent={
          <div>
            {mockExam.map((question) => (
              <div
                key={question.id}
                className="box flex flex-col justify-center items-center w-full space-y-4 mt-5 bg-neutral-700"
              >
                <div className="w-full flex justify-start">
                  <p className="text-white text-lg font-normal">
                    {question.id + ". "}
                    {question.question}
                  </p>
                </div>
                <div className="w-full justify-center">
                  {question.choice.map((choice) => (
                    <ChoiceButton
                      key={choice.id}
                      id={choice.id}
                      label={choice.label}
                      isSelected={selectedChoices[question.id] === choice.id}
                      onSelect={(id) => handleSelect(question.id, id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        }
      />
      {/* <div className="w-full flex justify-end pr-4">
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
      </Dialog> */}
    </div>
  );
}
