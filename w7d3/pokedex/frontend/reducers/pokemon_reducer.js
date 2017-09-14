import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';

const defaultState = {};

const pokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = Object.assign({}, state, action.pokemon);
      return newState;
    case RECEIVE_POKEMON:
      newState = Object.assign({}, state);
      const newPokemon = action.pokemon.pokemon;
      const itemIds = action.pokemon.items.map (item => item.id);
      newPokemon.item_ids = itemIds;
      newState[newPokemon.id] = newPokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
