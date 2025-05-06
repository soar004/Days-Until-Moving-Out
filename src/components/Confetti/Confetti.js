// src/components/Confetti/Confetti.tsx
import React, { useEffect, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { useMoveOutDate } from "../../hooks/useMoveOutDate";
import { useCountdown } from "../../hooks/useCountdown";
const Confetti = () => {
    const moveOutDate = useMoveOutDate();
    const { timeLeft: { days, hours, minutes, seconds }, } = useCountdown(moveOutDate);
    // Only fire confetti once
    const [hasFired, setHasFired] = useState(false);
    // Trigger confetti from multiple origins for full-screen effect
    const triggerConfetti = useCallback(() => {
        const defaults = {
            particleCount: 150,
            spread: 120,
            startVelocity: 50,
            ticks: 200,
        };
        // Fire from bottom left, bottom right, and top center
        fireConfetti({
            ...defaults,
            origin: { x: 0.0, y: 0.8 },
        });
        fireConfetti({
            ...defaults,
            origin: { x: 1.0, y: 0.8 },
        });
        fireConfetti({
            ...defaults,
            origin: { x: 0.5, y: 0.2 },
        });
    }, []);
    useEffect(() => {
        const allZero = days + hours + minutes + seconds <= 0;
        if (allZero && !hasFired) {
            triggerConfetti();
            setHasFired(true);
        }
    }, [days, hours, minutes, seconds, hasFired, triggerConfetti]);
    return null;
};
export default React.memo(Confetti);
// Helper to fire confetti with default options, merging any provided overrides.
function fireConfetti(opts = {}) {
    confetti({
        angle: 90,
        // Center by default; overridden by any opts.origin passed in triggerConfetti
        origin: { x: 0.5, y: 0.5 },
        ...opts,
    });
}
