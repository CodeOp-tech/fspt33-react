export const NavBar = ({ setCurrentView }) => {
  const handleAddBtnClick = () => {
    // change the state of currentView
    setCurrentView("ADD_VIEW");
  };

  const handleMoviesBtnClick = () => {
    // change the state of currentView
    setCurrentView("MOVIES_VIEW");
  };

  return (
    <div>
      <button onClick={handleAddBtnClick}>Add</button>
      <button onClick={handleMoviesBtnClick}>Movies</button>
    </div>
  );
};
