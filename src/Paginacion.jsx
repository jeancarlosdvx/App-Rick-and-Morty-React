import React from "react";
import { HiArrowCircleRight, HiArrowCircleLeft } from "react-icons/hi";

export function Paginacion({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div>
      <ul className="paginacion">
        {prev ? (
          <li className="next">
            <button onClick={handlePrevious}>
              <HiArrowCircleLeft />
              Previous
            </button>
          </li>
        ) : null}

        {next ? (
          <li className="next">
            <button onClick={handleNext}>
              Next <HiArrowCircleRight />
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
