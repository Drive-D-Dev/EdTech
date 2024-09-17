import { ReactNode } from "react";
import { mockExam } from "@/data/mockData";

interface TwoRowLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function TwoRowLayout({
  leftContent,
  rightContent,
}: TwoRowLayoutProps) {
  const rh = 12 + Math.ceil(mockExam.length / 2) * 5;
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full px-4 py-10">
        <div className="flex flex-col gap-8">
          <div
            className="w-full rounded-lg border bg-card text-card-foreground shadow-sm p-4"
            style={{ maxHeight: `${rh}dvh` }}
          >
            {leftContent}
          </div>
          <div className="w-full rounded-lg max-h-[100dvh] overflow-y-auto">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
