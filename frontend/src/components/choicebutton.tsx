import React from "react";
import { Button } from "./ui/button";

interface ChoiceButtonProps {
  id: string;
  label: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  id,
  label,
  isSelected,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className="flex flex-col items-center space-x-5 w-full">
      <Button
        onClick={handleClick}
        style={{
          border: isSelected ? "2px solid #2989ff" : "2px solid #eaeaea",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: isSelected ? "#a1cbff" : "#EDEDED",
          color: isSelected ? "#1a1a1a" : "#3d3d3d",
          transition: "border-color 0.3s ease, color 0.3s ease",
          cursor: "pointer",
          width: "100%",
          textAlign: "center",
          margin: "5px",
          whiteSpace: "normal",
          wordWrap: "break-word",
          height: "auto",
          display: "block",
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default ChoiceButton;
