// src/hooks/useCountdown.ts
import { useState, useEffect, useRef } from "react";

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * useCountdown
 *
 * @param targetDate  The end Date you’re counting down toward
 * @param intervalMs  How often (ms) to tick; default is 1s
 * @param onComplete  Optional callback fired once when timeLeft hits zero
 */
export function useCountdown(
  targetDate: Date,
  intervalMs = 1000,
  onComplete?: () => void
) {
  const calculate = (): TimeLeft => {
    const now = Date.now();
    const end = targetDate.getTime();
    const diff = Math.max(end - now, 0);

    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000) / 60_000),
      seconds: Math.floor((diff % 60_000) / 1000),
    };
  };

  // keep track if we already called onComplete
  const doneRef = useRef(false);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculate);
  const [msLeft, setMsLeft] = useState(() => {
    const diff = targetDate.getTime() - Date.now();
    return Math.max(diff, 0);
  });

  useEffect(() => {
    // immediate sync
    const tl = calculate();
    setTimeLeft(tl);
    setMsLeft(() => Math.max(targetDate.getTime() - Date.now(), 0));

    const id = setInterval(() => {
      const nowMs = Date.now();
      const remaining = Math.max(targetDate.getTime() - nowMs, 0);

      setMsLeft(remaining);
      setTimeLeft({
        days: Math.floor(remaining / 86_400_000),
        hours: Math.floor((remaining % 86_400_000) / 3_600_000),
        minutes: Math.floor((remaining % 3_600_000) / 60_000),
        seconds: Math.floor((remaining % 60_000) / 1000),
      });

      // fire onComplete once
      if (remaining === 0 && !doneRef.current) {
        doneRef.current = true;
        onComplete?.();
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, [targetDate.getTime(), intervalMs, onComplete]);

  return { timeLeft, msLeft };
}

export default useCountdown;
