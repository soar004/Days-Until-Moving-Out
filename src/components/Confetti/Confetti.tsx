import confetti from "canvas-confetti";

useEffect(() => {
  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    confetti({ spread: 70, particleCount: 200 });
  }
}, [timeLeft]);
