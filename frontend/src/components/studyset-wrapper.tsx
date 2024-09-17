import React from "react";

import StudySetCard from "@/components/studyset-card";
import { Button } from "./ui/button";

const StudySetWrapper = () => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">โจทย์สำหรับคุณ</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <StudySetCard key={index} />
        ))}
      </div>
      <Button variant="ghost" className="col-span-full w-full mt-4">
        Show More
      </Button>
    </>
  );
};

export default StudySetWrapper;
