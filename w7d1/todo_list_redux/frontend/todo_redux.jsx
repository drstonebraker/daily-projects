import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getTodos} from './utils/todo_api_utils';
// import {allTodos} from './reducers/selectors';
// window.allTodos = allTodos;


document.addEventListener("DOMContentLoaded",function() {
  ReactDOM.render(
    <Root store={configureStore()}/>,
    document.getElementById('content')
  );
});

window.getTodos = getTodos;
