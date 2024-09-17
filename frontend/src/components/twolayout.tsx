import { ReactNode } from "react";
import { mockExam } from "@/data/mockData";

interface TwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function TwoColumnLayout({
  leftContent,
  rightContent,
}: TwoColumnLayoutProps) {
  const rh = 10 + Math.ceil(mockExam.length / 2) * 5;
  return (
    <div className="min-h-screen bg-black">
      <div className="w-full px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8 flex-center">
          <div
            className="w-[15%] bg-zinc-800 p-6 shadow-md rounded-lg lg:sticky lg:top-10"
            style={{ maxHeight: `${rh}dvh` }}
          >
            {leftContent}
          </div>
          <div className="w-[80%] bg-zinc-800 p-6 shadow-md rounded-lg max-h-[100dvh] overflow-y-auto">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
