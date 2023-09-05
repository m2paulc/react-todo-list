import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '', id: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTodo = { ...this.state, id: uuidv4() };
    this.props.addNewTodo(newTodo);
    this.setState({ task: '', id: '' });

  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor='task'>Enter New Todo
          <input type='text' id='task' name='task' value={ this.state.task } placeholder='New Todo' onChange={ this.handleChange } />
        </label>
        <button>Add New Todo</button>
      </form>
    );
  }
}

NewTodoForm.propTypes = {
  addNewTodo: PropTypes.func
};