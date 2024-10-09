import { Banner } from "../components/Banner";
import { Movies } from "../components/Movies";

export const MoviesPage = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <Banner title="Codeflix" subTitle="Pick a movie to watch today" />
      <Movies />
    </div>
  );
};
