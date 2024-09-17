import React from "react";

interface AnswerBoxProps {
  label: string;
  boxColor: string;
}

const AnswerBox: React.FC<AnswerBoxProps> = ({ label, boxColor }) => {
  return (
    <div className="flex justify-between items-center w-full h-fit p-4 border rounded-md">
      <div className="flex items-center space-x-5">
        <div className={`w-6 h-6 rounded-md ${boxColor}`} />
        <p className="text-black text-md font-normal">{label}</p>
      </div>
    </div>
  );
};

export default AnswerBox;
