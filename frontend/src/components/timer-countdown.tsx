import React, { useState, useEffect } from "react";
import { CiAlarmOn } from "react-icons/ci";

interface CountdownTimerProps {
  duration: number;
  onTimeUp?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  duration,
  onTimeUp,
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (onTimeUp) {
            onTimeUp();
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const percentageLeft = (timeLeft / duration) * 100;

  return (
    <div className="relative w-full p-4">
      <p className="text-foreground text-lg font-normal mb-2">
        <div className="w-full flex justify-start text-foreground">
          <CiAlarmOn size={25} />
          <p className="text-foreground text-lg font-normal ml-2">
            {formatTime(timeLeft)} นาที
          </p>
        </div>
      </p>
      <div
        className="absolute bottom-0 left-0 w-[67%] rounded"
        style={{ height: "10px", backgroundColor: "#f4f4f4" }}
      >
        <div
          className="rounded"
          style={{
            width: `${percentageLeft}%`,
            height: "100%",
            backgroundColor: "#DB7801",
          }}
        ></div>
      </div>
    </div>
  );
};

export default CountdownTimer;
