import React, { useState, useRef, useEffect } from "react";
import wallpaper from "../../assets/pokemon-wallpaper.jpg";
import classes from "./Background.module.css";
import { useSelector } from "react-redux";
import Game from "../Card/Game";

const Background = () => {
  const startGame = useSelector((state) => state.level.start);
  const score = useSelector((state) => state.memory.score);
  const level = useSelector((state) => state.level.level);
  const play = useSelector((state) => state.level.play);

  return (
    <div className={classes.background}>
      {!startGame && <h1>¡HAZTE CON TODOS!</h1>}
      {startGame && (
        <h1 className={classes.score}>
          <label htmlFor="score">{`Puntuación: ${score}`}</label>
          <label htmlFor="guess">{`${score}/${level}`}</label>
        </h1>
      )}
      <img className={classes.img} src={wallpaper} alt="wallpaper" />
      {startGame && !play && <Game />}
    </div>
  );
};

export default Background;
