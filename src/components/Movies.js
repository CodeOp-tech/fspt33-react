import { MovieCard } from "./MovieCard";

export const Movies = ({ movies }) => {
  if (movies.length === 0) {
    return <div>You have no movies</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            isPg={movie.isPg}
          />
        );
      })}
    </div>
  );
};
