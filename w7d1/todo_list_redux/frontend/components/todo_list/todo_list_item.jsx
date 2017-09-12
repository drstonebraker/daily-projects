import React from 'react';

const TodoListItem = ({todo,removeTodo}) => {
  return (
    <li>
      {todo.title}
      <button onClick={()=>removeTodo(todo)}>Delete Todo</button>
    </li>
  );
};

export default TodoListItem;
