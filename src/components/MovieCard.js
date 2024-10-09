export const MovieCard = ({
  id,
  title,
  year,
  rating,
  isPg,
  handleSelectedMovie,
}) => {
  const handleSelectClick = () => {
    handleSelectedMovie(id);
  };

  return (
    <div>
      <h3>{title}</h3>
      <h4>{year}</h4>
      <div>{rating}</div>
      {isPg && <div>PG</div>}
      <div>
        <button onClick={handleSelectClick}>Select</button>
      </div>
    </div>
  );
};
