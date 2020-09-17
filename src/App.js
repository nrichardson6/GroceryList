import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import TodoForm from "./TodoForm";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: "Learn React", complete: true },
      { id: 2, name: "Learn Cooking", complete: false },
      { id: 3, name: "Learn Signing", complete: false },
    ],
  };

  handleClick = (id) => {
    console.log(id);
    const { todos } = this.state;

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });

    this.setState({
      todos: newTodos,
    });
  };

  addItem = (item) => {
    const { todos } = this.state;
    const newTodo = { id: Math.random(), name: item, complete: false };
    this.setState({
      todos: [...todos, newTodo],
    });
  };
  render() {
    return (
      <>
        <List todos={this.state.todos} todoClick={this.handleClick} />
        <hr />
        <TodoForm add={this.addItem} />
      </>
    );
  }
}

export default App;