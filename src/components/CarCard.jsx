import "./CarCard.css";

export const CarCard = (props) => {
  return (
    <div class="card movie-card">
      <img src={props.imageUrl} class="card-img-top" alt={props.title} />
      <div class="card-body">
        <h5 class="card-title">
          {props.title}{" "}
          {props.isSold ? <span class="badge bg-secondary">Sold</span> : null}
        </h5>
        <p class="card-text">{props.summary}</p>
      </div>
    </div>
  );
};
