import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class List extends React.Component {
  renderTodos = () => {
    const { todos } = this.props;
    return todos.map((todo) => {
      // return <div key={todo.id}>{todo.name}</div>;
      return (
        <Todo
          todoClick={this.props.todoClick}
          key={todo.id}
          id={todo.id}
          name={todo.name}
          complete={todo.complete}
        />
      );
    });
  };
  render() {
    return (
      <>
        <h1>Todos</h1>
        {this.renderTodos()}
      </>
    );
  }
}

export default List;