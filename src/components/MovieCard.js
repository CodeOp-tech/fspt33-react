export const MovieCard = ({ title, year, rating, isPg }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{year}</h4>
      <div>{rating}</div>
      {isPg && <div>PG</div>}
      <div>
        <button>Select</button>
      </div>
    </div>
  );
};
