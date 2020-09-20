import React from "react";

class ItemForm extends React.Component {
  state = { itemName: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state.todoName);
    this.setState({
      itemName: "",
    });

  };

  handleChange = (e) => {
    this.setState({
      itemName: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.itemName}
          required
          placeholder="add Item"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ItemForm;