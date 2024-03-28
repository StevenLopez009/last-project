import { useState } from "react";

export const useQuiz = (preguntas) => {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showCongratulation, setShowCongratulation] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const cambiarEstado = () => {
    setStart(true);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === preguntas[currentQuestion].respuestaCorrecta) {
      setShowCongratulation(true);
    } else {
      setShowCorrection(true);
    }
  };

  const handleNextQuestion = () => {
    setShowCorrection(false);
    setShowCongratulation(false);
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
    currentQuestion,
    showCorrection,
    showCongratulation,
    showFinal,
    cambiarEstado,
    handleAnswer,
    handleNextQuestion,
    resetQuiz,
    getCurrentQuestion,
  };
};
