import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { AddPage } from "./containers/AddPage";
import { MoviesPage } from "./containers/MoviesPage";

export const App = () => {
  const [currentView, setCurrentView] = useState("ADD_VIEW");

  return (
    <div>
      <NavBar setCurrentView={setCurrentView} />
      {currentView === "ADD_VIEW" && <AddPage />}
      {currentView === "MOVIES_VIEW" && <MoviesPage />}
    </div>
  );
};
