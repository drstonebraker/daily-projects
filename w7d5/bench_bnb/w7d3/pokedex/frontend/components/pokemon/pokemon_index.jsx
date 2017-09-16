import React from 'react';
import PokemonLi from './pokemon_li';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

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
      <section className="pokedex">
        <ul>
          {pokemonLis}
        </ul>
        <Route
          path="/pokemon/:pokemon_id/"
          component={PokemonDetailContainer} />
      </section>
    );
  }
}
