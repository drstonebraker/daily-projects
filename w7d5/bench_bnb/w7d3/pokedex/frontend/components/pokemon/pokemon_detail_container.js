import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  const pokemon = state.entities.pokemon[ownProps.match.params.pokemon_id];
  const ownItems = (pokemon &&
    pokemon.itemIds &&
    pokemon.item_ids.map(itemId => state.items[itemId]));
  return {
    pokemon: pokemon,
    items: ownItems,
  };
};

const mapDispatchToProps = (dispatch) => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail));
