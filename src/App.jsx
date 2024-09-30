import { MovieCard } from "./components/MovieCard";

export const App = () => {
  return (
    <div>
      <MovieCard
        title="Movie 1"
        year="2021"
        summary="This is a summary of movie 1"
      />
      <MovieCard
        title="Movie 2"
        year="2022"
        summary="This is a summary of movie 2"
      />
      <MovieCard
        title="Movie 3"
        year="2023"
        summary="This is a summary of movie 3"
      />
    </div>
  );
};
