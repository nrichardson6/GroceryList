import React from "react";

// export default class TodoForm extends React.Component {
class TodoForm extends React.Component {
  state = { todoName: "" };

  // hit enter, or if a submit button pressed
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.todoName);
    this.setState({
      todoName: "",
    });

    // when I am i want to grab the value of the input
  };

  // handleChange key pressed entering a char
  handleChange = (e) => {
    //setState and change todoName
    this.setState({
      todoName: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.todoName}
          required
          placeholder="add Item"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;