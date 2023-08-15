import ReactCardFlip from "react-card-flip";
import React from "react";
import PokemonCards from "../Card/PokemonCards";
import BackCard from "../Card/BackCard";
import { connect } from "react-redux";
import { flipActions } from "../store-redux/flip-handler";
import { memoryActions } from "../store-redux/memory-game";

class FlipCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.flipCard();
    this.props.selectedPokemon({
      id: this.props.id,
      name: this.props.name,
      url: this.props.src,
    });
    setTimeout(() => {
      this.props.onShuffleCards();
    }, 200);

    setTimeout(() => {
      if (this.props.playerIsAlive && !this.props.gameWon) {
        this.props.flipCard();
      }
    }, 1200);
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.props.flip} flipDirection="horizontal">
        {!this.props.flip && (
          <div role="button" onClick={this.handleClick}>
            <PokemonCards
              src={this.props.src}
              name={this.props.name}
            ></PokemonCards>
          </div>
        )}
        <BackCard></BackCard>
      </ReactCardFlip>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    flipCard: () => dispatch(flipActions.flipCard()),
    selectedPokemon: (pokemonData) =>
      dispatch(memoryActions.selectedPokemon(pokemonData)),
  };
};

const mapStateToProps = (state) => ({
  flip: state.flip,
  playerIsAlive: state.memory.playerIsAlive,
  gameWon: state.memory.gameWon,
});

export default connect(mapStateToProps, mapDispatchToProps)(FlipCard);
