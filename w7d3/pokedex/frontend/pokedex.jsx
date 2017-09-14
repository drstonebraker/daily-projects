import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

import { fetchPokemon } from './util/api_util';
import { requestSinglePokemon } from './actions/pokemon_actions.js';
window.fetchPokemon = fetchPokemon;
window.requestSinglePokemon = requestSinglePokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  window.store = store;

  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
