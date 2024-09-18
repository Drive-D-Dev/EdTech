"use client";
import React, { useEffect, useState } from "react";
import ChoiceButton from "@/components/choicebutton";
import CountdownTimer from "@/components/timer-countdown";
import TwoRowLayout from "@/components/twolayout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getQuestionAPI } from "@/api/question";
import { mockExam } from "@/data/mockData";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { create } from "zustand";

export const useStore = create((set) => ({
  answers: [],
  setAnswer: (data: any) => {
    set(() => ({ answers: data }));
  },
}));

export default function ExamplePage() {
  const [selectedChoices, setSelectedChoices] = useState<{
    [questionId: string]: number | null;
  }>({});

  const [open, setOpen] = React.useState(false);
  const [showWarning, setShowWarning] = React.useState(false);
  const router = useRouter();

  const { data, error, isLoading, mutate } = getQuestionAPI(107);

  console.log(isLoading);

  if (isLoading || !data) return <div>Loading</div>;

  console.log(data);

  const handleSelect = (questionId: number, choiceId: number) => {
    setSelectedChoices((prev) => ({
      ...prev,
      [questionId]: choiceId,
    }));
  };

  const selectedCount = Object.keys(selectedChoices).filter(
    (key) => selectedChoices[key]
  ).length;

  const totalQuestions = data.data.length;

  const DoneDialog = () => {
    return (
      <>
        <Dialog open={open}>
          <DialogTrigger asChild>
            <span>
              <Button
                className="flex ml-auto  mt-4"
                size="lg"
                // onClick={handleFinishExam}
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
              <Button>Yes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

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
              <Button>Yes, finish</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  return (
    <div>
      <div className="w-[97dvw] flex justify-center pl-4">
        <CountdownTimer duration={300} />
      </div>
      <TwoRowLayout
        leftContent={
          <div>
            <div className="mb-4 text-xl text-center">
              <p className="text-foreground">
                {selectedCount} / {totalQuestions} ข้อ
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-3 mx-auto">
              {data.data.map((question, index) => (
                <a
                  key={question.id}
                  href={`#question${index + 1}`}
                  className={`flex items-center justify-center w-10 h-10 text-center rounded cursor-pointer ${
                    selectedChoices[question.id] ? "bg-blue-300" : "bg-gray-300"
                  }`}
                >
                  <p className="text-black">{index + 1}</p>
                </a>
              ))}
            </div>
          </div>
        }
        rightContent={
          <div className="space-y-4">
            {data.data.map((question, index) => (
              <div
                key={question.id}
                id={`question${index + 1}`}
                className="box flex flex-col justify-center items-center w-full gap-4 bg-background "
              >
                <div className="w-full justify-start">
                  <p className="text-background text-lg font-normal">
                    <div className="flex items-center">
                      <div
                        key={question.id}
                        className="flex items-center justify-center w-8 h-8 text-center rounded cursor-pointer"
                        style={{ backgroundColor: "#DB7801" }}
                      >
                        <p className="text-background">{index + 1}</p>
                      </div>
                      <p className="text-foreground ml-4">{question.content}</p>
                    </div>
                  </p>
                </div>
                <div className="w-full justify-center">
                  {question.Choice.map((choice) => (
                    <ChoiceButton
                      key={choice.id}
                      id={choice.id}
                      label={choice.content}
                      isSelected={selectedChoices[question.id] === choice.id}
                      onSelect={(id) => handleSelect(question.id, id)}
                    />
                  ))}
                </div>
              </div>
            ))}
            <DoneDialog />
          </div>
        }
      />
    </div>
  );
}
