import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleWare from '../middleware/thunk';


const configureStore = (initialState = {}) => createStore(rootReducer,initialState,applyMiddleware(thunkMiddleWare));

export default configureStore;

const store = configureStore();
window.store = store;
