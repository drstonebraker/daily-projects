export const allTodos = (state) => {
  let todoIds = Object.keys(state.todos);
  let todos = todoIds.map((todoId) => state.todos[todoId]);
  return todos;
};
