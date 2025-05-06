// src/components/Counter.tsx
import React, { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

const Counter: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const diff = Math.max(new Date(targetDate).getTime() - now.getTime(), 0);
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "dager", value: timeLeft.days },
    { label: "timer", value: timeLeft.hours },
    { label: "min", value: timeLeft.minutes },
    { label: "sek", value: timeLeft.seconds },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Tid igjen å holde ut med Ragnhild</h2>
      <div className="d-flex justify-content-center gap-4">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="fs-1 fw-bold">{pad(value)}</div>
            <div className="text-uppercase text-muted">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
