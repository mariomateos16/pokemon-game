import React, { useRef } from "react";
import classes from "./Menu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dificultyAction } from "../store-redux/dificulty-level";
import click from "../../assets/click-a.mp3";

const Menu = (props) => {
  const dispatch = useDispatch();
  const level = useSelector((state) => state.level);
  const audioRef = useRef(null);

  const easyClass = level.easy
    ? `${classes.list} ${classes.select}`
    : classes.list;
  const mediumClass = level.medium
    ? `${classes.list} ${classes.select}`
    : classes.list;
  const hardClass = level.hard
    ? `${classes.list} ${classes.select}`
    : classes.list;

  const easyHandler = () => {
    dispatch(dificultyAction.easyLevel());
    playClickSound();
  };

  const mediumHandler = () => {
    dispatch(dificultyAction.mediumLevel());
    playClickSound();
  };

  const hardHandler = () => {
    dispatch(dificultyAction.hardLevel());
    playClickSound();
  };

  const startGameHandler = () => {
    dispatch(dificultyAction.startGame());
  };

  const playClickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className={classes.card}>
      <h3>Pokemon Memory Game</h3>
      <ul className={classes["list-container"]}>
        <li className={easyClass} onClick={easyHandler}>
          Easy
        </li>
        <li className={mediumClass} onClick={mediumHandler}>
          Medium
        </li>
        <li className={hardClass} onClick={hardHandler}>
          Hard
        </li>
      </ul>
      <h4 onClick={startGameHandler}>Start game!</h4>
      <a href="https://github.com/ATT5/pokemon-memory-game">Github repo</a>
      <audio ref={audioRef}>
        <source src={click} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Menu;
