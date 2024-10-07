import { useState } from "react";
import { Banner } from "./components/Banner";
import { QuestionCard } from "./components/QuestionCard";
import { ResultCard } from "./components/ResultCard";

export const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const questions = [
    {
      title: "Question 1",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 3",
    },
    {
      title: "Question 2",
      choices: ["Choice 11", "Choice 22", "Choice 33", "Choice 44"],
      answer: "Choice 22",
    },
    {
      title: "Question 3",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 1",
    },
    {
      title: "Question 4",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 3",
    },
    {
      title: "Question 5",
      choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      answer: "Choice 4",
    },
  ];

  const handleStartBtnClick = () => {
    setGameStarted(true);
    setGameComplete(false);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      {gameComplete && <ResultCard />}
    </div>
  );
};
