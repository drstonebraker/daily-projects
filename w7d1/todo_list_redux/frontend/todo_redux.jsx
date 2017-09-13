import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import {allTodos} from './reducers/selectors';
// window.allTodos = allTodos;


document.addEventListener("DOMContentLoaded",function() {
  ReactDOM.render(
    <Root store={configureStore()}/>,
    document.getElementById('content')
  );
});
