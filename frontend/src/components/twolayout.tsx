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
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full sm:px-4 py-4 sm:py-10">
        <div className="flex md:flex-row flex-col gap-8">
          {
            leftContent && <div className="w-full rounded-lg border bg-card text-card-foreground shadow-sm p-4 basis-1/3">
              {leftContent}
            </div>
          }
          {
            rightContent && <div className="w-full rounded-lg max-h-[100dvh] overflow-y-auto">
              {rightContent}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
