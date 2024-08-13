"use client";

import { AnswerDialog } from "@/components/answer-dialog";

export default function Home() {
  return (
    <main className="container flex justify-center flex-col">
      <div className="box flex space-x-2">
        <AnswerDialog></AnswerDialog>
      </div>
    </main>
  );
}
