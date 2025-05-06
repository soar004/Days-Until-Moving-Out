import React, { useState, useEffect } from "react";
import { useMoveOutDate } from "../../hooks/useMoveOutDate";

function computePercent(start: Date, end: Date): number {
  const total = end.getTime() - start.getTime();
  if (total <= 0) return 100;
  const elapsed = Date.now() - start.getTime();
  return Math.min(100, Math.floor((elapsed / total) * 100));
}

const ProgressBar: React.FC = () => {
  const moveOutDate = useMoveOutDate();
  const [startDate] = useState(() => {
    const saved = localStorage.getItem("moveOutStart");
    if (saved) return new Date(saved);
    const now = new Date();
    localStorage.setItem("moveOutStart", now.toISOString());
    return now;
  });

  const [percent, setPercent] = useState(() =>
    computePercent(startDate, moveOutDate)
  );

  useEffect(() => {
    setPercent(computePercent(startDate, moveOutDate));
    const id = setInterval(
      () => setPercent(computePercent(startDate, moveOutDate)),
      60_000
    );
    return () => clearInterval(id);
  }, [startDate, moveOutDate]);

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="progress w-100">
        <div
          className="progress-bar bg-primary progress-w-auto"
          role="progressbar"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProgressBar);
