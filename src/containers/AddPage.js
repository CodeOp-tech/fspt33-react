import { AddMovieForm } from "../components/AddMovieForm";
import { Banner } from "../components/Banner";

export const AddPage = () => {
  return (
    <div>
      <Banner title="Codeflix" subTitle="Add a new movie" />
      <AddMovieForm />
    </div>
  );
};
