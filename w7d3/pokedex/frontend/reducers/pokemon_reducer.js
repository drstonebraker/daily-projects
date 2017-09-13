import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const defaultState = {};

const pokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      const newState = Object.assign({}, state, action.pokemon);
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
