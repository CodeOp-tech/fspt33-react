import { AddMovieForm } from "../components/AddMovieForm";
import { Banner } from "../components/Banner";
import { SelectedMovie } from "../components/SelectedMovie";

export const AddPage = ({ handleAddMovie, selectedMovie }) => {
  return (
    <div>
      <Banner title="Codeflix" subTitle="Add a new movie" />
      <AddMovieForm handleAddMovie={handleAddMovie} />
      {selectedMovie && <SelectedMovie movie={selectedMovie} />}
    </div>
  );
};
