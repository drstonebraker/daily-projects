import {combineReducers} from 'redux';
import {todosReducer} from './todos_reducer.js';
import {errorsReducer} from './error_reducer';

export default combineReducers({
  todos: todosReducer,
  errors: errorsReducer
});
