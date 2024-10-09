export const SelectedMovie = ({ movie }) => {
  return (
    <div class="card">
      <img src={movie.imageUrl} class="card-img-top" alt={movie.title} />
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">{movie.year}</p>
        <p class="card-text">{movie.rating}</p>
        {movie.isPg && <p class="card-text">PG</p>}
      </div>
    </div>
  );
};
