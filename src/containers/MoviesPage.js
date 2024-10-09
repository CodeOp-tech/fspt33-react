import { Banner } from "../components/Banner";
import { Movies } from "../components/Movies";
import { SelectedMovie } from "../components/SelectedMovie";

export const MoviesPage = ({ movies, selectedMovie, handleSelectedMovie }) => {
  return (
    <div>
      <Banner title="Codeflix" subTitle="Pick a movie to watch today" />
      {selectedMovie && <SelectedMovie movie={selectedMovie} />}
      <Movies movies={movies} handleSelectedMovie={handleSelectedMovie} />
    </div>
  );
};
