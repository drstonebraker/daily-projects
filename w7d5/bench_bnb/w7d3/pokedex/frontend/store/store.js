import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from '../middleware/thunk';

const preloadedState = {
  entities: {
    pokemon: {},
    items: {},
  }
};

const configureStore = () => createStore(rootReducer, preloadedState, applyMiddleware(thunk,logger));

export default configureStore;
