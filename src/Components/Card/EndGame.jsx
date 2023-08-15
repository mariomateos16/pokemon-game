import { Fragment } from "react";
import classes from "./EndGame.module.css";
import { useDispatch, useSelector } from "react-redux";
import { dificultyAction } from "../store-redux/dificulty-level";
import { memoryActions } from "../store-redux/memory-game";

const EndGame = (props) => {
  const score = useSelector((state) => state.memory.score);
  const dispatch = useDispatch();

  const resetGame = () => {
    dispatch(dificultyAction.startGame());
    dispatch(memoryActions.reset());
  };

  const playAgain = () => {
    dispatch(memoryActions.reset());
    dispatch(dificultyAction.playAgain());
    setTimeout(() => {
      dispatch(dificultyAction.playAgain());
    }, 100);
  };

  return (
    <Fragment>
      <div className={classes.endGame}>
        <h3>{props.title}</h3>
        <img className={classes.gif} src={props.src} alt="sad pikachu" />
        <h4 className={classes.score}>{`Your Final score is ${score}`}</h4>
        <ul>
          <li className={classes.options} onClick={playAgain}>
            Play Again
          </li>
          <li className={classes.options} onClick={resetGame}>
            Quit
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default EndGame;
