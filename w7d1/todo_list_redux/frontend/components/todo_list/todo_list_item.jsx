import React from 'react';

const TodoListItem = ({todo,removeTodo,receiveTodo}) => {
  return (
    <li>
      {todo.title}
      <button onClick={()=>removeTodo(todo)}>Delete Todo</button>
      <button
        onClick={()=>receiveTodo(Object.assign({},todo,{done: !todo.done} ))}
        >
        {todo.done ? "Undo" : "Mark Complete"}
      </button>
    </li>
  );
};

export default TodoListItem;
