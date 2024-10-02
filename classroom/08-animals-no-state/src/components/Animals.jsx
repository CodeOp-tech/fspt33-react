import { Animal } from "./Animal";

export const Animals = (props) => {
  return (
    <>
      {props.animals.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          There are no animals available. Please come back another day.
        </div>
      ) : (
        <section className="d-flex justify-content-evenly flex-wrap">
          {props.animals.map((animal) => {
            return <Animal {...animal} key={animal.id} />;
          })}
        </section>
      )}
    </>
  );
};
