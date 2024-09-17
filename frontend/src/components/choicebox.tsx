import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";

interface ChoiceBoxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

const ChoiceBox: React.FC<ChoiceBoxProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex justify-between items-center w-full h-fit p-4 border rounded-md">
      <div className="flex items-center space-x-5">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={onChange}
          className="border-gray background-green"
        />
        <p className="text-black text-md font-normal">{label}</p>
      </div>
    </div>
  );
};

export default ChoiceBox;
