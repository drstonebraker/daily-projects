import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, removeTodo, fetchTodos, createTodo }
  from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
