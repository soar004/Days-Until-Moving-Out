// src/components/Confetti/Confetti.tsx
import React, { useEffect, useState } from "react";
import confetti, { Options } from "canvas-confetti";
import { useMoveOutDate } from "../../hooks/useMoveOutDate";
import { useCountdown } from "../../hooks/useCountdown";

const Confetti: React.FC = () => {
  const moveOutDate = useMoveOutDate();
  const {
    timeLeft: { days, hours, minutes, seconds },
  } = useCountdown(moveOutDate);

  // Only fire confetti once, not every render after hitting zero
  const [hasFired, setHasFired] = useState(false);

  useEffect(() => {
    const allZero = days + hours + minutes + seconds === 0;

    if (allZero && !hasFired) {
      // Tweak these options or call this multiple times for a bigger show
      fireConfetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
      setHasFired(true);
    }
  }, [days, hours, minutes, seconds, hasFired]);

  return null; // nothing to render in the DOM
};

export default React.memo(Confetti);

// helper to centralize  confetti settings
function fireConfetti(opts: Partial<Options> = {}) {
  confetti({
    particleCount: 150,
    angle: 90,
    spread: 100,
    startVelocity: 40,
    ticks: 200,
    origin: { x: 0.5, y: 0.5 },
    ...opts,
  });
}
