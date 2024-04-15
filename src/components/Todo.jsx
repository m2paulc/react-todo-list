import { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPencil, FaTrash } from 'react-icons/fa6';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
      completed: this.props.completed
    };
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('TODO COMPONENT DID UPDATE');
    console.log(prevProps.task);
    console.log(this.props.task);
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
    this.setState({ task: event.target.value });
  }
  handleCompletion(event) {
    this.props.toggleTodo(this.props.id);
    this.setState({ completed: event.target.checked });
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={ this.handleUpdate }>
            <input
              type='text'
              name='task'
              value={ this.state.task }
              onChange={ this.handleInputUpdate } />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='todo-list-container'>
          <div className='todo-list'>
            <input
              type='checkbox'
              name='completed'
              checked={ this.state.completed }
              onChange={ this.handleCompletion } />
            <li className={ this.props.completed ? 'completed' : '' }>{ this.props.task }</li>
          </div>
          <div className='todo-list-buttons'>
            <button onClick={ this.toggleForm }><FaPencil /></button>
            <button onClick={ this.handleRemoveTodo }><FaTrash /></button>
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
  completed: PropTypes.bool,
  removeTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  toggleTodo: PropTypes.func
};