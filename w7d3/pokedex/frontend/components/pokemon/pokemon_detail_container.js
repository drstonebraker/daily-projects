import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = state => ({
  allPokemon: state.entities.pokemon,
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
