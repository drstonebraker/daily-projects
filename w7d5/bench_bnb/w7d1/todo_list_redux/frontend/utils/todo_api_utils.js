const APIUtils = {
  getTodos() {
    return $.ajax({
      method: 'GET',
      url: 'api/todos'
    });
  },

  createTodo(todo) {
    return $.ajax({
      method: 'POST',
      url: 'api/todos',
      data:{
        todo
      }
    });
  }
};

export default APIUtils;

export const getTodos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/todos'
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: 'api/todos',
    data:{
      todo
    }
  })


);
