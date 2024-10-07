export const QuestionCard = ({ question, handleNext }) => {
  const handleSubmitClick = () => {
    handleNext();
  };

  return (
    <div>
      <h3>{question.title}</h3>
      <ul>
        {question.choices.map((choice) => {
          return <li key={choice}>{choice}</li>;
        })}
      </ul>
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};
