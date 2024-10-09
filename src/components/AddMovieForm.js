import { useState } from "react";

export const AddMovieForm = ({ handleAddMovie }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [isPg, setIsPg] = useState(false);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleIsPgChange = (event) => {
    setIsPg(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const movie = {
      title,
      imageUrl,
      year,
      rating,
      isPg,
    };

    handleAddMovie(movie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Title"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div>
          <input placeholder="Image URL" onChange={handleImageUrlChange} />
        </div>
        <div>
          <input placeholder="Year" onChange={handleYearChange} />
        </div>
        <div>
          <input placeholder="Rating" onChange={handleRatingChange} />
        </div>
        <div>
          <label>Is PG</label>
          <input type="checkbox" onChange={handleIsPgChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
