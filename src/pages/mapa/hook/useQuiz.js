import { useEffect, useState } from "react";

export const useQuiz = (preguntas) => {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [life, setLife] = useState(() => {
    const storedLife = localStorage.getItem("life");
    return storedLife ? JSON.parse(storedLife) : 6;
  });

  const [timer, setTimer] = useState(30);

  useEffect(() => {
    localStorage.setItem("life", JSON.stringify(life));
  }, [life]);

  useEffect(() => {
    if (life === 0) {
      const timeout = setTimeout(() => {
        setLife(6);
      }, 2 * 60 * 1000);

      return () => clearTimeout(timeout);
    }
  }, [life]);

  useEffect(() => {
    let interval;

    if (
      start &&
      timer > 0 &&
      !showCorrection &&
      !showCongratulation &&
      life > 0
    ) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0 && !showCorrection && !showCongratulation && !showFinal) {
      handleAnswer(null);
      setTimer(30);
    }

    return () => clearInterval(interval);
  }, [start, timer, showCorrection, showCongratulation, life]);

  const cambiarEstado = () => {
    setStart(true);
  };

  const decrementLife = () => {
    setLife((prevLife) => prevLife - 1);
  };

  const handleAnswer = (selectedOption) => {
    clearInterval(timer);
    if (selectedOption === preguntas[currentQuestion].respuestaCorrecta) {
      setShowCongratulation(true);
    } else {
      setShowCorrection(true);
      decrementLife();
    }
  };

  const handleNextQuestion = () => {
    setShowCorrection(false);
    setShowCongratulation(false);
    setTimer(30);
    if (currentQuestion < preguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinal(true);
    }
  };

  const resetQuiz = () => {
    setStart(false);
    setCurrentQuestion(0);
    setShowCorrection(false);
    setShowCongratulation(false);
    setShowFinal(false);
  };

  const getCurrentQuestion = () => preguntas[currentQuestion];

  return {
    start,
    life,
    currentQuestion,
    showCorrection,
    showCongratulation,
    showFinal,
    decrementLife,
    cambiarEstado,
    handleAnswer,
    handleNextQuestion,
    resetQuiz,
    getCurrentQuestion,
    timer,
  };
};
