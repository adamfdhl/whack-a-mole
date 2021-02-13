import React from "react";
import Soil from "./Soil";
import "./styles/Board.scss";

function Board() {
  return (
    <div className="Board">
      {Array.from(Array(6), (_, index) => (
        <Soil key={index} />
      ))}
    </div>
  );
}

export default Board;
