import React from "react";

function QuestionList({
  questions,
  handleButton,
  handleOption,
  answer,
}) {
  return (
    <div className="text-center mt-5">
      <h2>Q:1 {questions.question}</h2>
      <ul className="list-unstyled ">
        {questions.options.map((option, i) => (
          <li
            onClick={() => handleOption(option)}
            className={`py-1 fs-5 my-1 cursorOption ${
              answer === option ? "bg-success text-light" : ""
            }`}
            key={i}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        onClick={handleButton}
        disabled={answer === null}
        className={`btn btn-${answer === null ? "danger btnDisable " : "success"}`}
      >
        Next Question
      </button>
    </div>
  );
}

export default QuestionList;
