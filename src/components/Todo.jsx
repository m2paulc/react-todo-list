import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }
  handleRemoveTodo() {
    this.props.removeTodo(this.props.id);
  }

  render() {
    return (
      <div className='todo-list'>
        <li>{ this.props.task }</li>
        <div className='todo-list-buttons'>
          <button>Edit</button>
          <button onClick={ this.handleRemoveTodo }>X</button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  task: PropTypes.string,
  id: PropTypes.string,
  removeTodo: PropTypes.func
};