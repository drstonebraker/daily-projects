import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { convertItemsArrayToObject } from './action_utils';

const defaultState = {};

const itemsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POKEMON:
      const newItems = convertItemsArrayToObject(action.pokemon.items);
      newState = Object.assign({}, state, newItems);
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
