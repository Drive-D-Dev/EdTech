"use client";

import { AnswerDialog } from "@/components/answer-dialog";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container flex justify-center flex-col">
      <div className="box flex space-x-2">
        <AnswerDialog></AnswerDialog>
        <Button>sdf</Button>
      </div>
    </main>
  );
}
