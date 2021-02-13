import React, { useState } from "react";
import "./styles/Rat.scss";

function Rat() {
  const [show, setShow] = useState(false);
  return <div className={`Rat ${show ? "Rat__showRat" : ""}`}></div>;
}

export default Rat;
