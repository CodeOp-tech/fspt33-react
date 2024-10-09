import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { AddPage } from "./containers/AddPage";
import { MoviesPage } from "./containers/MoviesPage";

export const App = () => {
  const [currentView, setCurrentView] = useState("ADD_VIEW");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleSelectedMovie = (id) => {
    // find movie in movies by id
    const movie = movies.find((movie) => {
      return movie.id === id;
    });

    setSelectedMovie(movie);
  };

  return (
    <div>
      <NavBar setCurrentView={setCurrentView} />
      {currentView === "ADD_VIEW" && (
        <AddPage
          handleAddMovie={handleAddMovie}
          selectedMovie={selectedMovie}
        />
      )}
      {currentView === "MOVIES_VIEW" && (
        <MoviesPage
          movies={movies}
          selectedMovie={selectedMovie}
          handleSelectedMovie={handleSelectedMovie}
        />
      )}
    </div>
  );
};
