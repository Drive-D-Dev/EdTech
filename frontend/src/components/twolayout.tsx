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
  const rh = 12 + Math.ceil(mockExam.length / 2) * 5;
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8 flex-center">
          <div
            className="w-[15%] rounded-lg border bg-card text-card-foreground shadow-sm lg:sticky lg:top-10 p-4"
            style={{ maxHeight: `${rh}dvh` }}
          >
            {leftContent}
          </div>
          <div className="w-[80%] rounded-lg max-h-[100dvh] overflow-y-auto">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
