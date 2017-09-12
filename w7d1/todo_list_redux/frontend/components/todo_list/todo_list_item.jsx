import React from 'react';

const TodoListItem = ({todo,idx}) => {
  return <li key={idx}>{todo.title}</li>;
};

export default TodoListItem;
