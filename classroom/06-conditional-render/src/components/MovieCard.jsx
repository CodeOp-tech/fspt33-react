export const MovieCard = (props) => {
  if (!props.title) {
    return <div>Movie not available</div>;
  } else {
    return (
      <div>
        <h2>{props.title}</h2>
        <h4>{props.year}</h4>
        {props.isNew ? <h6>New Release</h6> : null}
        <p>{props.summary}</p>
      </div>
    );
  }
};
