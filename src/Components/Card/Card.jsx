import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import Menu from "./Menu";
import EndGame from "./EndGame";
import sadPikachu from "../../assets/4OK.gif";
import happyPikachu from "../../assets/happyPikachu.gif";

const Card = () => {
  const startGame = useSelector((state) => state.level.start);
  const isAlive = useSelector((state) => state.memory.playerIsAlive);
  const gameWon = useSelector((state) => state.memory.gameWon);

  return (
    <Modal>
      {!startGame && <Menu />}
      {gameWon && <EndGame title={"You win!"} src={happyPikachu} />}
      {!isAlive && !gameWon && <EndGame title={"game over"} src={sadPikachu} />}
    </Modal>
  );
};

export default Card;
