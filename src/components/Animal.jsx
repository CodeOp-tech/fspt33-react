import "./Animal.css";

export const Animal = (props) => {
  return (
    <div className="card animal-card m-2">
      <img src={props.imageUrl} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-title">{props.breed}</h6>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-primary">Adopt Me</button>
      </div>
    </div>
  );
};
