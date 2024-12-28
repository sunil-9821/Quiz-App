import React, { useState } from "react";
import questions from "../Question";
import QuestionList from "./QuestionList";
function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currAnswer, setCurrAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setCurrAnswer(null);
  };
  const handleOption = (Option) => {
    setCurrAnswer(Option);
    if (Option === questions[questionIndex].answer) {
      setScore(score + 1);
    }
  };
  return (
    <>
      {questionIndex < questions.length ? (
        <QuestionList
          questions={questions[questionIndex]}
          handleButton={handleNextQuestion}
          handleOption={handleOption}
          answer={currAnswer}
        />
      ) : (
        <div className="mt-5 text-center">
          <h1>Your score is {score} </h1>
        </div>
      )}
    </>
  );
}

export default Quiz;
