import classes from "./Game.module.css";
import getRandomPokemon from "../store-redux/random-pokemon";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import pokeball from "../../assets/pokeball.gif";
import FlipCard from "../UI/flip-card";
import { flipActions } from "../store-redux/flip-handler";

import { memoryActions } from "../store-redux/memory-game";

const Game = () => {
  const level = useSelector((state) => state.level.level);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  ///Handle the side effects
  let ready = true;
  let allReadyGet = true;

  //// Get api data
  useEffect(() => {
    if (allReadyGet) {
      setLoading(true);
      const fetcPokemons = async () => {
        const pokemonsData = await getRandomPokemon(level);
        setPokemons(pokemonsData);
        setLoading(false);
        dispatch(memoryActions.getPokemons(pokemonsData));
        flipCards();
      };
      fetcPokemons();
    }
  }, []);

  ///// flip card for the frist time
  const flipCards = () => {
    if (ready) {
      if (!loading) {
        setTimeout(() => {
          dispatch(flipActions.flipCard());
        }, 1100);
      }
      ready = false;
    }
  };

  ///fisher-yates algorithm
  const randomOrder = (array) => {
    let i = array.length - 1;
    while (i > 0) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
      i--;
    }
  };

  const shuffleCards = () => {
    const shuffledArray = [...pokemons];
    randomOrder(shuffledArray);
    setPokemons(shuffledArray);
  };

  const pokemonsCards = pokemons.map((pok, index) => {
    const cardKey = `pok-${index}`;
    return (
      <FlipCard
        src={pok.url}
        name={pok.name}
        key={cardKey}
        id={pok.id}
        onShuffleCards={shuffleCards}
      />
    );
  });

  return (
    <Fragment>
      {loading && (
        <img src={pokeball} alt="pokeball" className={classes.pokeball} />
      )}
      {!loading && <div className={classes["game-board"]}>{pokemonsCards}</div>}
    </Fragment>
  );
};

export default Game;
