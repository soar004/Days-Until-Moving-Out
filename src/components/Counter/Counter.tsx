// src/components/Counter/Counter.tsx
import React from "react";
import { useMoveOutDate } from "../../hooks/useMoveOutDate";
import { useCountdown } from "../../hooks/useCountdown";

const pad = (n: number) => String(n).padStart(2, "0");

const Counter: React.FC = () => {
  const moveOutDate = useMoveOutDate();
  const { timeLeft } = useCountdown(moveOutDate);
  const { days, hours, minutes, seconds } = timeLeft;

  const units = [
    { label: "dager", value: days },
    { label: "timer", value: hours },
    { label: "min", value: minutes },
    { label: "sek", value: seconds },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Tid igjen å holde ut med Ragnhild</h2>

      {/* → Use a row and responsive cols: */}
      <div className="row justify-content-center">
        {units.map(({ label, value }) => (
          // col-6 on xs (2 per row), col-sm-3 on sm+ (4 per row)
          <div key={label} className="col-6 col-sm-3 text-center mb-3">
            <div className="fs-1 fw-bold">{pad(value)}</div>
            <div className="text-uppercase text-muted">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Counter);
