import { Component } from 'react';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ todo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>Enter New Todo
          <input id='newTodo' name='newTodo' value={ this.state.todo } onChange={ this.handleChange } />
        </label>
        <button>Add New Todo</button>
      </form>
    );
  }
}
