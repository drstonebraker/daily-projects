import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



export default class TodoList extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render(){
    const { todos, receiveTodo, removeTodo, createTodo, errors } = this.props;
    return (
      <div>
        <ul>
          { todos.map((todo,idx) => {
            return <TodoListItem
              todo={todo}
              key={`todolistitem-${idx}`}
              removeTodo={removeTodo}
              receiveTodo={receiveTodo}
              />;
          }) }
        </ul>
        <TodoForm
          createTodo={createTodo}
          errors={errors}
          />
      </div>
  );}
}
