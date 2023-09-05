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
  render() {
    const renderTodos = this.state.todos.map(todo => (
      <Todo key={ todo.id } id={ todo.id } task={ todo.task } removeTodo={ this.removeTodo } />
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
