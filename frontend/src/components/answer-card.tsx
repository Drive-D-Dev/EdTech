import React, { useState, FC } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { ExamAnswerResultResponse } from "@/model/examAnswerResultResponse";
import { useRouter } from "next/navigation";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

const AnswerCard: FC<{
  data: ExamAnswerResultResponse | null;
  isLoading: boolean;
}> = ({ data, isLoading }) => {
  const router = useRouter();
  const [visibleSolution, setVisibleSolution] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  //****************************************Waiting for implementation****************************************************
  const handleReExam = () => {
    setOpen(false);
    // router.push(`/mock/${data?.setId}`);
  };
  //****************************************Waiting for implementation****************************************************

  const handleClick = (id: string) => {
    setVisibleSolution((prevId) => (prevId === id ? null : id));
  };

  const handleClickFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  if (isLoading || !data) return <SkeletonCard />;

  const hasIncorrectAnswers = data.userAnswers.some((exam) => !exam.isCorrect);

  // Filter questions based on the selected filter
  const filteredExams = data.userAnswers.filter((exam) => {
    // Directly using isCorrect from the data instead of calculating it
    const isCorrect = exam.isCorrect;

    if (selectedFilter === "all") {
      return true;
    } else if (selectedFilter === "corrected") {
      return isCorrect; // Return true for correct answers
    } else if (selectedFilter === "incorrected") {
      return !isCorrect; // Return true for incorrect answers
    }
    return true; // Default case if filter is unknown
  });

  const ReExamDialog: FC<{
    open: boolean;
    onClose: () => void;
    onReExam: () => void;
  }> = ({ open, onClose, onReExam }) => (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ทำข้อสอบใหม่</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to retake the exam?
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onReExam}>Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return (
    <div>
      <div className="flex flex-row">
        {!hasIncorrectAnswers ? null : (
          <>
            <Button
              className="flex ml-auto mt-4 from-[#0009E7] to-[#6686DA] bg-gradient-to-br"
              size="lg"
              onClick={handleOpen}
            >
              ทำข้อสอบใหม่
            </Button>
            <ReExamDialog
              open={open}
              onClose={() => setOpen(false)}
              onReExam={handleReExam}
            />
          </>
        )}
      </div>
      <div className="flex flex-row space-x-2 my-5">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex gap-1 px-3 py-1">
              <span>
                {selectedFilter === "all"
                  ? "ทั้งหมด"
                  : selectedFilter === "corrected"
                  ? "ข้อถูก"
                  : "ข้อผิด"}
              </span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleClickFilter("all")}>
              ทั้งหมด
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClickFilter("corrected")}>
              ข้อถูก
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleClickFilter("incorrected")}>
              ข้อผิด
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {filteredExams.map((exam) => {
        // Find the original index of the current exam in the full data array
        const originalIndex = data.userAnswers.findIndex(
          (item) => item.question_id === exam.question_id
        );

        return (
          <div
            key={exam.question_id}
            className="box flex flex-row space-x-2 justify-between mb-4"
          >
            <div className="">
              <div className="w-9 h-9 bg-[#DB7801] flex items-center justify-center text-white text-md rounded-lg">
                {originalIndex + 1} {/* Display original index + 1 */}
              </div>
            </div>

            <div className="flex flex-col w-[94%] justify-between space-y-3">
              <div className="flex flex-row">
                <div className="w-[95%]">{exam.content}</div>
                <div className=" ">
                  <Button
                    size="icon"
                    className="from-[#0009E7] to-[#6686DA] bg-gradient-to-br"
                    onClick={() => handleClick(String(exam.question_id))}
                  >
                    <Sparkles color="white" />
                  </Button>
                </div>
              </div>

              {exam.choices.map((choice, index) => {
                if (
                  choice.isUserAnswer === true &&
                  choice.isCorrectAnswer === true
                ) {
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #4ADE80",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice.content}</div>

                      <p className="flex mt-2">
                        <span className="bg-blue-400 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          correct answer
                        </span>

                        <span className="bg-green-400 px-2 py-1 rounded-tr-lg order-1  relative z-20">
                          your answer
                        </span>
                      </p>
                    </div>
                  );
                } else if (choice.isCorrectAnswer === true) {
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #60A5FA",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice.content}</div>

                      <p className="flex mt-2">
                        <span className="bg-blue-400 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          correct answer
                        </span>
                      </p>
                    </div>
                  );
                } else if (
                  choice.isUserAnswer === true &&
                  choice.isCorrectAnswer === false
                ) {
                  return (
                    <div
                      key={index}
                      className="box"
                      style={{
                        border: "6px solid #EF4444",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                      }}
                    >
                      <div className="pl-5">{choice.content}</div>

                      <p className="flex mt-2">
                        <span className="bg-red-500 px-2 pl-3 py-1 ml-[-5px] rounded-tr-lg order-2 relative z-10 ">
                          your answer
                        </span>
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="box">
                      {choice.content}
                    </div>
                  );
                }
              })}
              {visibleSolution === String(exam.question_id) && (
                <div
                  className="box mt-4 p-4 border rounded-lg"
                  style={{ backgroundColor: "rgba(0, 9, 231, 0.1)" }}
                >
                  <div className="flex flex-row space-x-4">
                    <div>
                      <Button
                        size="icon"
                        className="from-[#0009E7] to-[#6686DA] bg-gradient-to-br"
                        onClick={() => handleClick(String(exam.question_id))}
                      >
                        <Sparkles color="white" />
                      </Button>
                    </div>
                    <div>{exam.explaination}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerCard;
