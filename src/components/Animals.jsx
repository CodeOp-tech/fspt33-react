import { useState } from "react";
import { Animal } from "./Animal";

export const Animals = (props) => {
  // register animalsToView state
  const [animalsToView, setAnimalsToView] = useState("CATS");

  // define handler fn
  const handleCatsBtnClick = () => {
    setAnimalsToView("CATS");
  };

  // define handler fn
  const handleDogsBtnClick = () => {
    setAnimalsToView("DOGS");
  };

  const activeBtnClass = "btn btn-success mx-2 btn-sm w-25";

  const inActiveBtnClass = "btn btn-secondary mx-2 btn-sm w-25";

  const animals =
    animalsToView === "CATS" ? props.catAnimals : props.dogAnimals;

  return (
    <>
      {animals.length === 0 ? (
        <div className="alert alert-warning text-center" role="alert">
          There are no animals available. Please come back another day.
        </div>
      ) : (
        <section>
          <div className="d-flex justify-content-center mb-5">
            <button
              type="button"
              className={
                animalsToView === "CATS" ? activeBtnClass : inActiveBtnClass
              }
              onClick={handleCatsBtnClick}
            >
              Cats
            </button>
            <button
              type="button"
              className={
                animalsToView !== "CATS" ? activeBtnClass : inActiveBtnClass
              }
              onClick={handleDogsBtnClick}
            >
              Dogs
            </button>
          </div>
          <div className="d-flex justify-content-evenly flex-wrap">
            {animals.map((animal) => {
              return <Animal {...animal} key={animal.id} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};
