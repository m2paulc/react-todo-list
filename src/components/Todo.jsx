import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='todo-list'>
        <li>{ this.props.task }</li>
        <div className='todo-list-buttons'>
          <button>Edit</button>
          <button>X</button>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  task: PropTypes.string
};