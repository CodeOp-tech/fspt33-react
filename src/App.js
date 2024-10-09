import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { AddPage } from "./containers/AddPage";
import { MoviesPage } from "./containers/MoviesPage";

export const App = () => {
  const [currentView, setCurrentView] = useState("ADD_VIEW");
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <NavBar setCurrentView={setCurrentView} />
      {currentView === "ADD_VIEW" && (
        <AddPage handleAddMovie={handleAddMovie} />
      )}
      {currentView === "MOVIES_VIEW" && <MoviesPage movies={movies} />}
    </div>
  );
};
