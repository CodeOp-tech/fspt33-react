import { useState } from "react";
import { Banner } from "./components/Banner";
import { QuestionCard } from "./components/QuestionCard";
import { ResultCard } from "./components/ResultCard";

export const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [result, setResult] = useState(0);

  const questions = [
    {
      title: "What planet do we live in?",
      choices: ["Mercury", "Earth", "Mars", "Jupiter"],
      answer: "Earth",
    },
    {
      title: "How many moons does he planet Earth have?",
      choices: ["1", "2", "3", "None"],
      answer: "1",
    },
    {
      title: "How many hours are there in a day?",
      choices: ["20", "48", "24", "1"],
      answer: "24",
    },
    {
      title: "How many mm in a cm?",
      choices: ["10", "100", "1", "1000"],
      answer: "10",
    },
    {
      title: "How many seasons are there in a year?",
      choices: ["1", "2", "3", "4"],
      answer: "4",
    },
  ];

  const handleStartBtnClick = () => {
    setGameStarted(true);
    setGameComplete(false);
    setResult(0);
  };

  const handleNext = (selectedChoice) => {
    if (selectedChoice === questions[currentQuestionIndex].answer) {
      setResult((currentState) => {
        return currentState + 1;
      });
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((currentState) => {
        return currentState + 1;
      });
    } else {
      setCurrentQuestionIndex(0);
      setGameStarted(false);
      setGameComplete(true);
    }
  };

  return (
    <div>
      <Banner />
      {!gameStarted && <button onClick={handleStartBtnClick}>Start</button>}
      {gameStarted && (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          handleNext={handleNext}
        />
      )}
      {gameComplete && <ResultCard result={result} />}
    </div>
  );
};
