import React, { useCallback, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, updateScore } from "../store/slices/player/playerSlice";
import SoundEffect from "../assets/audio/Pop.mp3";
import PropTypes from "prop-types";
import "./styles/Rat.scss";

function Rat({ show }) {
  const ratRef = useRef(null);
  const score = useSelector(selectScore);
  const dispatch = useDispatch();
  const audio = useMemo(() => new Audio(SoundEffect), []);

  const toggleRat = useCallback(() => {
    ratRef.current.classList.add("Rat__showRat");

    setTimeout(() => {
      ratRef.current.classList.remove("Rat__showRat");
    }, 1000);
  }, []);

  const hitRat = useCallback(() => {
    dispatch(
      updateScore({
        totalScore: score + 1,
      })
    );
    audio.play();
    ratRef.current.classList.remove("Rat__showRat");
  }, [dispatch, score, audio]);

  useEffect(() => {
    if (show) {
      toggleRat();
    }
  }, [show, toggleRat]);

  return <div ref={ratRef} className="Rat" onClick={hitRat}></div>;
}

Rat.defultProps = {
  show: false,
};

Rat.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default React.memo(Rat);
