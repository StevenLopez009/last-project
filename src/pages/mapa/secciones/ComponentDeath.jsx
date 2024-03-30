import { useState, useEffect } from "react";

const ComponentDeath = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000); // 1 segundo

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <h1>Tus vidas se acabaron</h1>
      <h2>
        Debes esperar:
        {`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}
      </h2>
    </div>
  );
};

export default ComponentDeath;
