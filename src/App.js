import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, updateScore } from "./store/slices/player/playerSlice";
import Board from "./components/Board";
import "./App.scss";

function App() {
  const [game, setGame] = useState(false);
  const dispatch = useDispatch();
  const score = useSelector(selectScore);

  const playGame = useCallback(() => {
    console.log("start!");
    setGame(true);
    dispatch(
      updateScore({
        totalScore: 0,
      })
    );
    setTimeout(() => {
      setGame(false);
    }, 15000);
  }, [dispatch]);

  useEffect(() => {
    document.getElementById("loadApp").remove();
  }, []);

  return (
    <div className="App">
      <h1 className="App__title">Whack-A-Mole!</h1>
      <h2>Total Score: {score} </h2>
      <button className="btnStart" onClick={playGame}>
        Start Game!
      </button>
      <Board start={game} />
    </div>
  );
}

export default App;
