import APIUtils from '../utils/todo_api_utils';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo
  };
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    todo
  };
};

export const fetchTodos = () => dispatch => (
  APIUtils.getTodos().then((todos) => dispatch(receiveTodos(todos)))
);

export const createTodo = (todo) => dispatch => (
  APIUtils.createTodo(todo).then((newTodo) => dispatch(receiveTodo(newTodo)))
);
