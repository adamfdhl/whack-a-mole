import { useState } from "react";
import Board from "./components/Board";
import "./App.scss";

function App() {
  const [game, setGame] = useState(false);
  const playGame = () => {
    setGame(true);
  };

  return (
    <div className="App">
      <h1 className="App__title">Whack-A-Mole!</h1>
      <button className="btnStart" onClick={playGame}>
        Start Game!
      </button>
      <Board start={game} />
    </div>
  );
}

export default App;
