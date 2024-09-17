import { ReactNode } from "react";

interface TwoColumnLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function TwoColumnLayout({
  leftContent,
  rightContent,
}: TwoColumnLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-8 flex-center">
          <div className="w-[10%] bg-white p-6 shadow-md rounded-lg h-[500px] lg:sticky lg:top-10">
            {leftContent}
          </div>
          <div className="w-[90%] bg-white p-6 shadow-md rounded-lg max-h-[75dvh] overflow-y-auto">
            {rightContent}
          </div>
        </div>
      </div>
    </div>
  );
}
