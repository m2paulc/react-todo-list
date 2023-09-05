import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
  }
  handleRemoveTodo() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleUpdate(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }
  handleInputUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={ this.handleUpdate }>
            <input type='text' name='task' value={ this.state.task } onChange={ this.handleInputUpdate } />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='todo-list'>
          <li>{ this.props.task }</li>
          <div className='todo-list-buttons'>
            <button onClick={ this.toggleForm }>Edit</button>
            <button onClick={ this.handleRemoveTodo }>X</button>
          </div>
        </div>
      );
    }
    return (
      result
    );
  }
}

Todo.propTypes = {
  task: PropTypes.string,
  id: PropTypes.string,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func
};