import React from "react";
import "./App.css";
import List from "./List";
import ItemForm from "./ItemForm";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Apple", complete: true },
      { id: 2, name: "Spaghetti", complete: false },
      { id: 3, name: "Milk", complete: false },
    ],
  };

  handleClick = (id) => {
    console.log(id);
    const { items } = this.state;

    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        };
      }
      return item;
    });

    this.setState({
      items: newItems,
    });
  };

  addItem = (item) => {
    const { items } = this.state;
    const newItem = { id: Math.random(), name: item, complete: false };
    this.setState({
      items: [...items, newItem],
    });
  };
  render() {
    return (
      <>
        <List items={this.state.items} itemClick={this.handleClick} />
        <hr />
        <ItemForm add={this.addItem} />
      </>
    );
  }
}

export default App;