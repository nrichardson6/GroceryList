import React from "react";
import "./App.css";
import Item from "./Item";

class List extends React.Component {
  renderItems = () => {
    const { items } = this.props;
    return items.map((item) => {
      return (
        <Item
          itemClick={this.props.itemClick}
          key={item.id}
          id={item.id}
          name={item.name}
          complete={item.complete}
        />
      );
    });
  };
  render() {
    return (
      <>
        <h1>Items</h1>
        {this.renderItems()}
      </>
    );
  }
}

export default List;