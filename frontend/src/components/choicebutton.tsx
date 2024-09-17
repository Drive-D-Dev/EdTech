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
    <div className="flex items-center space-x-5 p-2">
      <Button
        onClick={handleClick}
        style={{
          border: isSelected ? "2px solid #ffd333" : "2px solid #eaeaea",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: isSelected ? "#fff5e0" : "#EDEDED",
          color: isSelected ? "#1a1a1a" : "#3d3d3d",
          transition: "border-color 0.3s ease, color 0.3s ease",
          cursor: "pointer",
          width: "100dvw",
          textAlign: "center",
          margin: "5px",
        }}
      >
        {label}
      </Button>
    </div>
  );
};

export default ChoiceButton;
