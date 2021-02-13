import React, { useEffect, useState } from "react";
import Soil from "./Soil";
import "./styles/Board.scss";

function Board() {
  const [rnd, setRnd] = useState(null);
  const random = () => Math.floor(Math.random() * 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setRnd(random());
    }, 800);
    return () => clearInterval(timer);
  }, []);

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

export default Board;
