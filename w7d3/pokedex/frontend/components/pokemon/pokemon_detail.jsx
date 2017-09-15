import React from 'react';
import PokemonItems from './pokemon_items';

export default class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getPokemon(this.props.match.params.pokemon_id);
  }

  componentWillReceiveProps(nextProps) {
    const oldId = this.props.match.params.pokemon_id;
    const newId = nextProps.match.params.pokemon_id;
    if (oldId !== newId) {
      this.getPokemon(newId);
    }
  }

  getPokemon(pokemonId) {
    this.props.requestSinglePokemon(pokemonId);
  }

  render() {
    const { pokemon, items } = this.props;
    // console.log(pokemon);
    return (
      <div>
        {
          pokemon &&
          <div>
            <img src={pokemon.image_url} />
            <h1>{pokemon.name}</h1>
            <h3>Type: {pokemon.poke_type}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>
            <h3>Moves: {pokemon.moves && pokemon.moves.join(', ')}</h3>
          </div>
        }
      </div>
    );
  }
  // <PokemonItems items={items} />
}
