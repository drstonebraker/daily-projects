import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: {
        titleVal: "",
        bodyVal: ""
      }
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(event){
    this.setState({
      newTodo:{
        titleVal: event.target.value
      }
    });
  }

  handleBodyChange(event){
    this.setState({
      newTodo:{
        bodyVal: event.target.value
      }
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const {titleVal,bodyVal} = this.state.newTodo;
    const newTodo = {
      // id: TODO
      title: titleVal,
      body: bodyVal,
      done: false
    };
    this.props.receiveTodo(newTodo);
  }

  render (){
    const {titleVal,bodyVal} = this.state.newTodo;
    return (
      <form>
        <input onChange={this.handleTitleChange} type="text" value={titleVal} />
        <input onChange={this.handleBodyChange} type="text" value={bodyVal} />
        <input onClick={this.handleSubmit} type="submit" value="Add Todo" />
      </form>
    );
  }

}
