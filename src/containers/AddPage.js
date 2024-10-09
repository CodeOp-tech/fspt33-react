import { AddMovieForm } from "../components/AddMovieForm";
import { Banner } from "../components/Banner";

export const AddPage = ({ handleAddMovie }) => {
  return (
    <div>
      <Banner title="Codeflix" subTitle="Add a new movie" />
      <AddMovieForm handleAddMovie={handleAddMovie} />
    </div>
  );
};
