import { combineReducers } from 'redux';

import sessionReducer from './session_reducer.js';
import errorsReducer from './errors_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
