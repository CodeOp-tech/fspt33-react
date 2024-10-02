import { MovieCard } from "./components/MovieCard";

export const App = () => {
  const movies = [
    {
      title: "Movie 1",
      year: "2021",
      summary: "This is a summary of movie 1",
    },
    {
      title: "Movie 2",
      year: "2022",
      summary: "This is a summary of movie 2",
    },
    {
      title: "Movie 3",
      year: "2023",
      summary: "This is a summary of movie 3",
    },
    {
      title: "Movie 4",
      year: "2024",
      summary: "This is a summary of movie 4",
    },
    {
      title: "Movie 5",
      year: "2025",
      summary: "This is a summary of movie 5",
    },
  ];

  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard {...movie} key={movie.title} />;
      })}
    </div>
  );
};
