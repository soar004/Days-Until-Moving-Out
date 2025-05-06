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
    <div className="mb-4">
      <h4 className="fs-4 mb-4">Tid igjen å holde ut med Ragnhild</h4>
      <div className="d-inline-flex gap-3">
        {units.map(({ label, value }) => (
          <div key={label} className="text-center">
            <div className="fs-3 fw-bold">{pad(value)}</div>
            <div className="small text-uppercase text-muted">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Counter);
