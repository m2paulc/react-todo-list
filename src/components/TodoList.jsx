import { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    // this.state = { todos: [{ task: 'learn react' }, { task: 'time to sleep' }] };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }
  addNewTodo(newTodo) {
    this.setState((state) => ({
      todos: [...state.todos, newTodo]
    }));
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }
  updateTodo(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const renderTodos = this.state.todos.map(todo => (
      <Todo key={ todo.id } id={ todo.id } task={ todo.task } removeTodo={ this.removeTodo } updateTodo={ this.updateTodo } />
    ));
    return (
      <div>
        <h1>Todo List</h1>
        <NewTodoForm addNewTodo={ this.addNewTodo } />
        <article>
          <ul>
            { renderTodos }
          </ul>
        </article>
      </div>
    );
  }
}
