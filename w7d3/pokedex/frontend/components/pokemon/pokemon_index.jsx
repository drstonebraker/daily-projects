import React from 'react';
import PokemonLi from './pokemon_li';

export default class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestAllPokemon();
  }

  render () {
    const {pokemon} = this.props;
    const pokemonLis = pokemon.map( (poke,index) => {
      return (
        <PokemonLi key={index} pokemon={poke}/>
      );
    });

    return (
      <ul>
        {pokemonLis}
      </ul>
    );
  }
}
