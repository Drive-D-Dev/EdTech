"use client";
import CardSummary from "@/components/summary-card";
import AnswerCard from "@/components/answer-card";
import { useParams } from "next/navigation";

// Mock Data

const MockAnswerPage = () => {

  const params = useParams<{ setId: string }>();
  const setId = params?.setId;

  return (
    <div>
      <CardSummary setId={setId as string} />
      <AnswerCard setId={setId as string} />
    </div>
  );
};

export default MockAnswerPage;
