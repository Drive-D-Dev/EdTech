"use client";
import React, { useState } from "react";

import StudySetCard from "@/components/studyset-card";
import { Button } from "./ui/button";
import { fetchStudysetByAmount } from "@/swr/fetch-studyset";
import { AlertCircle, RefreshCw } from "lucide-react";

const StudySetWrapper = () => {
  const [studysetAmount, setStudysetAmount] = useState(6);
  const { data, error, isLoading, mutate } =
    fetchStudysetByAmount(studysetAmount);

  if (error) return <RetryButton retry={mutate} />;

  console.log(data)

  if (isLoading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <StudySetCard key={index} />
        ))}
      </div>
    );

  const transformData = data.data ?? []

  if (!data || data?.success === false) return <RetryButton retry={mutate} />;

  return (
    <>
      <h3 className="text-xl font-semibold mb-4">โจทย์สำหรับคุณ</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {transformData.map((studyset, index) => (
          <StudySetCard key={index} title={studyset.label} id={studyset.id} />
        ))}
      </div>
      {studysetAmount < 16 && (
        <Button
          variant="ghost"
          className="col-span-full w-full mt-4"
          onClick={() => setStudysetAmount(studysetAmount + 6)}
        >
          Show More
        </Button>
      )}
    </>
  );
};

const RetryButton = ({ retry }) => (
  <Button
    variant="destructive"
    onClick={retry}
    className="flex items-center space-x-2"
  >
    <AlertCircle className="h-4 w-4" />
    <span>Failed to load, please try again</span>
    <RefreshCw className="h-4 w-4 ml-2" />
  </Button>
);

export default StudySetWrapper;
