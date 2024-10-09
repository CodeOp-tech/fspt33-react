import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
      title,
      imageUrl,
      year,
      rating,
      isPg,
    };

    handleAddMovie(movie);

    setTitle("");
    setImageUrl("");
    setYear("");
    setRating("");
    setIsPg(false);
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
          <input
            placeholder="Image URL"
            onChange={handleImageUrlChange}
            value={imageUrl}
          />
        </div>
        <div>
          <input placeholder="Year" onChange={handleYearChange} value={year} />
        </div>
        <div>
          <input
            placeholder="Rating"
            onChange={handleRatingChange}
            value={rating}
          />
        </div>
        <div>
          <label>Is PG</label>
          <input type="checkbox" onChange={handleIsPgChange} checked={isPg} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
