import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERROR
} from '../actions/session_actions.js';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERROR:
      return state.concat(action.error.responseJSON);
    default:
      return state;
  }
};

export default sessionErrorsReducer;
