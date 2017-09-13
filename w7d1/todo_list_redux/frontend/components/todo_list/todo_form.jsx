import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVal: "",
      bodyVal: ""
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event){
    this.setState({
      titleVal: event.target.value
    });
  }

  handleBodyChange(event){
    this.setState({
      bodyVal: event.target.value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    const {titleVal,bodyVal} = this.state;
    const newTodo = {
      id: Date.now(),
      title: titleVal,
      body: bodyVal,
      done: false
    };
    this.props.createTodo(newTodo)
      .then(()=>this.setState({titleVal:"",bodyVal:""}));
  }

  render (){
    const {titleVal,bodyVal} = this.state;
    return (
      <form>
        <label> Title
          <input onChange={this.handleTitleChange} type="text" value={titleVal} />
        </label>
        <label>Body
          <input onChange={this.handleBodyChange} type="text" value={bodyVal} />
        </label>
        <input onClick={this.handleSubmit} type="submit" value="Add Todo" />
      </form>
    );
  }

}
