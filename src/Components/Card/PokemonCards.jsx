import classes from "./PokemonCards.module.css";
import React, { useEffect, useRef } from "react";

import VanillaTilt from "vanilla-tilt";
import { useSelector } from "react-redux";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

///////////////////////////////////////////////////
const PokemonCards = (props) => {
  const options = {
    scale: 1.1,
    speed: 1100,
    max: 40,
  };

  const flipHanlder = () => {
    props.onClick();
  };

  return (
    <div>
      <Tilt className={classes.frontCards} options={options}>
        <img src={props.src} className={classes.img} />
        <p>{props.name}</p>
      </Tilt>
    </div>
  );
};

export default PokemonCards;
