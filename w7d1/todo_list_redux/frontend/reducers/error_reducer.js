import {RECEIVE_ERRORS,CLEAR_ERRORS} from '../actions/error_actions';

const initialState = [];

export const errorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
