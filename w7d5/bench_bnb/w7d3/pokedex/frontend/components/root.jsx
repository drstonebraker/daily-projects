import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={PokemonIndexContainer} />
    </BrowserRouter>
  </Provider>
);

export default Root;
