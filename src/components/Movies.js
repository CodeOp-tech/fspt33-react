import { MovieCard } from "./MovieCard";

export const Movies = ({ movies, handleSelectedMovie }) => {
  if (movies.length === 0) {
    return <div>You have no movies</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            year={movie.year}
            isPg={movie.isPg}
            handleSelectedMovie={handleSelectedMovie}
          />
        );
      })}
    </div>
  );
};
