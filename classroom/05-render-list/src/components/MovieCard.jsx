export const MovieCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.year}</h4>
      <p>{props.summary}</p>
    </div>
  );
};
