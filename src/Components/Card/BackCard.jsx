import backCard from "../../assets/back-card.png";
import classes from "./BackCard.module.css";

const BackCard = function () {
  return (
    <div className={classes.back}>
      <img className={classes.backImg} src={backCard} />
    </div>
  );
};

export default BackCard;
