import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Soil from "./Soil";
import "./styles/Board.scss";

function Board({ start }) {
  const [rnd, setRnd] = useState(null);

  const random = () => Math.floor(Math.random() * 6);

  useEffect(() => {
    let timer = null;
    if (start) {
      timer = setInterval(() => {
        setRnd(random());
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [start]);

  const listOfSoil = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <div className="Board">
      {listOfSoil.map((soil) => (
        <Soil key={soil.id} showRat={soil.id === rnd} />
      ))}
    </div>
  );
}

Board.defaultProps = {
  start: false,
};

Board.propTypes = {
  start: PropTypes.bool.isRequired,
};

export default Board;
