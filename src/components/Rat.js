import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./styles/Rat.scss";

function Rat({ show }) {
  const ratRef = useRef(null);

  const toggleRat = useCallback(() => {
    if (show) {
      ratRef.current.classList.add("Rat__showRat");
    }

    setTimeout(() => {
      ratRef.current.classList.remove("Rat__showRat");
    }, 500);
  }, [show]);

  useEffect(() => {
    toggleRat();
  }, [toggleRat]);

  return <div ref={ratRef} className="Rat"></div>;
}

Rat.defultProps = {
  show: false,
};

Rat.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Rat;
