import { useState } from "react";

export const QuestionCard = ({ question, handleNext }) => {
  const [selectedChoice, setSelectedChoice] = useState();

  const handleSubmitClick = () => {
    handleNext(selectedChoice);
    setSelectedChoice();
  };

  const handleOnChange = (event) => {
    setSelectedChoice(event.target.value);
  };

  return (
    <div className="container">
      <h3>{question.title}</h3>
      <ul className="list-group">
        {question.choices.map((choice) => {
          return (
            <li key={choice} className="list-group-item">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={question.title}
                  onChange={handleOnChange}
                  value={choice}
                />
                <label className="form-check-label">{choice}</label>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="py-2 d-grid gap-2">
        <button className="btn btn-success" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </div>
  );
};
