import React from "react";
import PropTypes from "prop-types";
import Rat from "./Rat";

import "./styles/Soil.scss";

function Soil({ showRat }) {
  return (
    <div className="Soil">
      <Rat show={showRat} />
    </div>
  );
}

Soil.defultProps = {
  showRat: false,
};

Soil.propTypes = {
  showRat: PropTypes.bool.isRequired,
};

export default React.memo(Soil);
