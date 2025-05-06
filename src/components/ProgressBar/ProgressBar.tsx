import React, { useState, useEffect, useCallback } from "react";
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

  const updateProgress = useCallback(() => {
    setPercent(computePercent(startDate, moveOutDate));
  }, [startDate, moveOutDate]);

  useEffect(() => {
    // Update immediately in case time elapsed since render
    updateProgress();

    // Consider updating every second for smooth transitions when needed
    const id = setInterval(updateProgress, 1000);
    return () => clearInterval(id);
  }, [updateProgress]);

  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        className="progress w-100"
        aria-label="Progress towards move-out date"
      >
        <div
          className="progress-bar bg-primary progress-w-auto"
          role="progressbar"
          style={{ width: `${percent}%`, transition: "width 0.5s ease-in-out" }}
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
