"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-09-31T00:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted");
  };

  return (
    <div className="mt-40 flex items-center justify-center bg-gradient-to-br text-foreground p-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <div className="text-2xl md:text-3xl mb-8">
          <div className="flex justify-center space-x-4">
            <div>
              <span className="font-bold">{timeLeft.days}</span>
              <span className="text-sm">days</span>
            </div>
            <div>
              <span className="font-bold">{timeLeft.hours}</span>
              <span className="text-sm">hours</span>
            </div>
            <div>
              <span className="font-bold">{timeLeft.minutes}</span>
              <span className="text-sm">minutes</span>
            </div>
            <div>
              <span className="font-bold">{timeLeft.seconds}</span>
              <span className="text-sm">seconds</span>
            </div>
          </div>
        </div>
        <p className="text-lg md:text-xl mb-8">เรากำลังมุ่งมั่นพัฒนาแอปนี้</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="max-w-xs"
            required
          />
          <Button type="submit">Notify Me</Button>
        </form>
      </div>
    </div>
  );
}
